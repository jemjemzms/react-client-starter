import axios from "axios";

import {Path, Config} from "../../../constants";
import UserSession from "./UserSession";

export default class LoginConnect{

  constructor(values, history) {
    this.values = values;
    this.history = history;
    this.session = new UserSession();
  }

  requestHttp = () => {
      const params = {
        Email: this.values.email,
        Password: this.values.password
      };

      axios.post(`${Config.API_URL}/${Path.LOGIN_PATH}`, { params })
      .then(res => {

        if(res.status === 200) {
          if (res.data.success === true) {
            
            // Set values
            const User = {
              loggedin: true,
              token: res.data.token
            };

            this.session.setUserSession(User);

            // @disabled the redirect page, this is only for future reference 
            //this.history.push("/dashboard");

            this.session.redirectToDashboard();

            return res.data;
          }
        }
        
      });
  };

  logoutUser = () => {
    const userSession = this.session.getUserSession();

    axios.get(`${Config.API_URL}/${Path.LOGIN_PATH}/${userSession.token}`).then(res => {
      const data = res.data;

      if (data.success === true){
        this.session.clearUserSession();
        this.session.redirectToLogin();
      }
    }); 
  }
};