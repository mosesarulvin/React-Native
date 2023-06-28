import React from "react";

import {
    View,
    Text,
    useColorScheme,
    StyleSheet
}
from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    const themeInfo = useColorScheme()
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText }>Hey {themeInfo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF',
        backgroundColor: '#000000'
    },
    darkText: {
        color: '#000000',
        backgroundColor: '#FFFFFF'
    }
})

export default AppPro;