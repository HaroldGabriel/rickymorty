import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card (props) {
  return (
    <div>
      <div className={style.container}>
        
          <button className={style.btndelete} onClick={props.onClose}>X</button>
          <Link to={`/detail/${props.id}`}>
          <div className={style.tittle}>{props.name}</div>
          </Link>

          <div className={style.tittle}>{props.species}</div>
          <div className={style.tittle}>{props.gender}</div>
      </div>
      <div><img src={props.image} alt={props.name} /></div>
    </div>
  )
}
