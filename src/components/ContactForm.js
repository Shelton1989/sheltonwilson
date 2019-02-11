import React, {Component} from 'react';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        let templateParameters = {
            name: document.getElementById('first_name').value,
            lastName: document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        }
        emailjs.send('sendgrid', 'template_wC3FlAvk', templateParameters)
        .then(function(response){
        console.log('success', response);
        }, function(error){
        console.log('false', error);
        });
    }
    render(){
        return(
            <Form 
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

class Form extends Component {
    render(props){
        return(
            <form className="col m12" onSubmit={this.props.handleSubmit}>
                <div className="row full-width">
                    <div className="input-field col m6 relative">
                        <label for="first_name">First Name<input className="validate" type="text" name="first_name" id="first_name"/></label>
                    </div>
                    <div className="input-field col m6 relative">
                        <label for="last_name">Last Name<input className="validate" type="text" name="last_name" id="last_name"/></label>
                    </div>
                </div>
                <div className="row full-width">
                    <div className="input-field col m12 relative">
                        <label for="email">Email<input className="validate" type="text" name="email" id="email"/></label>
                    </div>
                </div>
                <div className="row full-width">
                    <div className="input-field col m12 relative">
                        <label for="message">Message<input className="materialize-textarea" type="text" name="message" id="message"/></label>
                    </div>
                </div>
                <button className="button">SUBMIT</button>
            </form>
        )
    }
}

export default ContactForm;