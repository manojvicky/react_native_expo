import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import TextInputHandler from './src/components/TextInputExamples/TextInputHandler';
import StopWatch from './src/components/StopWatch/StopWatch';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.one}>
        <StopWatch/>
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
