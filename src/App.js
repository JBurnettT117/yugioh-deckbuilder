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
    }
  }

  const props = {cardName, selectedCardType, selectedAttribute}

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
