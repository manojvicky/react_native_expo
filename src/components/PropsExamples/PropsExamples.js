import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';

export default class propsExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {colorShowing: true};

    // Toggle the state every second
    setInterval(() => {
      
      this.setState({
        colorShowing: !this.state.colorShowing
      });
    }, 1000);
  }
  render() {
    let stylees = this.state.colorShowing && this.props.name ? styles.two : styles.one ; 

    let pic = {
      uri: this.props.source
    };
    return (
      <View style={stylees}>
        {this.props.heading && <Text>Props Examples</Text>}
        {this.props.name && <Text>{this.props.name}</Text>}
        {this.props.source && <Image source={pic} style={{width: 193, height: 110}}/>}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  one: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  two: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
