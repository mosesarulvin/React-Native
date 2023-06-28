import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>What's new in JS 21 - ES12</Text>
            </View>
            <Image 
            source={{uri: 'https://dummyimage.com/600x400/000/fff'}}
            style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas congue quisque. Condimentum lacinia quis vel eros donec ac odio. Eget nunc lobortis mattis aliquam faucibus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={()=>openWebsite('https://fakeimg.pl/')}>
                    <Text style={styles.socialLinks}>
                        Read More
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>openWebsite('https://fakeimg.pl/')}>
                    <Text style={styles.socialLinks}>
                        Read More
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    card:{
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard:{
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#000000',
        shadowOpacity: 0.3
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage:{
        height: 190
    },
    bodyContainer:{
        padding: 10
    },
    footerContainer:{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks:{
        fontSize: 16,
        color: '#ffffff',
        backgroundColor: '#000000',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
    }
})