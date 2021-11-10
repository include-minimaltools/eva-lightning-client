import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';

import '../App.css';

import LeftMenuBar from './Menu/LeftMenuBar.component';
import RightMenuBar from './Menu/RightMenuBar.component';
import TopMenuBar from './Menu/TopMenuBar.component';

const { Footer } = Layout;

function Interface({ children }) {  
  return (
    
    <Layout style={{height:'100%'}}>
      <TopMenuBar />
      <Layout>
        <LeftMenuBar/>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {children}
          <Footer style={{ textAlign: 'center' }}>Eva Lightning ©2021 Created by Minimal Tools Team</Footer>
        </Layout>
        <RightMenuBar />
      </Layout>
    </Layout>
    
  );
}

export default Interface;
