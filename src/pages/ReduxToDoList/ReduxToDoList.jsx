import React, { Component } from 'react'
import {Input,Button,List,Typography} from 'antd';
import store from './store/store';
export default class ReduxToDoList extends Component {
  constructor(props){
    super(props)
    this.state=store.getState();
  }
  render() {
    return (
      <div>
        <Input value={this.state.inputValue} placeholder="请输入汉字" style={{margin:"30px",width:"300px"}}/>
        <Button type="primary" style={{margin:"10px"}}>保存</Button>
        <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={this.state.data}
              renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}/>
      </div>
    )
  }
}
