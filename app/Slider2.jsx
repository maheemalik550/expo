// app/index.js
// import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
// import React from 'react'
// import { Link, router, useRouter } from "expo-router";

// export function Slider2() {
//   return (
//     <View className='h-full '>
//     {/*  */}
//    <View className='items-center'>
//    <View style={{display:"flex",flexDirection:"row"}}>
//     <View style={{backgroundColor:"#e7fcf7"}} className='w-[75vw] h-[70vw]
//     p-10 rounded-bl-[350px]  rounded-tl-[270px] ml-8' >
//       <Link href={'index'}>
//       <Text className='text-black text-bold'>Back</Text>
//       </Link>
//      <View className='ml-10 mt-10 w-[270px] '>
//      <Text className='ml-7' style={{color:"#13cac0",fontWeight:"6000",fontSize:30}} >
//         Real-Time
//       </Text>
//       <Text style={{color:"#13cac0",fontWeight:"bold",fontSize:30}} className='ml-10'> 
//         Tracking
//       </Text>
//      </View>
//     </View>
//     <View style={{backgroundColor:"#e7fcf7"}} className='w-[35vw] h-[110vw] rounded-bl-[200px]'>
//     </View>
//   </View>
//   <View className='absolute top-[170px] '>
//   <Image 
//       source={require('../assets/Images/Artboard2.png')} // URL to the image
//       style={{ width: 366, height: 300 }} // Setting the image size
//       resizeMode="cover" // Control how the image is resized to fit its container
//     />
//   </View>
//   <View className='absolute top-[490px]'>
//    {/* image */}
//   <View className='flex justify-center items-center'>
// <Text className='text-center ml-[20px]  font-serif text-lg'>
//   Monitor the exract location of your {"\n"}
// ambulance and get five updates  {"\n"}  on its arrival time
// </Text>
// </View>
//   </View>


//   <View className='h-[100vw] w-[250px] bg-[#e7fcf7] rounded-tr-[300px] mr-[100px] mt-[165px]'>
//   <View >
//     <TouchableOpacity onPress={()=>router.push('/Slider1')}  className='bg-[#b6efec] mt-[40px]  ml-[88px] w-[49vw]  flex flex-col items-center border border-[#13cac0] rounded-[10px]'>
//       <View className='h-[4vw] bg-[#13cac0] w-12 rounded-bl-[35px] rounded-br-[35px] ml-10' >
        
//       </View>
//       <Text className='text-2xl font-bold text-[#13cac0]'>Next</Text>

//       <View className='h-[4vw] bg-[#13cac0] w-12 rounded-tl-[25px] rounded-tr-[25px] mr-10' >
        
//         </View>
//     </TouchableOpacity>
//   </View>
//   </View>
  
//    </View>
//   {/*  */}
//   </View>
//   );
// }



import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Slider2() {
  const router = useRouter();

  return (
    <View className='h-full '>
    {/*  */}
   <View className='items-center'>
   <View style={{display:"flex",flexDirection:"row"}}>
    <View style={{backgroundColor:"#e7fcf7"}} className='w-[75vw] h-[70vw]
    p-10 rounded-bl-[350px]  rounded-tl-[270px] ml-8' >
     <TouchableOpacity onPress={() => router.back()}>
      <Text className='text-black text-bold'>Back</Text>
      </TouchableOpacity>
     <View className='ml-10 mt-10 w-[270px] '>
     <Text className='ml-7' style={{color:"#13cac0",fontWeight:"6000",fontSize:30}} >
        Real-Time
      </Text>
      <Text style={{color:"#13cac0",fontWeight:"bold",fontSize:30}} className='ml-10'> 
        Tracking
      </Text>
     </View>
    </View>
    <View style={{backgroundColor:"#e7fcf7"}} className='w-[35vw] h-[110vw] rounded-bl-[200px]'>
    </View>
  </View>
  <View className='absolute top-[170px] '>
  <Image 
      source={require('../assets/Images/Artboard2.png')} // URL to the image
      style={{ width: 366, height: 300 }} // Setting the image size
      resizeMode="cover" // Control how the image is resized to fit its container
    />
  </View>
  <View className='absolute top-[490px]'>
   {/* image */}
  <View className='flex justify-center items-center'>
<Text className='text-center ml-[20px]  font-serif text-lg'>
  Monitor the exract location of your {"\n"}
ambulance and get five updates  {"\n"}  on its arrival time
</Text>
</View>
  </View>


  <View className='h-[100vw] w-[250px] bg-[#e7fcf7] rounded-tr-[300px] mr-[100px] mt-[165px]'>
  <View >
    <TouchableOpacity onPress={()=>router.push('/Slider3')}  className='bg-[#b6efec] mt-[40px]  ml-[88px] w-[49vw]  flex flex-col items-center border border-[#13cac0] rounded-[10px]'>
      <View className='h-[4vw] bg-[#13cac0] w-12 rounded-bl-[35px] rounded-br-[35px] ml-10' >
        
      </View>
      <Text className='text-2xl font-bold text-[#13cac0]'>Next</Text>

      <View className='h-[4vw] bg-[#13cac0] w-12 rounded-tl-[25px] rounded-tr-[25px] mr-10' >
        
        </View>
    </TouchableOpacity>
  </View>
  </View>
  
   </View>
  {/*  */}
  </View>
    // <View>
    //   <Text>This is Slider 2</Text>
    //   <Button title="Go to Slider 3" onPress={() => router.push('/Slider3')} />
    // </View>
  );
}

