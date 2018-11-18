import React from 'react';

import Header from '../Header/index';
import Footer from '../Footer/index';
import Navigation from '../Navigation/index';

const Calendar = () => {
  return (
    <React.Fragment>
    <Navigation active="calendar" />
      <div className="page-container">
        <Header />
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <h2 className="title-1">Calendar</h2>
                                <button className="au-btn au-btn-icon au-btn--blue">
                                    <i className="zmdi zmdi-plus"></i>add item</button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default Calendar;