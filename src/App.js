import React, { Component } from 'react';
import './App.css';
import './App.scss';

/* Components */
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
  state = {
    active: true,
  }
  setActive = this.setActive.bind(this);
  setActive(event){
    let x = event.target.innerHTML
    let y = document.getElementsByClassName('navlink');
    switch(x) {
      case 'HOME':
        for(let i = 0; i < y.length; i++){
          y[i].classList.remove('active');
        }
        event.target.parentElement.classList.add('active');
        break
      case 'ABOUT':
        for(let i = 0; i < y.length; i++){
          y[i].classList.remove('active');
        }
        event.target.parentElement.classList.add('active');
        break
      case 'SKILLSET':
        for(let i = 0; i < y.length; i++){
          y[i].classList.remove('active');
        }
        event.target.parentElement.classList.add('active');
        break
      case 'CONTACT':
        for(let i = 0; i < y.length; i++){
          y[i].classList.remove('active');
        }
        event.target.parentElement.classList.add('active');
        break
      default:
        break
    }
  }
  render() {
    return (
        <div id="App" className="App">
          <Navbar 
            setActive={this.setActive}
          />
          <Footer />
        </div>
    );
  }
}

export default App;
