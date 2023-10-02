import { format, sub } from 'date-fns'

export const getPictureOfTheDay = () => {

  return fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/planetary/apod?api_key=${process.env.EXPO_PUBLIC_API_KEY}`)
    .then(response => response.json())
    .then(data => data)

}

export const getPictureOfLastDays = (nDays) => {

  const today = new Date()
  const todayDateFormatted = format(today, 'yyyy-MM-dd')
  const lastDaysFormatted = format(sub(today, { days: nDays }), 'yyyy-MM-dd')

  console.log(todayDateFormatted, lastDaysFormatted)

  return fetch(`${process.env.EXPO_PUBLIC_BASE_URL}/planetary/apod?api_key=${process.env.EXPO_PUBLIC_API_KEY}&start_date=${lastDaysFormatted}&end_date=${todayDateFormatted}`)
    .then(response => response.json())
    .then(data => data)

}