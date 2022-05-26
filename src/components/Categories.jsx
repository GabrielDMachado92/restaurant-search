import { FlatList, View } from 'react-native'
import CategoryItem from './CategoryItem'
import React from 'react'

const Categories = ({categories, setActiveCategory, activeCategory}) => {
    return (
      <View>
        <FlatList
        data={categories}
        renderItem = {({ item, index }) => {
          return (
          <CategoryItem 
              name={item.name} 
              imageUrl={item.imageUrl} 
              index={index} 
              handlePress={() => setActiveCategory(item.name)} 
              activeCategory={activeCategory === item.name}
           />)
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
        
      />
      </View>
    
    );
}

export default Categories;