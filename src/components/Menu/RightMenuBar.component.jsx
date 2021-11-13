import React from "react";
import { Divider, Tree, Layout } from 'antd';
import MicrosoftBlock from './RightMenuBar/MicrosoftBlock.component' 
import NextEventsBlock from "./RightMenuBar/NextEventsBlock.component";
import CalendarBlock from "./RightMenuBar/CalendarBlock.component";

const { Sider } = Layout;
const { DirectoryTree } = Tree;

export default function RightMenuBar({ visible }) {

  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };
  
  const colorFont = 'white'

  return (
    <Sider
      width={'350'}
      height={'100%'}
      style={{ backgroundColor: "white", 
      // backgroundImage: `url(${background2})`, 
      backgroundImage: `url(https://lalupa.press/wp-content/uploads/2020/05/UNI.jpeg)`,
      backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:'center' }}
      className="site-layout-background"
      collapsedWidth={0}
      collapsed = {visible}
    >
      <MicrosoftBlock/>
      <Divider orientation="left" style={{ color: colorFont }}>Navegación</Divider>
      <DirectoryTree
        style={{ background: 'transparent', color: colorFont}}
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData}
      />
      <Divider orientation="left" style={{ color: colorFont }}>Línea de Tiempo</Divider>
      <Divider orientation="left" style={{ color: colorFont }}>Archivos Privados</Divider>
      <Divider orientation="left" style={{ color: colorFont }}>Usuarios en línea</Divider>
      <Divider orientation="left" style={{ color: colorFont }}>Insigneas recientes</Divider>
      <Divider orientation="left" style={{ color: colorFont }}>Calendario</Divider>
      <CalendarBlock/>
      <NextEventsBlock colorFont={colorFont}/>
    </Sider>
  );
}

// Datos de prueba
const treeData = [
  {
    title: 'Area personal',
    key: '0-0',
  },
  {
    title: 'Inicio del sitio',
    key: '0-1',
  },
  {
    title: 'Paginas del sitio',
    key: '0-2',
    children: [
      {
        title: 'Página x',
        key: '0-2-0',
        isLeaf: true,
      },
      {
        title: 'Página y',
        key: '0-2-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'Mis cursos',
    key: '0-3',
    children: [
      {
        title: 'Curso x',
        key: '0-3-0',
        isLeaf: true,
      },
      {
        title: 'Curso y',
        key: '0-3-1',
        isLeaf: true,
      },
    ],
  },
];