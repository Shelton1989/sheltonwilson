import React, {Component} from 'react';
import image from '../img/abouthead.jpg';

// Components
import Header from './Header';
import Typography from './Typography';
import Footer from './Footer';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

// Props for Typography Component
const heading = `About`
const paragraph = `Well, I started my web development hobby in 2011 
by manipulating Joomla and Wordpress sites while working as a 
construction foreman because my formal education is in Civil 
Engineering. I built sites for friends and family, It was mostly 
with templates and site builders untill I eventually learned the 
concept of mark up languages. Around August in 2013, I learned HTML 
and a bit of CSS. In July 2014, I started work at a web design 
company. For a while I was pumping out bland, static sites for 
company clients before I discovered JavaScript which, admittedly, 
scared the crap out of me. Then, I did some research and found that 
stack overflow rated JavaScript and Python as two of the top ten most 
popular programming languages of 2016 and since Python was rated as 
the easiest and I also wanted to learn Django, I decided to go with it. 
So, I learned the Python programming language basics over a two week binge 
learning session with Codecademy and YouTube videos. I spent another 
week studying the Django documentation and I started writing my first 
web app after that which was an ecommerce site. The site was bland an 
uninteresting but functional, so I decided to spice it up by learning HTML 
and CSS, including SASS in depth. I then learned Javascript basics over 
another two week binge learning session. JavaScript is large and has its 
own eco-system. I learned ReactJS, a bit of VUEJS, Redux and NPM. With all 
this, I am still learning.`
const paragraph2 = `I have formalised my skills on Coursera with a certificate from 
the University of London as well as countless hours of coding on FreeCodeCamp, 
some sites for friends, myself and other clients.`

// Home Page Component
class About extends Component {
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
                      <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="sheltonwlsn"
                        options={{height: 400,}}
                      />
                    </div>
                    <Footer />
                  </div>
                </div>
              </div>
              
            </div>
        )
    }
}
export default About;