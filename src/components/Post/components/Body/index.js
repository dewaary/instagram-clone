import React from "react";
import { Dimensions, Image, StyleSheet, Text } from "react-native";

const Body = ({imageUri}) => {
    return (
        <Image source={{uri: imageUri}} style={styles.image}/>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }
})

export default Body