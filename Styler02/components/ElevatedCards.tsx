import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>To</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>And</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Change</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Cards</Text>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8 
    },
    cardElevated: {
        backgroundColor: 'orange',
        elevation: 5,
        shadowColor: 'red',
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
})