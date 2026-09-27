import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './screens/Splash';
import BMI from './screens/BMI';
export default function App() {

  const [isLoading,setLoading]= useState(true);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setLoading(false);
    },3000);
    return()=>clearTimeout(timer);
  },[]);

  if (isLoading){
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      <BMI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c91919',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
