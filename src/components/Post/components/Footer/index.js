import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = ({likesCount, caption, PostDateAt}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.likes}>
                {likesCount} Like
            </Text>
            <Text style={styles.caption}>
                {caption}
            </Text>
            <Text style={styles.postDateat}>
                {PostDateAt} 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    likes: {
        fontWeight: 'bold',
        margin: 3,
    },
    caption: {
        margin: 3,
    },
    postDateat: {
        color: '#8c8c8c',
        margin: 3,
    }
})

export default Footer