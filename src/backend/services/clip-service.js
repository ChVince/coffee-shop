const messages = require('../i18n/system.json');
const Result = require('./../common/response');
const Clip = require('../models/Clip');
const commonService = require('../services/common-service');
const {BAD_REQUEST} = require('../errors/error-codes');


class ClipService {

    constructor() {
        this.perPage = 3;
    }

    addClip(clip) {
        return new Promise((resolve, reject) => {
            Clip.findOne({title: clip.title}, (err, foundedClip) => {
                if (foundedClip) {
                    let result = new Result(messages.stateResponse.FAIL_STATE, 'Видео с таким названием уже существует!', BAD_REQUEST);
                    reject(result);
                } else {
                    this._saveClip(resolve, reject, clip);
                }
            })
        });
    }

    _saveClip(resolve, reject, clip) {
        commonService._isDbConnect(reject);

        clip.date = Date.now();
        clip.isPresentation = false;
        new Clip(clip).save((err) => {
            if (err) {
                let result = new Result(messages.stateResponse.FAIL_STATE);
                reject(result);
            } else {
                let result = new Result(messages.stateResponse.SUCCESS_STATE,"Видео успешно добавлено!");
                resolve(result);
            }
        });
    }

    removeClip(id) {
        return new Promise((resolve, reject) => {
            commonService._isDbConnect(reject);
            Clip.findById(id, (err, clip) => {
                if (err || !clip) {
                    let result = new Result(messages.stateResponse.FAIL_STATE);
                    reject(result);
                } else {
                    let result = new Promise((resolve, reject) => {
                        clip.remove((err) => {
                            if (err) {
                                let result = new Result(messages.stateResponse.FAIL_STATE);
                                reject(result);
                            } else {
                                let result = new Result(messages.stateResponse.SUCCESS_STATE, id);
                                resolve(result);
                            }
                        })
                    });
                    resolve(result);
                }
            })
        });
    }

    getPresentationClip() {
        return new Promise((resolve, reject) => {
            commonService._isDbConnect(reject);
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
            commonService._isDbConnect(reject);
            this.getPresentationClip().then(result => {
                let clip = result.body;
                Clip.findById(id, (err, nextPresentationClip) => {
                    if (err || !nextPresentationClip) {
                        reject(result);
                    } else {
                        clip.isPresentation = false;
                        clip.save((err, clip) => {
                            if (!err) {
                                nextPresentationClip.isPresentation = true;
                                nextPresentationClip.save();
                            }
                        });
                        let result = new Result(messages.stateResponse.SUCCESS_STATE);
                        resolve(result);
                    }
                });
            }).catch(err => {
                reject(err);
            });
        })
    }


    getClipListByTag(tag, page, perLimit) {
        let perPage = perLimit ? Number(perLimit) : this.perPage;
        page = page || 0;
        return new Promise((resolve, reject) => {
            commonService._isDbConnect(reject);
            this._findAllVideos(resolve, reject, tag).sort({date: -1}).limit(perPage)
                .skip(perPage * page);
        });
    }

    getClipListPageNumByTag(tag, limit) {
        let perPage = limit ? Number(limit) : this.perPage;
        return new Promise((resolve, reject) => {
            commonService._isDbConnect(reject);
            this._findAllVideos(resolve, reject, tag)
        }).then(incomingResult => {
            const pageNum = Math.ceil(incomingResult.body.length / perPage);
            let result = new Result(messages.stateResponse.SUCCESS_STATE, pageNum);
            return result;
        })
    }


    _findAllVideos(resolve, reject, tag) {
        return Clip.find({section: tag}, (err, clipList) => {
            if (!err) {
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
