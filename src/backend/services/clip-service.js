const messages = require('../i18n/system.json');
const Result = require('./../common/response');
const Clip = require('../models/Clip');

class ClipService {
    addClip(clip) {
        return new Promise((resolve, reject) => {
            clip.date = Date.now();
            new Clip(clip).save((err) => {
                if (err) {
                    let result = new Result(messages.stateResponse.FAIL_STATE);
                    reject(result);
                } else {
                    let result = new Result(messages.stateResponse.SUCCESS_STATE);
                    resolve(result);
                }
            });
        });
    }


    removeClip(id) {
        return new Promise((resolve, reject) => {
            Clip.findByID(id, (err, clip) => {
                if (err || !clip) {
                    let result = new Result(messages.stateResponse.FAIL_STATE);
                    reject(result);
                } else {
                    clip.remove();
                    let result = new Result(messages.stateResponse.SUCCESS_STATE);
                    reject(result);
                }
            })
        });
    }

    getPresentationClip() {
        return new Promise((resolve, reject) => {
            Clip.findOne({'isPresentation': 'true'}, (err, clip) => {

                if (err || !clip) {
                    let result = new Result(messages.stateResponse.FAIL_STATE);
                    reject(result);
                }
                else {
                    let result = new Result(messages.stateResponse.SUCCESS_STATE, clip);
                    resolve(result);
                }
            })
        })
    }


    changePresentationClip(id) {
        return new Promise((resolve, reject) => {
            let result = this.getPresentationClip();
            if (result.msg == messages.stateResponse.FAIL_STATE) {
                reject(result);
            } else {
                clip = result.body;
                Clip.findByID(id, (err, nextPresentationClip) => {
                    if (err || !nextPresentationClip) {
                        reject(result);
                    } else {
                        clip.isPresenatation = false;
                        nextPresentationClip.isPresenatation = true;
                        let result = new Result(messages.stateResponse.SUCCESS_STATE);
                        resolve(result);
                    }
                });
            }
        })
    }


    getList() {
        return new Promise((resolve, reject) => {
            this._findAllVideos(resolve, reject).sort({date: -1})
        });
    }

    _findAllVideos(resolve, reject) {
        return Clip.find((err, clipList) => {
            if (!err && clipList.length) {
                let result = new Result(messages.stateResponse.SUCCESS_STATE, clipList);
                resolve(result);
            } else {
                let result = new Result(messages.stateResponse.FAIL_STATE);
                reject(result);
            }
        });
    }
}

module.exports = new ClipService();
