import { Image, View, StyleSheet, Text, TouchableOpacity, } from "react-native";
import {elevation} from '../common/styles'
import {withNavigation} from 'react-navigation'


const RestaurantItem = ({restaurant, navigation}) => {

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate("Restaurant", {id: restaurant.id})}
        >
            <View style={[styles.container, styles.elevation]} >
                <Image style={styles.image} source={{uri: restaurant.image_url}} /> 
                <View style={styles.infoContainer} >  
                    <Text style={styles.header} >{restaurant.name}</Text>
                        <View style={styles.info} >    
                            <Text style={styles.rating} >{restaurant.rating}</Text>
                            <Text style={styles.money}  >{restaurant.price}</Text>
                        </View>
                    </View>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        flexDirection: 'row',
        borderRadius: 50,
        marginVertical: 10,
        alignItems: 'center',
        height: 100,
        
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
        flexGrow: 1
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    info: {
        flexDirection: 'row'
    },
    money: {
        color: 'gold'
    },
    rating: {
        marginRight: 20
    }
    
});


export default withNavigation(RestaurantItem);