import axios from "axios";

import {Path, Config} from "../../../constants";

export default class UserSession{

  checkUserSession = () => {
    const cacheUser = this.getUserSession();

    if (cacheUser === null && window.location.pathname !== '/') {
      this.redirectToLogin();
    } else if (cacheUser !== null && window.location.pathname !== '/') {
      this.checkToken(cacheUser.token);
    } else if (cacheUser !== null && window.location.pathname === '/') {
      this.redirectToDashboard();
    }
  }

  // Check if token exists
  checkToken = (token) => {
      axios.get(`${Config.API_URL}/${Path.TOKEN_PATH}/${token}`).then(res => {
        const data = res.data;

        if (data.success === false){
          this.clearUserSession();
          this.redirectToLogin();
        }
      });
  };

  // Set user session 
  setUserSession = (User) => {
    localStorage.setItem('user', JSON.stringify(User));
  };

  // Get user session
  getUserSession = () => {
    const cachedSession = localStorage.getItem('user');
    return JSON.parse(cachedSession);
  };

  // Clear user session
  clearUserSession = () => {
    localStorage.setItem('user', null);
  };

  // Redirect to login page
  redirectToLogin = () => {
    window.location.href = "/";
  };

  // Redirect to dashboard page
  redirectToDashboard = () => {
    window.location.href = "/dashboard";
  };

};