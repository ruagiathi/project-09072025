import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const style = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 20,
        padding: 15
    },
})

interface IProps {
    todoList: ITodo[]
    deleteTodo: (v: number) => void;
}

const ListTodo = (props: IProps) => {
    const { todoList, deleteTodo } = props;
    return (
        <>
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
                        <TouchableOpacity>
                            <Text
                                style={style.todo}
                                onPress={() => deleteTodo(item.id)}
                            >
                                {item.title}
                            </Text >
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

export default ListTodo;