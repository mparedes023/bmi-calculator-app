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
    // bmi description box
    <View style={styles.container}>
        <View style={styles.introContainer}>
            <Text style={styles.bmiTitle}>BMI Calculator</Text>
            <Text style={styles.bmiDescription}>Body Mass Index (BMI) is a person's weight in kilograms divided by the square of height in meters. It is an inexpensive and easy screening method for weight category.</Text>

        </View>
    {/* bmi score area */}
    <View style={styles.calculatorContainer}>
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreTitle}>BMI Score</Text>
            <Text style={styles.score}>48</Text>
        </View>

    </View>
    </View>
    

    
    )

}

const styles=StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: 'rgb(208, 11, 11)',
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

    calculatorContainer:{
        width:'85%',
        height:'70%',
        backgroundColor: 'rgba(110, 213, 96, 0.92)',
        alignItems:'center',
        marginTop:30,
        border:'black',
        borderRadius:10,
        borderWidth:2,
    },

    scoreContainer:{
        width:300,
        height:150,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'rgb(244, 92, 92)',
        padding:20,
        marginTop:30,
        borderColor:'black',
        borderWidth:1.2,
    },

    scoreTitle:{
        fontFamily:'flute',
        fontSize:40,
        textAlign:'center',
    },
    score:{
        fontFamily:'flute',
        fontSize:60,
        textAlign:'center',
        marginTop:-10,
    }
});