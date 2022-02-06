import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfilePicture from "../../../ProfilePicture";

const Header = ({imageUri, name}) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} size={40}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    }
})

export default Header