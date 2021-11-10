import React from 'react';
import { Layout, Breadcrumb, Button, Col, Row } from 'antd';

import './App.css';

import Interface from './components/Interface.component';

const { Content, Footer } = Layout;

function App() {
  return (
    <Interface>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 10,
          minHeight: 280,
          backgroundColor: 'white',
          borderRadius: '10px'
        }}
      >
      </Content>
    </Interface>
  );
}

export default App;
