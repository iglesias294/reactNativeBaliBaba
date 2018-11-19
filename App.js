import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createDrawerNavigator as DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem } from 'native-base'
const bg = '#1f4037';
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const DrawerContent = (props) => {
  return (
    <Container>
      <Header style={{ backgroundColor: bg, height: 90 }}>
      </Header>

      <Content>
        <FlatList>
          data={[
            'Home', 'Shop by Category', "Today's deals"
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>item</Text>
            </ListItem>
          )}
        </FlatList>
      </Content>


    </Container>
  )
}

const AppDrawerNavigator = new DrawerNavigator({
  HomeScreen: { screen: HomeScreen }
}, {
    drawerPosition: 'left',
    contentComponent: DrawerContent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
