import React from 'react';
import { NearbyRestaurant } from './RestaurantsInterface';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';



export interface RestaurantDisplayProps {
    restaurant: NearbyRestaurant,
    key: number;
}


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    title: {
        backgroundColor: '#4E937A',
        padding: "10px",
        textAlign: 'center',
        fontWeight: 'bolder'
      },
    color: {
        backgroundColor: 'cornsilk',
        padding: '7px',
    }
  });



 const RestaurantDisplay: React.SFC<RestaurantDisplayProps> = (props) => {
     const classes = useStyles();
     const preventDefault = (e: { preventDefault: () => any; }) => e.preventDefault();


     return (<div className={classes.root}>
         <Grid container>
         <Grid item xs={12}>
        <h3 className={classes.title}>{props.restaurant.restaurant.name}</h3>
        <ul className={classes.color}><b>Average rating:</b> {props.restaurant.restaurant.user_rating.aggregate_rating}</ul>
        <ul className={classes.color}> <b> Cuisiness: </b> {props.restaurant.restaurant.cuisines}</ul>
        <ul className={classes.color}> <b> Address: </b> {props.restaurant.restaurant.location.address}</ul>
        <ul className={classes.color}>
        <Typography>
        <Link href={props.restaurant.restaurant.menu_url} target="_blank">
        <b> MENU can be checked here! </b>
       </Link>
       </Typography>
       </ul>
        <ul className={classes.color}> <b>Average cost per 2 peopele: </b> ${props.restaurant.restaurant.average_cost_for_two} </ul>

        {/* <Avatar alt=" " src={props.restaurant.restaurant.photos_url} /> */}
        </Grid>
        </Grid> 
        </div>);
 }
  
 export default RestaurantDisplay;