import React, {Component} from 'react';
import image from '../img/contacthead.jpg';

// Components
import Header from './Header';
import Typography from './Typography';
import ContactForm from './ContactForm';
import Map from './Map';

// Props for Typography Component
const heading = `Contact`
const paragraph = `Please get in touch.`
const paragraph2 = `076 783 4918`
const paragraph3 = `081 767 0472`
const paragraph4 = `sheltonwlsn@gmail.com`
const paragraph5 = `Johannesburg|Gauteng`

// Home Page Component
class Contact extends Component {
    
    render(){
        return(
            <div id="home">
              <Header 
                image={image} 
              />
              <div className="row full-width">
                <div className="container flex-container">
                  <div className="flex-2">
                    <Typography
                      heading={heading}
                    />
                    <ContactForm />
                  </div>
                  <div className=" flex-1">
                      <Typography
                        paragraph={paragraph}
                        paragraph2={paragraph2}
                        paragraph3={paragraph3}
                        paragraph4={paragraph4}
                        paragraph5={paragraph5}
                      />
                  </div>
                </div>
              </div>
              <div className="row full-width">
                <div className="container">
                    <Map />
                </div>
              </div>
            </div>
        )
    }
}
export default Contact;