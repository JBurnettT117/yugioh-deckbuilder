import './App.css';
import CardList from './CardGrabber';
import { useState } from 'react';
function App() {

  const [cardName, setCardName] = useState("");
  const [selectedCardType, setSelectedCardType] = useState("all");
  const [selectedAttribute, setSelectedAttribute] = useState("all");
  const [monsterType, setMonsterType] = useState("all");

  const handleChange = (event) => {
    if(event.target.id === 'cardname'){
      setCardName(event.target.value)
    } else if(event.target.id === 'cardtype'){
      setSelectedCardType(event.target.value)
    } else if(event.target.id === 'cardattribute'){
      setSelectedAttribute(event.target.value)
    } else if(event.target.id === 'cardrace'){
      console.log(event.target.value)
      setMonsterType(event.target.value)
    }
  }

  const props = {cardName, selectedCardType, selectedAttribute, monsterType}

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='filters'>
            <label htmlFor='Card Name'>Card Name:</label>
            <input type='text' id="cardname" name='cardtype' defaultValue={cardName} onChange={handleChange}></input>
            <label htmlFor='Card Type'>Select Card Type: </label>
            <select id="cardtype" name="cardtype" defaultValue={selectedCardType} onChange={handleChange}>
              <option value="all"></option>
              <option value="Monster">Monster</option>
              <option value="Spell">Spell</option>
              <option value="Trap">Trap</option>
            </select>
            {selectedCardType === "Monster" && 
            <>
            <label htmlFor='Monster Attribute'>Select Attribute: </label>
            <select id="cardattribute" name="cardattribute" defaultValue={selectedAttribute} onChange={handleChange}>
              <option value="all"></option>
              <option value="LIGHT">Light</option>
              <option value="DARK">Dark</option>
              <option value="WATER">Water</option>
              <option value="FIRE">Fire</option>
              <option value="EARTH">Earth</option>
              <option value="WIND">Wind</option>
              <option value="DIVINE">Divine</option>
            </select>
            </>
            }
            {selectedCardType === "Monster" && 
            <>
            <label htmlFor='Monster Type'>Select Type: </label>
            <select id="cardrace" name="cardrace" defaultValue={monsterType} onChange={handleChange}>
              <option value="all"></option>
              <option value="Aqua">Aqua</option>
              <option value="Beast">Beast</option>
              <option value="Beast-Warrior">Beast-Warrior</option>
              <option value="Creator God">Creator God</option>
              <option value="Cyberse">Cyberse</option>
              <option value="Dinosaur">Dinosaur</option>
              <option value="Divine-Beast">Divine-Beast</option>
              <option value="Dragon">Dragon</option>
              <option value="Fairy">Fairy</option>
              <option value="Fiend">Fiend</option>
              <option value="Fish">Fish</option>
              <option value="Insect">Insect</option>
              <option value="Illusion">Illusion</option>
              <option value="Machine">Machine</option>
              <option value="Plant">Plant</option>
              <option value="Psychic">Psychic</option>
              <option value="Pyro">Pyro</option>
              <option value="Reptile">Reptile</option>
              <option value="Rock">Rock</option>
              <option value="Sea Serpent">Sea Serpent</option>
              <option value="Spellcaster">Spellcaster</option>
              <option value="Thunder">Thunder</option>
              <option value="Warrior">Warrior</option>
              <option value="Winged Beast">Winged Beast</option>
              <option value="Wyrm">Wyrm</option>
              <option value="Zombie">Zombie</option>
            </select>
            </>
            }
          </div>
          <div className='card_list'>
            <CardList {...props}/>
          </div>
        </div>        
      </header>
    </div>
  );
}

export default App;
