import { Container } from "@material-ui/core";
import * as React from "react";
import "./App.css";
import NASA from "./NASA/NASA";
import Restaurants from "./Restaurants/Restaurants";
import OpenWeather from "./openWeather/openWeather";

export interface AppState {
  latitude: number;
  longitude: number;
}

export interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { latitude: 0, longitude: 0 };
    console.log(this.state);
  }

  componentDidMount() {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      } else {
        console.log("Geolocation not supported by this browser");
      }
    }

    const getPosition = (position: Position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(this.state);
    };
    getLocation();
  }

  render() {
    return (
      <div>
        <h1>FOOD SPACE WEATHER</h1>
        <Container>
          <Restaurants />
          {/* <Restaurants location={this.state}  /> */}
        </Container>
        <Container>
          <NASA />
        </Container>
        <Container>
          <OpenWeather location={this.state} />
        </Container>
      </div>
    );
  }
}

export default App;
