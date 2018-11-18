import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';

import {MyProvider} from "./../../context";

const Dashboard = () => {
  return (
    <MyProvider>
        <Navigation active="dashboard" />
        <div className="page-container">
            <Header />
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="overview-wrap">
                                    <h2 className="title-1">overview</h2>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    </MyProvider>
  );
};

export default Dashboard;