import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, Text, View } from 'react-native';


export default function ErrorConnectionView(){

    return (
      <View style={styles.container,{justifyContent:"center",alignItems:
        "center" ,flexDirection:"column"}}>

<Ionicons
      name={props.name}
      size={100}
      style={{ margin:16 }}
      color={"#444444"}
    />
        <Text style={{marginTop:40,fontSize:32}}>Network Error</Text>
    
        <Text style={{marginTop:20,fontSize:8}}>Will automatically try again in the next few seconds</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff'
      
    }
  });