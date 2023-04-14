import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [isValor, setIsValor] = useState(0);
  const [isFirstInput, setIsFirstInput] = useState(0);
  const [isLastInput, setIsLastInput] = useState(0);
  const [result, setResult] = useState();

  const convertValue = {
    BRL: {
      BRL: 1,
      USD: 0.2,
      EUR: 0.18,
    },
    USD: {
      USD: 1,
      BRL: 4.96,
      EUR: 0.91,
    },
    EUR: {
      EUR: 1,
      BRL: 5.46,
      USD: 1.1,
    },
  };

  function calcular() {
    if (isFirstInput === 0 || isLastInput === 0) {
      alert('É obrigatório digitar os dois valores');
      return;
    } else {
      const value = convertValue[isFirstInput][isLastInput];
      const resultado = (value * isValor).toFixed(2);
      setResult(resultado);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ marginTop: '25%', fontSize: 30 }}>
            Conversor de Moedas
          </Text>
          <Text style={{ marginTop: '1%', fontSize: 20 }}>
            Dólar, Real e Euro
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Valor"
            placeholderTextColor="black"
            keyboardType="numeric"
            onChangeText={(numero) => setIsValor(numero)}></TextInput>
          <View style={styles.container}>
            <Text style={{ marginTop: '10%', fontSize: 20 }}>De</Text>
          </View>
        </View>
        <Picker
          style={styles.picker}
          selectedValue={isFirstInput}
          onValueChange={(itemValue, itemIndex) => setIsFirstInput(itemValue)}>
          <Picker.Item key={1} value={0} label="Selecione" />
          <Picker.Item key={2} value={'USD'} label="Dolar" />
          <Picker.Item key={3} value={'BRL'} label="Real" />
          <Picker.Item key={4} value={'EUR'} label="Euro" />
        </Picker>

        <View style={styles.container}>
          <Text style={{ marginTop: '10%', fontSize: 20 }}>Para</Text>
        </View>
        <Picker
          style={styles.picker}
          selectedValue={isLastInput}
          onValueChange={(itemValue, itemIndex) => setIsLastInput(itemValue)}>
          <Picker.Item key={1} value={0} label="Selecione" />
          <Picker.Item key={2} value={'USD'} label="Dolar" />
          <Picker.Item key={3} value={'BRL'} label="Real" />
          <Picker.Item key={4} value={'EUR'} label="Euro" />
        </Picker>
        <View style={styles.container}>
          <Pressable style={styles.btn} onPress={calcular}>
            <Text>Verificar</Text>
          </Pressable>
        </View>

        <Text style={{ marginTop: '5%', fontSize: 30 }}>
          {result ? isLastInput + ': ' + result : ''}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'green',
  },
});
