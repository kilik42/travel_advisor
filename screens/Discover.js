import { View, Text,SafeAreaView,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import Avatar from '../assets/avatar.png'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import React from 'react'

const Discover = () => {
    const navigation = useNavigation();
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
                placeholder="Search"
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);

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

      
    </SafeAreaView>
  )
}

export default Discover