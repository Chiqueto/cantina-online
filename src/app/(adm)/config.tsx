import { router } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { useState } from "react";
import { Text, View } from "react-native";
import "../../global.css";

async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
    router.push('/(tabs)'); // redireciona para as tabs principais
}

export default function Config() {
    const [name, setName] = useState('')
    return (
        <View className="flex items-center justify-center h-full ">
            <Text>Testeee</Text>



        </View>
    );
}
