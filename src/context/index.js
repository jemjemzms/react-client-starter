import React, { Component } from "react";

import UserSession from "../components/Login/connect/UserSession"; 

import axios from "axios";

import _ from "lodash";

import {Path, Config} from "../constants";

// Master context
const MasterContext = React.createContext();

class MyProvider extends Component {

  state ={
    recordId: '',
    data: '',
  }

  getMasterRecord = () => {
    const session = new UserSession();
    const userSession = session.getUserSession();
    var self = this;

    if (userSession !== null) {
      
      axios.get(`${Config.API_URL}/${Path.MASTER_PATH}/${userSession.token}/1`).then(res => {
        const data = res.data;

        if (data.success === true){
          self.setState({data});
        }

        //define global variables so that fetching all data will only be done once
        window.loaded = true; // component loaded
        window.data = {data}; // assign all data

      }).catch(function (error) {
        console.log(error);
      });
    }
  }

  componentDidMount() {
    
    if (window.loaded === undefined) {
      this.getMasterRecord();
    } else {
      this.setState(window.data);
    }

  }

  render() {
    return (
      <MasterContext.Provider
        value={{
          state: this.state,
          insertCategory: (props) => {
            const prevData = this.state.data.categories;

            // Combine old and new categories objects, and change the keys
            let i = 0;
            const newCategories = _.mapKeys( _.assign({}, prevData, {props}) , function(value, key) {
              return i++;
            });

            const data = Object.assign({}, this.state.data, {
              categories: newCategories
            });

            this.setState(prevState => ({ data }));
            window.data = {data};
          },
          updateCategory: (propsKey, categories, props) => {
            let i = 0;
            const newCategories = _.mapKeys( _.assign({}, categories, {props}) , function(value, key) {
     
              if (value.ID === props.ID) {
                return propsKey;
              } else {
                if (i === parseInt(propsKey)){
                  return i += 2;
                } else {
                  return i++;
                }
              }

            });

            const data = Object.assign({}, this.state.data, {
              categories: newCategories
            });

            this.setState(prevState => ({ data }));
            window.data = {data};
          },
          removeCategory: (categories) => {
            const data = Object.assign({}, this.state.data, {
              categories: categories
            });

            this.setState(prevState => ({ data }));
            window.data = {data};
          }
        }}
      >
        {this.props.children}
      </MasterContext.Provider>
    );
  }
}

// User Session
const session = new UserSession();
session.checkUserSession();

export {MyProvider, MasterContext};