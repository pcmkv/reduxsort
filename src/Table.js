import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as getDataAction from './actions/getData';

class Table extends Component {
  constructor(props){
    super(props);
    console.log("CHILDREN",this.props.data);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>E-mail</th>
              <th>Location</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.data.map((elem,i)=>{
                return(
                    <tr key={i} className={i}>
                      <td>{elem.id} </td>
                      <td>{elem.email} </td>
                      <td>{elem.name} </td>
                      <td> </td>
                    </tr>
                )}
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table
