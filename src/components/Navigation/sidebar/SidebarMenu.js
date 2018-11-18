import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

import CSSTransitionGroup from 'react-transition-group/TransitionGroup';

import "../scss/sidebar.scss"; 

class Sidebar extends Component {
  
  constructor(props){
    super(props);

    let showCategoryBlock = false;
    if (
      this.props.show === 'category-income' || 
      this.props.show === 'category-expense'
    ){
      showCategoryBlock = true;
    }

    this.state = {
        showCategorySubMenu: showCategoryBlock
    }

    this.toggleCategoryMenu = this.toggleCategoryMenu.bind();
  }
    
  toggleCategoryMenu = () => {
    this.setState(prevState => ({showCategorySubMenu: !prevState.showCategorySubMenu}));
  }

  render() {
      return (
      <React.Fragment>
        <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
                <a href="#\">
                    <img src="images/icon/logo.png" alt="Client Starter" width="162" />
                </a>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
                <nav className="navbar-sidebar" data-test={this.props.active}>
                    <ul className="list-unstyled navbar__list">
                        <li className={this.props.active === 'dashboard' ? "active" : ''}>
                            <NavLink to="/dashboard">
                                <i className="fas fa-tachometer-alt"></i>Dashboard
                            </NavLink>
                        </li>
                        <li className={this.props.active === 'transaction' ? "active" : ''}>
                            <NavLink to="/transaction">
                                <i className="fas fa-chart-bar"></i>Transactions
                            </NavLink>
                        </li>
                        <li className={this.props.active === 'income' ? "active" : ''}>
                            <NavLink to="/income">
                                <i className="fas fa-chart-area"></i>Income
                            </NavLink>
                        </li>
                        <li className={this.props.active === 'expense' ? "active" : ''}>
                            <NavLink to="/expense">
                                <i className="fas fa-minus-circle"></i>Expense
                            </NavLink>
                        </li>
                        <li className={this.props.active === 'calendar' ? "active" : ''}>
                            <NavLink to="/calendar">
                                <i className="fas fa-calendar-alt"></i>Calendar
                            </NavLink>
                        </li>
                        <li className={this.props.active === 'budget' ? "active" : ''}>
                            <NavLink to="/budget">
                                <i className="fas fa-money-bill-alt"></i>Track Budget
                            </NavLink>
                        </li>
                        <li className={this.props.active === 'accounts' ? "active" : ''}>
                            <NavLink to="/accounts">
                                <i className="fas fa-star"></i>Accounts
                            </NavLink>
                        </li>
                        <li className={`has-sub ${this.props.active === 'category' ? "active" : ''}`}>
                            <a className="js-arrow" href="#\" onClick={this.toggleCategoryMenu}>
                            <i className="fas fa-th-list"></i>Category</a>
                            <CSSTransitionGroup
                              transitionName="slide"
                              transitionAppear={true}
                              transitionAppearTimeout={500}
                              transitionEnter={false}
                              transitionLeave={false}
                            >
                              { this.state.showCategorySubMenu && 
                                <ul className="list-unstyled navbar__sub-list js-sub-list">
                                    <li className={this.props.show === 'category-income' ? "active" : ''}>
                                      <NavLink to="/category-income">
                                          <i className="fas fa-th-list"></i>Income
                                      </NavLink>
                                    </li>
                                    <li className={this.props.show === 'category-expense' ? "active" : ''}>
                                      <NavLink to="/category-expense">
                                          <i className="fas fa-th-list"></i>Expense
                                      </NavLink>
                                    </li>
                                </ul>
                              }
                            </CSSTransitionGroup>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
      </React.Fragment>
  );
 }
}

export default Sidebar;