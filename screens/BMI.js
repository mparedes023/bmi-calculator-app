import {View, Text,StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';
export default function BMI(){
    const [fontsLoaded] = useFonts({
        'flute':require('../assets/fonts/InstrumentSerif-Regular.ttf'),
    });
    if (!fontsLoaded){
        return null;
    }
    return(
    <View style={styles.container}>
        <View style={styles.introContainer}>
            <Text style={styles.bmiTitle}>BMI Calculator</Text>
            <Text style={styles.bmiDescription}>Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. It is an inexpensive and easy screening method for weight category.</Text>

        </View>
    </View>    
    )

}

const styles=StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: 'rgb(255, 28, 28)',
        alignItems:'center',


        
    },
    introContainer:{
        width:350,
        height:200,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'rgba(110, 213, 96, 0.92)',
        padding:20,
        marginTop:50,
        borderColor:'black',
        borderWidth:2,
    },

    bmiTitle:{
        fontSize:40,
        textAlign:'left',
        color:'black',
        fontFamily:'flute',
        letterSpacing:-1,
    },
    bmiDescription:{
       fontFamily:'flute',
       fontSize:18,
    },
});