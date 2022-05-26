import { useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image, Dimensions} from "react-native";
import useRest from "../hooks/useRest";

const RestaurantScreen = ({navigation}) => {

    const id = navigation.getParam("id")
    const [{data, loading, error}, searchRestaurant] = useRest()
    const dimensions = Dimensions.get("window")
    const imageWidth = dimensions.width
    const imageHeight = Math.round((dimensions.width * 9) / 16)

    useEffect(() => {
        searchRestaurant(id)
    }, [])

    if(loading) return <Text>Loading...</Text>
    if(error) return <Text>{error}</Text>
   
    return (
        <View>
            {data && 
            <FlatList 
                data={data.photos}
                keyExtractor={(photo) => photo }
                renderItem={({item}) => <Image style={{ height: imageHeight, width:imageWidth}}  source={{uri: item}} />  }

            />
            }
        </View>
      );
}


const styles = StyleSheet.create({
    container: {

        backgroundColor: 'rgb(253,253,253)'

    }
})

export default RestaurantScreen