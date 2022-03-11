import  React,{Component} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ImageBackground,TextInput,Button } from 'react-native';
const homeImage = require('../assets/home.png');
export default class Calculation2 extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { rubble:0,
                  usd:0
                 };
  }

   handleclick = () => {
  const  usd=this.state.usd
   const rubble=this.state.rubble
  const calculated_usd = rubble/135
    this.setState({usd:calculated_usd})
      }
  render(){
  return (
    <ImageBackground>
  <View>
  
  
        <TextInput 
                     placeholder="Enter Money in rubble"
                     style={styles.textinput}
                        onChangeText={(new_rubble) => this.setState({rubble:new_rubble})}
                     />
         <TouchableOpacity style={styles.buttons} onPress={this.handleclick} >
        <Text style={styles.button }>Convert to USD </Text>
        </TouchableOpacity>
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