import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Test</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
