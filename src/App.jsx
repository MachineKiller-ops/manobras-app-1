
import './App.css';

import {
    BrowserRouter as Router, 
    Route,
    Switch,
    Link,    
} from 'react-router-dom';

import Main from './Pages/Main';
import Simula from './Pages/Simula';
import ConfiguraSE from './Pages/ConfiguraSE';

const App = () =>{



    return(

        <Router>

        <div style={{
                background: 'green',
                color: 'white',
                textAlign: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold'
            }} className='App'>
            <h1>Cemig Distribuição</h1>

            <Link to='/'><p>Home</p></Link>
            <Link to='/simula'>Simula</Link>
            <Link to='/configurase'><p>Configura SE</p></Link>

{/*             Implementar aqui um form com options para escolher a subestação
 */}

            
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/simula" component={Simula} />
                <Route path="/configurase" component={ConfiguraSE} />
            </Switch>

        </div>
            
        </Router>

    );
}

export default App;

