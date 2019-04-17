import React, { Component } from 'react';
import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import { Row, Col } from 'antd';
import axios from 'axios';
import thunk from 'redux-thunk';
//本页面采用grid栅格响应式布局
export default class BasicLayout extends Component{
    render(){
        //redux中三大重要部分，reducer、action、state
        const countReducer=function(state={count:1},action){
                    console.log(state,action)
                    switch(action.type){
                        case "COUNT_ADD":
                            return {
                                ...state,count:state.count+1
                            };
                        case "COUNT_REDUCE":
                        return {
                            ...state,count:state.count-1
                        };
                        default:
                            return state;
                    }
        }
        const postReducer=function(state={list:[{title:"Hello"}]} ,action){
            switch(action.type){
                case "LOAD_POSTS":
                   return {
                       ...state ,list:action.payload
                   };
                default:
                  return state;
            }
 
        }
        //通过combineReducers将多个reducer合并
        const rootReducer=combineReducers({
                            counter:countReducer,
                            post:postReducer
        })
        //创建一个store
        // const countStore=createStore(
        //     rootReducer,
        //     compose(applyMiddleware(...[thunk])),
        // )
        const store=createStore(//通过thunk中间件异步派发活动
                            rootReducer,
                            compose(applyMiddleware(...[thunk])),
        )
            //  可以通过createStore提供的dispatch方法派发一个action改变reducer的值
            //  action需要两个参数
            //     1、type 区分对state做的是什么操作
            //     2、payload 传递的参数
            //   countStore.dispatch({
            //       type:"COUNT_ADD",
            //       payload:{}
            //   });
            //   countStore.dispatch({
            //       type:"COUNT_REDUCE",
            //       payload:{}
            //   });
        //console.log(countStore,countStore.getState());
        const fetchData=()=>{
            return axios.get("http://jsonplaceholder.typicode.com/posts")
        }
        store.dispatch(async function(dispatch){
               const res=await fetchData();
               console.log(res);
               dispatch({
                   type:"LOAD_POSTS",
                   payload:res.data
               })
        })
        return(
            <div>
                {/* 头部占比百分百布局 */}
                <Row>
                      <Col style={{backgroundColor:"yellow",height:"100px"}}      sm={24} md={24} lg={24}  xl={24}  xxl={24}>col-6 col-pull-18</Col>
                </Row>
                {/* 内容body部门。两边留白+响应式布局， */}
                <Row>       
                            <Col style={{backgroundColor:"red",height:"800px"}}   sm={0}  md={0}  lg={0}   xl={2}  xxl={4}>col-6 col-pull-18</Col>
                            <Col style={{backgroundColor:"green",height:"800px"}} sm={24} md={24} lg={24}  xl={20} xxl={16}>col-18 col-push-6</Col>
                            <Col style={{backgroundColor:"red",height:"800px"}}   sm={0}  md={0}  lg={0}   xl={2}  xxl={4}>col-6 col-pull-18</Col>
                </Row> 
                <Row>
                      <Col style={{backgroundColor:"pink",height:"60px"}} sm={24}  md={24}  lg={24}   xl={24}  xxl={24}>col-6 col-pull-18</Col>
                </Row>
            </div>
        )
    }


}