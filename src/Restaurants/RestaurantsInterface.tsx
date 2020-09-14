

    export interface Location {
        entity_type: string;
        entity_id: number;
        title: string;
        latitude: string;
        longitude: string;
        city_id: number;
        city_name: string;
        country_id: number;
        country_name: string;
    }

    export interface Popularity {
        status: string;
        message: string;
        nightlife_index: number;
        popularity: number;
    }

    export interface RestaurantsResponse {
        location: Location;
        popularity: Popularity;
        link: string;
        nearby_restaurants: any[];
    }

