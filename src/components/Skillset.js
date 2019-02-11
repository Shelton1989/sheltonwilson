import React, {Component} from 'react';
import image from '../img/skillsethead.jpg';

// Card images
import html from '../img/HTML5.png';

// Components
import Header from './Header';
import Typography from './Typography';
import Card from './Card';

// Props for Typography Component
const heading = `Skillset`
const paragraph = `I always try to keep my skillset up to date and in line with modern technologies. 
Below is a list of programming languages, frameworks, technologies and software I've used during my 
career.`
const paragraph2 = `Please click through the cards below to see more information like years experience 
with each technology.`

// Props for Card component
const HTMLTitle = `HTML5`;
const HTMLContent = `Relative years experience: 5+`

// Home Page Component
class Skillset extends Component {
    render(){
        return(
            <div id="home">
              <Header 
                image={image} 
              />
              <div className="row full-width">
                <div className="container flex-container">
                  <div>
                    <Typography
                      heading={heading}
                      paragraph={paragraph}
                      paragraph2={paragraph2}
                    />
                  </div>
                </div>
              </div>
              <div className="row full-width">
                <div className="container">
                  <div>
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                  </div>
                </div>
              </div>
              <div className="row full-width">
                <div className="container">
                  <div>
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                  </div>
                </div>
              </div>
              <div className="row full-width">
                <div className="container">
                  <div>
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                    <Card 
                      image={html}
                      title={HTMLTitle}
                      content={HTMLContent}
                    />
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Skillset;