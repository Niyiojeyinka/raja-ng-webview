import * as React from 'react';
import { Dimensions, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class HomeScreen extends React.Component{

  constructor(props){
   super(props);
   this.state={loading:true};
  }

  showSpinner() {
    this.setState({ loading: true });
  }
  hideSpinner() {
    this.setState({ loading: false });
  }

  spinnerView(){
    return (<ActivityIndicator style={{position: 'absolute',top:0,
      left:deviceWidth/2}}
    color="#009688"
    size="large"/>
    );
    
  }

  errorView(){

    return (
<view>
  <Text>Error Occured </Text>
</view>

    );
  }

  render(){
    return(

<View style={styles.container}>
      <ScrollView style={styles.container}>
      <WebView style={{flex:1,marginTop:40,width:deviceWidth
      ,height:deviceHeight*5}}
  source={{uri: "https://raja.ng/upx/vendor-register/"}}
  onError={(error)=>{ alert("error");}}
  //onLoadStart={function(){this.}}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  renderLoading={this.spinnerView}
  renderError={this.errorView}
  startInLoadingState={true}
  scalesPageToFit={true}
/>
      </ScrollView>

    </View>
    );
  }

}








HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    
  }
});
