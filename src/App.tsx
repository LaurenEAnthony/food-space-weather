import { Container, Divider } from "@material-ui/core";
import React from "react";
import "./App.css";
import NASA from "./NASA/NASA";
import Restaurants from './Restaurants/Restaurants'
import OpenWeather from "./openWeather/openWeather";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";


// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   }
// });

const styles = theme: any => ({
  root: {
    backgroundColor: "red"
  }
});

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
      <div style={{padding: "5px"}}>
    
    <AppBar position="static">
      <Toolbar>  
      <Typography variant="h3">
        FOOD SPACE WEATHER
     </Typography>
      </Toolbar> 
    </AppBar>

        <Container>
          <Restaurants location={this.state}  />    
        </Container>
        <Container>
          <NASA/>
        </Container>
        <Container>
          <OpenWeather location={this.state} />
        </Container>
      </div>
    );
  }

}

export default withStyles(styles, { withTheme: true })(App);
