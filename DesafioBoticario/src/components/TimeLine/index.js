import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';

export default function TimeLine({ navigation, user, post }) {
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
    },
    userProfile: {
        fontSize: 16,
        color: "#595959"
    },
    tempo: {
        fontSize: 16,
    },
    textBody: {
        fontSize: 16,
        paddingTop: 2,
    },
    fotoBody: {
        height: 150,
        marginTop: 5,
        borderRadius: 15,
    }
  });