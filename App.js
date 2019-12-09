import React, { Component } from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {StyleProvider} from 'native-base';
import { AppearanceProvider } from 'react-native-appearance';
import getTheme from './native-base-theme/components';
import commonColor from "./native-base-theme/variables/commonColor";
import MainNavigator from './navigation';

export default class App extends Component {
  state = {
    isReady: false
  };

  async componentDidMount(): void {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    return (
      <AppearanceProvider>
        <StyleProvider style={getTheme(commonColor)}>
          <NavigationNativeContainer>
              <MainNavigator/>
          </NavigationNativeContainer>
        </StyleProvider>
      </AppearanceProvider>
    );
  }
}
