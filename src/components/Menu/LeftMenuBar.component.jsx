import React, { useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import { UserOutlined, MenuOutlined, HomeOutlined,  } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

export default function LeftMenuBar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <Sider
      width={200}
      height="100%"
      className="site-layout-background"
      collapsed = {isCollapsed}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <div 
          style={{ display:'flex', justifyContent: isCollapsed ? 'center' : 'right', padding:'1rem' }}
          onClick={() => setIsCollapsed(!isCollapsed)}
        ><MenuOutlined /></div>
        <Item key='home' icon={<HomeOutlined/> }><Link to='/'>Inicio</Link></Item>
        <Item key='my' icon={<UserOutlined/>}><Link to='/my'>Area Personal</Link></Item>
        <Item key='events' icon={<UserOutlined/>}><Link to='/events'>Eventos</Link></Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Mis Cursos">
          <Item key="1" icon={<UserOutlined/>}><Link to='/course/about/1'>Curso 1</Link></Item>
          <Item key="2" icon={<UserOutlined/>}><Link to='/course/about/1'>Curso 1</Link></Item>
          <Item key="3" icon={<UserOutlined/>}><Link to='/course/about/1'>Curso 1</Link></Item>
          <Item key="4" icon={<UserOutlined/>}><Link to='/course/about/1'>Curso 1</Link></Item>
        </SubMenu>
        <Item>Somos!</Item>
      </Menu>
    </Sider>
  );
}
