import '../index.css';
import React, { Component } from 'react';
import * as data from './data.json';

function Disjuntor (props) {
    return (
      <button 
        className="disjuntor" 
        style={{
            position: 'absolute',
            left: `${props.x}px`, // cria figura do disjuntor na posição passada pela props
            top: `${props.y}px`,
            backgroundColor: props.closed ? 'red' : 'green' // a cor é definida pelo estado do disjuntor
        }}
        onClick={()=>props.onClick()}
      >
          {props.index}
      </button>
    );
}

class Diagrama extends React.Component {

  
    renderDisjuntor(x,y,closed,index) {
        
      return <Disjuntor 
                x={x} // envia coordenadas x e y para renderizar disjuntor
                y={y}
                closed={closed}
                index={index}
                onClick={()=>this.props.onClick(index)}
              />;
    }
  
    render() {
        
        const mapa = JSON.parse(this.props.v); // (des)converte de JSON para objeto
        console.log(this.props.v);
        
        return(
            
            mapa.map((dis,index)=>{ // cria loop em que se lê todos os disjuntores chamando a função de renderização para cada um deles
                return (
                    <div key={index}>
                        {this.renderDisjuntor(dis[0],dis[1],dis[2],index)}
                    </div>
                    
                );
            })
        );
        
    }
  }


export default class Simula extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "Betim4",
          x: 500,
          
          mapa: [...data[0].mapa]
        };
    
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        console.log(this.state.mapa[i][0]+','+this.state.mapa[i][1]);
        this.setState({ x : 400});
        // mudar o estado do disjuntor 'closed' de 0 para 1 vice-versa
        console.log(this.state.x);
    }

    handleDropdownChange(e) {
       this.setState({ selectValue: e.target.value });
    }

  

    render() {

        const mapa = this.state.mapa;

        //const word = mapa[1][1];
        //console.log(word); // output 'testing'
        //const data = JSON.parse(myJson)
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
                    <p>{mapa[1][1]}</p>
                    <Diagrama 
                        v={JSON.stringify(mapa)} //Necessário conversão para JSON pois objetos não podem ser passados em props
                        onClick={i=>{this.handleClick(i)}}
                    />

                </div>

           
            
            
     
            <p>Subtitulo aqui</p>
            <p>Cemig Distribuição</p>
                
            </div>
        )
    }
}


