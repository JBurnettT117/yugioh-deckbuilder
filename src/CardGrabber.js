import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardGrabber.css';

const CardList = (props) => {

    
    const [cards, setCards] = useState([])

    const currentBanList = '2005-10-01';
    
    useEffect(() => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=${currentBanList}&dateregion=tcg`)
        .then(response => {
            // console.log('this is the console.log', response.data.data)
            
            setCards([...response.data.data])
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    console.log(props)
    console.log(cards)

    return cards.map(card => {
        if(card.type.includes(props.selectedCardType) || props.selectedCardType === "all"){
            return (
                <div className='cardBox'>
                    <h2 className='card_name'>{card.name}</h2>
                    <div className='level_kind'>
                        {card.level && <p className='card_stats'>Level: {card.level}</p>}
                        {card.type.endsWith("Monster") && <p className='card_stats'>{card.type}</p>}
                        {card.type === "Spell Card" && <p className='card_stats'>{card.race} {card.type}</p>}
                        {card.type === "Trap Card" && <p className='card_stats'>{card.race} {card.type}</p>}
                    </div>
                    <div className='attr_type'>
                        {card.attribute && <p className='card_stats'>Attribute: {card.attribute}</p>}
                        {card.type.endsWith("Monster") && <p className='card_stats'>Type: {card.race}</p>}
                    </div>
                    <div className='att_def'>
                        {card.atk && <p className='card_stats'>ATK: {card.atk}</p>}
                        {card.def && <p className='card_stats'>DEF: {card.def}</p>}
                    </div>
                    <p className='card_description'>{card.desc}</p>
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