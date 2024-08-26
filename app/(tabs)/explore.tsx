import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Button, Image, Platform, View, Text, TextInput, TouchableOpacity, Dimensions, Pressable, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { HelloWave } from '@/components/HelloWave';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useContext } from 'react';
import { UserContext } from '../../hooks/useContext';
import { useRouter  } from 'expo-router';

const WIDHT = Dimensions.get('screen').width;

export default function TabTwoScreen() {
  const router = useRouter();
  const {setDateThatIWantIt, setMySaving} = useContext(UserContext);
  const [date, setDate] = useState(new Date());
  const [display, setDisplay] = useState(false);

  const onChange = (event, selectedDate) => {   
    if (event.type === 'set') { // Check if the date is set
      const currentDate = selectedDate || date; // Use the selected date or fallback to the current date
      setDateThatIWantIt(currentDate);
      setDate(currentDate);
    }
    setDisplay(false); // Hide the date picker after selection
  };

  const showMode = () => {
    setDisplay(true);
  };



  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Como y Cuando alcanzo mi Meta de Ahorro! / How and When I reach my Saving Goal!</Text>
        <HelloWave />
      </View>
      <Formik
        initialValues={{ saveIt: '', forWhat: '' }}
        onSubmit={values => {
          try {
            console.log('from formik', values);
            setMySaving(values);
            router.push('/SaveForWhat')
          } catch(err) {
            console.log(err);
          } 
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.label}>
              <Text>Cuanto voy ahorrar / How much I'm going to save!</Text>
              <TextInput
                onChangeText={(text) => {
                  const numericText = text.replace(/[^0-9]/g, '');
                  handleChange('saveIt')(numericText);
                }}
                onBlur={handleBlur('saveIt')}
                value={values.saveIt}
                style={styles.textInput}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.label}>
              <Text>Para que voy ahorrar / For what I'm going to save!</Text>
              <TextInput
                onChangeText={handleChange('forWhat')}
                onBlur={handleBlur('forWhat')}
                value={values.forWhat}
                style={styles.textInput}
              />
            </View>
            <View>
              <Pressable onPress={showMode} style={styles.btn}>
                <Text style={styles.text}>
                  Seleccione Fecha / Select Date
                </Text>
              </Pressable>
              {display && ( // Conditionally render the DateTimePicker
                <DateTimePicker
                  onChange={onChange}
                  value={date}
                  mode="date" // You can change this to "time" if needed
                  display="default"
                />
              )}

              <Text style={{marginTop: 10, alignSelf: 'center', fontWeight: 'bold'}}>selected: {date.toLocaleString()}</Text>
            </View>
            <View style={styles.label}>
              <Text style={{ fontWeight: '600' }}>
                What to save for to achieve your dream purchases and experiences.
              </Text>
            </View>
            <TouchableOpacity onPressIn={handleSubmit} style={styles.btn}>
              <Text style={styles.text}>Mi meta de Ahorro / My Saving Goal</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
    width: WIDHT * 0.8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  form: {
    marginTop: 35
  },
  label: {
    marginVertical: 15
  },
  textInput: {
    width: '95%',
    height: 50,
    margin: 7,
    backgroundColor: '#ccc',
    borderRadius: 10, 
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  }, 
  btn: {
    width: 305,
    height: 50,
    backgroundColor: '#0b3a73',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
});