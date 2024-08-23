import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView, Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';

export default function TabThreeScreen() {
  return (
    <ScrollView style={styles.container}>
         <View style={styles.titleContainer}>
        <Text style={styles.title}>Consejos! / Tips</Text>
        <HelloWave />
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{marginVertical: 10}}>
        Los Certificados de Depósito ofrecen tasas de interés más 
        altas por mantener fondos durante un plazo fijo. / 
        Certificates of Deposit offer higher interest rates for 
        locking in funds for a fixed term.
        </Text>
        <View style={{margin: 7}}>
            <Text style={{fontWeight: '700', fontSize: 16}}>Otros instrumentos Bancarios / Other Banks Instruments</Text>
            <Text>1. Certificado de Deposito / Certificate of Deposit</Text>
            <Text>2. certificados financieros bancarios</Text>
            <Text>3. Valores fiduciarios</Text> 
            <Text>4. Bonos corporativos o de gobierno </Text>
            <Text>5. Cuotas de fondos de inversión</Text>
        </View>
        <Text style={{marginVertical: 10}}>
        Algunos bancos ofrecen fondos mutuos o cuentas de inversión 
        que permiten inversiones diversificadas. / Some banks offer 
        mutual funds or investment accounts that allow for diversified
         investments.
        </Text>
        <Text style={{marginVertical: 10}}>
        Bonos del Gobierno: Invertir en valores gubernamentales a 
        través de bancos puede proporcionar rendimientos estables con 
        menor riesgo. / Government Bonds: Investing in government 
        securities through banks can provide stable returns with lower 
        risk.
        </Text>
        <Text style={{marginVertical: 10}}>
        Inversiones en el Mercado de Valores: Algunos bancos facilitan
         inversiones en el mercado de valores, proporcionando acceso 
         a acciones locales e internacionales. / Stock Market 
         Investments: Some banks facilitate investments in the stock 
         market, providing access to local and international equities.
        </Text>
      </View>
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
    // width: WIDHT * 0.8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
});
