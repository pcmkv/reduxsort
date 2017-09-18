import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as sortName from './actions/sortByName';
class Table extends Component {
  constructor(props) {
      super(props);
      console.log("CHILDREN", this.props.data);
      console.log("PROPS",this.props);
  }

 
    sortByNameMethod(){
        let up = true;
        sortName.sortByName(up);
    }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
            <table className="table table-bordered">
            <thead style={{textAlign:'center'}}>
            <tr>
            <th>#</th>
            <th>name
                <button onClick={this.sortByNameMethod.bind(this)}>
                Sort
            </button>
            </th>
            <th>E-mail</th>
            <th>Location</th>
            </tr>
            </thead>
            <tbody>
            {
                (this.props.data.length !== 0) ?  this.props.data.map((elem, i)=> {
                        return (
                            <tr key={elem.id} className={i}>
                                <td>{elem.id} </td>
                                <td>{elem.email} </td>
                                <td>{elem.name} </td>
                                <td>{elem.address.city}</td>
                            </tr>
                        )
                    }
                ): <tr>Test2</tr>
            }

            </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default Table
