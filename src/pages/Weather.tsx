import useSWR from 'swr'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { AxiosResponse } from 'axios';

let Card = ({title, data, borderColor}: {title:any, data:any, borderColor:any}) => {

  let container = 
    `border ${borderColor} text-white backdrop-blur-md bg-stone-950/50 text-stone-200 rounded px-5 py-5 mt-5 mx-5 sm:h-[25vh]`

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

  //let lat = '37'
  //let lon = '144'
  let url2 = 'https://api.open-meteo.com/v1/forecast?latitude=27&longitude=153&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'


  const fetcher = async (): Promise<any> => {
    return axios.get(url2).then((res: AxiosResponse<any>) => res.data);
  };
  
  const { data, error, isLoading } = useSWR(url2, fetcher);

  if (error) return <div>failed to load</div>;
  
  if (isLoading) return(
    <div className='px-5 flex justify-center mb-2 h-screen bg-stone-950 align-center items-center'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )

  let temp = data.current_weather.temperature
  let wind_speed = data.current_weather.windspeed
  let wind_direction = data.current_weather.winddirection

  return(
    <div className='flex flex-col h-screen bg-stone-950 sm:grid sm:grid-cols-3 gap-3'>
      <Card title="Temperature" data={temp} borderColor="border-orange-400"/>
      <Card title="Wind Speed" data={wind_speed} borderColor="border-violet-400"/>
      <Card title="Wind Direction" data={wind_direction} borderColor='border-green-400'/>
    </div>
  ) 

}
