import React, { memo } from "react";
import { Image } from "react-native";
import { Header, Left, Body, Right, Button, Icon } from "native-base";
// eslint-disable-next-line import/no-unresolved
import { Appearance } from "react-native-appearance";
import commonColor from "../../native-base-theme/variables/commonColor";

const LogoBars = require("../../assets/Cardmi_Bars_Transparent.png");
const LogoWhiteText = require("../../assets/Carmi_Logo_Text_Dark.png");
const LogoText = require("../../assets/Carmi_Logo_Text.png");

const MainHeader = memo(() => (
  <Header>
    <Left>
      <Button transparent>
        <Image source={LogoBars} style={{ width: 30 }} resizeMode="contain" />
      </Button>
    </Left>
    <Body>
      <Image
        source={
          Appearance.getColorScheme() === "dark" ? LogoWhiteText : LogoText
        }
        style={{ width: 100 }}
        resizeMode="contain"
      />
    </Body>
    <Right>
      <Button transparent>
        <Icon name="search" color={commonColor.brandDanger} />
      </Button>
    </Right>
  </Header>
));

export default MainHeader;
