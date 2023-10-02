import { StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import { getPictureOfLastDays } from '../utils/fechUtil'
import PictureItem from './PictureItem'

export default function PictureOfLastDays ({ nDays, navigation }) {

  const [pictureOfLastDays, setPictureOfLastDays] = useState([{
    url: '',
    title: '',
    date: '',

  }])

  useEffect(() => {
    getPictureOfLastDays(nDays)
      .then(data => setPictureOfLastDays(data))
  }, [])

  return (

    <View>
      {pictureOfLastDays.map((picture, index) => <PictureItem key={index} url={picture.url} title={picture.title}
                                                              date={picture.date} navigation={navigation}/>)}

    </View>

  )
}

const styles = StyleSheet.create({})