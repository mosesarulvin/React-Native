import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
        uid: 1,
        name: "MosesArulvin",
        status: 'MosesArulvin is online',
        imageUrl: 'https://fakeimg.pl/350/?text=MosesArulvin' 
        },
        {
            uid: 2,
            name: "MosesArulvin2",
            status: 'MosesArulvin2 is online',
            imageUrl: 'https://fakeimg.pl/350/?text=MosesArulvin2' 
        },
        {
            uid: 3,
            name: "MosesArulvin3",
            status: 'MosesArulvin3 is online',
            imageUrl: 'https://fakeimg.pl/350/?text=MosesArulvin3' 
        },
        {
            uid: 4,
            name: "MosesArulvin4",
            status: 'MosesArulvin4 is online',
            imageUrl: 'https://fakeimg.pl/350/?text=MosesArulvin4' 
        }
    ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
        <ScrollView
            style={styles.container}
            scrollEnabled={false}
        >
            {
                contacts.map(({uid, name, status, imageUrl}) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{uri: imageUrl}} style={styles.userImage}/>
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: 'gray',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width:60,
        height:60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName:{
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    userStatus:{
        fontSize: 12
    }
})