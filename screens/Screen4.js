import { Image } from 'expo-image';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    const openGitHub = () => {
        Linking.openURL('https://github.com/AnaCarolinaFreitas');
    };
    
    const openLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/in/ana-carolina-garcia-freitas-4907b52b1/');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/avatar.png")}
                style={styles.profileImage}
            />
            <Text style={styles.name}>Ana Carolina Freitas</Text>
            <Text style={styles.description}>
                Desenvolvedora Frontend | React Native | JavaScript | TypeScript | Node.js
            </Text>

            <Text style={styles.social}>Redes sociais</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={openGitHub} >
                <Ionicons name="logo-github" size={40} color="#6c3baa" />
                </TouchableOpacity>
                <TouchableOpacity onPress={openLinkedIn}>
                <Ionicons name="logo-linkedin" size={40} color="#6c3baa" />
                </TouchableOpacity>
            </View>
            </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#6c3baa",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        margin: 20,
    },
    social: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    iconContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    }
});