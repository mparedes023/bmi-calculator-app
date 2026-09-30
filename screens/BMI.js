import {View, Text,StyleSheet, TextInput,TouchableOpacity,Alert} from 'react-native';
import {useFonts} from 'expo-font';
import React,{useState} from 'react';
export default function BMI(){

    // state variables for bmi, height, and weight
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [score,setBmiScore]=useState('--');

    const [fontsLoaded] = useFonts({
        'flute':require('../assets/fonts/InstrumentSerif-Regular.ttf'),
    });
    if (!fontsLoaded){
        return null;
    }

    // bmi calculation function
    const calculateBMI=()=>{
        const userWeight=parseFloat(weight);
        const userHeight =parseFloat(height) ;
        if (isNaN(userWeight)|| isNaN(userHeight)){
            Alert.alert("Invalid input",`Please enter a numeric value in both weight and height fields.`);
            return;
        }

        // i searched it up, the tallest person ever was 2.72m so 3m is an appropiate cutoff
        if(userWeight<0||userHeight>3){
            Alert.alert("Invalid input",`Weight must be greater than 0kg and height must be greater than 0 and less than 3 meters.`);
            return;
        }

        const bmi =userWeight/(userHeight*userHeight);
        const finalBmi=bmi.toFixed(1);

        setBmiScore(finalBmi);

        let bmiCategory='';
        if (bmi<18.5){
            bmiCategory='Underweight';
        } else if (bmi>=18.5&&bmi<=24.9){
            bmiCategory='Normal Weight';
        }else if (bmi>=25.0&&bmi<=29.9){
            bmiCategory='Overweight';
        }else{
            bmiCategory='Obesity';
        }

        Alert.alert("BMI Results",`Your BMI Category is ${bmiCategory} \nYour BMI is: ${bmi.toFixed(1)}`);
    };
    // reset 
    const reset=()=>{
        setHeight('');
        setWeight('');
        setBmiScore('--');
    };
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
            <Text style={styles.score}>{score}</Text>
        </View>

    {/* weight input area */}
    <View style={styles.wbContainer}> 
    <View style={styles.weightButtonsContainer}>
        <View style={styles.weightContainer}>
            <Text style={styles.weightTitle}>Weight</Text>
                    <TextInput 
                        style={styles.weightInput} 
                        keyboardType="numeric" 
                        maxLength={3}
                        placeholder="--"
                        placeholderTextColor="#888"
                        value={weight}
                        onChangeText={setWeight}

                    />
            <Text style={styles.unitLabelWeight}>kg</Text>

         </View>
    </View>
    {/* height input area */}
        <View style={styles.heightContainer}>
            <Text style={styles.heightTitle}>Height</Text>
            <View style ={styles.heightDimensionsContainer}>
                <View style={styles.inputHeight}>
                    <TextInput 
                        style={styles.metersInput} 
                        keyboardType="numeric" 
                        maxLength={4}
                        placeholder="--"
                        placeholderTextColor="#888"
                        value={height}
                        onChangeText={setHeight}
                    />
                    <Text style={styles.unitLabel}>m</Text>
                </View>  
            </View>
        </View>          

 </View>
    <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnCalculate} onPress={calculateBMI}><Text style={styles.btnCalculateText}>Calculate</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnReset} onPress={reset}><Text style={styles.btnResetText}>Reset</Text></TouchableOpacity>
    </View>
    </View>
    </View>
    

    
    )

};

const styles=StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: '#64a856',
        alignItems:'center', 

    },
    introContainer:{
        width:350,
        height:200,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff3c2',
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
        height:'60%',
        backgroundColor: 'rgba(164, 232, 155, 0.92)',
        alignItems:'center',
        marginTop:30,
        borderColor:'black',
        borderRadius:10,
        borderWidth:2,
    },

    scoreContainer:{
        width:300,
        height:150,
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        backgroundColor:'rgb(254, 249, 171)',
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
        justifyContent:'center',
    },
    heightContainer:{
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
    heightTitle:{
        fontFamily:'flute',
        fontSize:25,
        textAlign:'center',
    },
    
    heightDimensionsContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        justifyContent:'space-between',
        
    },
    metersInput:{
        width:120,
        height:70,
        backgroundColor: 'rgb(249, 255, 160)',
        fontFamily:'flute',
        textAlign:'center',
        fontSize:35,
        borderColor:'black',
        borderWidth:1.2,
        paddingRight:15,
        borderRadius:5,
        alignItems:'center',
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
        gap:5,
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
        marginTop:35,
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