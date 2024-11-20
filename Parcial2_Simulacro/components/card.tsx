import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, FlatList, TouchableOpacity, Image } from "react-native";
import { useState } from 'react';

export default function Card({ name, image }: { name: string, image: string }) {
    return (
        <View>
            <TouchableOpacity>
                <View style={styles.card_container}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={styles.title}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card_container: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        boxSizing: 'border-box',
        width: 300,
        height: 115,
        backgroundColor: 'rgba(217, 217, 217, 0.58)',
        borderColor: 'grey',
        borderWidth: 2,
        borderBlockColor: 'solid white',
        boxShadow: '12px 17px 51px rgba(0, 0, 0, 0.22)',
        borderRadius: 17,
    },

    title: {
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        alignSelf:'center',
        fontSize: 20,
    },

    image: {
        alignSelf: 'flex-start',
        margin: 5,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderWidth: 2,
        borderRadius: 17,
    },
});