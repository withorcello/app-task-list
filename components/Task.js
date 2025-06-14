import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import checkboxChecked from '../assets/checkbox-checked.png';
import checkboxUnchecked from '../assets/checkbox-unchecked.png';

export default function Tabela({ item }) {
    return (
        <View style={{ ...styles.row, opacity: item.check ? '0.5' : '1' }}>
            <TouchableOpacity onPress={() => item.checkItem(item.id)}>
                <Image
                    style={styles.tinyLogo}
                    source={item.check ? checkboxChecked : checkboxUnchecked}
                />
            </TouchableOpacity>
            <Text style={{ opac: item.check ? '#646464' : 'black' }}>{item.nome}</Text>
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
    },
    tinyLogo: {
        width: 20,
        height: 20,
    },
});
