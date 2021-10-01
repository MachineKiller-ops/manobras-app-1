import '../index.css';
import { useState } from 'react';

const Simula = () => {
    const imagem = 'Atalaia';
    const [diagram,setDiagram] = useState('Betim4');



    return (
        <div
            style={{
                height: '100vh',
                width: '100%',
                background: 'lightyellow',
                /* display: 'flex', */
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                fontWeight: 'bold'
            }}
        >
            <p>Simula Subestação</p>
            
            <img src={`../img/${diagram}.png`} className="diagrama"/>
     
            <p>Subtitulo aqui</p>
            <p>Cemig Distribuição</p>

        </div>
    );
}

export default Simula;