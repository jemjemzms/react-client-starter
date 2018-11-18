import React from 'react';
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <React.Fragment>
        <nav className="navbar-mobile">
          <div className="container-fluid">
              <ul className="navbar-mobile__list list-unstyled">
                  <li>
                      <NavLink to="/transaction">
                          <i className="fas fa-tachometer-alt"></i>Dashboard
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/transaction">
                          <i className="fas fa-chart-bar"></i>Transactions
                      </NavLink>
                  </li>
                  <li>
                      <a href="#\">
                      <i className="fas fa-chart-area"></i>Income
                      </a>
                  </li>
                  <li>
                      <a href="#\">
                      <i className="fas fa-minus-circle"></i>Expense
                      </a>
                  </li>
                  <li>
                      <a href="#\">
                      <i className="fas fa-calendar-alt"></i>Calendar
                      </a>
                  </li>
                  <li>
                      <a href="#\">
                      <i className="fas fa-money-bill-alt"></i>Track Budget
                      </a>
                  </li>
                  <li>
                      <a href="#\">
                      <i className="fas fa-star"></i>Accounts
                      </a>
                  </li>
                  <li className="has-sub">
                      <a href="#\" className="js-arrow">
                          <i className="fas fa-th-list"></i>Category
                      </a>
                      <ul className="list-unstyled navbar__sub-list js-sub-list">
                          <li><a href="#\">Income</a></li>
                          <li><a href="#\">Expense</a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </nav>
    </React.Fragment>
  );
};

export default MobileMenu;