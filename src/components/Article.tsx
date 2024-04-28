interface ArticleProps {
  author: string;
  title: string;
  url: string;
}

export const Article: React.FC<ArticleProps> = ({ author, title, url }) => {
  let mobiletitleContent = title.slice(0, 100) + '...';

  let container: string =
    'rounded my-2 px-5 py-5 bg-stone-950 text-white h-22 mx-2 border border-stone-700 hover:shadow-stone-400/50 transition';
  let author_style: string = 'text-bold text-xl mb-1';
  let titlestyle: string = 'text-xs hidden sm:block';
  let mobileTitleStyle = 'text-xs sm:hidden';
  let urlstyle: string = 'flex items-end text-xs';
  let button: string = 
    'bg-blue-600 hover:bg-blue-700 text-white rounded px-5 py-1 mt-5';
  let buttonDiv: string = 'mt-auto flex-grow'

  return (
    <div className={container}>
      <div className={author_style}>{author}</div>
      <div className={titlestyle}>{title}</div>
      <div className={mobileTitleStyle}>{mobiletitleContent}</div>
      <div className={urlstyle}>
        <div className={buttonDiv}>
          <button className={button}>
            <a href={url}>Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

