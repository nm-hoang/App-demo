import React, { Component } from 'react';
class Login extends Component {
    render() {

        return (
            
            <div className="limiter">
            <link rel="stylesheet" type="text/css" href="css/Login/main.css" />
        	<link rel="stylesheet" type="text/css" href="css/Login/util.css"></link>
                <div className="container-login100">
                <div className="wrap-login100">
                    
                    <form className="">
                    <span className="login100-form-title">
                        Member Login
                        </span>
                        <div className="wrap-input100 validate-input" >
                        <input className="input100" type="text" name="email" placeholder="Email" id="mail" />
                        <span className="focus-input100" />
                        <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        </span>
                    </div>
                    <div className=" validate-input" >
                        <input className="input100" type="password" name="pass" placeholder="Password"  id="password"/>
                        <span className="focus-input100" />
                        <span className="symbol-input100">
                        <i className="fa fa-lock" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="container-login100-form-btn">
                        <button type ="submit" className="login100-form-btn" >
                        Login
                        </button>
                    </div>
                    <div className="text-center p-t-12">
                       
                        <a className="txt2" href="#">
                           Forgot your Password?
                        </a>
                    </div>
                    <div className="text-center p-t-136">
                        <a className="txt2" href="#">
                        Create an Account
                        </a>
                    </div>
                    </form>
                </div>
                </div>
              
             </div>
        );
    }
}

export default Login;