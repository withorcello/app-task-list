import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import checkboxChecked from '../assets/checkbox-checked.png';

export default function Tabela({ item }) {
    return (
        <View style={styles.row}>
            <Image
                style={styles.tinyLogo}
                source={checkboxChecked}
            />
            <Text>{item.id}</Text>
            <Text>{item.nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        padding: 4,
        borderRadius: 3,
        backgroundColor: 'white',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
