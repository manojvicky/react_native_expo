import React from 'react';
import {Text, ScrollView, View, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) =>{
  let data = `${props.number+1}. ${props.places}`;
    return(
      <TouchableOpacity onPress={props.touched}>
      <View style={{width: "92%", backgroundColor:"#eee", marginBottom: 10, padding: 10, marginLeft: 15}} >
        <Text>{data}</Text>
      </View>
      </TouchableOpacity>
    );
};

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

  pressed = (pressedItem) =>{
    alert(pressedItem);
    let newArr = [];
    this.state.names.map((item)=>{if(item!==pressedItem){
      newArr.push(item);
    }});
    this.setState({
      names: newArr
    });
  }
    
  render() {
    let repeatItem = this.state.names.map((item, index)=>{
      return(
        <ListItem key={index} number={index} places={item} touched={()=>{this.pressed(item)}} />
      );
    });
    return (
      <View horizontal={true} style={styles.outerView}>
        <View horizontal={true} style={styles.inputView}>
            <TextInput style={styles.textinputstyle} value={this.state.text} placeholder="Type your name pls" onChangeText={(text) => this.TextHandler(text)} />
            <Button style={styles.textButton} title="Click" color="#841584" onPress={this.touchHandler}/>
        </View>
        <ScrollView style={styles.listcontainer}>{repeatItem}</ScrollView>
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

  },
  listcontainer:{
    width: "100%",
    marginTop:10,
    // flexDirection: "row",
    // backgroundColor:"#ffb6c1"
  }
});

