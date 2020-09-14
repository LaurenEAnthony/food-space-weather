import React from 'react';
import {RestaurantsResponse} from './RestaurantsInterface';


//keyZomato = "85be495d90cb96dd37146770e8cccbce";
// const urlZomato = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longtitude}`


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

    // displayRestaurants() {
    //     return this.array.map((restaurant) => <li>{restaurant}</li>);
    // }

    

    componentDidMount() {
        const urlZomato = "https://developers.zomato.com/api/v2.1/geocode?lat=40.1940698&lon=-85.3833703"

        fetch(urlZomato, {
            method: 'GET',
            headers: {
                'user-key': '85be495d90cb96dd37146770e8cccbce'
            }
        })
        .then(res=>res.json())
        .then((json: RestaurantsResponse)=> {
            console.log(json)
            this.setState({restaurantsInformation:json.nearby_restaurants})
        })
        .catch(() => {
            alert ('Sorry! There are no restaurants near by.');
        })
    }

    render() { 
        return ( 
            <div>

                <h3>Restaurants near by:</h3>
                

            <li>
                
                {this.state.restaurantsInformation.nearby_restaurants > 0 ? (
                    this.state.restaurantsInformation.nearby_restaurants.map(
                    (restaurant: RestaurantsResponse, index: number) => 
                    (<p key={index}> {restaurant}</p>))
        ) : (
            <></>
        )}      
            </li>
            </div>
         );
    }
}
 
export default Restaurants;



