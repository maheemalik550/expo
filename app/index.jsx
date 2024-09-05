import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCondition(true);
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    condition ? (
      <View className='h-full '>
      <View className='items-center'>
     <View style={{display:"flex",flexDirection:"row"}}>
      <View style={{backgroundColor:"#e7fcf7"}} className='w-[75vw] h-[70vw]
      p-10 rounded-bl-[350px]  rounded-tl-[270px] ml-8' >
       
       <TouchableOpacity onPress={()=>router.back()}>
       <Text className='text-black text-bold'>Back</Text>
       </TouchableOpacity>
       
       <View className='ml-10 mt-10 w-[270px] '>
       <Text  style={{color:"#13cac0",fontWeight:"6000",fontSize:30}} >
          Quicks & Easy
        </Text>
        <Text style={{color:"#13cac0",fontWeight:"bold",fontSize:30}} className='ml-10'> 
          Requests
        </Text>
       </View>
      </View>
      <View style={{backgroundColor:"#e7fcf7"}} className='w-[35vw] h-[110vw] rounded-bl-[200px]'>
      </View>
    </View>
    <View className='absolute top-[170px] '>
    <Image 
        source={require('../assets/Images/Artboard1.png')} // URL to the image
        style={{ width: 366, height: 300 }} // Setting the image size
        resizeMode="cover" // Control how the image is resized to fit its container
      />
    </View>
    <View className='absolute top-[490px]'>
     {/* image */}
    <View className='flex justify-center items-center'>
  <Text className='text-center ml-[20px]  font-serif text-lg'>
    Request an ambulance with just a  {"\n"}
  few taps, ensuring repid dispatch {"\n"}  incritical moments
  </Text>
  </View>
    </View>
  
  
    <View className='h-[100vw] w-[250px] bg-[#e7fcf7] rounded-tr-[300px] mr-[100px] mt-[165px]'>
    <View >
      <TouchableOpacity onPress={() => router.push('/Slider2')}  className='bg-[#b6efec] mt-[40px]  ml-[88px] w-[49vw]  flex flex-col items-center border border-[#13cac0] rounded-[10px]'>
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
    ) : (
      <View style={styles.container}>
        <Image
          source={require('../assets/Images/splashscreen.png')} // Ensure the file path is correct
          style={styles.image}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const options = {
  headerShown: false, // Hides the header
};
