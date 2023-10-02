import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function PictureDetail ({ route }) {

  const { url, title, copyright, date, explanation } = route.params

  return (
    <ScrollView>

      <View style={styles.container}>
        <Image source={{ uri: url }} style={styles.image}></Image>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.content}>
            <View style={styles.pillContainer}>
              <Ionicons name={'person'} size={16} color={'white'}/>
              <Text style={styles.greyText}>{copyright}</Text>
            </View>
            <View style={styles.pillContainer}>
              <Ionicons name={'calendar'} size={16} color={'white'}/>
              <Text style={styles.greyText}>{date}</Text>
            </View>
          </View>
          <Text>{explanation}</Text>
        </View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    gap:10,
    marginVertical: 15,
  },
  greyText: {
    color: '#4f4f4f',
    fontSize: 12,
  },
  pillContainer: {
    flexDirection: 'row',
    gap: 10,
    borderRadius: 30,
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 15,
    alignItems: 'center',
  },

})