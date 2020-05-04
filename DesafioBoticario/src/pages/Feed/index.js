import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import TimeLine from '../../components/TimeLine';
import timeline from "../Feed/timeline.json";

export default function Feed({navigation}) {
  return(
    <View style={styles.container}>
      <FlatList
        data={timeline}
        renderItem={({item}) => <TimeLine {...item}/>}
        keyExtractor= {(item => String(item.id))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ffcc80"
  }
});