import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import M from 'materialize-css';
import * as emailjs from 'emailjs-com';

// Styles
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import './App.scss';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skillset from './components/Skillset';
import Contact from './components/Contact';
import Error from './components/Error';

class App extends Component {
  componentDidMount(){
    M.AutoInit();
    emailjs.init("user_PHzhXFbNTsbtIPNO0QHxX");
  }
  render() {
    return (
        <div id="App" className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Skillset" component={Skillset} />
                <Route path="/Contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
