import React, { Component } from 'react';
import * as data from './data.json';

const Main = () => {
    const [value, setValue] = React.useState();
    return (
        <div
            style={{
                height: '100vh',
                width: '100%',
                background: 'lightgreen',
                justifyContent: 'center'
            }}
        >
            <select 
                value={value} 
                onChange={e=>setValue(e.currentTarget.value)}
            >
                {data.default.map((item,index) => ( // É necessário acessar default pois ao import para varíavel data é criada uma instância superior denominada default
                    <option
                    key={index}
                    value={item.nome}
                    >
                    {item.nome}
                    </option>
                ))}
            </select>
            <p>
                {value}
            </p>

            

        </div>
    );
}

export default Main;