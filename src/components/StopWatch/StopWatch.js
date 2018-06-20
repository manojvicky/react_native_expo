import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        startTime:0,
        stopWatchStatus: false
    }
    // // Toggle the state every second
    // setInterval(() => {
      
    //   this.setState({
    //   });
    // }, 1000);
  }
  startButton=()=>{
      let startTime = Date.now()-this.state.startTime;
      if(this.state.stopWatchStatus){
        clearInterval(this.timer);
      }else{
        this.timer = setInterval(() => {
            this.setState({
                startTime: Date.now()-startTime
            });
        });
      }
      this.setState({
        stopWatchStatus: !this.state.stopWatchStatus
    });
  }
  resetButton=()=>{
    clearInterval(this.timer);
    this.setState({
        stopWatchStatus: false,
        startTime: 0
    }); 
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.header}>StopWatch</Text>
        <View style={styles.stopWatchView}>
            <Text style={styles.stopWatchText}>{this.state.startTime}ms</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity onPress={this.startButton}>
                <View style={styles.textView}>
                {this.state.stopWatchStatus?<Text style={styles.ButtonTextR}>Stop</Text>:<Text style={styles.ButtonTextG}>Start</Text>}
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.resetButton}>
                <View style={styles.textView}>
                <Text style={styles.ButtonText}>Reset</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        marginTop: 70,
        fontSize: 40,
        textAlign: "center",

    },
    buttons:{
        flex: 1,
        marginTop: 90

    },
    stopWatchView:{
        marginTop:90
    },
    stopWatchText:{
        textAlign: "center",
        fontSize: 25,
    },
    textView:{
        width: "92%",
    },
    ButtonText:{
        width:"100%",
        textAlign: "center",
        padding: 10,
        backgroundColor: "#eee",
        margin: 10,
        fontSize: 25
    },
    ButtonTextG:{
        width:"100%",
        textAlign: "center",
        padding: 10,
        backgroundColor: "#008000",
        margin: 10,
        fontSize: 25
    },
    ButtonTextR:{
        width:"100%",
        textAlign: "center",
        padding: 10,
        backgroundColor: "#ff0000",
        margin: 10,
        fontSize: 25
    }
});
