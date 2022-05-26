import { useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import yelp from '../api/yelp'
import useRestaurant from "../hooks/useRestaurant";
import RestaurantItem from "./RestaurantItem";


const Restaurants = ({activeCategory}) => {

    const [{data, loading, error}, searchRestaurants] = useRestaurant();


    useEffect(() => {
        searchRestaurants(activeCategory)
    }, [activeCategory]);

    if (loading) return <ActivityIndicator size="large" marginVertical={30} />
    console.log(error)
    if (error) return (
        
        <View style={styles.container} >
            <Text style={styles.header} >{error}</Text>
        </View>
    )

    return (
        <View style={styles.container} >
            <Text style={styles.header} >Top Restaurants</Text>
            <View>
                <FlatList 
                    data={data}
                    keyExtractor={(restaurant) => restaurant.id}
                    renderItem={({item}) => (
                        <RestaurantItem restaurant={item} />
                    )} 
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    }
});


export default Restaurants;