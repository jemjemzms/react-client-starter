import React, {Component} from "react";
import axios from "axios";
import { SketchPicker } from 'react-color';
import _ from "lodash";

import { Formik, Form, Field } from "formik";
import Yup from "yup";

import {MasterContext} from "../../../context";

import {Path, Config} from "../../../constants";
import UserSession from "../../../components/Login/connect/UserSession"; 

class CategoryForm extends Component {
  static contextType = MasterContext;

  constructor(props, context) {
      super(props, context);

      if (this.props.data.data.type === 'edit') {

        const matchValue = _.find(this.context.state.data.categories, { 'ID': this.props.data.data.id });

        this.state = {
          id: matchValue.ID,
          name: matchValue.Name,
          description: matchValue.Description, 
          background: '#' + matchValue.Color,
          displayColorPicker: false,
          type: this.props.data.data.type
        };

      } else {
        this.state = {
          background: '#fff',
          displayColorPicker: false,
          type: this.props.data.data.type
        };
      }

      this.handleChangeComplete = this.handleChangeComplete.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.getSchema  = this.getSchema.bind(this);

  };

  handleChangeComplete = (color, event) => {
    this.setState(prevState => ({ background: color.hex }));
  };

  handleClick = () => {
    this.setState(prevState => ({ displayColorPicker: !this.state.displayColorPicker }));
  };

  handleClose = () => {
    this.setState(prevState => ({ displayColorPicker: false }));
  };

  insertRecord = (values, userSession, setErrors) => {

    values = Object.assign({}, values, {
      ACTION: 'insert',
    });

    axios.post(`${Config.API_URL}/${Path.CATEGORY_PATH}/${userSession.token}`, values).then(res => {
      const data = res.data;

      if (data.success === true){
        const id = data.id;
        if (id !== undefined){ 
          const updatedValues = Object.assign({}, values, {
            ID: id
          });
          this.context.insertCategory(updatedValues);

          this.props.closeModal();
        } else {
          setErrors({ name: "There was a problem saving the data. Please try again later." });
        }
      }
        
      return '';
    }).catch(function (error) {
      setErrors({ name: "There was a problem connecting to the server. Contact your administrator." });
    });

  };

  updateRecord = (values, userSession, setErrors) => {

    // remove the recordid field
    let cloneValues = values;
    delete cloneValues.RecordID;

    cloneValues = Object.assign({}, cloneValues, {
      ACTION: 'update',
    });

    axios.post(`${Config.API_URL}/${Path.CATEGORY_PATH}/${userSession.token}/1/${this.state.id}`, cloneValues, {headers: {'Content-Type': 'application/json'}}).then(res => {
      const data = res.data;

      if (data.success === true){
        const categoryId = data.id;
        if (categoryId !== undefined){ 
          // Remove current record ID group
          const contextData = this.context.state.data.categories;

          const categoryKey = _.findKey(contextData, function(o) { return o.ID === parseInt(categoryId); });

          const newCategories = _.filter(contextData, function(o) { 
            return o.ID !== parseInt(categoryId); 
          });

          // Assign new ID
          const updatedValues = Object.assign({}, values, {
            ID: categoryId
          });

          this.context.updateCategory(categoryKey, newCategories, updatedValues);

          this.props.closeModal();
        } else {
          setErrors({ name: "There was a problem saving the data. Please try again later." });
        }
      }
        
      return '';
    }).catch(function (error) {
      setErrors({ name: "There was a problem connecting to the server. Contact your administrator." });
    });

  };

  onSubmit = (data, {setErrors}) => {

    // setup params
    const bg = this.state.background;
    const values = {
      Name: data.name,
      Description: data.description,
      Color: bg.replace('#', ''),
      Type: this.props.type,
      RecordID: '1'
    }
    const session = new UserSession();
    const userSession = session.getUserSession();

    if (this.state.type === 'new') {
      this.insertRecord(values, userSession, setErrors);
    } else {
      this.updateRecord(values, userSession, setErrors);
    }

  }

  // validation with yup
  getSchema = () => {
    return Yup.object().shape({
      name: Yup.string()
        .required("Name is required"),
      description: Yup.string()
        .required("Description is required")
    })
  }

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    const style = {
      backgroundColor: this.state.background,
      width: '50px',
      height: '50px',
      display: 'inline-block',
      padding: '10px 0',
      border: '1px solid #000'
    }

    //@todo style the validation messages /  make it constant
    return (
      <Formik
        initialValues={{
          name: this.state.name,
          description: this.state.description,
          color: this.state.background
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={(props) => (
          <Form className="form_fields">
            <div className="form-group">
              { props.touched.name && props.errors.name && <p>{ props.errors.name }</p> }
              <Field type="text" name="name" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group">
              { props.touched.description && props.errors.description && <p>{ props.errors.description }</p> }
              <Field name="description" component="textarea" placeholder="Description" className="form-control" />
            </div>
            <div className="form-group">
              <button type="button" onClick={ this.handleClick }><span style={style}>&nbsp;</span> Color</button>
              { this.state.displayColorPicker ? <div style={ popover }>
                <div style={ cover } onClick={ this.handleClose }/>
                <SketchPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete } />
              </div> : null }
            </div>
            <button type="submit" disabled={ props.isSubmitting } className="form-control" >
              Save
            </button>
          </Form>
        )}
      />
    );
  }
}

export default CategoryForm;