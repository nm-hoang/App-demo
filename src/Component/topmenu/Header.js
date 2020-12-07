import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                {/* <div className="masthead-subheading">Welcome To Our Studio!</div> */}
                <div className="masthead-heading text-uppercase">Welcome To Our Studio!</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
                </div>
            </header>
        );
    }
}

export default Header;