import auth from '@react-native-firebase/auth';
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Input from "../components/Input";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Erro', 'Preencha email e senha.');
            return;
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                // O login é gerenciado pelo 'onAuthStateChanged' (veja próximo exemplo)
                Alert.alert('Sucesso!', 'Usuário logado!');
                router.push('/shoppingCart');
            })
            .catch(error => {
                Alert.alert('Erro', 'Email ou senha incorretos.');
            });
    };
    return (
        <View className="flex items-center justify-center h-full">
            <View className="flex items-center justify-center w-[80vw] gap-4">
                <Input label="Email:" onChange={setEmail} placeholder="Nome" value={email} />
                <Input label="Senha:" onChange={setPassword} placeholder="Nome" value={password} />
                <TouchableOpacity className="bg-orange-300 rounded-lg border border-orange-400 p-2 flex w-full" onPress={handleLogin}>
                    <Text className="text-center flex justify-center font-bold text-lg">Continuar</Text>

                </TouchableOpacity>
            </View>
            <View>

                <TouchableOpacity>
                    <Link href={"/login"} >

                        <Text>Login Usuário</Text>
                    </Link>

                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignIn;