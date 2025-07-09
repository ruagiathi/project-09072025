import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // data-style
  // string 
  const [name, setName] = useState<string>("ruagiathi");

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
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>
      </View>
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
