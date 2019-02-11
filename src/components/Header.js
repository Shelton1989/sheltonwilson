import React, {Component} from 'react';

class Header extends Component {
    render(props){
        return(
            <div className="header_image">
                <img alt="" className="headerimage" src={this.props.image}></img>
            </div>
        )
    }
}

export default Header;