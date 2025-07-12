
import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const style = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    }
})

interface IProps {
    addTodo: (v: string) => void;
}
const InputTodo = (props: IProps) => {
    const { addTodo } = props;

    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        addTodo(name);
    }

    return (
        <>
            <View>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline
                    style={style.todoInput} />
                <Button
                    title='Add New'
                    onPress={handleAddNewTodo}
                />
            </View>
        </>
    )
}

export default InputTodo;