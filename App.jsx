/* eslint-disable global-require */
import React, { Component } from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleProvider } from "native-base";
// eslint-disable-next-line import/no-unresolved
import { AppearanceProvider } from "react-native-appearance";
import getTheme from "./native-base-theme/components";
import commonColor from "./native-base-theme/variables/commonColor";
import MainNavigator from "./navigation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount(): void {
    await Font.loadAsync({
      Lato: require("./assets/fonts/Lato-Regular.ttf"),
      Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    if (isReady) {
      return (
        <AppearanceProvider>
          <StyleProvider style={getTheme(commonColor)}>
            <NavigationNativeContainer>
              <MainNavigator />
            </NavigationNativeContainer>
          </StyleProvider>
        </AppearanceProvider>
      );
    }
    return null;
  }
}
