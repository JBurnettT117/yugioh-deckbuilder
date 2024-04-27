import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardGrabber.css';
import yugiohTestCard from './testData/yugiohTestCard.jpg'

const CardList = (props) => {

    //make arranges lsit then set as new card object in a group and pass to cards.map

    const [cards, setCards] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const currentBanList = '2007-03-01';
    
    useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=${currentBanList}&dateregion=tcg`)
        .then(response => {
            console.log(response)
            let initialList = response.data.data
            let normalMonsters = [];
            let effectMonsters = [];
            let ritualMonsters = [];
            let fusionMonsters = [];
            let spellCards = [];
            let trapCards = [];
            initialList.map((card) => {
                if(card.frameType === "normal"){
                    normalMonsters.push(card);
                } else if(card.frameType === "effect"){
                    effectMonsters.push(card);
                } else if(card.frameType === "ritual"){
                    ritualMonsters.push(card);
                } else if(card.frameType === "fusion"){
                    fusionMonsters.push(card);
                } else if(card.frameType === "spell"){
                    spellCards.push(card);
                } else if(card.frameType === "trap"){
                    trapCards.push(card);
                }
            })
            normalMonsters.sort(function(a, b){return b.atk - a.atk});
            effectMonsters.sort(function(a, b){return b.atk - a.atk});
            ritualMonsters.sort(function(a, b){return b.atk - a.atk});
            fusionMonsters.sort(function(a, b){return b.atk - a.atk});
            // spellCards.sort(function(a, b){return b.race[0] - a.race[0]}); These dont work 
            // trapCards.sort(function(a, b){return b.race[0] - a.race[0]});
            const finalList = [...normalMonsters, ...effectMonsters, ...ritualMonsters, ...fusionMonsters, ...spellCards, ...trapCards]
            // console.log(finalList)
            setCards([...finalList])
            setFilteredList([...finalList])
        })
        .catch(error => {
            console.error(error);
        });
    }, ['']);

    // console.log(props)
    // console.log(cards)

    let test = []; // this kind of works but swapping back to default isnt perfect and ascending and descending needs tweaking

    const sortCards = () => {
        if(props.sortType === 'Default'){
            test = [...filteredList];
            return
        } else if(props.sortType === 'Attack'){
            test = cards.sort(function(a, b){return b.atk - a.atk});
        } else if(props.sortType === 'Defense'){
            test = cards.sort(function(a, b){return b.def - a.def});
        }
        if(props.sortDirection === 'Ascending'){
            test = test.reverse()
        }
    }

    sortCards();

    return test.map(card => {
        if((card.name.toLowerCase().includes(props.cardName.toLowerCase()) || props.cardName === "") &&
        (card.desc.toLowerCase().includes(props.cardDescription.toLowerCase()) || props.cardDescription === "") &&
        (card.type.includes(props.selectedCardType) || props.selectedCardType === "all") && 
        (card.attribute === props.selectedAttribute || props.selectedAttribute === "all" || !card.attribute || props.selectedCardType !== "Monster") &&
        (card.race === props.monsterType || props.monsterType === "all" || !card.race || props.selectedCardType !== "Monster") &&
        (card.level === Number(props.cardLevel) || props.cardLevel === "all" || !card.level || props.selectedCardType !== "Monster") &&
        (card.type === props.monsterCardType || props.monsterCardType === "all" || props.selectedCardType !== "Monster") && 
        (card.race === props.spellType || props.spellType === "all"  || props.selectedCardType !== "Spell") &&
        (card.race === props.trapType || props.trapType === "all"  || props.selectedCardType !== "Trap")
        ){
            return (
                <div className='cardBox'>
                    <img className='card_image' src={require(`./images/${card.id}.jpg`)} alt='picture of card'/>
                    <div>
                        <h2 className='card_name'>{card.name}</h2>
                        <div className='level_kind'>
                            {card.level && <div className='stat'><p className='card_stats'>Level: {card.level}</p></div>}
                            {card.type.endsWith("Monster") && <div className='stat'><p className='card_stats'>{card.type}</p></div>}
                            {card.type === "Spell Card" && <div className='stat'><p className='card_stats'>{card.race} {card.type}</p></div>}
                            {card.type === "Trap Card" && <div className='stat'><p className='card_stats'>{card.race} {card.type}</p></div>}
                        </div>
                        <div className='attr_type'>
                            {card.attribute && <div className='stat'><p className='card_stats'>Attr: {card.attribute}</p></div>}
                            {card.type.endsWith("Monster") && <div className='stat'><p className='card_stats'>Type: {card.race}</p></div>}
                        </div>
                        <div className='att_def'>
                            {(card.atk || card.atk === 0) && <div className='stat'><p className='card_stats'>ATK: {card.atk}</p></div>}
                            {(card.def || card.def === 0) && <div className='stat'><p className='card_stats'>DEF: {card.def}</p></div>}
                        </div>
                        <p className='card_description'>{card.desc}</p>
                    </div>
                </div>
            );
        }
    })

}

export default CardList

//Normal monsters atk highest to lowest
//effect monsters same
//ritual same
//fusion same
//spell
//trap