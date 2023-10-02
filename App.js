import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/views/Home'
import PictureDetail from './src/views/PictureDetail'

export default function App () {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#014cee',
        },
        headerTintColor: '#fff',
      }}>
        <Stack.Screen name="Home" component={Home} options={
          { headerShown: false, }
        }/>
        <Stack.Screen name="PictureDetail" component={PictureDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
