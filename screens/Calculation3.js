import  React,{Component} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ImageBackground,TextInput,Button } from 'react-native';
const homeImage = require('../assets/home.png');
export default class Calculation3 extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { yen:0,
                  inr:0
                 };
  }

   handleclick = () => {
  const  inr=this.state.inr
   const yen=this.state.yen
  const calculated_inr = yen*1.53
    this.setState({inr:calculated_inr})
      }
  render(){
  return (
    <ImageBackground>
  <View>
   

  
        <TextInput 
                     placeholder="Enter Money in INR"
                     style={styles.textinput}
                      onChangeText={(new_yen) => this.setState({yen:new_yen})}
                     />
         <Button onPress={this.handleclick} title="Calculate Yen"/>
         <Text style={styles.texts}>{this.state.inr}</Text>

         <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <Image source={homeImage} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
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
  button:{
   fontSize:15,
    alignSelf:"center",
    marginTop:-1,
    color:"#50F22E",
    fontWeight:'100'
  },
  title:{
   fontSize:30,
    alignSelf:"center",
    marginTop:-1,
    color:"green",
    fontWeight:'600'
  },
  textinput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
    iconStyle: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});