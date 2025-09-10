import { Link } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Input from "../components/Input";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View className="flex items-center justify-center h-full">
            <View className="flex items-center justify-center w-[80vw] gap-4">
                <Input label="Email:" onChange={setEmail} placeholder="Nome" value={email} />
                <Input label="Senha:" onChange={setPassword} placeholder="Nome" value={password} />
                <TouchableOpacity className="bg-orange-300 rounded-lg border border-orange-400 p-2 flex w-full">
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