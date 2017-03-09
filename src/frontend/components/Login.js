import React from 'react'
import {bindActionCreators} from 'redux'
import {login} from '../actions/login'
import {connect} from 'react-redux'
import translate from '../utils/translate'
import  * as _ from 'lodash'


require('../styles/refactoredStyles/login.less');

class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    handleSubmit = (e) => {
        e.preventDefault();

        let login = this.refs['login'].value;
        let password = this.refs['password'].value;

        this.props.login(login, password,this.props.strings)
    };


    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            this.props.router.replace('/admin');
        }
    }


    render() {
        let validateLoginForm = this.props.validateLoginForm;
        let strings = this.props.strings;

        return (
            <div className="login">
                <div className="login-window">
                    <div className="panel-heading">
                        <h3 className="panel-title">{strings.authorization}</h3>
                    </div>


                    <form className="input-login-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <span className="error"> {validateLoginForm.incorrect.msg}</span>
                        <div className="input-group input-login-field">
                                <span className="input-group-addon" id="sizing-addon3">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            <input ref="login" type="text" className="form-control" placeholder={strings.login}
                                   aria-describedby="sizing-addon3"/>

                        </div>
                        <span className="error"> {validateLoginForm.login.msg}</span>
                        <div className="input-group input-login-field">
                                <span className="input-group-addon input-login-field" id="sizing-addon3">
                                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                </span>
                            <input ref="password" type="text" className="form-control" placeholder={strings.password}
                                   aria-describedby="sizing-addon3"/>
                        </div>
                        <span className="error"> {validateLoginForm.password.msg}</span>
                        <button className="login-btn btn-lg btn btn-primary btn-block btn-signin" type="submit">{strings.signIn}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        validateLoginForm: state.loginPage.validate,
        isAuthenticated: state.loginPage.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    }
}


Login.propTypes = {
    strings: React.PropTypes.object
}

const decorators = _.flow([
    connect(mapStateToProps, mapDispatchToProps),
    translate('Login')
]);


export default decorators(Login);