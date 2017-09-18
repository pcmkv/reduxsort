import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as getDataAction from './actions/getData';
import Table from './Table';

class App extends Component {
    constructor(props){
        super(props);
        console.log("App",this.props.testStore);
    }

    componentWillMount(){
        getDataAction.getUserInfo();
    }
    
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <p>Table Sort</p>
              <Table data={this.props.testStore}  />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
    state =>({
        testStore:state
    })
)(App);
