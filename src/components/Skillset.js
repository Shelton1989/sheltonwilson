import React, {Component} from 'react';
import image from '../img/skillsethead.jpg';

// Components
import Header from './Header';
import Typography from './Typography';

// Props for Typography Component
const heading = `Skillset`
const paragraph = `I `
const paragraph2 = `Please click through the links in the Navbar to get more information.`

// Home Page Component
class Skillset extends Component {
    render(){
        return(
            <div id="home">
              <Header 
                image={image} 
              />
              <div className="row">
                <div className="container flex-container">
                  <div className="flex-2">
                    <Typography
                      heading={heading}
                      paragraph={paragraph}
                      paragraph2={paragraph2}
                    />
                  </div>
                </div>
              </div>
              
            </div>
        )
    }
}

export default Skillset;