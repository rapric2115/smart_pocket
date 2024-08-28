import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const FirstScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>La Mejor Forma de Ahorrar.</Text>
        <Text style={styles.title}>The Best way to Save Money</Text>
        <Image
          source={require('../../assets/images/Savings.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Link href="HelloPage" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vamos a Ahorrar / Let's Save</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#092f5d',
    borderBottomRightRadius: 65,
    borderBottomLeftRadius: 65,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: '60%',
  },
  button: {
    backgroundColor: '#E3730A',
    paddingVertical: 14, // Increased from 12 to 14
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 20,
    alignSelf: 'center',
    minHeight: 48, // Ensure minimum height is 48dp
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
  },
});
