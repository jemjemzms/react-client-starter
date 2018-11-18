import React, { Component } from 'react';

import LoginConnect from "../Login/connect/LoginConnect";

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            showMenu: false,
            showNotification: false
        }

        this.handleToggleMenu = this.handleToggleMenu.bind();
        this.handleLogout = this.handleLogout.bind();
        this.handleToggleNotification = this.handleToggleNotification.bind();
    }

    handleToggleMenu = () => {
        this.setState(prevState => ({showMenu: !prevState.showMenu}));
    }
    
    handleToggleNotification = () => {
        this.setState(prevState => ({showNotification: !prevState.showNotification}));
    }

    handleLogout = () => {
        const logout = new LoginConnect();
        logout.logoutUser();
    }
    
    render() {

        return (
            <React.Fragment>
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action="" method="POST">
                                <input className="au-input au-input--xs" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                <button className="au-btn--submit" type="submit">
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </form>
                            <div className="header-button">
                                <div className="noti-wrap">
                                  <div className={`noti__item js-item-menu ${this.state.showNotification === true && 'show-dropdown'}`} 
                                    onClick={this.handleToggleNotification}>
                                        <i className="zmdi zmdi-notifications"></i>
                                        <span className="quantity">3</span>
                                        <div className="notifi-dropdown js-dropdown">
                                            <div className="notifi__title">
                                                <p>You have 3 Notifications</p>
                                            </div>
                                            <div className="notifi__item">
                                                <div className="bg-c1 img-cir img-40">
                                                    <i className="zmdi zmdi-email-open"></i>
                                                </div>
                                                <div className="content">
                                                    <p>You got a email notification</p>
                                                    <span className="date">April 12, 2018 06:50</span>
                                                </div>
                                            </div>
                                            <div className="notifi__item">
                                                <div className="bg-c2 img-cir img-40">
                                                    <i className="zmdi zmdi-account-box"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Your account has been blocked</p>
                                                    <span className="date">April 12, 2018 06:50</span>
                                                </div>
                                            </div>
                                            <div className="notifi__item">
                                                <div className="bg-c3 img-cir img-40">
                                                    <i className="zmdi zmdi-file-text"></i>
                                                </div>
                                                <div className="content">
                                                    <p>You got a new file</p>
                                                    <span className="date">April 12, 2018 06:50</span>
                                                </div>
                                            </div>
                                            <div className="notifi__footer">
                                                <a href="#\">All notifications</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="account-wrap">
                                    <div className={`account-item clearfix js-item-menu ${this.state.showMenu === true && 'show-dropdown'}`} 
                                    onClick={this.handleToggleMenu}>
                                        <div className="image">
                                            <img src="images/icon/avatar-01.jpg" alt="Jed Diaz" />
                                        </div>
                                        <div className="content">
                                            <a className="js-acc-btn" href="#\">Jed Diaz</a>
                                        </div>
                                        <div className="account-dropdown js-dropdown">
                                            <div className="info clearfix">
                                                <div className="image">
                                                    <a href="#\">
                                                        <img src="images/icon/avatar-01.jpg" alt="Jed Diaz" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="name">
                                                        <a href="#\">Jed Diaz</a>
                                                    </h5>
                                                    <span className="email">jeddiaz@example.com</span>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__body">
                                                <div className="account-dropdown__item">
                                                    <a href="#\">
                                                        <i className="zmdi zmdi-account"></i>Account</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#\">
                                                        <i className="zmdi zmdi-settings"></i>Setting</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#\">
                                                        <i className="zmdi zmdi-money-box"></i>Billing</a>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__footer">
                                                <a href="#\" onClick={this.handleLogout}>
                                                    <i className="zmdi zmdi-power"></i>Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            </React.Fragment>
        );
    }
}

export default Header;