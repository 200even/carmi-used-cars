/* eslint-disable no-return-assign */
import React, { Component } from "react";
import { Image } from "react-native";
import {
  Button,
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from "native-base";
import { cars } from "../../fixtures";

export default class CarSwipe extends Component {
  onSwipeRight = () => {
    // user liked the car
  };

  onSwipeLeft = () => {
    // user didn't like the car
  };

  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            ref={c => (this._deckSwiper = c)}
            dataSource={cars}
            renderEmpty={() => (
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            )}
            onSwipeLeft={this.onSwipeLeft}
            onSwipeRight={this.onSwipeRight}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{`${item.year} ${item.make} ${item.model}`}</Text>
                      <Text note>{`${item.mileage} miles`}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="call" />
                  <Text>
                    {item.owner.firstName} {item.owner.lastName}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text>{item.description}</Text>
                </CardItem>
                <CardItem>
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "space-between"
                    }}
                  >
                    <Button
                      iconLeft
                      onPress={() => {
                        this._deckSwiper._root.swipeLeft();
                      }}
                    >
                      <Icon name="arrow-back" />
                      <Text>Not Interested</Text>
                    </Button>
                    <Button
                      iconRight
                      onPress={() => this._deckSwiper._root.swipeRight()}
                    >
                      <Text>Save</Text>
                      <Icon name="arrow-forward" />
                    </Button>
                  </View>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
