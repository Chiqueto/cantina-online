import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const History = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        SecureStore.getItemAsync('user')
            .then(user => setUser(user!));
    }, [])

    return (
        <View className='m-2'>
            <View>
                <Text className='font-bold text-lg'>
                    Meu histórico!
                </Text>
                <Text className='italic'>
                    Veja todas as suas compras já feitas!
                </Text>
            </View>
        </View>
    );
}

export default History;