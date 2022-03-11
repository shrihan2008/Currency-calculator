import  React,{Component} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ImageBackground } from 'react-native';

export default class Home extends React.Component {
  render(){
  return (
    <ImageBackground>
  <View>
  
  
  <View>
  <Text style={styles.title}>Currency Converter </Text>
   <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Calculation1')}>
              <Text style={styles.texts}>INR-USD</Text>
             
            </TouchableOpacity></View>
   <View>
   <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Calculation2')}>
              <Text style={styles.texts}>Rubble-USD</Text>
             
            </TouchableOpacity></View>
    <View>
   <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Calculation3')}>
              <Text style={styles.texts} >INR-Yen
              </Text>
             
            </TouchableOpacity></View>

   <View>
   <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Calculation4')}>
              <Text style={styles.texts}>AUD-USD</Text>
              
            </TouchableOpacity></View>

    
   <View>
   <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Calculation5')}>
              <Text style={styles.texts}>Pound-Euros</Text>
               
            </TouchableOpacity></View>
            </View>
      </ImageBackground>
     )
  }
}

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"#5755F2",
    margin: 10,
    width: 200,
    height: 60,
    marginLeft:60
  },
texts:{
  color:"#EB12BD",
  fontSize:20,
  fontWeight:'300'
},
  
  title:{
   fontSize:30,
    alignSelf:"center",
    marginTop:-1,
    color:"green",
    fontWeight:'600'
  }
});