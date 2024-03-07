import './App.css';
import CardList from './CardGrabber';
import { useState } from 'react';

function App() {

  const [cardName, setCardName] = useState("");
  const [cardLevel, setCardLevel] = useState("all");
  const [cardDescription, setCardDescription] = useState("");
  const [selectedCardType, setSelectedCardType] = useState("all");
  const [selectedAttribute, setSelectedAttribute] = useState("all");
  const [monsterType, setMonsterType] = useState("all");
  const [spellType, setSpellType] = useState("all");
  const [trapType, setTrapType] = useState("all");

  const handleChange = (event) => {
    if(event.target.id === 'cardname'){
      setCardName(event.target.value);
    } else if(event.target.id === 'carddescription'){
      setCardDescription(event.target.value);
    } else if(event.target.id === 'cardtype'){
      setSelectedCardType(event.target.value);
    } else if(event.target.id === 'cardattribute'){
      setSelectedAttribute(event.target.value);
    } else if(event.target.id === 'cardrace'){
      setMonsterType(event.target.value);
    } else if(event.target.id === 'cardlevel'){
      setCardLevel(event.target.value);
    } else if(event.target.id === 'spelltype'){
      setSpellType(event.target.value);
    } else if(event.target.id === 'traptype'){
      setTrapType(event.target.value);
    }
  }

  const props = {cardName, cardDescription, selectedCardType, selectedAttribute, monsterType, cardLevel, spellType, trapType}

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='filters'>
            <label htmlFor='Card Name'>Card Name:</label>
            <input type='text' id="cardname" name='cardname' defaultValue={cardName} onChange={handleChange}></input>
            <label htmlFor='Card Name'>Card Description:</label>
            <input type='text' id="carddescription" name='carddescription' defaultValue={cardDescription} onChange={handleChange}></input>
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
            {selectedCardType === "Monster" &&
            <>
              <label htmlFor='Monster Level'>Select Level: </label>
              <select id="cardlevel" name="cardlevel" defaultValue={cardLevel} onChange={handleChange}>
                <option value="all"></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
            </>
            }
            {selectedCardType === "Spell" &&
            <>
              <label htmlFor='Spell Type'>Select Spell Type: </label>
              <select id="spelltype" name="spelltype" defaultValue={spellType} onChange={handleChange}>
                <option value="all"></option>
                <option value="Normal">Normal</option>
                <option value="Continuous">Continuous</option>
                <option value="Equip">Equip</option>
                <option value="Quick-Play">Quick-Play</option>
                <option value="Field">Field</option>
                <option value="Ritual">Ritual</option>
              </select>
            </>
            }
            {selectedCardType === "Trap" &&
            <>
              <label htmlFor='Trap Type'>Select Spell Type: </label>
              <select id="traptype" name="traptype" defaultValue={trapType} onChange={handleChange}>
                <option value="all"></option>
                <option value="Normal">Normal</option>
                <option value="Continuous">Continuous</option>
                <option value="Counter">Counter</option>
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
