import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        startTime:0,
        milisecondHand: 0,
        timeValue: "00s",
        stopWatchStatus: false,

    }
  }
  startButton=()=>{
        let startTime = Date.now()-this.state.startTime;
        // let milisecondHand = Math.round((Date.now()/1000)*100)-Math.round((this.state.startTime/1000)*100);
      if(this.state.stopWatchStatus){
        clearInterval(this.timer);
      }else{
        
        this.timer = setInterval(() => {
            let milisecond = Date.now() - startTime;
            let variableArray=[];
            let week = Math.floor(milisecond/(7*24*60*60*1000))+"w ";
            variableArray.push(week);
            milisecond = milisecond%((7*24*60*60*1000));
            let day = Math.floor(milisecond/(24*60*60*1000))+"d ";
            variableArray.push(day);
            milisecond = milisecond%(24*60*60*1000);
            let hours = Math.floor(milisecond/(60*60*1000))+"h ";
            variableArray.push(hours);
            milisecond = milisecond%(60*60*1000);
            let minutes = Math.floor(milisecond/(60*1000))+"m ";
            variableArray.push(minutes);
            milisecond = milisecond%(60*1000);
            let seconds = Math.floor(milisecond/(1000))+"s ";
            variableArray.push(seconds);
            milisecond = milisecond%(1000);
            let stopWatchTime=[];
            for(let i=0;i<variableArray.length;i++){
                if(parseInt(variableArray[i].replace(/[A-z] /g,""))>0){
                    variableArray.map((item, index)=>{
                        if(index>=i){
                            if(item.replace(/[A-z] /g,"")<10){
                                item="0"+item;
                                stopWatchTime.push(item);
                            }else{
                                stopWatchTime.push(item);
                            }
                        }
                    });
                    break;
                }
            }
            stopWatchTime.join(" ").trim();
            // if(Math.round((Date.now()/1000)*100)-milisecondHand>99){
            //     milisecondHand = Math.round((Date.now()/1000)*100);
            // }
                this.setState({
                    startTime: Date.now()-startTime,
                    // milisecondHand: Math.round((Date.now()/1000)*100)-milisecondHand,
                    timeValue: stopWatchTime.length===0?this.state.timeValue:stopWatchTime
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
        startTime:0,
        milisecondHand: 0,
        timeValue: "0s",
        stopWatchStatus: false,
    }); 
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Stop Watch</Text>
        <View style={styles.stopWatchView}>
            <Text style={styles.stopWatchText}>{this.state.timeValue}</Text>
            <Text style={styles.stopWatchText}>{this.state.startTime}</Text>
        </View>
        <View style={styles.buttons}>
            <TouchableWithoutFeedback onPress={this.startButton}>
                <View style={styles.textView}>
                {this.state.stopWatchStatus?<Text style={styles.ButtonTextR}>Stop</Text>:<Text style={styles.ButtonTextG}>Start</Text>}
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.resetButton}>
                <View style={styles.textView}>
                <Text style={styles.ButtonText}>Reset</Text>
                </View>
            </TouchableWithoutFeedback>
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
