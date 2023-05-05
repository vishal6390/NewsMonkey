import React, { useContext, useEffect } from 'react'
import { Navbar } from './Navbar'
import NewsContent from './NewsContent'
import { NewsData } from '../context/NewsDataContext'
import { Box } from '@chakra-ui/react'
import { LoadingScreen } from './LoadingScreen'

export const Homepage = () => {

    const {newsData, setNewsData} = useContext(NewsData)
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        const getNewsData = async () => {
            const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`)
            const parsedData = await data.json()
            setNewsData(parsedData.articles)
        }
        getNewsData()
        // eslint-disable-next-line
    }, [])

  return (
    <Box bgColor='gray.200'>
        <Navbar/>
        {
          newsData ? <NewsContent /> : < LoadingScreen/>
        }
    </Box>
  )
}
