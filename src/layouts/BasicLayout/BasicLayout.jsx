import React, { Component } from 'react';
import { createStore,combineReducers,compose,applyMiddleware } from 'redux';
import { Row, Col ,Button} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import thunk from 'redux-thunk';
import BasicRoutes from './BasicRoutes';
//本页面采用grid栅格响应式布局
export default class BasicLayout extends Component{
    render(){
        //redux中三大重要部分，reducer、action、state
        const countReducer=function(state={count:1},action){
                   // console.log(state,action)
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
               //console.log(res);
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
                <Row style={{position:"relative"}}>
                            <Col style={{backgroundColor:"red",height:"800px"}}   sm={0}  md={0}  lg={0}   xl={2}  xxl={4}>
                              <Link to={"/redux/study"}><Button type="primary">Redux学习</Button></Link>
                              <br/>
                              <Link to={"/react/redux/study"}><Button type="primary">React-Redux</Button></Link>
                              <br/>
                              <Link to={"/redux/todo/list"}><Button type="primary">ToDoList</Button></Link>
                              <br/>
                              <Link to={"/react/map"}><Button type="primary">ReactMap</Button></Link>
                              <br/>
                              <Link to={"/react/loop"}><Button type="primary">ReactLoop</Button></Link>
                              <br/>
                              <Link to={"/react/excel"}><Button type="primary">ReactExcel</Button></Link>
                              <br/>
                              <Link to={"/china/water"}><Button type="primary">ChinaWater</Button></Link>
                              <br/>
                              <Link to={"/rich/editor"}><Button type="primary">富文本</Button></Link>
                              <br/>
                              <Link to={"/braft/editor"}><Button type="primary">Braft富文本</Button></Link>
                            </Col>
                            <Col style={{backgroundColor:"#fff",height:"800px"}} sm={24} md={24} lg={24}  xl={20} xxl={16}>
                                        <BasicRoutes/>
                            </Col>
                            <Col style={{backgroundColor:"red",height:"800px"}}   sm={0}  md={0}  lg={0}   xl={2}  xxl={4}>col-6 col-pull-18</Col>
                </Row>
                <Row>
                      <Col style={{backgroundColor:"pink",height:"60px"}} sm={24}  md={24}  lg={24}   xl={24}  xxl={24}>col-6 col-pull-18</Col>
                </Row>
            </div>
        )
    }


}
