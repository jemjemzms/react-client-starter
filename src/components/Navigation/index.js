import React, {Component} from 'react';

import MobileMenu from "./mobile/MobileMenu";
import SidebarMenu from "./sidebar/SidebarMenu";

class Navigation extends Component {

    render() {
        return (
        <React.Fragment>
            <header className="header-mobile d-block d-lg-none">
                <div className="header-mobile__bar">
                    <div className="container-fluid">
                        <div className="header-mobile-inner">
                            <a className="logo" href="index.html">
                                <img src="images/icon/logo.png" alt="Client Starter" width="100" />
                            </a>
                            <button className="hamburger hamburger--slider" type="button">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <MobileMenu />
            </header>
            <SidebarMenu active={this.props.active} show={this.props.show} />
        </React.Fragment>
        );
    }
}

export default Navigation;