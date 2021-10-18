import '../index.css';
import React, { Component } from 'react';


function Disjuntor (props) {
   
    return (
      <button 
        className="disjuntor" 
       style={{
        position: 'absolute',
        left: `${props.x}px`, // cria figura do disjuntor na posição passada pela props
        top: `${props.y}px`,
       }}
      >
          {props.index}
      </button>
    );
}

class Diagrama extends React.Component {
  
    renderDisjuntor(x,y,index) {
      return <Disjuntor 
                x={x} // envia coordenadas x e y para renderizar disjuntor
                y={y}
                index={index}
              />;
    }
  
    render() {
        const mapa = JSON.parse(this.props.v); // (des)converte de JSON para objeto
        return(
            mapa.map((dis,index)=>{ // cria loop em que se lê todos os disjuntores chamando a função de renderização para cada um deles
                return (
                    <div>
                        {this.renderDisjuntor(dis.pos[0],dis.pos[1],index)}
                    </div>
                    
                );
            })
        );
    }
  }


export default class Simula extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "Betim4",
          x: 500,
          mapa: [  // mapa de disjuntores em pixels de distancia
              {pos: [30,32]},
              {pos: [241,142]},
              {pos: [171,272]},
              {pos: [391,392]}
        ]
        };
    
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
      }
      handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

    render() {
        const mapa = this.state.mapa;
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
            <div>
                <div>
                    <div>
                        <select id="dropdown" onChange={this.handleDropdownChange}>
                        <option value="Betim4">Betim 4</option>
                        <option value="Cicontagem">CI Contagem</option>
                        <option value="Centro2">Centro 2</option>
                        </select>
                    </div>
                </div>
            </div>

            <p>Simula Subestação</p>
            
                <div style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL
                        + "/img/" + this.state.selectValue + ".png"})`, //Acessa imagem na pasta public
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "left",
                    height: '300%',
                    alignSelf: 'center',
                    position: 'relative'
                }}>
                    <h1>Hello</h1>
                    <p>{mapa[1].pos[1]}</p>
                    <Diagrama 
                        v={JSON.stringify(mapa)} //Necessário conversão para JSON pois objetos não podem ser passados em props
                    />

                </div>

           
            
            
     
            <p>Subtitulo aqui</p>
            <p>Cemig Distribuição</p>
                
            </div>
        )
    }
}


