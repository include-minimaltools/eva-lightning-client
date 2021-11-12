import { Col, Layout, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom';

import Interface from './components/Interface.container';
import CourseAbout from './views/course/about/CourseAbout.component';
import CourseContainer from './views/course/Course.containter';
import CourseCardContainer from './views/personal/CourseCard.container';


const { Content } = Layout;

export default function Routes() {
  const routes = useRoutes([
    {
      path: '/my', element: <Interface>
        <CourseCardContainer />
      </Interface>
    },
    {
      path: '/course/:section/:id', element: <Interface><CourseContainer/></Interface>
    },
    {
      path: '*', element: <Interface >
        <Content

          style={{
            height: '100%',
            textAlign: 'center',
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '10px',
            padding: '10px'
          }}
        >
          <Col>
            <Row justify='center'>
              <Spin size="large" />
            </Row>
            <Row>
              <h1>In progress</h1>
            </Row>
          </Col>
        </Content>
      </Interface>
    },
  ]);

  return routes;
}
