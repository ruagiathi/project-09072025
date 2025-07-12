
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

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
        //validate
        if (!name) {
            Alert.alert(
                "Thông tin không hợp lệ",
                "Không được để trống",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
            return;
        }
        addTodo(name);
        setName("");
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