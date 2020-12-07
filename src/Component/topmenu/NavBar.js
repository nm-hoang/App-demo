import React, { Component } from 'react';


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="/"><img src="assets/img/logos/logomotel.png" alt="" /></a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ml-1" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/login">Login</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/signup">Sign up</a></li>
                </ul>
              </div>
            </div>
          </nav>
          
        );
    }
}

export default NavBar;