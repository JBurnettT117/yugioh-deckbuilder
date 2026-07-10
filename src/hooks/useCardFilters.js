import { useState } from 'react';

// Encapsulates the full set of search/filter/sort criteria so any page can
// mount its own independent copy of "what the user is searching for".
const useCardFilters = () => {
    const [cardName, setCardName] = useState("");
    const [cardLevel, setCardLevel] = useState("all");
    const [cardDescription, setCardDescription] = useState("");
    const [selectedCardType, setSelectedCardType] = useState("all");
    const [selectedAttribute, setSelectedAttribute] = useState("all");
    const [monsterType, setMonsterType] = useState("all");
    const [monsterCardType, setMonsterCardType] = useState("all");
    const [spellType, setSpellType] = useState("all");
    const [trapType, setTrapType] = useState("all");
    const [sortType, setSortType] = useState("Default");
    const [sortDirection, setSortDirection] = useState("Descending");

    const handleChange = (event) => {
        if (event.target.id === 'cardname') {
            setCardName(event.target.value);
        } else if (event.target.id === 'carddescription') {
            setCardDescription(event.target.value);
        } else if (event.target.id === 'cardtype') {
            setSelectedCardType(event.target.value);
        } else if (event.target.id === 'cardattribute') {
            setSelectedAttribute(event.target.value);
        } else if (event.target.id === 'cardrace') {
            setMonsterType(event.target.value);
        } else if (event.target.id === 'cardlevel') {
            setCardLevel(event.target.value);
        } else if (event.target.id === 'monstercardtype') {
            setMonsterCardType(event.target.value);
        } else if (event.target.id === 'spelltype') {
            setSpellType(event.target.value);
        } else if (event.target.id === 'traptype') {
            setTrapType(event.target.value);
        } else if (event.target.id === 'sorttype') {
            setSortType(event.target.value);
        } else if (event.target.id === 'sortdirection') {
            setSortDirection(event.target.value);
        }
    };

    const filters = {
        cardName,
        cardDescription,
        selectedCardType,
        selectedAttribute,
        monsterType,
        cardLevel,
        monsterCardType,
        spellType,
        trapType,
        sortType,
        sortDirection,
    };

    return { filters, handleChange };
};

export default useCardFilters;
