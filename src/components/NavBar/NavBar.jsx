import React from 'react'
import { Link } from 'react-router-dom'
import style from './../NavBar/NavBar.module.css'

export default function NavBar() {
  return (
    <div className={style.NavBar}>
        <Link className={style.link} to='/home'>Home</Link>
        <Link className={style.link} to='/'>Login</Link>
        <Link className={style.link} to={'/About'}>Acerca de</Link>
    </div>
  )
}
