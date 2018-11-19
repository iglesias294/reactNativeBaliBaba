import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Right, Icon } from 'native-base';
import StarRating from 'react-native-star-rating';

// itemName="Bali Bag type 2"
// itemCreator="Dwi Made"
// itemLocation="Uluwatu"
// itemPrice="99999"
// savings="2.5"
// imageURI={require('../assets/balibag2.jpg')}
// rating={5}

class RecommendedCardItem extends Component {
    render() {
        return (
            <CardItem>
                <View>
                    <Image style={{ height: 90, width: 90 }}
                        source={this.props.imageURI} />
                </View>
                <Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20 }}>
                    <Text>{this.props.itemName}</Text>
                    <Text style={{ color: 'grey', fontSize: 11 }}>Artisan: {this.props.itemCreator}</Text>

                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>Rp {this.props.itemPrice}</Text>
                    <Text style={{ fontSize: 14, }}>MOQ: {this.props.itemMOQ}</Text>
                    <Text><Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>You Save </Text>Rp {this.props.savings}</Text>
                    <StarRating
                        disabled={true}
                        maxStarts={5}
                        rating={this.props.rating}
                        starSize={12}
                        fullStarColor='orange'
                        emptyStarColor='orange'
                    />
                </Right>
                <Right style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="ios-chatboxes" style={{ color: 'grey', fontSize: 30 }} />
                    <Text style={{ color: 'grey', fontSize: 11 }}>Contact</Text>
                </Right>
            </CardItem>
        );
    }
}
export default RecommendedCardItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});