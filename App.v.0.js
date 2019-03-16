import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import CalcButton from "./components/CalcButton"

const concatOperation = props => (
  console.log("CONTENUTO PROPS: ",(props.ris).concat(props.value))
 /*  this.setState(this.state.operazione.concat(props)) */
);

const CalcElementsRow0 = [
  { value: 'C', func: () => console.log('C') },
  { value: '+/-', func: () => alert("Funzione ancora da implemetare!") },
  { value: '%', func: () =>alert("Funzione ancora da implemetare!") },
  { value: 'DEL', func: () => console.log('DEL') },
];
const CalcElementsRow1 = [
  { value: '7', func: () => console.log('7')},
  { value: '8', func: () => console.log('8') },
  { value: '9', func: () => console.log('9') },
  { value: '/', func: () => console.log('/') },
];
const CalcElementsRow2 = [
  { value: '4', func: () => console.log('4') },
  { value: '5', func: () => console.log('5') },
  { value: '6', func: () => console.log('6') },
  { value: '*', func: () => console.log('*') },
];
const CalcElementsRow3 = [
  { value: '1', func: () => console.log('1') },
  { value: '2', func: () => console.log('2') },
  { value: '3', func: () => console.log('3') },
  { value: '-', func: () => console.log('-') },
];
const CalcElementsRow4 = [
  { value: '0', func: () => console.log('0') },
  { value: '.', func: () => console.log('.') },
  { value: '=', func: () => console.log('=') },
  { value: '+', func: () => console.log('+') },
];

export default class App extends React.Component {
  state={
    operazione: "0"
  }

  //prova = props => "prova"

  

  //concatOp = (value) =>  this.setState(prova("aaa"))
                                                    /* concatOperation({ris:this.state.operazione,value:value}) */
  estrapolationListElement0 = () =>
    CalcElementsRow0.map((obj, index) => (
      <CalcButton value={obj.value} func={obj.func} key={index} />
    ));
  estrapolationListElement1 = () =>
    CalcElementsRow1.map((obj, index) => (
      <CalcButton value={obj.value} func={obj.func} key={index} />
    ));

  estrapolationListElement2 = () =>
    CalcElementsRow2.map((obj, index) => (
      <CalcButton value={obj.value} func={obj.func} key={index} />
    ));

  estrapolationListElement3 = () =>
    CalcElementsRow3.map((obj, index) => (
      <CalcButton value={obj.value} func={obj.func} key={index} />
    ));

  estrapolationListElement4 = () =>
    CalcElementsRow4.map((obj, index) => (
      <CalcButton value={obj.value} func={obj.func} key={index} />
    ));

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.operazione}</Text>
        </View>

          <View style={styles.containerButton}>{this.estrapolationListElement0()}</View>
          <View style={styles.containerButton}>{this.estrapolationListElement1()}</View>
          <View style={styles.containerButton}>{this.estrapolationListElement2()}</View>
          <View style={styles.containerButton}>{this.estrapolationListElement3()}</View>
          <View style={styles.containerButton}>{this.estrapolationListElement4()}</View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  display: {
    backgroundColor: 'darkcyan',
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  displayText: {
    color: 'white',
    fontSize:48,
  },
  containerButton:{
    flexDirection:"row",
  },
  
});
