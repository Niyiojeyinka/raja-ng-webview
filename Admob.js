import * as React from 'react';
import { Text, View} from 'react-native';

import {
    AdMobInterstitial,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
export default class Admob extends React.Component {
  

  showInterstitialAds = async () => {
      // Set global test device ID
await setTestDeviceIDAsync('EMULATOR');
//await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
await AdMobInterstitial.setAdUnitID('ca-app-pub-1964685286535761/2167443973'); // Test ID, Replace with your-admob-unit-id
await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
await AdMobInterstitial.showAdAsync();
  };

  componentDidMount() {
    

    setTimeout(this.showInterstitialAds,10000);
      }

 
  render() {
    return <View/>
     
    ;
  }
}