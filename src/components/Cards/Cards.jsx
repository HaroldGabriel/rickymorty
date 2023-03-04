import Card from '../Card/Card'
import style from '../Cards/Cards.module.css'

export default function Cards ({characters , onClose}) {
  return (
    <div className={style.cardContainer}>
      {characters.map((character)=>{
        return (
          <Card 
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={()=>onClose(character.id)}
            id = {character.id}
          />
        )
      })}
    </div>
  )
}
