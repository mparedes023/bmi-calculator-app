// splash screen 

import {Text, ImageBackground, Image,StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';

export default function Splash(){
    const [fontsLoaded] = useFonts({
        'angelica':require('../assets/fonts/angelica.ttf'),
    });

    if (!fontsLoaded){
        return null;
    }
    return(
    <ImageBackground source={require('../assets/img/tomato.jpg')} style={styles.container}>
  
            <Text style={styles.welcomeTitle}>Welcome!</Text>
            
    </ImageBackground>    
    )

}

const styles=StyleSheet.create({
    fontFace:{
        fontFamily:'angelica',
        source:'../assets/fonts/angelica.ttf',
    },
    container:{
        width:'100%',
        flex:1,
        height:'100%',
    },
        welcomeTitle:{
        fontFamily:'angelica',
        fontSize:65,
        letterSpacing:4,
        textAlign:'center',
        margin:'auto',
        color:'rgb(11, 61, 25)',
    },
});