import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropsExamples from './PropsExamples';

export default class PropsHandler extends React.Component {
  
  render() {
    return (
      <View style={styles.one}>
        <PropsExamples heading="Props Examples"/>
        <PropsExamples name="Me" source="https://assets.privy.com/picture_photos/30313/medium/ME_Logo.png?1492919777" />
        <PropsExamples name="Void" source="https://i.vimeocdn.com/portrait/11037501_300x300" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  one: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
