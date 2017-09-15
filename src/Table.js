import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Table extends Component {
  constructor(props){
    super(props);
    console.log("CHILDREN",this.props);
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
            <tr>
              {
                this.props.data.map((userInfo,item) =>{
                  <td key={item}>{userInfo.name}</td>
                })
            }
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
