import useSWR from 'swr'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import {Article} from './Article.tsx'
import { AxiosResponse } from 'axios';


export const Weather = () => {

  let API = '814325d99c0705e71d8c81b2a4810134'
  let lat = '27'
  let lon = '153'
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`

  const fetcher = (url: string): Promise<any> => {
    return axios.get(url).then((res: AxiosResponse<any>) => res.data);
  };
  
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  
  if (isLoading) return(
    <div className='px-5 flex justify-center mb-2 h-screen bg-stone-900 align-center items-center'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )

  return(
    <div className='h-screen bg-stone-900'>
      {console.log({data})}
    </div>
  ) 

}
