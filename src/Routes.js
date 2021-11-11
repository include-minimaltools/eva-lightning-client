import { Layout } from 'antd';
import React from 'react'
import { useRoutes } from 'react-router-dom';

import Interface from './components/Interface.component';

const { Content } = Layout;

export default function Routes() {
  const routes = useRoutes([
    {
      path: '/my', element: <Interface><Content
        style={{
          padding: '0 50px',
          marginTop: 64,
          background: 'red',
          borderRadius: '10px',
          padding: '10px'
        }}
      >
        Holita
      </Content>
      </Interface>
    },
    {
      path: '/', element: <Interface >
        <Content
          style={{
            padding: '0 50px',
            marginTop: 64,
            background: 'red',
            borderRadius: '10px',
            padding: '10px'
          }}
        >
        </Content>
      </Interface>
    },
  ]);

  return routes;
}
