import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image ,ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements'
import Header from '../components/myHeader';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
export default class HomeScreen extends Component{
  

  render(){
    return(
      <View style={styles.container}>
        <Header title="AS"/>
        <ScrollView>
 
      <Card>
      <CardImage 
     source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="adopt me"
   />
   <CardTitle
     subtitle=" click me"
   />
   </Card>
            <TouchableOpacity style={styles.button}
              
              >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
             
              >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
             
             >
             <Text style={styles.buttonText}>View</Text>
           </TouchableOpacity>

      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#9900cc",
   

  },

  button:{
    width:340,
    height:100,
  marginTop:20,
  marginLeft:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  },
  buttonText:{
    color:'#26ABE4',
    fontWeight:'200',
    fontSize:20
  }
})
