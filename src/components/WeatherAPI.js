import React, {Component} from 'react';

// Variables
const apiKey = '558723668267d7a6a5e72566b75d0998';
const country_code = 'ZA';
const units='metric';

// WeatherApp Components

class WeatherApp extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        date: undefined,
        icon: undefined,
        error: undefined,
      }
    
      componentDidMount = async () => {
        const city = 'Johannesburg';
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&units=${units}&appid=${apiKey}`);
        const data = await api_call.json();
    
        if (city && !data.message) {
          let today = new Date();
          let icon = data.weather[0].icon;
          let iconURL = `http://openweathermap.org/img/w/${icon}.png`
          this.setState({
            temperature: Math.floor(data.main.temp),
            city: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: iconURL,
            date: today.toDateString(),
            error: '',
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            humidity: undefined,
            description: undefined,
            icon: undefined,
            error: 'Please enter your city',
          });
        }
      }
    
      getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&units=${units}&appid=${apiKey}`);
        const data = await api_call.json();
    
        if (city && !data.message) {
          let today = new Date();
          let icon = data.weather[0].icon;
          let iconURL = `http://openweathermap.org/img/w/${icon}.png`
          this.setState({
            temperature: Math.floor(data.main.temp),
            city: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: iconURL,
            date: today.toDateString(),
            error: '',
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            humidity: undefined,
            description: undefined,
            icon: undefined,
            error: 'Please enter your city',
          });
        }
      }

      render(){
          return(
              <div className="weather-wrapper">
                  <Weatherform 
                    getWeather={this.getWeather}
                  />
                  <Weather 
                    date={this.state.date}
                    temperature={this.state.temperature}
                    city={this.state.city}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
              </div>
          )
      }
}

function Weather(props){ 
    return(
        <div>
            {props.icon ? <div className="weather-icon"><img className="weather-image" src={props.icon} alt=""/></div>:<div></div>}
            <p>Today is {props.date}, {props.city} is a 
                {(props.temperature <= 12)?<span> cold </span>:(props.temperature <= 18)?<span> cool </span>:(props.temperature <= 25)?<span> warm </span>:(props.temperature >= 26)?<span> hot </span>:<span></span>}
                <strong>{props.temperature}&deg;C</strong> with predicted <strong>{props.description}</strong> and <strong>{props.humidity}%</strong> humidity.
            </p>
            {props.error ? <p>{props.error}</p>:<p></p>}
        </div>
    )
}
function Weatherform(props){
    return(
        <div>
            <form onSubmit={props.getWeather}>
                <input className="input" name="city" type="text" placeholder="Check Another City"></input>
                <button className="button" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default WeatherApp;