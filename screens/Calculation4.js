import  React,{Component} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ImageBackground,TextInput,Button } from 'react-native';
const homeImage = require('../assets/home.png');
export default class Calculation4 extends React.Component {
   constructor(props) {
    super(props);
    
    this.state = { aud:0,
                  usd:0
                 };
  }

   handleclick = () => {
  const  aud=this.state.aud
   const usd=this.state.usd
  const calculated_usd = aud*0.74
    this.setState({usd:calculated_usd})
      }
  render(){
  return (
    <ImageBackground>
  <View>
  
  
        <TextInput 
                     placeholder="Enter Money in Aud"
                     style={styles.textinput}
                         onChangeText={(new_aud) => this.setState({aud:new_aud})}
                     />
         <Button onPress={this.handleclick} title="Calculate USD"/>
         <Text style={styles.texts}>{this.state.usd}</Text>

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