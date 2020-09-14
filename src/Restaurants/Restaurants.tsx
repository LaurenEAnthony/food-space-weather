import React from 'react';
import {RestaurantsResponse, NearbyRestaurant} from './RestaurantsInterface';


//keyZomato = "85be495d90cb96dd37146770e8cccbce";


export interface RestaurantsProps {
    // location: any
    
}
 
export interface RestaurantsState {
    restaurantsInformation: any
}
 
class Restaurants extends React.Component<RestaurantsProps, RestaurantsState> {

  
    constructor(props: RestaurantsProps) {
        super(props);
        this.state = { restaurantsInformation: [] };
    }

   
    componentDidMount() {
        // let latitude = this.props.location.latitude;
        // let longitude = this.props.location.latitude;
        // const urlZomato = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longtitude}`


        const urlZomato = "https://developers.zomato.com/api/v2.1/geocode?lat=40.1940698&lon=-85.3833703"

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

    render() { 
        return (<div>
                <h3>Restaurants near by:</h3>
                
            <li>         
                {this.state.restaurantsInformation.length > 0 ?
                (this.state.restaurantsInformation.map
                ((restaurant: NearbyRestaurant, index: number) => 
                (<p key={index}> {restaurant.restaurant.name}</p>))) :
                (<h3>Please try another location!</h3>)}      
            </li>

              </div>);
            }
}
 
export default Restaurants;



