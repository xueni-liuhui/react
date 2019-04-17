import React, {Component} from 'react';
import store from '../../store';
import {countAddAction} from '../../actions/counter_action';
import fetchDataAction from '../../actions/fetchdata_action';
const result= store.dispatch(countAddAction);
const res=store.dispatch(fetchDataAction);
console.log(result,res)
export default class ReduxStudy extends Component {
  render() {
    return (
      <div>
                  <h1>Hello Redux</h1>
      </div>
    );
  }
}

