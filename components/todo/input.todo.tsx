
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

import MineButton from "../button/mine.button";

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
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline
                    style={style.todoInput} />

                <MineButton
                    title="add new"
                    onPress={handleAddNewTodo}
                />
            </View >


        </>
    )
}

export default InputTodo;