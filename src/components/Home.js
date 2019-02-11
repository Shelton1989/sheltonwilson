import React, {Component} from 'react';
import image from '../img/homehead.jpg';

// Components
import Header from './Header';
import Typography from './Typography';
import WeatherApp from './WeatherAPI';
import Footer from './Footer'

// Props for Typography Component
const heading = `Welcome`
const heading3 = `Today`
const paragraph = `Welcome to my site. This is where I try out new technologies 
and techniques which means this site will be ever changing. There will be long 
periods where there is no change and periods where the site is completely down. 
Currently, this site is running React 16 and styled with the SASS language.`
const paragraph2 = `Please click through the links in the Navbar to get more information.`

// Home Page Component
class Home extends Component {
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
                  <div className=" flex-1">
                    <div className="card">
                      <Typography
                        heading3={heading3}
                      />
                      <WeatherApp />
                    </div>
                    <Footer />
                  </div>
                </div>
              </div>
              
            </div>
        )
    }
}

export default Home;