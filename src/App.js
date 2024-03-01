import './App.css';
import CardList from './CardGrabber';
import { useState } from 'react';
function App() {

  const [selectedCardType, setSelectedCardType] = useState("all");
  const [selectedAttribute, setSelectedAttribute] = useState("")

  const handleChange = (event) => {
    if(event.target.id === 'cardtype'){
      setSelectedCardType(event.target.value)
    }
  }

  const props = {selectedCardType, selectedAttribute}

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor='Card Type'>Select Card Type: </label>
        <select id="cardtype" name="cardtype" defaultValue={selectedCardType} onChange={handleChange}>
          <option value="all"></option>
          <option value="Monster">Monster</option>
          <option value="Spell">Spell</option>
          <option value="Trap">Trap</option>
        </select>
        <CardList {...props}/>
      </header>
    </div>
  );
}

export default App;
