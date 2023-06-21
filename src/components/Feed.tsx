import useSWR from 'swr'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import {Article} from './Article.tsx'

interface FeedProps {
  data: {
      author: string;
      title: string;
      url: string;
  };
}


export const Feed = () => {

  //api from News API
  //https://newsapi.org/v2/top-headlines?country=au&apiKey=

  const apiKey = import.meta.env.VITE_API_KEY;
  let url = apiKey

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
    <div className='px-5 py-5 bg-stone-900'>
y      {data.articles.map((item: FeedProps , idx: number)=>{return(<Article key={idx} author={item.author} title={item.title} url={item.url}/>)})}
    </div>
  ) 

}
