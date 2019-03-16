import * as React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const CalcButton = props => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight style={styles.buttonContainerBox} onPress={props.onPress}>
      <Text style={styles.buttonContainerBoxText}>{props.value}</Text>
    </TouchableHighlight>
  </View>
);

export default CalcButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flex:1,
    height: 110,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    backgroundColor: 'white'
  },
  buttonContainerBox:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonContainerBoxText:{
    fontSize:40
  }
});