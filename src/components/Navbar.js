import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
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
    render(){
        return(
            <NavMenu 
                setActive={this.setActive}
            />
        )
    }
}

class NavMenu extends Component {
    render(props){
        return(
            <div id="Navbar">
                <div className="container">
                    <div className="logo">
                        <a href="./index.html"><span className="logo-placeholder">Logo</span></a>
                    </div>
                    <div className="nav-wrapper">
                        <ul>
                            <li className="navlink active"><Link onClick={this.props.setActive} to="/">HOME</Link></li>
                            <li className="navlink"><Link onClick={this.props.setActive} to="/about">ABOUT</Link></li>
                            <li className="navlink"><Link onClick={this.props.setActive} to="/skillset">SKILLSET</Link></li>
                            <li className="navlink"><Link onClick={this.props.setActive} to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;