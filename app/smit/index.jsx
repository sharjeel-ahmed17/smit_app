import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-5xl">Home</Text>
            <Link href='/smit/tabs'>go to login</Link>

        </View>
    )
}

export default Home