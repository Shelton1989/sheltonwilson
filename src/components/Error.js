import React, {Component} from 'react';
import image from '../img/404.png'

class Error extends Component {
    render(){
        return(
            <div className="error-page">
                <div className="error-wrapper">
                    <div className="picture"><img alt="" src={image}/></div>
                    <h5>This link does not exist. It may have been removed. <a href="./">Go home</a></h5>
                </div>
            </div>
        )
    }
}

export default Error;