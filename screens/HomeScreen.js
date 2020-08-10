import * as React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  BackHandler,
  Platform,
  ActivityIndicator,
  View,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview'
import ErrorConnectionView from './ErrorConnectionView'
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: false, errorMsg: null }
  }
  webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack()
      return true
    }
    return false
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress)
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress')
    }
  }
  spinnerView() {
    return (
      <ActivityIndicator
        style={{ position: 'absolute', top: 10, left: deviceWidth / 2 }}
        color="#009688"
        size="large"
      />
    )
  }
  tryAgain() {
    setTimeout(() => {
      this.setState((prevState) => {
        if (prevState.error) {
          return { error: false }
        }
      })
    }, 10000)
  }

  render() {
    if (this.state.error) {
      this.tryAgain()
      return <ErrorConnectionView />
    } else {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            <WebView
              style={{
                flex: 1,
                marginTop: 30,
                width: deviceWidth,
                height: deviceHeight * 25,
              }}
              ref={(webView) => {
                this.webView.ref = webView
              }}
              automaticallyAdjustContentInsets={false}
              source={{ uri: 'https://raja.ng' }}
              onError={() => {
                this.setState({ error: true })
              }}
              ena
              javaScriptEnabled={true}
              domStorageEnabled={true}
              renderLoading={this.spinnerView}
              startInLoadingState={true}
              scalesPageToFit={true}
              onNavigationStateChange={(navState) => {
                this.webView.canGoBack = navState.canGoBack
              }}
            />
          </ScrollView>
        </View>
      )
    }
  }
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff'
  },
})
