import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = () => {
    const [cards, setCards] = useState([])
    const params = {
        cardset: 'Metal Raiders',
        sort: 'atk'
    }
    useEffect(() => {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {params})
        .then(response => {
            // console.log('this is the console.log', response.data.data)
            setCards(response.data.data)
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    console.log(cards)

    return cards.map(card => {
        return (
            <h2>{`${card.name}`}</h2>
        )
    })
}

export default CardList

//pictures total size would be 1.6 gigs for all modern cards not including alternative card arts