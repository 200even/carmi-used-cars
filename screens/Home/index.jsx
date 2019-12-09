import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import CarSwipe from "../../components/CarSwipe";
import FooterMenu from "../../components/FooterMenu";
import MainHeader from "../../components/MainHeader";

export default class Home extends PureComponent {
  render() {
    return (
      <Container style={styles.container}>
        <MainHeader />
        <CarSwipe />
        <FooterMenu />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
