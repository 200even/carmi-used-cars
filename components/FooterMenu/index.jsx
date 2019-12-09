import React, { memo } from "react";
import { Footer, FooterTab, Button, Icon, Text, Badge } from "native-base";
import { Small } from "../../common";

const FooterMenu = memo(() => {
  return (
    <Footer>
      <FooterTab>
        <Button vertical>
          <Icon name="search" />
          <Small>Search</Small>
        </Button>
        <Button badge vertical>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Icon name="chatbubbles" />
          <Small>Messages</Small>
        </Button>
        <Button active badge vertical>
          <Badge>
            <Text>51</Text>
          </Badge>
          <Icon active name="car" />
          <Small>Local</Small>
        </Button>
        <Button vertical>
          <Icon name="cash" />
          <Small>Sell</Small>
        </Button>
      </FooterTab>
    </Footer>
  );
});

export default FooterMenu;
