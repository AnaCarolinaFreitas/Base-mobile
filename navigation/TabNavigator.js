import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Screen1"
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarActiveTintColor: "#1D4ED8",
                tabBarInactiveTintColor: "#6B7280",
            }}
        >
            <Tab.Screen
                name="Screen1"
                component={Screen1}
                options={{
                    tabBarLabel: "Início",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Screen2"
                component={Screen2}
                options={{
                    tabBarLabel: "Listas",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "list" : "list-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Screen3"
                component={Screen3}
                options={{
                    tabBarLabel: "Imagens",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "image" : "image-outline"} size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Screen4"
                component={Screen4}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ focused, color }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />,
                }}
            />
            
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 17,
        height: 70,
        backgroundColor: "#D0D1D2",
        borderRadius: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 30,
        paddingTop: 8,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        marginHorizontal: 10,
    },
    tabBarLabel: {
        fontSize: 12,
    },
});