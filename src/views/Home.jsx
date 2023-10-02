import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import PictureOfToday from '../components/PictureOfToday'
import Constants from 'expo-constants/src/Constants'
import PictureOfLastDays from '../components/PictureOfLastDays'

export default function Home ({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Imagen del día</Text>
          <PictureOfToday navigation={navigation}/>
          <Text style={styles.title}>Imágenes anteriores</Text>
          <PictureOfLastDays nDays={3} navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' && Constants.statusBarHeight,
    backgroundColor: '#002a83',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
    marginBottom: 15,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  }
})