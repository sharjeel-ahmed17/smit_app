import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const cardData = [
    {
        id: '1',
        title: 'Card 1',
        date: 'October 25, 2024',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        id: '2',
        title: 'Card 2',
        date: 'October 20, 2024',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        id: '3',
        title: 'Card 3',
        date: 'October 15, 2024',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        id: '4',
        title: 'Card 4',
        date: 'October 10, 2024',
        image: 'https://via.placeholder.com/300x200',
    },
];

const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            {/* Image */}
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

            {/* Title */}
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.row}>

                {/* Date */}
                <Text style={styles.date}>{item.date}</Text>

                {/* Button */}
                <TouchableOpacity style={styles.button} onPress={() => console.log(item.title)}>
                    <Text style={styles.buttonText}>Learn More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const HorizontalCardList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cardData}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: '#f9f9f9',
    },
    flatListContainer: {
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginRight: 15,
        overflow: 'hidden',
        width: 300, // Fixed width for each card
    },
    image: {
        width: '100%',
        height: 150,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row', // Align date and button horizontally
        justifyContent: 'space-between', // Space between date and button
        alignItems: 'center', // Align items vertically in the center
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default HorizontalCardList;
