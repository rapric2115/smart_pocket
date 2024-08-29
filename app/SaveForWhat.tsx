import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { UserContext } from '../hooks/useContext';
import { useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';


const FirstScreen = () => {
    const { mySaving, dateThatIWantIt, year, month, day, totalDay, totalWeeks } = useContext(UserContext);
    const [futureDay, setFutureDay] = useState<string>();
    const [interestRate, setInterestRate ] = useState(0);
    const [extra, setExtra] = useState<number>(0);

    function formatDateString() {
        // Create a Date object from the input string
        const date = new Date(dateThatIWantIt);
      
        // Define options for formatting
        const options = { weekday: 'short', year: '2-digit', month: 'short', day: '2-digit' };
      
        // Use Intl.DateTimeFormat to format the date
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
      
        // Replace commas and format the output
        const dday = formattedDate.replace(/,/g, '').replace(/\s+/g, ' ').trim();
        setFutureDay(dday);
      }

      const Capitalize = () => {
          if (interestRate >= 0) {
            const totalSaving = +mySaving.saveIt; // Total savings
            const interest = totalSaving * (+interestRate / 100); // Calculate interest
            const totalWithInterest = totalSaving + interest; // Total savings plus interest
            const secondInterest: number = totalWithInterest * (+interestRate / 100);
            setExtra(secondInterest); // Set the total amount with interest
        }
    }
     
      useEffect(() => {
        formatDateString();
        Capitalize();
      }, [dateThatIWantIt, interestRate])
        
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Yo Quiero una / I want a - {mySaving.forWhat}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="attach-money" size={35} color="#595BD4" />
                <View>
                <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Total</Text>
                <Text style={{marginHorizontal: 10}}>Total</Text>
                </View>
            </View>
            <Text style={{fontWeight: '600', fontSize: 18}}>$ {mySaving.saveIt}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="arrow-right-top" size={35} color="#595BD4" />
                <View>
                <Text style={{marginHorizontal: 10, fontWeight: '600'}}>A Completar</Text>
                <Text style={{marginHorizontal: 10}}>Paidoff Date</Text>
                </View>
            </View>
            <View>
                <Text style={{fontWeight: '600', fontSize: 18}}>{futureDay}</Text>
                <Text style={{ alignSelf: 'flex-end'}}>{year} y - {month} m - {day} d</Text>
            </View>
            
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
            <MaterialCommunityIcons name="arrow-right-bottom" size={35} color="#595BD4" />
                <View>
                <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Pago Mensual</Text>
                <Text style={{marginHorizontal: 10}}>Monthly Paidment</Text>
                </View>
            </View>
            <Text style={{fontWeight: '600', fontSize: 18}}>$ {(mySaving.saveIt / (month === 0 ? 1 : month)).toFixed(2)}</Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}}>
            <View style={[styles.pressBtn, {borderTopLeftRadius: 50, borderBottomLeftRadius: 50, overflow: 'hidden'}]}>
                <Text  style={{alignSelf: 'center', color: 'white'}}>Daily</Text>
                <Text  style={{alignSelf: 'center', color: 'white',fontWeight: 'bold'}}>{(mySaving.saveIt / totalDay).toFixed(2)}</Text>
            </View>
            <View style={styles.pressBtn}>
                <Text  style={{alignSelf: 'center', color: 'white'}}>Weekly</Text>
                <Text  style={{alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>{(mySaving.saveIt / totalWeeks).toFixed(2)}</Text>
            </View>
            <View style={[styles.pressBtn, {borderTopRightRadius: 50, borderBottomRightRadius: 50, overflow: 'hidden'}]}>
                <Text  style={{alignSelf: 'center', color: 'white'}}>Monthly</Text>
                <Text  style={{alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>{(mySaving.saveIt / (month === 0 ? 1 : month)).toFixed(2)}</Text>
            </View>
        </View>
        <View style={{marginTop: 25, marginBottom: 50}}>
            <Text style={{fontWeight: '700', fontSize: 16}}>Invención bancaria para ayudarte a 
                alcanzar más rápido tu meta / Bank Invention to help you reach faster your  
                goal
            </Text>
            <Text style={{fontWeight: '700', fontSize: 16}}>Instrumentos Bancarios / Banks Instruments</Text>
            <Text>1. Certificado de Deposito / Certificate of Deposit</Text>
            <Text>2. certificados financieros bancarios</Text>
            <Text>3. Valores fiduciarios</Text> 
            <Text>4. Bonos corporativos o de gobierno </Text>
            <Text>5. Cuotas de fondos de inversión</Text>
            <View style={{marginTop: 15}}>
                <Text>Dependiendo del Banco las tasas de interes varian pero puedes 
                    tener una idea seleccionando la tasa de interes.</Text>
                <RNPickerSelect
                    onValueChange={(value) => setInterestRate(value)}
                    items={[
                        { label: '3% de Interes', value: 3 },
                        { label: '4% de Interes', value: 4 },
                        { label: '5% de Interes', value: 5 },
                        { label: '6% de Interes', value: 6 },
                        { label: '7% de Interes', value: 7 },
                    ]}
                    placeholder={{
                        label: 'Seleccione Tasa / Select Interest Rate',
                        value: null,
                        color: '#9EA0A4', // Optional: Customize placeholder text color
                    }}
                />
            </View>
            <View style={{marginTop: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialIcons name="attach-money" size={35} color="#595BD4" />
                        <View>
                        <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Inversion Inicial</Text>
                        <Text style={{marginHorizontal: 10}}>Initial Inverstment</Text>
                        </View>
                    </View>
                    <Text style={{fontWeight: '600', fontSize: 18}}>$ {mySaving.saveIt}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="trending-up" size={35} color="#595BD4" />
                        <View>
                        <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Tasa de Interes</Text>
                        <Text style={{marginHorizontal: 10}}>Interest Rate</Text>
                        </View>
                    </View>
                    <Text style={{fontWeight: '600', fontSize: 18}}>% {(interestRate === 0 ? 3 : interestRate)}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome6 name="money-bill-alt" size={35} color="#595BD4" />
                        <View>
                        <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Ganancia</Text>
                        <Text style={{marginHorizontal: 10}}>Earning</Text>
                        </View>
                    </View>
                    <Text style={{fontWeight: '600', fontSize: 18}}>$ {(mySaving.saveIt * (interestRate === 0 ? 3 : interestRate) / 100 )}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <FontAwesome6 name="money-bill-alt" size={35} color="#595BD4" />
                        <View>
                        <Text style={{marginHorizontal: 10, fontWeight: '600'}}>Ganancia Extra si es capitalizable.</Text>
                        <Text style={{marginHorizontal: 10}}>Extra Earning if Capitalize</Text>
                        </View>
                    </View>
                    <Text style={{fontWeight: '600', fontSize: 18}}>$ {extra}</Text>
                </View>
            </View>
        </View>
       
      
    </ScrollView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 18, 
    fontWeight: '600',
    marginTop: 20
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
