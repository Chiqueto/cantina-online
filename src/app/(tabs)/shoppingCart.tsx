import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ShoppingCart = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        SecureStore.getItemAsync('user')
            .then(user => setUser(user!));
    }, [])

    return (
        <View className='m-2'>
            <View>
                <Text className='font-bold text-lg'>
                    Meu carrinho de compras!
                </Text>
                <Text className='italic'>
                    Finalize sua compra e vá até o bar!
                </Text>
            </View>
        </View>
    );
}

export default ShoppingCart;