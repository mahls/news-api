import useSWR from 'swr'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import {Article} from './Article.tsx'
import { AxiosResponse } from 'axios';

let Card = ({title, data, borderColor}) => {

  let container = 
    `border ${borderColor} text-white backdrop-blur-md bg-stone-800/50 text-stone-200 rounded px-5 py-5 mt-5 mx-5 sm:h-[25vh]`

  return(
    <div className={container}>
      <div className='font-bold pb-5 text-xl flex justify-center'>
        {title}
      </div>
      <div className='font-bold text-7xl flex justify-center'>
        {data}
      </div>
    </div>
  )
}

export const Weather = () => {

  let lat = '37'
  let lon = '144'
  let url2 = 'https://api.open-meteo.com/v1/forecast?latitude=27&longitude=153&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'

  let cardStyle = 'bg-stone-800 rounded text-8xl h-[50vh]'

  const fetcher = (url: string): Promise<any> => {
    return axios.get(url2).then((res: AxiosResponse<any>) => res.data);
  };
  
  const { data, error, isLoading } = useSWR(url2, fetcher);

  if (error) return <div>failed to load</div>;
  
  if (isLoading) return(
    <div className='px-5 flex justify-center mb-2 h-screen bg-stone-900 align-center items-center'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )

  let temp = data.current_weather.temperature
  let windspeed = data.current_weather.windspeed
  let winddirection = data.current_weather.winddirection

  return(
    <div className='flex flex-col h-screen bg-stone-900 sm:grid sm:grid-cols-3'>
      <Card title="Temperature" data={temp} borderColor="border-orange-400"/>
      <Card title="Wind Speed" data={windspeed} borderColor="border-violet-400"/>
      <Card title="Wind Direction" data={winddirection} borderColor='border-green-400'/>
    </div>
  ) 

}
