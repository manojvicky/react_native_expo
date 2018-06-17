import React from 'react';
import {Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default class TextInputExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      names:[]
  };
    this.TextHandler = this.TextHandler.bind(this);
    this.touchHandler = this.touchHandler.bind(this);
  }
  TextHandler(text){
    this.setState({
        text: text
    });
  }
  touchHandler(){
    if(!this.state.text.trim()){
      Alert.alert("type something");
      return;
    }
      let arr = [];
      this.state.names.map((item)=>{
        arr.push(item);
      });
      arr.push(this.state.text);
      // Alert.alert(`You tapped the ${this.state.text}!`);
      this.setState({
        names: arr,
        text:""
      });
  }
  render() {
    let names = this.state.names.map((item, index)=>{
      return(
        <Text key={index}>{item}</Text>
      );
    });
    return (
      <View style={styles.outerView}>
        <View style={styles.inputView}>
            <TextInput style={styles.textinputstyle} value={this.state.text} placeholder="Type your name pls" onChangeText={(text) => this.TextHandler(text)} />
            <Button style={styles.textButton} title="Click" color="#841584" onPress={this.touchHandler}/>
        </View>
        <View>{names}</View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  outerView:{
    paddingTop: 50,
    flex:1,
    // backgroundColor:"#87cefa",
    justifyContent : "flex-start",
    alignItems:"center",


  },
  inputView:{
    flexDirection: "row",
    justifyContent : "space-around",
    width:"100%",
    alignItems:"stretch",
    // backgroundColor:"#808080",

  },
  textinputstyle:{
    width: "70%",
    // backgroundColor:"#8b0000",
  },
  textButton:{
    width: "27%",
    // backgroundColor:"#ffb6c1"

  }
});

