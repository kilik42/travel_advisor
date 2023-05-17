import { View, Text,SafeAreaView,Image,ScrollView, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import Avatar from '../assets/avatar.png'
import Hotels from '../assets/hotel.png'
import Restaurants from '../assets/restaurants.png'
import Attractions from '../assets/attraction.png'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FontAwesome } from '@expo/vector-icons'; 
import ItemCarContainer from '../components/ItemCarContainer';
import React from 'react'
import MenuContainer from '../components/MenuContainer';


const Discover = () => {
    const navigation = useNavigation();
    const [type, setType] = useState('restaurants');
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
          // title: 'Home',
          // headerStyle: { backgroundColor: '#fff' },
          // headerTitleStyle: { color: 'black' },
          // headerTintColor: 'black',
        }, []);
      })
  return (
    <SafeAreaView className ="flex-1 bg-white relative">
        {/* first section */}
        <View className="flex-row items-center justify-between px-8">
            <View>
                <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
                <Text className="text-[#527873] text-[36px]">the beauty today</Text>
                {/* <Text>Discover</Text> */}
            </View>
            <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                <Image
                className="w-full h-full rounded-md object-cover"
                    source={Avatar}
                
                />
            </View>
            


        </View>

        <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
            <GooglePlacesAutocomplete 
                GooglePlacesDetailsQuery={{fields: "geometry"}}
                placeholder="Search"
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log( details?.geometry?.viewport);

                }}
                query={{
                    key: '',
                    language: 'en',
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    },
                }}  
                fetchDetails = {true}
                
                enablePoweredByContainer={false}
            />
        </View>
        
        {/* Menu Container */}

        <ScrollView>
            <View className="flex-row items-center justify-between px-8 mt-8">
                <MenuContainer 
                 key={"hotel"}
                    title="Hotels"
                    imageSrc={Hotels}
                    type= {type}
                    setType={setType}
                />
                 <MenuContainer 
                 key={"attactions"}
                    title="Attactions"
                    imageSrc={Attractions}
                    type= {type}
                    setType={setType}
                />

<MenuContainer 
                 key={"restaurants"}
                    title="Restaurants"
                    imageSrc={Restaurants}
                    type= {type}
                    setType={setType}
                />

            </View>

            {/* List of Hotels */}
            <View>
                <View className=" flex-row items-center justify-between px-4 mt-8">
                   <Text className="text-[#0B646B] text-2xl font-bold px-7 ">Top Tips</Text> 

                   <TouchableOpacity className= "flex-row items-center justify-center space-x-2 ">
                    <Text className="text-[#A0C4C7] text-[20px] font-bold" >Explore</Text>
                   <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                   </TouchableOpacity>
                </View>
                
                <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                    
                    <ItemCarContainer 
                     key = {"1"}
                    imageSrc={Hotels}
                    title="Hotel"
                    location="Kigali, Rwanda"
                    type= {type}
                    setType={setType}


                    />
                </View>


            </View>



        </ScrollView>
      
    </SafeAreaView>
  )
}

export default Discover