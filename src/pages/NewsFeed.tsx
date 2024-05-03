import useSWR from 'swr'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import {Article} from '../components/Article.tsx'
import { AxiosResponse } from 'axios';

interface FeedProps {
    author: string;
    title: string;
    url: string;
}

export const NewsFeed = () => {

  //api from News API
  //https://newsapi.org/v2/top-headlines?country=au&apiKey=bc7599987fca4c71bdd0e8e598f0772e
  //const apiKey = 'bc7599987fca4c71bdd0e8e598f0772e'

  let url = 'https://newsapi.org/v2/top-headlines?country=au&apiKey=bc7599987fca4c71bdd0e8e598f0772e'

  const fetcher = (url: string): Promise<any> => {
    return axios.get(url).then((res: AxiosResponse<any>) => res.data);
  };
  
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div className='h-screen bg-stone-950'><h1>Failed to load</h1></div>;
  
  if (isLoading) return(
    <div className='px-5 flex justify-center mb-2 h-screen bg-stone-950 align-center items-center'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )

  return(
    <div className='px-5 py-5 bg-stone-950 flex flex-col sm:grid sm:grid-cols-3'>
      {data.articles.map((item: FeedProps , idx: number)=>{return(<Article key={idx} author={item.author} title={item.title} url={item.url}/>)})}
    </div>
  ) 

}
