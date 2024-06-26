import {Link} from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import {useState} from 'react'

export const Navbar = () => {


  const [open, set_open] = useState(true)
  
  let titleStyle = ' cursor-pointer border-stone-950 text-xl mr-2 font-bold'

  let style = ' hover:border-b hover:border-stone-700 px-2 py-1  transition cursor-pointer '
  let link_side_menu = 'border-b border-stone-700 px-5 text-xl py-2 text-stone-200 hover:bg-stone-800'

  let sideMenuStyle = `w-[80vw] h-full bg-stone-950 fixed top-0 left-0 z-50 ${open ? '-translate-x-full' : 'translate-x-none'} transition`
  let backdropStyle = `transition ${!open ? 'fixed' : 'hidden' } opacity-50 bg-stone-950 w-full h-full top-0 left-0 bg-black cursor-pointer z-40`


  return (
    <>
    {/*desktop*/}
    <div className='hidden sm:flex bg-stone-950 text-white px-5 py-2 pt-5'>
      <Link className={titleStyle} to="/"> API </Link>
      <Link className={style} to="/">News</Link>
      <Link className={style} to="/weather">Weather</Link>
      <Link className={style} to="/bitcoin">Bitcoin</Link>
    </div>
    
    {/*mobile*/}
    <div className='sm:hidden flex justify-between bg-stone-950 text-white font-bold px-5 py-2 z-50'>
      <Link className={titleStyle} to='/'> API </Link>
      <div className='cursor-pointer z-50'><HiMenuAlt3 onClick={()=>{set_open(!open)}} className='text-2xl mt-1 cursor-pointer'/></div>
    </div>

    {/*side menu*/}
    <div className={sideMenuStyle}>
      <div className='flex justify-between py-1 px-5'>
        <div className='text-2xl font-bold text-white mt-1'>API</div>
        <div onClick={()=>{set_open(!open)}} className='cursor-pointer text-white font-bold text-2xl py-1'> x </div>

      </div>
      <div className='flex flex-col'>
      <Link className={link_side_menu} to="/" onClick={()=>{set_open(!open)}}>News</Link>
      <Link className={link_side_menu} to="/weather" onClick={()=>{set_open(!open)}} >Weather</Link>
      <Link className={link_side_menu} to="/bitcoin" onClick={()=>{set_open(!open)}} >Bitcoin</Link> 
      </div>
      </div>

      {/*backdrop*/}
      <div className={backdropStyle} onClick={()=>{set_open(!open)}}>
        
      </div>
   
    </>
  )
}
