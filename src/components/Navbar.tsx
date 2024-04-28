import {Link} from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import {useState} from 'react'

export const Navbar = () => {


  const [open, set_open] = useState(true)
  
  let titleStyle = 'border border-stone-950 text-xl mr-4 font-bold'

  let style = 'border border-stone-700 rounded px-5 py-1 mr-2  transition cursor-pointer '
  let link_side_menu = 'border-b border-stone-800 px-5 text-xl py-2 text-stone-200 hover:bg-stone-800'

  let sideMenuStyle = `w-[80vw] h-full bg-stone-950 fixed top-0 left-0 z-50 ${open ? '-translate-x-full' : 'translate-x-none'} transition`
  let backdropStyle = `transition ${!open ? 'fixed' : 'hidden' } opacity-25 w-full h-full top-0 left-0 bg-black cursor-pointer z-40`


  return (
    <>
    {/*desktop*/}
    <div className='hidden sm:flex bg-stone-950 text-white px-5 py-2'>
      <Link className={titleStyle} to="/"> API </Link>
      <Link className={style} to="/">News</Link>
      <Link className={style} to="/weather">Weather</Link>
      <Link className={style} to="/bitcoin">Bitcoin</Link>
    </div>
    
    {/*mobile*/}
    <div className='sm:hidden flex justify-between bg-stone-950 text-white font-bold px-5 py-2 z-50'>
      <div className={titleStyle}> API </div>
      <div className='cursor-pointer z-50'><HiMenuAlt3 onClick={()=>{set_open(!open)}} className='text-2xl mt-1 cursor-pointer'/></div>
    </div>

    {/*side menu*/}
    <div className={sideMenuStyle}>
      <div className='flex justify-between py-1 px-5'>
        <div className='text-2xl font-bold text-white mt-1'>API</div>
        <div onClick={()=>{set_open(!open)}} className='cursor-pointer text-white font-bold text-2xl py-1'> x </div>

      </div>
      <div className='flex flex-col'>
      <Link className={link_side_menu} to="/" >News</Link>
      <Link className={link_side_menu} to="/weather"  >Weather</Link>
      <Link className={link_side_menu} to="/bitcoin" >Bitcoin</Link> 
      </div>
      </div>

      {/*backdrop*/}
      <div className={backdropStyle} onClick={()=>{set_open(!open)}}>
        
      </div>
   
    </>
  )
}
