import React, {Component} from 'react';

class Navbar extends Component {
    render(props){
        return(
            <div id="Navbar">
                <div className="container">
                    <div className="logo">
                        <a href="./index.html"><span className="logo-placeholder">Logo</span></a>
                    </div>
                    <div className="nav-wrapper">
                        <ul>
                            <li className="navlink active"><a onClick={this.props.setActive} href="#">HOME</a></li>
                            <li className="navlink"><a onClick={this.props.setActive} href="#">ABOUT</a></li>
                            <li className="navlink"><a onClick={this.props.setActive} href="#">SKILLSET</a></li>
                            <li className="navlink"><a onClick={this.props.setActive} href="#">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;