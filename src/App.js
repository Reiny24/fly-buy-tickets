import './styles/style.css'

import Sidebar from './Sidebar';
import Filters from './Filters';
import Info from './Info';
import Sales from './Sales';
import Footer from './Footer';
import Compare from './Compare';
import Login from './Login';
import Places from './Places';
import Pay from './Pay';
import About from './About';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
        <div className="App">
            <Sidebar></Sidebar>

            <Switch>
                <Route exact path='/fly-buy-tickets'>
                    <div className='main background1'>
                        <Filters></Filters>
                        <Info></Info>
                        <Sales></Sales>
                    </div>
                </Route>

                <Route exact path='/compare'>
                    <div className='main background1'>
                        <Compare></Compare>
                    </div>
                </Route>

                <Route exact path='/registration'>
                    <div className='main background2'>
                        <Login></Login>
                    </div>
                </Route>

                <Route exact path='/places'>
                    <div className="main background3">
                        <Places></Places>
                    </div>
                </Route>

                <Route exact path={'/pay'}>
                    <div className="main background2">
                        <Pay></Pay>
                    </div>
                </Route>

                <Route exact path={'/about'}>
                    <div className="main background4">
                        <About></About>
                    </div>
                </Route>
            </Switch>
            
            <Footer></Footer>
        </div>
    </Router>
  );
}

export default App;
