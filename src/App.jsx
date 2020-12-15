import React from 'react';

import './App.css'
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro'
import Comfilhos from './components/Comfilhos'
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Conficional';
import ConficionalComIf from './components/CondicionalComif'

export default (props) => (
    <div className="App">
        <Card titulo=" #06 - Condicional v2">
            <ConficionalComIf numero={10}></ConficionalComIf>
        </Card>

        <Card titulo=" #05 - Condicional v1">
            <Condicional numero={11}></Condicional>
        </Card>

        <Card titulo=" #04 - Repeticao">
            <Repeticao></Repeticao>
        </Card>


    <Card titulo=" #03 - Componente com filhos">
    <Comfilhos>
        <ul>
            <li>Gustavos</li>
            <li>Luane</li>
            <li>Raimunda</li>
            <li>Bias</li>
        </ul>
    </Comfilhos>
    </Card>

    <Card titulo="#02 - Componente com parametros">
        <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo"></ComParametro>
    </Card>

    <Card titulo="#01- Primeiro componente">
        <Primeiro></Primeiro>
    </Card>
</div>
)


