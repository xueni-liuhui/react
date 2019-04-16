import React, { Component } from 'react';
import { Layout } from 'antd';
const {Header, Footer, Sider, Content} = Layout;

{/*本页面采用layout布局*/}
export default class UserLayout extends Component {
  render() {
    return (
      <div>
        <Layout>
                        <Header style={{backgroundColor:"red"}}>Header</Header>
                        <Layout>
                            <Sider style={{backgroundColor:"yellow"}}>Sider</Sider>
                            <Content style={{backgroundColor:"green"}}>Content</Content>
                        </Layout>
                        <Footer style={{backgroundColor:"pink"}}>Footer</Footer>
        </Layout>
      </div>
    )
  }
}
