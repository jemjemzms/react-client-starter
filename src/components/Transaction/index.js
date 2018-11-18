import React from 'react';

import Header from '../Header/index';
import Navigation from '../Navigation/index';

import Income from './Income';
import Expense from './Expense';

const Transaction = () => {
  return (
    <React.Fragment>
      <Navigation active="transaction" />
      <div className="page-container">
        <Header />
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <h2 className="title-1">Transaction</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                      <div className="row">
                        <Income />
                        <Expense />
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Transaction;