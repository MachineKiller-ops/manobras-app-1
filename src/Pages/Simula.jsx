import '../index.css';
import React, { Component } from 'react'

export default class Simula extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectValue: "Betim4"
        };
    
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
      }
      handleDropdownChange(e) {
        this.setState({ selectValue: e.target.value });
      }

    render() {
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
            
            <img src={`../img/${this.state.selectValue}.png`} className="diagrama"/>
     
            <p>Subtitulo aqui</p>
            <p>Cemig Distribuição</p>
                
            </div>
        )
    }
}


