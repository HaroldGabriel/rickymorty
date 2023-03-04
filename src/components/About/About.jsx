import React from 'react'
import hecarim from '../../assets/logoOG.png'
import style from './../About/About.module.css'
export default function About() {
  return (
    <div className={style.contenedor}>
        <div className={style.about}>
            <p>Nombre : Harold </p>
            <p>Apellido : Harold </p>
            <p>Edad : 21 </p>
            <p>Nacionalidad : Peru </p>
            <p>Genero : masculino </p>
        </div>
        <div>
            <img className={style.imagen} src={hecarim} alt='hecarim' />
        </div>
    </div>
  )
}
