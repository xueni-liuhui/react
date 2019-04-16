import React, { Component } from 'react';
import { createStore } from 'redux'
import { Row, Col } from 'antd';
{/*本页面采用grid栅格响应式布局*/}
export default class BasicLayout extends Component{
    
    render(){
        const countReducer=function(state={count:1},action){
                    console.log(state,action)
                    switch(action.type){
                        case "COUNT_ADD":
                             return {
                                ...state,count:state.count+1
                             }
                    }
        }
        const countStore=createStore(countReducer);
              countStore.dispatch({
                  type:"COUNT_ADD",
                  payload:{}
              })
        console.log(countStore,countStore.getState())
        return(
            <div>
                {/* 头部占比百分百布局 */}
                <Row>
                      <Col style={{backgroundColor:"yellow",height:"100px"}} sm={24}  md={24}  lg={24}   xl={24}  xxl={24}>col-6 col-pull-18</Col>
                </Row>
                {/* 内容body部门。两边留白+响应式布局， */}
                <Row>       
                            <Col style={{backgroundColor:"red",height:"800px"}} sm={0}  md={0}  lg={0}   xl={2}  xxl={4}>col-6 col-pull-18</Col>
                            <Col style={{backgroundColor:"green",height:"800px"}} sm={24} md={24} lg={24}  xl={20} xxl={16}>col-18 col-push-6</Col>
                            <Col style={{backgroundColor:"red",height:"800px"}}sm={0}  md={0}  lg={0}   xl={2}  xxl={4}>col-6 col-pull-18</Col>
                </Row> 
                <Row>
                      <Col style={{backgroundColor:"pink",height:"60px"}} sm={24}  md={24}  lg={24}   xl={24}  xxl={24}>col-6 col-pull-18</Col>
                </Row>
            </div>
        )
    }


}