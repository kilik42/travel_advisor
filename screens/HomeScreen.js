import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { HeroImage } from '../assets';
const HomeScreen = () => {

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
    
      <SafeAreaView className = "bg-white-100 flex-1 relative">
        {/* First Section */}
        <View className= "flex-row px-6 mt-8 items-center space-x-2">
          
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center" >
              <Text className="text-[#4DABB7] text-3xl font-semibold ">Go</Text>
              
            </View>
             <Text className="text-[z#2A2B4B] text-3xl font-semibold">Travel</Text>
        
        </View>

        {/* second section */}
        <View className="px-6 mt-8 space-x-3">
          <Text className="text-[#2A2B4B] text-[42px]">Enjoy the trip with</Text>
          <Text className="text-[#00BCC9] text-[38px] font-bold">Good moments</Text>

          <Text className="text-[#3C6072] text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </Text>
          </View>

          {/* third section  circle section*/}
          <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36">
          </View>
          <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36">
          </View>

          {/* image container */}
          <View className="flex-1 relative items-center justify-center ">

           <Image
              className ="w-full h-full object-cover mt-20"

              source ={HeroImage}
             />
          </View>

      </SafeAreaView>


  )
}

export default HomeScreen