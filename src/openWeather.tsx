import * as React from "react";

export interface OpenWeatherProps {
  location: any;
}

export interface OpenWeatherState {
  // latitude: number;
  // longitude: number;
  weatherInfo: any;
}

class OpenWeather extends React.Component<OpenWeatherProps, OpenWeatherState> {
  constructor(props: OpenWeatherProps) {
    super(props);
    this.state = {
      // latitude: props.location.latitude,
      // longitude: props.location.longitude,
      weatherInfo: [],
    };
    console.log(this.state);
  }

  componentDidMount() {
    let latitude = this.props.location.latitude;
    let longitude = this.props.location.latitude;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=78dd927150ebf2ee27f26dc466f275d7`;

    fetch(weatherUrl)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  render() {
    return <div>OPEN WEATHER!</div>;
  }
}

export default OpenWeather;
