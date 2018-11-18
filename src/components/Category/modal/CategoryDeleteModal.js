import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

import _ from "lodash";
import axios from "axios";

import Formatter from "../../../utils/formatter";

import {MasterContext} from "../../../context";

import {Path, Config} from "../../../constants";
import UserSession from "../../../components/Login/connect/UserSession"; 

class CategoryDeleteModal extends Component {
    static contextType = MasterContext;

    constructor(props, context) {
      super(props, context);

      this.state = {
        show: false,
        id: '',
        action: '',
      };

      this.handleShowModal = this.handleShowModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleDeleteRecord = this.handleDeleteRecord.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    handleCloseModal() {
        this.setState(prevState => ({show: false}));
    }

    handleShowModal(data) {
        const formatter = new Formatter();
        this.setState(prevState => ({show: true, action: formatter.capitalize(data.data.type), id: data.data.id}));
    }

    handleDeleteRecord(itemId) {
      const session = new UserSession();
      const userSession = session.getUserSession();

      const values = {
        ID: itemId,
        ACTION: 'delete',
      };

      axios.post(`${Config.API_URL}/${Path.CATEGORY_PATH}/${userSession.token}`, values).then(res => {
        const data = res.data;
  
        if (data.success === true){
          const categoryId = data.id;
          if (categoryId !== undefined){ 
            // Remove current record ID group
            const contextData = this.context.state.data.categories;
 
            const newCategories = _.filter(contextData, function(o) { 
              return o.ID !== parseInt(categoryId); 
            });
  
            this.context.removeCategory(newCategories);
  
            this.handleCloseModal();
          } else {
            // set errors
          }
        }
          
        return '';
      });
   }
  
    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.show} onHide={this.handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Remove {this.props.title} Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to remove this Category?
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleCloseModal}>Close</Button>
                <Button bsStyle="primary" value={this.state.id} onClick={() => this.handleDeleteRecord(this.state.id)}>Remove</Button>
              </Modal.Footer>
          </Modal>
        </React.Fragment>
      );
    }
  }

export default CategoryDeleteModal;