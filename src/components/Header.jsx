import { View, Text, Image, StyleSheet } from 'react-native'

export default function Header(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore</Text>
      <Image source={require('../../assets/nasa-logo.png')} style={styles.headerImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#014cee',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',

  }

})