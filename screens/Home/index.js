import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text} from 'native-base';
import CarSwipe from '../../components/CarSwipe';
import FooterMenu from "../../components/FooterMenu";
import MainHeader from "../../components/MainHeader";

export default class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <MainHeader />
        <CarSwipe />
        <FooterMenu />
      </Container>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
