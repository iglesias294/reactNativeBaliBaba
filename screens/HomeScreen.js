import React, { Component } from "react";
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import RecommendedCardItem from '../components/RecommendedCardItem';
const bg = '#1f4037';
class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Header style={{
                    backgroundColor: bg,
                    height: 90, borderBottomColor: '#737373'
                }}>
                    <Left style={{ flexDirection: 'row' }}>
                        <Icon
                            onPress={() => {
                                console.log('pressed')
                                this.props.navigation.navigate('DrawerOpen')
                            }}
                            name="md-menu" style={{ color: 'white', marginRight: 15 }} />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Bali-Baba</Text>
                        {/* <FAIcon name="amazon" style={{ fontSize: 32, color: 'white', zIndex: 100 }} /> */}
                    </Left>
                    <Right>
                        {/* <Icon name="md-cart" style={{ color: 'white' }} /> */}

                    </Right>
                </Header>
                <View style={{
                    position: 'absolute',
                    left: 0, right: 0, top: 100,
                    height: 70, backgroundColor: bg,
                    flexDirection: 'row', alignItems: 'center',
                    paddingHorizontal: 5
                }}>
                    <TouchableOpacity>
                        <View style={{
                            width: 100, backgroundColor: '#e7e7e7',
                            height: 50, borderRadius: 4, padding: 10
                        }}>
                            <Text style={{ fontSize: 12 }}> Search by </Text>
                            <Text style={{ fontWeight: 'bold' }}> Category </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1, height: '100%', marginLeft: 5,
                        justifyContent: 'center'
                    }}>
                        <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                            <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
                            <Input placeholder="Search" />
                        </Item>
                    </View>
                </View>

                <Content style={{ backgroundColor: 'white', marginTop: 70 }}>
                    <View style={{
                        height: 50, backgroundColor: 'white', flexDirection: 'row',
                        paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between'
                    }}>

                        <View style={{ flexDirection: 'row' }}>
                            {/* <Text>Your Account </Text> */}
                            <Text>Ethically sourced, traditional, handcrafted goods. </Text>
                            <Icon name="arrow-forward" style={{ fontSize: 18 }} />

                        </View>

                    </View>
                    <Swiper
                        autoPlay={true}
                        style={{ height: 200 }}>
                        <View
                            style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                                source={require('../assets/balibag3.jpg')} />
                        </View>
                        <View
                            style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                                source={require('../assets/balibag2.jpg')} />
                        </View>
                        <View
                            style={{ flex: 1 }}>
                            <Image
                                style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                                source={require('../assets/balibag1.jpg')} />
                        </View>
                    </Swiper>
                    <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
                            <Text>Your recommendations</Text>
                        </CardItem>
                        <RecommendedCardItem

                            itemName="Bali Bag type 2"
                            itemCreator="Dwi"
                            itemLocation="Uluwatu"
                            itemPrice="9999"
                            savings="1000"
                            itemMOQ="50"
                            imageURI={require('../assets/balibag2.jpg')}
                            rating={5}

                        />
                        <RecommendedCardItem

                            itemName="Bali Bag type 1"
                            itemCreator="Thea"
                            itemLocation="Sanur"
                            itemPrice="11999"
                            savings="5000"
                            itemMOQ="15"
                            imageURI={require('../assets/balibag3.jpg')}
                            rating={5}

                        />
                        <RecommendedCardItem

                            itemName="Bali Bag type 3"
                            itemCreator="Oka"
                            itemLocation="Amet"
                            itemPrice="8999"
                            savings="2000"
                            itemMOQ="100"
                            imageURI={require('../assets/balibag1.jpg')}
                            rating={5}

                        />
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});