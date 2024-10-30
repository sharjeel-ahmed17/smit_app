import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimpleCard = ({ title, description, date }) => {
    return (
        <View style={styles.card}>
            {/* Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Description */}
            <Text style={styles.description}>{description}</Text>

            {/* Date */}
            <Text style={styles.date}>{date}</Text>
        </View>
    );
};

const NotifyCard = () => {
    return (
        <View style={styles.container}>
            <SimpleCard
                title="Card Title"
                description="This is a simple description of the card."
                date="October 25, 2024"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,  // For Android shadow
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 15,
    },
    date: {
        fontSize: 12,
        color: '#999',
    },
});

export default NotifyCard;
