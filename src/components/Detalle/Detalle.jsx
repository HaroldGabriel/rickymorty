import React from 'react'
import { useState , useEffect} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

export default function Detalle() {
  const {detailId} = useParams()
 

  const navigate = useNavigate()
  const handleChange = () => {
    navigate('/home')
  }

  const [character , setCharacter] = useState()

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);
  return (
    <div>
      <div>
        {
          character? (
            <div>
              <div>
                <p>{character.name}</p>
                <p>{character.status}</p>
                <p>{character.specie}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
              </div>
              <div>
                <img src={character.image} alt={character.name}/>
              </div>
            </div>
          ):("")
        }
      </div>
      <button onClick={handleChange}>
      home
      </button>
    </div>
  )
}
