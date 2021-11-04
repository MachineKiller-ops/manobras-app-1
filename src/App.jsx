
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
import Nav from './Pages/Nav';


const App = () =>{



    return(

        <Router>

        <div>
            <Nav />

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

