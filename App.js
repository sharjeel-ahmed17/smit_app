import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* left  */}
        <View></View>
        {/* right */}
        <View>
          <Image
            // source={uri('')}
            source={require('./hero.png')}
            width={200}
            height={200}
          />
        </View>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})