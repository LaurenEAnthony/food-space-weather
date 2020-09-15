import { Container, Divider, Theme } from "@material-ui/core";
import React from "react";
import "./App.css";
import NASA from "./NASA/NASA";
import Restaurants from "./Restaurants/Restaurants";
import OpenWeather from "./openWeather/openWeather";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from "@material-ui/core";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#604439",
    },
    secondary: {
      main: "#fff8dc",
    },
    error: {
      main: "#111344",
    },
    info: {
      main: "#dae0f2",
    },
    warning: {
      main: "#efe9e7",
    },
  },
});

export const styles = (theme: Theme) =>
  createStyles ({
    // root: {backgroundColor: 'red'}
    root: {
      flexGrow: 1,
    },
  });
export interface AppState {
  latitude: number;
  longitude: number;
}
export interface AppProps {
  classes: any;
}
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
    const { classes } = this.props;
    return (

      <MuiThemeProvider theme={theme}>
        <div style={{ padding: "1px"}}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h5" style={{ padding: "1px", color: "#4E937A"}}><b>FOOD SPACE WEATHER</b></Typography>
            </Toolbar>
          </AppBar>

      <Grid container spacing={3} style={{ padding: "1px"}}>
​
          <Grid item xs={5}>
            <h1 style={{ margin: "10px", alignContent: "center", paddingLeft: "50px", color: 'LemonChiffon' }}><b>Hungry? Check this out!</b></h1>
            <Restaurants location={this.state} />
          </Grid>

          <Grid item xs={4}>
            <h1 style={{ margin: "10px", alignContent: "center", paddingLeft: "50px", color: 'LemonChiffon' }}><b>What should I wear?</b></h1>
            <OpenWeather location={this.state} />

            <h1 style={{ margin: "10px", alignContent: "center", paddingLeft: "50px", color: 'LemonChiffon' }}><b>Where am I?</b></h1>
            <NASA location={this.state}/>
          </Grid>

          {/* <Grid item xs={2}> 
            <NASA />
          </Grid> */}

          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles, { withTheme: true })(App);