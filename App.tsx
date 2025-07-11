import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ScrollView, Button, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {

  // data-style
  // string 
  const [name, setName] = useState<string>("a");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.JS" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Kenh Toi" },
    { id: 6, title: "Watching Movies" },
    { id: 7, title: "Hoi dap" },
    { id: 8, title: "Hoi dap" },
    { id: 9, title: "Hoi dap" },
    { id: 10, title: "Hoi dap" }
  ])

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

      <Button
        title='Add New'
        onPress={() => alert("tap me")}
      />

      <FlatList
        style={{
          marginTop: 20,
          borderColor: "red",
          borderWidth: 1
        }}
        data={todoList}
        keyExtractor={item => item.id + ""}
        renderItem={({ item }) => {
          return (
            <Text key={item.id}
              style={styles.todo}>
              {item.title}
            </Text>
          )
        }}
      />

      {/* <ScrollView style={{
        marginTop: 20,
        borderColor: "red",
        borderWidth: 1
      }}>
        {todoList.map(todo => {
          return (
            <Text key={todo.id}
              style={styles.todo}>
              {todo.title}</Text>
          )
        })}
      </ScrollView> */}

    </View >
  );
}

const styles = StyleSheet.create({

  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15
  },
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
    marginTop: 50
  },
});
