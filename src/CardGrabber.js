import React, { useEffect, useState } from 'react';
import axios from 'axios';
import picture from './test data/Yugioh test card.jpg'

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
                    <img src={picture} alt='picture of card'/>
                    <h2>{card.name}</h2>
                    <h4>{card.desc}</h4>
                    {card.atk && <p>atk: {card.atk}</p>}
                    {card.def && <p>def: {card.def}</p>}
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