import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const siteLayoutContent = {
  background: '#fff',
  padding: '24px',
  height: '280px',
}

// #components-layout-demo-top .logo {
//   width: 120px;
//   height: 31px;
//   background: rgba(255, 255, 255, 0.2);
//   margin: 16px 24px 16px 0;
//   float: left;
// }


export default class App extends Component {
  render() {
    return (
      <div>

<Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{siteLayoutContent}}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>



     

      </div>
    );
  }

}

