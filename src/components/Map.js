import React, {Component} from 'react';

class Map extends Component {
    render(){
        return(
            <div className="col m12">
                <iframe title="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63745.77421186967!2d28.00933496285281!3d-26.073608169680313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574b0839fe795%3A0x4443ba51b0acaf0d!2sRandburg!5e0!3m2!1sen!2sza!4v1546720296991" frameborder="0" style={{border: 0, width: '100%', height: '450px'}} allowfullscreen=""></iframe>
            </div>
        )
    }
}

export default Map;