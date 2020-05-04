import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default function TimeLine({ user, post }) {
    return(
    <View style={styles.container}>
        <Image 
            style={styles.fotoProfile}
            source={{ uri: user.picture}}
        />  
        <View style={styles.content}>  
            <View style= {styles.headerUser}>
                <Text style={styles.nomeProfile}>{user.nickname}</Text>
                <Text style={styles.userProfile}> { `@${user.account}`}</Text>
                <Text style={styles.tempo}> - 3h</Text>
            </View>
            {post.text && 
            <Text 
                style={styles.textBody}>
                {post.text}
            </Text>}
            <View style={styles.fotoBody}>
                {post.media && 
                <Image 
                    style={styles.fotoBody}
                    source={{ uri: post.media}}
                />}
            </View>
        </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 7,
        //backgroundColor: "#FFF"
    },
    fotoProfile: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    content: {
        flex:1,
        paddingLeft: 10,
    },
    headerUser: {
        flexDirection: "row",
    },
    nomeProfile: {
        flexDirection: "row",
        flexShrink: 1,
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    userProfile: {
        fontSize: 16,
        color: "#262626"
    },
    tempo: {
        fontSize: 16,
        color: "#000"
    },
    textBody: {
        fontSize: 16,
        color: "#000",
        paddingTop: 2,
    },
    fotoBody: {
        height: 150,
        marginTop: 5,
        borderRadius: 15,
    }
  });