import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HeroBanner = () => {
    return (
        <View style={styles.container}>
            {/* Left Column for Content */}
            <View style={styles.leftColumn}>
                <Text style={styles.heading}>Welcome to Our App</Text>
                <Text style={styles.subHeading}>Your best experience awaits</Text>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/arrow-right.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

            {/* Right Column for Image */}
            <View style={styles.rightColumn}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Creates two columns
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa', // Light background
        height: 200, // Adjust height as needed
    },
    leftColumn: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 10,
    },
    rightColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeading: {
        fontSize: 16,
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75, // Circular image
    },
    button: {
        flexDirection: 'row', // Aligns icon and text horizontally
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HeroBanner;
