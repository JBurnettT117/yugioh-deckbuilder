import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardGrabber.css';
import yugiohTestCard from './testData/yugiohTestCard.jpg'

const CardList = (props) => {

    
    const [cards, setCards] = useState([])

    const currentBanList = '2005-10-01';
    
    useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=${currentBanList}&dateregion=tcg`)
        .then(response => {
            // console.log('this is the console.log', response.data.data)
            // let initialList = response.data.data
            setCards([...response.data.data])
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    console.log(props)
    console.log(cards)

    return cards.map(card => {
        if((card.name.toLowerCase().includes(props.cardName.toLowerCase()) || props.cardName === "") &&
        (card.type.includes(props.selectedCardType) || props.selectedCardType === "all") && 
        (card.attribute === props.selectedAttribute || props.selectedAttribute === "all" || !card.attribute || props.selectedCardType !== "Monster") &&
        (card.race === props.monsterType || props.monsterType === 'all' || !card.race || props.selectedCardType !== "Monster")
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

//props must contain all sorting functions. then pass props here and prepare the list.

//pictures total size would be 1.6 gigs for all modern cards not including alternative card arts

//Normal monsters atk highest to lowest
//effect monsters same
//ritual same
//fusion same
//spell
//trap