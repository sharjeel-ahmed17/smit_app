import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = () => {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    return (
        <View style={styles.container}>
            {/* Email Input */}
            <TextInput
                ref={emailInputRef}
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => console.log('Email input focused')}
            />

            {/* Password Input */}
            <TextInput
                ref={passwordInputRef}
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onFocus={() => console.log('Password input focused')}
            />

            {/* Forgot Password Link */}
            <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={() => console.log('Login button pressed')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    forgotPassword: {
        color: '#007bff',
        textAlign: 'right',
        marginVertical: 10,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginForm;
