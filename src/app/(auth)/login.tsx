import { useState } from "react";
import { View } from "react-native";
import "../../global.css";
import Input from "../components/Input";

export default function Login() {
    const [name, setName] = useState('')
    return (
        <View className="flex items-center justify-center h-full">
            <View className="flex items-center justify-center w-[80vw]">
                <Input label="Primeiro, nos diga seu nome:" onChange={setName} placeholder="Nome" value={name} />
            </View>
        </View>
    );
}
