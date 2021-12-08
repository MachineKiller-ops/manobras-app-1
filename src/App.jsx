import {
    BrowserRouter as Router, 
    Route,
    Switch,
    Link,    
} from 'react-router-dom';

import Main from './Pages/Main';
import Elabora from './Pages/Elabora';
import Simula from './Pages/Simula';
import ConfiguraSE from './Pages/ConfiguraSE';
import Nav from './Pages/Nav';
import Lista from './Pages/Lista';
import ListaConf from './Pages/ListaConf';
import ListaElab from './Pages/ListaElab';


const App = () =>{



    return(

        <Router>

        <div>
            <Nav />

{/*             Implementar aqui um form com options para escolher a subestação
 */}

            
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/simula" exact component={Lista} />
                <Route path="/simula/:id" component={Simula} />
                <Route path="/elabora" exact component={ListaElab} />
                <Route path="/elabora/:id" component={Elabora} />
                <Route path="/configurase" exact component={ListaConf} />
                <Route path="/configurase/:id" component={ConfiguraSE} />
            </Switch>

        </div>
            
        </Router>

    );
}

export default App;

