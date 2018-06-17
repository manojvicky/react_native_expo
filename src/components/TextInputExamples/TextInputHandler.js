import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputExamples from './TextInputExamples';

export default class TextInputHandler extends React.Component {
  
  render() {
    return (
      <View>
        <TextInputExamples/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  one: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // width: "100%"
    // backgroundColor:"#c0c0c0"
  },
});
