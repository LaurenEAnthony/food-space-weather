import * as React from "react";
import { openWeatherResponse, Weather, Main } from "./openWeatherInterface";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
}

class OpenWeather extends React.Component<OpenWeatherProps, OpenWeatherState> {
  constructor(props: OpenWeatherProps) {
    super(props);
    this.state = {
      weatherInfo: [],
      mainInfo: {},
    };
    console.log(this.state);
  }

  componentDidUpdate(prevProps: OpenWeatherProps) {
    if (this.props.location.latitude !== prevProps.location.latitude) {
      let latitude = this.props.location.latitude;
      let longitude = this.props.location.longitude;
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=78dd927150ebf2ee27f26dc466f275d7`;

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
              <TableRow>CURRENT WEATHER:</TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Description:</TableCell>
                <TableCell>{}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Temperature:</TableCell>
                <TableCell>{this.state.mainInfo.temp}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feels Like:</TableCell>
                <TableCell>{this.state.mainInfo.feels_like}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min:</TableCell>
                <TableCell>{this.state.mainInfo.temp_min}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Max:</TableCell>
                <TableCell>{this.state.mainInfo.temp_max}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default OpenWeather;
