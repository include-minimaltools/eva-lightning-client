import React from 'react';
import { Divider, Tree, Layout } from 'antd';

const colorFont = 'white'

export default function NextEventsBlock() {
    return (
        <div>
            <Divider orientation="left" style={{ color: colorFont }}>≡ Próximos eventos</Divider>

            <h1 style={{color:'white', position: 'relative', left:50}}>No hay eventos proximos</h1>
        </div>
    )
}
