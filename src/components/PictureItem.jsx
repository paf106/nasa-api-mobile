import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PictureItem ({ url, title, date, navigation }) {

  const handleOnPress = () => {
    navigation.navigate('PictureDetail', { url, title, date})
  }
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: url }} style={styles.image}/>
        <View>
          <Text style={styles.title} ellipsizeMode={'tail'} numberOfLines={1}>{title}</Text>
          <Text style={styles.greyText}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    padding: 15,
    elevation: 10,
    backgroundColor: '#f6f6f6',
    marginBottom: 15,
    flexDirection: 'row',
    gap: 15,

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  }
  ,
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'white',
  }
  ,
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
  ,
  greyText: {
    color: 'grey',
    fontSize: 16,
  }
})