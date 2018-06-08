import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={Styles.thumbnailContainer}>
                    <Image
                        source={{ uri: props.album.thumbnail_image }}
                        style={Styles.thumbnail}
                    />
                </View>
                <View style={Styles.headerContentStyle}>
                    <Text style={Styles.headerText}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={Styles.image}
                    source={{ uri: props.album.image }}
                />
            </CardSection>

            <CardSection>
                <Button
                    onPress={() => Linking.openURL(props.album.url)}
                    buttonText="Buy Now"
                />
            </CardSection>
        </Card>
    );
};

const Styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18,
        color: '#000'
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
