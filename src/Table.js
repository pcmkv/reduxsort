import React, { Component } from 'react';
import {connect} from 'react-redux';

class Table extends Component {
  constructor(props) {
      super(props);
      console.log("CHILDREN", this.props.data);
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
                (this.props.data.length !== 0) ?  this.props.data.map((elem, i)=> {
                        return (
                            <tr key={i} className={i}>
                                <td>{elem.id} </td>
                                <td>{elem.email} </td>
                                <td>{elem.name} </td>
                                <td></td>
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
