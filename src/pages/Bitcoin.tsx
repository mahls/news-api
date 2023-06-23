import useSWR from 'swr'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import {Article} from './Article.tsx'
import { AxiosResponse } from 'axios';


export const Bitcoin = () => {

  let url = 'https://blockchain.info/ticker'
  let url2 = 'https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json'

  const fetcher = (url: string): Promise<any> => {
    return axios.get(url).then((res: AxiosResponse<any>) => res.data);
  };

  const fetcher2 = (url: string): Promise<any> => {
    return axios.get(url).then((res: AxiosResponse<any>) => res.data);
  };
  
  const { data, error, isLoading } = useSWR(url, fetcher);
   const { data2, error2, isLoading2 } = useSWR(url2, fetcher2);

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
      <div className='h-5'></div>
      <div className='flex justify-center sm:flex-none mx-5 py-2 border border-green-500 bg-green-900 rounded font-bold'>
        <div className='text-stone-200 text-xl'>AUD ${data.AUD.last}</div>
      </div>
      <div className='flex justify-center sm:flex-none mx-5 my-5 py-2 border border-purple-500 bg-purple-900 rounded font-bold'>
        <div className='text-stone-200 text-xl'>DKK kr{data.DKK.last}</div>
      </div>
      <div className='flex justify-center sm:flex-none mx-5 py-2 border border-orange-500 rounded bg-orange-900 font-bold'>
        <div className='text-stone-200 text-xl'>JPY  ¥{data.AUD.last}</div>
      </div>
    </div>
  ) 

}
