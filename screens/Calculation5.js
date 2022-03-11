import  React,{Component} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ImageBackground,TextInput,Button } from 'react-native';
const homeImage = require('../assets/home.png');
const bgImg=require('../assets/bg.jpg')
export default class Calculation5 extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { pound:0,
                  euro:0
                 };
  }

   handleclick = () => {
  const  pound=this.state.pound
   const euro=this.state.euro
  const calculated_euro = pound*1.19
    this.setState({euro:calculated_euro})
      }
  render(){
  return (
    <ImageBackground>
  <View>
  
  
        <TextInput 
                     placeholder="Enter Money in Pound"
                     style={styles.textinput}
                     onChangeText={(new_pound) => this.setState({pound:new_pound})}
                     />
           <Button onPress={this.handleclick} title="Calculate Euros"/>
         <Text style={styles.texts}>{this.state.euro}</Text>

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
   bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});