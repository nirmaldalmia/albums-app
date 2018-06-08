import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Header extends Component {
  render() {
    return (
      <View style={Styles.viewStyle}>
        <Text style={Styles.textStyle}> {this.props.headerText} </Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});
