import { StatusBar, View, StyleSheet} from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";
import { useState } from 'react'

const HomeScreen = () => {

    const [activeCategory, setActiveCategory] = useState("Burger");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require('../assets/images/burger.png')
    },
    {
      name: "Pizza",
      imageUrl: require('../assets/images/pizza.png')
    },
    {
      name: "Dessert",
      imageUrl: require('../assets/images/cake.png')
    },
    {
      name: "Drinks",
      imageUrl: require('../assets/images/smoothies.png')
    },
    {
      name: "Pasta",
      imageUrl: require('../assets/images/pasta.png')
    },
    {
      name: "Steak",
      imageUrl: require('../assets/images/steak.png')
    }
  ]

    return (
        <View style={styles.container}>
          <Header />
          <Search setActiveCategory={setActiveCategory}/>
          <Categories categories={commonCategories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} /> 
          <Restaurants activeCategory={activeCategory}/>
          <StatusBar style="auto" />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {

        backgroundColor: 'rgb(253,253,253)'

    }
})

export default HomeScreen