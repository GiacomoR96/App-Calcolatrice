import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const BtnCalcolatrice = props => (
    <TouchableHighlight onPress={props.onPress}>
        <View style={styles.formBtn}>
        <Text style={styles.text}>{props.value}</Text>
        </View>
    </TouchableHighlight>
);
            
BtnCalcolatrice.propTypes = {
    value: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

BtnCalcolatrice.defaultProps = {
    value: "0"
};



export default BtnCalcolatrice;

const styles = StyleSheet.create({
    formBtn:{
        height: 90, //80
        width: 120, //105
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white",
        borderColor:"gray",
        borderWidth: 0.5,
    //    margin: 10
    },
    text:{
        color: "black",
        fontSize: 32
    }
});



