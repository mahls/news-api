
export const Article = ({author, title,url}) => {
  
  let container: string = ' rounded mb-2 px-5 py-2 bg-stone-950 text-white h-22' 
  let authorstyle: string = 'text-bold text-xl mb-1'
  let titlestyle: string  = 'text-xs '
  let urlstyle: string = 'text-xs'
  let button: string = ' bg-blue-600 hover:bg-blue-700 text-white rounded px-5 py-1 mt-2'

  return (
    <div className={container}>
      <div className={authorstyle}>{author}</div>
      <div className={titlestyle}>{title}</div>
        <div className={urlstyle}><button className={button}><a href={url}>Read More</a></button></div>
    </div>
  )
}
