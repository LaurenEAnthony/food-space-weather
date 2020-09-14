
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
            popularity: string;
            nightlife_index: string;
            nearby_res: string[];
            top_cuisines: string[];
            popularity_res: string;
            nightlife_res: string;
            subzone: string;
            subzone_id: number;
            city: string;
        }
    
        export interface HasMenuStatus {
            delivery: number;
            takeaway: number;
        }
    
        export interface R {
            has_menu_status: HasMenuStatus;
            res_id: number;
            is_grocery_store: boolean;
        }
    
        export interface Location2 {
            address: string;
            locality: string;
            city: string;
            city_id: number;
            latitude: string;
            longitude: string;
            zipcode: string;
            country_id: number;
            locality_verbose: string;
        }
    
        export interface Title {
            text: string;
        }
    
        export interface BgColor {
            type: string;
            tint: string;
        }
    
        export interface RatingObj {
            title: Title;
            bg_color: BgColor;
        }
    
        export interface UserRating {
            aggregate_rating: string;
            rating_text: string;
            rating_color: string;
            rating_obj: RatingObj;
            votes: number;
        }
    
        export interface Restaurant {
            R: R;
            apikey: string;
            id: string;
            name: string;
            url: string;
            location: Location2;
            switch_to_order_menu: number;
            cuisines: string;
            average_cost_for_two: number;
            price_range: number;
            currency: string;
            offers: any[];
            opentable_support: number;
            is_zomato_book_res: number;
            mezzo_provider: string;
            is_book_form_web_view: number;
            book_form_web_view_url: string;
            book_again_url: string;
            thumb: string;
            user_rating: UserRating;
            photos_url: string;
            menu_url: string;
            featured_image: string;
            has_online_delivery: number;
            is_delivering_now: number;
            store_type: string;
            include_bogo_offers: boolean;
            deeplink: string;
            is_table_reservation_supported: number;
            has_table_booking: number;
            events_url: string;
        }
    
        export interface NearbyRestaurant {
            restaurant: Restaurant;
        }
    
        export interface RestaurantsResponse {
            location: Location;
            popularity: Popularity;
            link: string;
            nearby_restaurants: NearbyRestaurant[];
        }
    
        