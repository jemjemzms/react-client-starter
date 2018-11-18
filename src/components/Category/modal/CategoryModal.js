import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

import CategoryForm from '../form/CategoryForm';
import Formatter from "../../../utils/formatter";

class CategoryModal extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        show: false,
        data: '',
        action: '',
      };

      this.handleShowModal = this.handleShowModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
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
        this.setState(prevState => ({show: true, action: formatter.capitalize(data.data.type), data}));
    }
  
    render() {
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-md-12">
                <div className="overview-wrap">
                    <h2 className="title-1">{this.props.title} Category List</h2>
                    <Button
                        className="au-btn au-btn-icon au-btn--blue"
                        bsSize="large"
                        onClick={() => this.handleShowModal({data:{type:'new', id:''}})}
                    >
                    <i className="zmdi zmdi-plus"></i>add item
                    </Button>
                </div>
            </div>
         </div>
          <Modal show={this.state.show} onHide={this.handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.action} {this.props.title} Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CategoryForm data={this.state.data} type={this.props.title} closeModal={this.handleCloseModal} />
              </Modal.Body>
          </Modal>
        </React.Fragment>
      );
    }
  }

export default CategoryModal;