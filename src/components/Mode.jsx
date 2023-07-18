import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { MdDarkMode,MdOutlineLightMode } from "react-icons/md";

const Mode = () => {
    const{setMode,mode} = useContext(AppContext);
    function modeHandler() {
        setMode( (prev)=>(
            !prev
            )
        )
        
    }
  return (
    <div onClick={modeHandler}>{mode?(<MdDarkMode size={40}/>):(<MdOutlineLightMode size={40}/>)}</div>
  )
}

export default Mode