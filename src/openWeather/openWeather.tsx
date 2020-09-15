import * as React from "react";
import { openWeatherResponse, Weather, Main } from "./openWeatherInterface";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Switch } from "@material-ui/core";

export interface OpenWeatherProps {
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface OpenWeatherState {
  weatherInfo: Weather[];
  mainInfo: Main;
  celsius: boolean;
}

class OpenWeather extends React.Component<OpenWeatherProps, OpenWeatherState> {
  constructor(props: OpenWeatherProps) {
    super(props);
    this.state = {
      weatherInfo: [],
      mainInfo: {},
      celsius: true,
    };
    console.log(this.state);
  }

  componentDidUpdate(prevProps: OpenWeatherProps) {
    if (this.props.location.latitude !== prevProps.location.latitude) {
      this.fetchChange();
    }
  }

  toggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (this.state.celsius) {
      this.setState({ celsius: false }, this.fetchChange);
    } else {
      this.setState({ celsius: true }, this.fetchChange);
    }
    console.log(this.state.celsius);
  };

  fetchChange() {
    let latitude = this.props.location.latitude;
    let longitude = this.props.location.longitude;
    if (this.state.celsius == true) {
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=78dd927150ebf2ee27f26dc466f275d7`;
      fetch(weatherUrl)
        .then((res) => res.json())
        .then((json: openWeatherResponse) => {
          console.log(json);
          this.setState({ weatherInfo: json.weather, mainInfo: json.main });
        });
    } else {
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=78dd927150ebf2ee27f26dc466f275d7`;
      fetch(weatherUrl)
        .then((res) => res.json())
        .then((json: openWeatherResponse) => {
          console.log(json);
          this.setState({ weatherInfo: json.weather, mainInfo: json.main });
        });
    }
  }

  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3>CURRENT WEATHER:</h3>
                </TableCell>
                <TableCell>
                  Fahrenheit{" "}
                  <Switch
                    checked={this.state.celsius}
                    onChange={this.toggle}
                    name="celsius"
                    color="default"
                  />{" "}
                  Celsius
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Description:</TableCell>
                {this.state.weatherInfo.length > 0 ? (
                  <TableCell>
                    {this.state.weatherInfo[0].main +
                      ", " +
                      this.state.weatherInfo[0].description}
                  </TableCell>
                ) : (
                  <TableCell>{}</TableCell>
                )}
              </TableRow>
              <TableRow>
                <TableCell>Temperature:</TableCell>
                <TableCell>{this.state.mainInfo.temp}&deg;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feels Like:</TableCell>
                <TableCell>{this.state.mainInfo.feels_like}&deg;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min:</TableCell>
                <TableCell>{this.state.mainInfo.temp_min}&deg;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Max:</TableCell>
                <TableCell>{this.state.mainInfo.temp_max}&deg;</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default OpenWeather;
