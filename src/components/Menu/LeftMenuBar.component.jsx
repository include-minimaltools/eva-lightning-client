import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function LeftMenuBar() {
  return (
    <Sider width={200} height='100%' className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item>
          <Link to="/">Inicio</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/my'>Area Personal</Link>
        </Menu.Item>
        <Menu.Item>Eventos</Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Mis Cursos">
          <Menu.Item key="1">Curso 1</Menu.Item>
          <Menu.Item key="2">Curso 2</Menu.Item>
          <Menu.Item key="3">Curso 3</Menu.Item>
          <Menu.Item key="4">Curso 4</Menu.Item>
        </SubMenu>
        <Menu.Item>Somos!</Menu.Item>
      </Menu>
    </Sider>
  );
}
