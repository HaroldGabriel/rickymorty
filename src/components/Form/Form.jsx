import React from 'react'
import style from './../Form/Form.module.css'
import rick from './../../assets/rick.jpg'

export default function Form() {
  return (
    <div>
        <form className={style.form}>
          <div className={style.login}>
            <div>
                <label>Username: </label>
                <input type="text" />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" />
            </div>
            <button>login</button>
            </div>
            <img className={style.imagen} src={rick} alt='rick'/>
        </form>
    </div>
  )
}
