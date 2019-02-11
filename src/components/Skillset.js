import React, {Component} from 'react';
import image from '../img/skillsethead.jpg';

// Card images
import html from '../img/HTML5.png';
import css from '../img/CSS.png';
import js from '../img/JS.png';
import python from '../img/PYTHON.png';
import sass from '../img/SASS.png';
import npm from '../img/NPM.png';
import git from '../img/GIT.png';
import django from '../img/DJANGO.png';
import react from '../img/REACT.png';
import redux from '../img/REDUX.png';
import vscode from '../img/VSCODE.png';
import adobe from '../img/ADOBECC.png';

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
const CSSTitle = `CSS3`;
const CSSContent = `Relative years experience: 5+`
const JSTitle = `JavaScript`;
const JSContent = `Relative years experience: 3+`
const PYTHONTitle = `Python`;
const PYTHONContent = `Relative years experience: 2+`
const SASSTitle = `SASS`;
const SASSContent = `Relative years experience: 1+`
const NPMTitle = `NPM`;
const NPMContent = `Relative years experience: 1+`
const GITTitle = `GIT`;
const GITContent = `Relative years experience: 1+`
const DJANGOTitle = `Django`;
const DJANGOContent = `Relative years experience: 2+`
const REACTTitle = `React`;
const REACTContent = `Relative years experience: 1+`
const REDUXTitle = `Redux`;
const REDUXContent = `Relative years experience: 1-`
const VSCODETitle = `VS Code`;
const VSCODEContent = `Relative years experience: 1+`
const ADOBETitle = `Adobe CC`;
const ADOBEContent = `Relative years experience: 7+`

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
                      image={css}
                      title={CSSTitle}
                      content={CSSContent}
                    />
                    <Card 
                      image={js}
                      title={JSTitle}
                      content={JSContent}
                    />
                    <Card 
                      image={python}
                      title={PYTHONTitle}
                      content={PYTHONContent}
                    />
                  </div>
                </div>
              </div>
              <div className="row full-width">
                <div className="container">
                  <div>
                    <Card 
                      image={sass}
                      title={SASSTitle}
                      content={SASSContent}
                    />
                    <Card 
                      image={npm}
                      title={NPMTitle}
                      content={NPMContent}
                    />
                    <Card 
                      image={git}
                      title={GITTitle}
                      content={GITContent}
                    />
                    <Card 
                      image={django}
                      title={DJANGOTitle}
                      content={DJANGOContent}
                    />
                  </div>
                </div>
              </div>
              <div className="row full-width">
                <div className="container">
                  <div>
                    <Card 
                      image={react}
                      title={REACTTitle}
                      content={REACTContent}
                    />
                    <Card 
                      image={redux}
                      title={REDUXTitle}
                      content={REDUXContent}
                    />
                    <Card 
                      image={vscode}
                      title={VSCODETitle}
                      content={VSCODEContent}
                    />
                    <Card 
                      image={adobe}
                      title={ADOBETitle}
                      content={ADOBEContent}
                    />
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Skillset;