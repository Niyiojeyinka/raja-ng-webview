import * as React from 'react';
import { Dimensions, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import ErrorConnectionView from './ErrorConnectionView';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class HomeScreen extends React.Component{

  constructor(props){
   super(props);
   this.state={ error:false,errorMsg:null};
  }



  spinnerView(){
    return (<ActivityIndicator style={{position: 'absolute',top:10,
      left:deviceWidth/2}}
    color="#009688"
    size="large"/>
    );
    
  }
  tryAgain(){

    setTimeout(() => {
      this.setState((prevState)=>{
        if(prevState.error){
          return {error:false};
        }
      })
    }, 10000);
  }
 
  render(){
    
if (this.state.error ){
  this.tryAgain();
  return (
   <ErrorConnectionView/>

  );
  }else {

    return(

      <View style={styles.container}>
            <ScrollView style={styles.container}>
            <WebView style={{flex:1,marginTop:30,width:deviceWidth
            ,height:deviceHeight*8}}
        source={{uri: "https://raja.ng"}}
        onError={()=>{ this.setState({error:true});}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.spinnerView}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
            </ScrollView>
      
          </View>
          );
  }
  
 
  }

}








HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff'
    
  }
});
