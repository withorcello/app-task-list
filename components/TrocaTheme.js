import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const TrocaTheme = () => {
    const { theme, toggleTheme, colors } = useContext(ThemeContext);

    return (
        <View style={[style.container, { backgroundColor: colors.background }]}>
            <Text style={[style.text, { color: colors.text }]}>
                Thema atual: {theme === "light" ? "Claro" : "Escuro"}
            </Text>

            <View style={{ marginTop: 10 }}>
                <Button title="Alterar tema" onPress={toggleTheme} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        alignItnes: "center",
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    }
})

export default TrocaTheme;