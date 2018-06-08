import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './src/components/Header';
import { AlbumList } from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={Styles.containerStyle}>
        <Header headerText="Albums" />
        <AlbumList />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
