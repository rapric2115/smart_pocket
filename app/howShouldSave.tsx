import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserContext } from '../hooks/useContext';


const FirstScreen = () => {
    const {save} = useContext(UserContext);
    const [devide, setDevide] = useState(1)

    console.log('should ', save.result)

    const divition = (months) => {
        setDevide(months)
    }

  
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}}>
        <Pressable onPress={() => divition(3)} style={[styles.pressBtn, {borderTopLeftRadius: 50, borderBottomLeftRadius: 50, overflow: 'hidden'}]}>
            <Ionicons name="reorder-two-outline" size={24} color="white" style={{alignSelf: 'center'}}/>
            <Text style={{alignSelf: 'center', color: 'white'}}> 3 M </Text>
        </Pressable>
        <Pressable onPress={() => divition(6)} style={styles.pressBtn}>
            <Ionicons name="reorder-three-outline" size={24} color="white" style={{alignSelf: 'center'}} />
            <Text style={{alignSelf: 'center', color: 'white'}}> 6 M </Text>
        </Pressable>
        <Pressable onPress={() => divition(12)} style={[styles.pressBtn, {borderTopRightRadius: 50, borderBottomRightRadius: 50, overflow: 'hidden'}]}>
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
      <View style={{padding: 15}}>
        <View style={styles.tableRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="pulse" size={25} color="#fff" style={{alignSelf: 'center'}} />
          </View>
          <Text style={styles.tableText}>Emergencia / Emergency</Text>
          <View style={styles.pillContainer}>
            <Text style={styles.pillText}>${((save.result * 0.245) / devide).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="school" size={25} color="#fff" style={{alignSelf: 'center'}} />
          </View>
          <Text style={styles.tableText}>Educacion / Education</Text>
          <View style={styles.pillContainer}>
            <Text style={styles.pillText}>${((save.result * .195) / devide).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="trending-up" size={25} color="#fff" style={{alignSelf: 'center'}} />
          </View>
          <Text style={styles.tableText}>Inversiones / Invertments</Text>
          <View style={styles.pillContainer}>
            <Text style={styles.pillText}>${((save.result * .155) / devide).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="home-outline" size={25} color="#fff" style={{alignSelf: 'center'}} />
          </View>
          <Text style={styles.tableText}>Casa / House</Text>
          <View style={styles.pillContainer}>
            <Text style={styles.pillText}>${((save.result * .125) / devide).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="pulse" size={25} color="#fff" style={{alignSelf: 'center'}} />
          </View>
          <Text style={styles.tableText}>Retiro / Retirement</Text>
          <View style={styles.pillContainer}>
            <Text style={styles.pillText}>${((save.result * .12)/ devide).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="car-outline" size={25} color="#fff" style={{alignSelf: 'center'}} />
          </View>
          <Text style={styles.tableText}>Carro / Car</Text>
          <View style={styles.pillContainer}>
            <Text style={styles.pillText}>${((save.result * .08)/devide).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={styles.iconContainer}>
            <Ionicons name="glasses" size={25} color="#fff" style={{alignSelf: 'center'}} />
          </View>
          <Text style={styles.tableText}>Vacaciones / Vacation</Text>
          <View style={styles.pillContainer}>
            <Text style={styles.pillText}>${((save.result * .08) / devide).toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Total</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>${(save.result / devide).toFixed(2)}</Text>
        </View>
      </View>
      
      <View style={{marginTop: 10}}>
        <Text style={{padding: 10}}>
            Monitorea el crecimiento de tus ahorros para mantenerte 
            motivado y celebrar los hitos. / Monitor your savings growth 
            to stay motivated and celebrate milestones.
        </Text>
      </View>
       <View style={[styles.tableRow, {padding: 20, marginBottom: 20}]}>
          <Text style={[styles.tableText, {paddingLeft: 25, paddingTop: 20}]}>Planificador / Plan Maker</Text>
          <Ionicons name="add-circle" size={55} color="#E3730A" />                   
        </View>
      
    </ScrollView>
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
  }, 
  tableRow: {
    flexDirection: 'row',
    padding: 5,    
    justifyContent: 'space-between'
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: '#e3730a',
    padding: 4
  },
   iconContainerBtn: {
    borderRadius: 100,
    backgroundColor: '#e3730a',
    padding: 4
  },
  tableText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  pillContainer: {
    backgroundColor: '#0b3a73',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 15,
    // paddingVertical: 2
  },
  pillText: {
    color: '#fff',
    textAlign: 'center'
  }
 });
