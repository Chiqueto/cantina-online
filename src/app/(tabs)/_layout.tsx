import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blue',
            headerShown: false,
            tabBarStyle: { borderCurve: 'circular' },
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={18} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="shoppingCart"
                options={{
                    title: 'Carrinho',
                    tabBarIcon: ({ color }) => <FontAwesome size={18} name="shopping-bag" color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'Histórico',
                    tabBarIcon: ({ color }) => <FontAwesome size={18} name="history" color={color} />,
                }}
            />
        </Tabs>
    );
}