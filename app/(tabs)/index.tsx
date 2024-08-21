import { Button, StyleSheet, TextInput, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { Formik } from 'formik';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter  } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Meta de Ahorro! / Saving Goal!</Text>
        <HelloWave />
      </View>
      <Formik
        initialValues={{ incomes: '', outcomes: '' }}
        onSubmit={values => {
          try {
            console.log(values);
            router.push('/howShouldSave')
          } catch(err) {
            console.log(err)
          } 
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.form}>
          <View style={styles.label}>
            <Text>Ingresos / Incomes</Text>
              <TextInput
                onChangeText={handleChange('incomes')}
                onBlur={handleBlur('incomes')}
                value={values.incomes}
                style={styles.textInput}
              />
          </View>
           <View style={styles.label}>
              <Text>Gastos Fijos / Fixed Outcomes</Text>
              <TextInput
                onChangeText={handleChange('outcomes')}
                onBlur={handleBlur('outcomes')}
                value={values.outcomes}
                style={styles.textInput}
              />
            </View>
            <View style={styles.label}>
              <Text>
                Ahorrar es tu aventura! Cada peso cuenta y te acerca a tus suños. 
                / Saving is your adventure! Each dollar brings you closer to 
                dreams —This is how you should save. Let’s make every penny 
                count!
              </Text>
            </View>
            <TouchableOpacity onPressIn={handleSubmit} style={styles.btn}>
              <Text style={styles.text}>Generar Reporte / Generate Report</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: '#fff',
    padding: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
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
  }
});
