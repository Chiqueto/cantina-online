import { Text, TextInput, View } from "react-native";

interface InputProps {
    label?: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void
}

const Input = ({ label, placeholder, value, onChange }: InputProps) => {
    return (
        <View className="w-full flex flex-col gap-2">
            {label && <Text className="">{label}</Text>}
            <TextInput editable maxLength={40} value={value} onChangeText={text => onChange(text)} className="bg-zinc-100 border border-zinc-400 flex w-full rounded-xl p-2" placeholder={placeholder} />

        </View>
    );
}

export default Input;