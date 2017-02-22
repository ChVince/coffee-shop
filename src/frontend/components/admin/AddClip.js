import React from 'react'
import {Button} from 'react-bootstrap'


class AddClip extends React.Component {
    constructor(props) {
        super(props)
    }


    onChange = (e) => {
        let input = e.target;
        this.props.validateAddClipForm(input.value, input.name)
    };


    _checkIsValidate() {
        let validateForms = this.props.validateForms;
        return validateForms.every((item) => {
            return item.isValid
        })
    }

    addClip = () => {
        let clip={};
        let refsAsArr = Object.keys(this.refs);
        for (let i = 0; i < refsAsArr.length; i++) {
            let name = refsAsArr[i];
            clip[name] = this.refs[name].value;
        }
        this.props.addClip(clip);
    }

    render() {
        let disabled = !this._checkIsValidate();
        return (
            <div className="addClip">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-tag" aria-hidden="true"></i></span>
                    <input type="text" ref="section" name="section" onChange={this.onChange} className="form-control" placeholder="Video tag" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group">
                    <span className="input-group-addon">name: </span>
                    <input type="text" ref="title" name="title" onChange={this.onChange} className="form-control" placeholder="Title" aria-describedby="basic-addon1"/>
                </div>

                <label htmlFor="basic-url">Your clip URL</label>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon3">www</span>
                    <input ref="url" type="text" name="url" onChange={this.onChange} className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                </div>

                <Button onClick={this.addClip}  bsStyle="success" disabled={disabled} bsSize="small">Добавить</Button>
            </div>
        )
    }

}

AddClip.propTypes = {
    addClip: React.PropTypes.func.isRequired,
    validateAddClipForm: React.PropTypes.func.isRequired,
    validateForms: React.PropTypes.array.isRequired
}

export default AddClip;