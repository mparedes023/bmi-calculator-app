import {View, Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
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
    {/* height input area */}
        <View style={styles.heightContainer}>
            <Text style={styles.heightTitle}>Height</Text>
            <View style ={styles.heightDimensionsContainer}>
                <View style={styles.inputHeight}>
                    <TextInput style={styles.feet} keyboardType="numeric" maxLength={1}></TextInput>
                    <Text style={styles.unitLabel}>ft</Text>
                </View>
                <View style={styles.inputHeight}>
                    <TextInput style={styles.inches}keyboardType="numeric" maxLength={2}></TextInput>
                    <Text style={styles.unitLabel}>in</Text>
                </View>    
            </View>
        </View>
    {/* weight input area */}
    <View style={styles.wbContainer}> 
    <View style={styles.weightButtonsContainer}>
        <View style={styles.weightContainer}>
            <Text style={styles.weightTitle}>Weight</Text>
            <TextInput style={styles.weightInput} keyboardType="numeric" maxLength={3}></TextInput>
            <Text style={styles.unitLabelWeight}>kg</Text>

         </View>
    </View>
                       
    <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnCalculate} ><Text style={styles.btnCalculateText}>Calculate</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnReset}><Text style={styles.btnResetText}>Reset</Text></TouchableOpacity>
    </View>
 </View>

    </View>
    </View>
    

    
    )

}

const styles=StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: '#e34d57',
        alignItems:'center', 

    },
    introContainer:{
        width:350,
        height:200,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#FAF9F5',
        padding:20,
        marginTop:50,
        borderColor:'#2F5233',
        borderWidth:2,
    },

    bmiTitle:{
        fontSize:40,
        textAlign:'left',
        color:'black',
        fontFamily:'flute',
        letterSpacing:-1,
        color:'#2F5233',
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
        
    }, 
    inputHeight:{
        position:'relative',
        width:120,
        
    },
    heightContainer:{
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
    heightTitle:{
        fontFamily:'flute',
        fontSize:25,
        textAlign:'left',
    },
    
    heightDimensionsContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'space-between',
        
    },
    feet:{
        width:120,
        height:70,
        backgroundColor: 'rgb(223, 241, 161)',
        fontFamily:'flute',
        textAlign:'center',
        fontSize:35,
        borderColor:'black',
        borderWidth:1.2,
        paddingRight:15,
        borderRadius:5,

    },
    inches:{
        width:120,
        height:70,
        backgroundColor: 'rgb(249, 255, 160)',
        borderColor:'black',
        borderWidth:1.2,
        fontFamily:'flute',
        textAlign:'center',
        fontSize:35,
        paddingRight:15,
        borderRadius:5,

    },
    unitLabel:{
        position:'absolute',
        right:20,
        bottom:20,
        fontFamily:'flute',

    },
    wbContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:28,
    },
    weightButtonsContainer:{

        display:'flex',
        flexDirection:'row',

    },
    weightContainer:{
        width:150,
        height:150,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'rgb(244, 92, 92)',
        padding:20,
        marginTop:30,
        borderColor:'black',
        borderWidth:1.2,
        alignItems:'center',
    },
    weightTitle:{
        fontFamily:'flute',
        fontSize:25,
        textAlign:'left',
    },
    weightInput:{
        backgroundColor:'rgb(255, 245, 200)',
        fontFamily:'flute',
        fontSize:35,
        textAlign:'center',
        width:120,
        height:70,
        backgroundColor: 'rgb(249, 255, 160)',
        borderColor:'black',
        borderWidth:1.2,
        borderRadius:5,
        paddingRight:15,
    },
    unitLabelWeight:{
        position:'absolute',
        right:30,
        bottom:40,
        fontFamily:'flute',
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'column',
        marginTop:43,
    },
    btnCalculate:{
        backgroundColor:'rgb(255, 245, 200)',
       
        width:120,
        height:50,
        borderColor:'black',
        borderWidth:1.2,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    btnCalculateText:{
        fontFamily:'flute',
        fontSize:25,
        textAlign:'center',
    },
    btnReset:{
        backgroundColor:'rgb(255, 245, 200)',
        marginTop:20,
        width:120,
        height:50,
        borderColor:'black',
        borderWidth:1.2,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    btnResetText:{
        fontFamily:'flute',
        fontSize:25,
        textAlign:'center',
    }
});