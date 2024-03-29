import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightCircleIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className= 'mt-4 flex-row items-center justify-between px-4'> 
        <Text className='font-bold text-lg '>{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      
      <Text className="txt-xs text-gray-500 px-4">{description}</Text>

      <ScrollView horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }} 
      showsHorizontalScrollIndicator={false}
      className= "pt-4"> 

      {/*Restaurant Cards...*/}
      <RestaurantCards
                      
                      id={1}
                      imgUrl={"https://links.papareact.com/wru"}
                      title={"Burger King"}
                      rating={4.5}
                      genre={"Cafe"}
                      address={"123 Main Street"}
                      short_description={"Short Description"}
                      dishes={["Burger", "Pizza", "Pasta"]}
                      long={123.123}
                      lat={123.123}
                  />
      <RestaurantCards
                      
                      id={1}
                      imgUrl={"https://links.papareact.com/wru"}
                      title={"Burger King"}
                      rating={4.5}
                      genre={"Cafe"}
                      address={"123 Main Street"}
                      short_description={"Short Description"}
                      dishes={["Burger", "Pizza", "Pasta"]}
                      long={123.123}
                      lat={123.123}
                  />
       <RestaurantCards
                      
                      id={1}
                      imgUrl={"https://links.papareact.com/wru"}
                      title={"Burger King"}
                      rating={4.5}
                      genre={"Cafe"}
                      address={"123 Main Street"}
                      short_description={"Short Description"}
                      dishes={["Burger", "Pizza", "Pasta"]}
                      long={123.123}
                      lat={123.123}
                  />                       
       
      
      
      
      

      </ScrollView>
    </View>
  )
}

export default FeaturedRow