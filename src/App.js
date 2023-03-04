import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detalle from './components/Detalle/Detalle'
import Form from './components/Form/Form'
import NavBar from './components/NavBar/NavBar'
import { useState } from 'react'
import { Route,Routes , useLocation } from 'react-router-dom'

function App () {
  const [characters,setCharacters] = useState([])
  const location = useLocation()

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id){
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div >
          <NavBar />
      </div>
      <hr />
      <div>
        {
          location.pathname !== "/" && <Nav onSearch={onSearch}/>
        }
        <Routes>
          <Route 
            path='/'
            element={ <Form /> }
          />
          <Route 
            path='/home'
            element={<Cards
                characters={characters}
                onClose={onClose}
              />}
          />
          <Route 
            path='/About'
            element={<About />}
            />
          <Route 
            path='/detail/:detailId'
            element={ <Detalle />}
          />
        </Routes>
      </div>
      <hr />
      
    </div>
  )
}

export default App
