import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./scss/main.scss";

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import IncomeList from './components/Income';
import ExpenseList from './components/Expense';
import Calendar from './components/Calendar';
import BudgetList from './components/Budget';
import AccountList from './components/Accounts';

import CategoryIncome from './components/Category/income';
import CategoryExpense from './components/Category/expense';
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/income" component={IncomeList} />
              <Route path="/expense" component={ExpenseList} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/transaction" component={Transaction} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/budget" component={BudgetList} />
              <Route path="/accounts" component={AccountList} />
              <Route path="/category-income" component={CategoryIncome} />
              <Route path="/category-expense" component={CategoryExpense} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
