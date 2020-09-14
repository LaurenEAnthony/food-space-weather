import React from 'react';
import {RestaurantsResponse, NearbyRestaurant} from './RestaurantsInterface';
import RestaurantDisplay from './RestaurantDisplay';


//keyZomato = "85be495d90cb96dd37146770e8cccbce";


export interface RestaurantsProps {
    location: Location; 
}

export interface Location {
    latitude: number;
    longitude: number;
  }
 
export interface RestaurantsState {
    restaurantsInformation: any;
}

 
class Restaurants extends React.Component<RestaurantsProps, RestaurantsState> {

  
    constructor(props: RestaurantsProps) {
        super(props);
        this.state = { restaurantsInformation: [] };
    }

   
    componentDidUpdate(prevProps: RestaurantsProps) {
    if (this.props.location.latitude !== prevProps.location.latitude) {
        let latitude = this.props.location.latitude;
        let longitude = this.props.location.longitude;
        const urlZomato = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`

        // const urlZomato = "https://developers.zomato.com/api/v2.1/geocode?lat=40.1940698&lon=-85.3833703"

        fetch(urlZomato, {
            method: 'GET',
            headers: {
                'user-key': '85be495d90cb96dd37146770e8cccbce'
                    }
        })
        .then(res=>res.json())
        .then((json: RestaurantsResponse)=> {
            console.log(json.nearby_restaurants)
            this.setState({restaurantsInformation:json.nearby_restaurants})
        })
        .catch(() => {
            alert ('Sorry! There are no restaurants near by.');
        })
       }
    }


    render() { 
        return (<div>
            
                <h3 style={{ margin: "10px", alignItems: "center"}}>Restaurants near by:</h3>
            <ul>         
                {this.state.restaurantsInformation.length > 0 ?
                (this.state.restaurantsInformation.map
                ((restaurant: NearbyRestaurant, index: number) => 
                (<RestaurantDisplay  restaurant = {restaurant} key = {index}/>))) :
                (<React.Fragment></React.Fragment>)}  
            </ul>

              </div>);
            }
}
 
export default Restaurants;

{/* <ul key={index}> {restaurant.restaurant.name}</ul> */}

