import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


const FirstScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}}>
        <Pressable style={[styles.pressBtn, {borderTopLeftRadius: 50, borderBottomLeftRadius: 50, overflow: 'hidden'}]}>
            <Ionicons name="reorder-two-outline" size={24} color="white" style={{alignSelf: 'center'}}/>
            <Text style={{alignSelf: 'center', color: 'white'}}> 3 M </Text>
        </Pressable>
        <Pressable style={styles.pressBtn}>
            <Ionicons name="reorder-three-outline" size={24} color="white" style={{alignSelf: 'center'}} />
            <Text style={{alignSelf: 'center', color: 'white'}}> 6 M </Text>
        </Pressable>
        <Pressable style={[styles.pressBtn, {borderTopRightRadius: 50, borderBottomRightRadius: 50, overflow: 'hidden'}]}>
            <Ionicons name="reorder-four-outline" size={24} color="white" style={{alignSelf: 'center'}}/>
            <Text style={{alignSelf: 'center', color: 'white'}}> 12 M </Text>
        </Pressable>      
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{padding: 10}}>
            Según economistas y expertos en finanzas, esta es la forma 
            ideal de comenzar tu ahorro y alcanzar tus metas financieras. / 
            According to economists and finance experts, this is the ideal 
            approach to kickstart your savings and achieve your financial 
            goals.
        </Text>
      </View>
      
      
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pressBtn: {
    backgroundColor: '#e3730a',
    width: 100,
    padding: 5
  }
 });
