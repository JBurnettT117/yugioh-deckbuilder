import React from 'react';

// Reusable search-criteria sidebar. Same fields, same behavior as the
// original deck builder filters, just parameterized so multiple pages can
// each own their own filter state while sharing this UI.
const Filters = ({ filters, onChange }) => {
    const {
        cardName,
        cardDescription,
        selectedCardType,
        selectedAttribute,
        monsterType,
        cardLevel,
        monsterCardType,
        spellType,
        trapType,
    } = filters;

    return (
        <div className='filters'>
            <label htmlFor='cardname'>Card Name:</label>
            <input type='text' id="cardname" name='cardname' value={cardName} onChange={onChange}></input>
            <label htmlFor='carddescription'>Card Description:</label>
            <input type='text' id="carddescription" name='carddescription' value={cardDescription} onChange={onChange}></input>
            <label htmlFor='cardtype'>Select Card Type: </label>
            <select id="cardtype" name="cardtype" value={selectedCardType} onChange={onChange}>
                <option value="all"></option>
                <option value="Monster">Monster</option>
                <option value="Spell">Spell</option>
                <option value="Trap">Trap</option>
            </select>
            {selectedCardType === "Monster" &&
            <>
                <label htmlFor='cardattribute'>Select Attribute: </label>
                <select id="cardattribute" name="cardattribute" value={selectedAttribute} onChange={onChange}>
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
                <label htmlFor='cardrace'>Select Type: </label>
                <select id="cardrace" name="cardrace" value={monsterType} onChange={onChange}>
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
                <label htmlFor='cardlevel'>Select Level: </label>
                <select id="cardlevel" name="cardlevel" value={cardLevel} onChange={onChange}>
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
            {selectedCardType === "Monster" &&
            <>
                <label htmlFor='monstercardtype'>Select Type of Monster: </label>
                <select id="monstercardtype" name="monstercardtype" value={monsterCardType} onChange={onChange}>
                    <option value="all"></option>
                    <option value="Effect Monster">Effect</option>
                    <option value="Flip Effect Monster">Flip Effect</option>
                    <option value="Fusion Monster">Fusion</option>
                    <option value="Gemini Monster">Gemini</option>
                    <option value="Normal Monster">Normal</option>
                    <option value="Ritual Monster">Ritual</option>
                    <option value="Ritual Effect Monster">Ritual Effect</option>
                    <option value="Spirit Monster">Spirit</option>
                    <option value="Toon Monster">Toon</option>
                    <option value="Union Effect Monster">Union Effect</option>
                </select>
            </>
            }
            {selectedCardType === "Spell" &&
            <>
                <label htmlFor='spelltype'>Select Spell Type: </label>
                <select id="spelltype" name="spelltype" value={spellType} onChange={onChange}>
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
                <label htmlFor='traptype'>Select Trap Type: </label>
                <select id="traptype" name="traptype" value={trapType} onChange={onChange}>
                    <option value="all"></option>
                    <option value="Normal">Normal</option>
                    <option value="Continuous">Continuous</option>
                    <option value="Counter">Counter</option>
                </select>
            </>
            }
        </div>
    );
};

export default Filters;
