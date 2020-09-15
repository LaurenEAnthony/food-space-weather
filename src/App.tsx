import { Container, Divider, Theme } from "@material-ui/core";
import React from "react";
import "./App.css";
import NASA from "./NASA/NASA";
import Restaurants from "./Restaurants/Restaurants";
import OpenWeather from "./openWeather/openWeather";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
      main: "#B69FF8",
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
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   }
// });

export const styles = (theme: Theme) =>
  createStyles ({
    root: {backgroundColor: 'red'}
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
        <div style={{ padding: "5px" }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h3">FOOD SPACE WEATHER</Typography>
            </Toolbar>
          </AppBar>
​
          <Container>
            <Restaurants location={this.state} />
          </Container>
          <Container>
            <NASA />
          </Container>
          <Container>
            <OpenWeather location={this.state} />
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles, { withTheme: true })(App);