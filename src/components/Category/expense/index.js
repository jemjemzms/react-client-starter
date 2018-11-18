import React, {Component} from 'react';

import Header from '../../Header';
import Footer from '../../Footer';
import Navigation from '../../Navigation';

import CategoryTable from '../table/CategoryTable';

import {MyProvider} from "../../../context";

class CategoryExpense extends Component {
    render() {
        return (
        <MyProvider>
            <Navigation active="category" show="category-expense" />
            <div className="page-container">
                <Header />
                <div className="main-content">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <CategoryTable
                                category="Expense" 
                            />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </MyProvider>
        );
    }
}

export default CategoryExpense;