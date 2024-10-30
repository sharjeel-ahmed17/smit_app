import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HorizontalCardList from '../components/Card'
import HeroBanner from '../components/HeroBanner'
import LoginForm from '../components/LoginForm'
import NotifyCard from '../components/NotifyCard'

const Home = () => {
    return (
        <ScrollView>
            <View className="flex-1 bg-blue-200">
                <Text className="mt-10 text-4xl text-red-300">sharjeel ali bari</Text>
                <Link href='/smit'>go to main </Link>
                <Link href='/smit/tabs' className='mt-5 p-3 bg-red-500'>go to tab screen </Link>
                <AntDesign name='stepforward' size={49} color={'blue'} />

                <Text className='text-center text-primary bg-secondary'>hello world </Text>

                <HorizontalCardList />
                <HeroBanner />
                <LoginForm />
                <NotifyCard />
            </View>
        </ScrollView>
    )
}

export default Home

