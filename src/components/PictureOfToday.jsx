import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { getPictureOfTheDay } from '../utils/fechUtil'

export default function PictureOfToday ({ navigation }) {

  const [pictureOfToday, setPictureOfToday] = useState({
    url: '',
    title: '',
    date: '',
    copyright: '',
  })

  useEffect(() => {
    getPictureOfTheDay()
      .then(data => setPictureOfToday(data))
  }, [])

  const handleOnPress = () => {
    navigation.navigate('PictureDetail', { ...pictureOfToday })
  }

  const fixText = (text) => text.replace(/\n/g, '')

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={{ uri: pictureOfToday.url }} style={styles.image}></Image>
        <View>
          <Text style={styles.title}>{pictureOfToday.title}</Text>
          <View style={styles.content}>
            <Text style={styles.greyText}>{fixText(pictureOfToday.copyright)}</Text>
            <Text style={styles.greyText}>{pictureOfToday.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    elevation: 10,
    backgroundColor: '#f6f6f6',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  greyText: {
    color: 'grey',
    fontSize: 16,
  }
})