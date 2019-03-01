import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const CalcButton = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={styles.wrapper}>
      <Text style={{ color: "blue", fontSize: 32 }}>{props.value}</Text>
    </View>
  </TouchableHighlight>
);

CalcButton.propTypes = {
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

CalcButton.defaultProps = {
  value: "0"
};

export default CalcButton;

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    width: 80,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  }
});
