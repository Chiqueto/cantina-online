import { Link, router } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import "../../global.css";
import Input from "../components/Input";

async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
    router.push('/(tabs)'); // redireciona para as tabs principais
}

export default function Login() {
    const [name, setName] = useState('')
    return (
        <View className="flex items-center justify-center h-full ">
            <View className="absolute top-2 right-4">

                <TouchableOpacity>
                    <Link href={"/signin"} >

                        <Text>Login Bar</Text>
                    </Link>

                </TouchableOpacity>
            </View>
            <View className="flex items-center justify-center w-[80vw] gap-4">
                <Input label="Primeiro, nos diga seu nome:" onChange={setName} placeholder="Nome" value={name} />
                <TouchableOpacity
                    className="bg-orange-300 rounded-lg border border-orange-400 p-2 flex w-full"
                    onPress={() => save('user', name)}
                >
                    <Text className="text-center flex justify-center font-bold text-lg">Continuar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
