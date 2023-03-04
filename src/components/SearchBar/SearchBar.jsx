import style from '../SearchBar/SearchBar.module.css'
import { useState } from 'react'

export default function SearchBar ({onSearch}) {

  const [character , setCharacter] = useState("")
  const handleChange = (e)=>{
    console.log(e)
    setCharacter(
      e.target.value
    )
  }

  return (
    <div >
      <input className={style.border} type="search" placeholder='search' onChange={handleChange}/>
      <button className={style.btn} onClick={()=>onSearch(character)} >agregar</button>
    </div>
  )
}
