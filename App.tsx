import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {

  // data-style
  // string 
  const [name, setName] = useState<string>("a");

  // number
  const [age, setAge] = useState<number>(45);

  // null , undefined, boolean
  const test = null;

  //object array
  const [person, setPerson] = useState({
    name: "ruagiathi",
    age: 45
  });

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={value => setName(value)}
          value={name}
          autoCapitalize='none'
          autoCorrect={false}
          //keyboardType='numeric'
          //maxLength={2}
          multiline
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10
          }} />
        <Text style={styles.text}>{name}</Text>
      </View>

      <Button title='Add New' />

      <Text style={styles.text}>Hello World to
        <Text style={styles.ruagiathi}> Rua Gia Thi</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  ruagiathi: {
    color: "green",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    fontSize: 60, color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
