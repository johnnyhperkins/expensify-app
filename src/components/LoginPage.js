import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';


export class LoginPage extends React.Component {
    startLoginGoogle = () => {
        this.props.startLogin(googleAuthProvider);
    };
    startLoginFacebook = () => {
        this.props.startLogin(facebookAuthProvider);
    };
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>Log into your account below:</p>
                    <button 
                        className="button"
                        onClick={this.startLoginGoogle}>Login with Google</button>
                    <br />
                    <br />
                    <button
                        className="button"
                        onClick={this.startLoginFacebook}>Login with Facebook</button>
                </div>
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (provider) => dispatch(startLogin(provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);