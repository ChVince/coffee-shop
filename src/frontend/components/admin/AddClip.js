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
        let clip = {};
        let refsAsArr = Object.keys(this.refs);
        for (let i = 0; i < refsAsArr.length; i++) {
            let name = refsAsArr[i];
            clip[name] = this.refs[name].value;
        }
        this.props.addClip(clip);
    }

    render() {
        let disabled = !this._checkIsValidate();
        let notification

        if(this.props.notification.state) {
            if (this.props.notification.statusCode == 200) {
                notification = <span className="success">{this.props.notification.body}</span>

            } else {
                notification = <span className="error">{this.props.notification.body}</span>;
            }
        }
        return (

            <div className="addClip">
                <div style={{color: 'red', marginBottom: '20px'}}>
                    <span >*Все поля обязательны</span>
                </div>
                <label>Тег:</label>

                <input type="text" ref="section" name="section" onChange={this.onChange}
                       className="form-control admin-add-clip-input"
                       aria-describedby="basic-addon1"/>


                <label>Название: </label>

                <input type="text" ref="title" name="title" onChange={this.onChange}
                       className="form-control admin-add-clip-input"
                       aria-describedby="basic-addon1"/>


                <label >Ссылка на ваше видео: </label>

                <input ref="url" type="text" name="url" onChange={this.onChange}
                       className="form-control admin-add-clip-input" id="basic-url"
                       aria-describedby="basic-addon3"/>

                {notification}
                <Button onClick={this.addClip} bsStyle="success" disabled={disabled} bsSize="small">Добавить</Button>
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