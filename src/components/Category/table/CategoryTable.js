import React, {Component} from 'react';

import _ from "lodash";

import ReactTable from "react-table";
import 'react-table/react-table.css';

import {MasterContext} from "../../../context";

import CategoryModal from '../modal/CategoryModal'; 
import CategoryDeleteModal from '../modal/CategoryDeleteModal';

class CategoryTable extends Component {
    static contextType = MasterContext;

    handleChildShowModal = (id) => {
        this.CategoryModal.handleShowModal({data:{type:'edit', id}});
    }

    handleChildDeleteModal = (id) => {
        this.CategoryDeleteModal.handleShowModal({data:{type:'edit', id}});
    }

    render() {
        // CONFIGURATION
        const columns = [
            {
                Header: 'Name',
                accessor: 'Name'
            }, 
            {
                Header: 'Description',
                accessor: 'Description'
            }, 
            {
                Header: 'Color',
                accessor: 'Color',
                Cell: props => <div style={{backgroundColor: '#' + props.value, width: '30%', margin: '0 auto'}}>&nbsp;</div>
            },
            {
                Header: 'Action',
                accessor: 'ID',
                Cell: props => <div><a href="#/" value={props.value} onClick={() => this.handleChildShowModal(props.value)}>Edit</a> 
                <a href="#/" value={props.value} onClick={() => this.handleChildDeleteModal(props.value)}>Delete</a></div>
            }
        ];

      const categories = this.context.state.data.categories;

      let listData = _.filter(categories, { 'Type': this.props.category});

      return (
        <React.Fragment>
          <div className="row">
              <div className="col-md-12">
                  <CategoryModal
                    title={this.props.category}
                    onRef={ref => (this.CategoryModal = ref)}
                  />
                  <CategoryDeleteModal
                    title={this.props.category}
                    onRef={ref => (this.CategoryDeleteModal = ref)}
                  />
                  <ReactTable
                      data={listData}
                      columns={columns}
                      defaultPageSize={10}
                  />
              </div>
          </div>
        </React.Fragment>
      );
    }
  }

export default CategoryTable;