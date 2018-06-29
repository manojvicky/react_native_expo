import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import TextInputHandler from './src/components/TextInputExamples/TextInputHandler';
import TextInputHandler from './src/components/TextInputExamples/TextInputHandler';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.one}>
        <TextInputHandler/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  one: {
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    // backgroundColor: "#ffffe0"
  },
});
