import { View, Text, SafeAreaViewBase, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
    
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
          navigation.setOptions({
            headerShown: false,
          })

    }, []);
  return (
    
    <SafeAreaView className= "bg-white pt-5" >
      

        {/* Header */}
        <View className= "flex-row pb-3 items-center mx-4 space-x-2 ">
            <Image 
               source={{
                  uri: "https://links.papareact.com/wru",

                  
               }}
               className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            
            />
         <View className= "flex-1">
            <Text className= "font-bold text-gray-400 text-xs">
                Deliver Now!
            </Text>
            <Text className= 'font-bold text-xl'>Current Location
                 <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
        
         </View> 

         <UserIcon size={35} color="#00CCBB" />   
        </View>


        {/* Search */}
         
        <View className="flex-row items-center space-x-2 pb-2  mx-4 "> 
         <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3" >
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants and Cuisines" 
          keyboardType="default"
          /> 
         </View>

         <AdjustmentsVerticalIcon color="#00CCBB"  />
        
        </View>
        {/* Body */}
        <ScrollView className="bg-gray-100" 
        contentContainerStyle={{paddingBottom:100,
        }}
        > 
            { /*Categories*/ }
            <Categories/>

            { /*FeaturedRows*/ }

            <FeaturedRow
            id="123"
              title="Featured"
              description="Paid placements from our partners"
              
            
            />
            {/* Tasty Discounts */}
             <FeaturedRow
             id="1234"
              title="Tasty Discounts"
              description="Everyone's been enjoying this tasty discount"
              
            
            />
              {/* Offers near you */}
             <FeaturedRow
             id="12345"
              title="Offers near you!"
              description="Why not support your local restaurant tonight"
              
            
            />
        </ScrollView>


      
      
    </SafeAreaView>
  );
};

export default HomeScreen;