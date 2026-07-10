import React from 'react';
import useCardData from './hooks/useCardData';
import { filterAndSortCards } from './utils/cardFilters';
import './CardGrabber.css';

const CardList = (props) => {
    const { cards } = useCardData();
    const filteredCards = filterAndSortCards(cards, props);

    return filteredCards.map(card => (
        <div className='cardBox' key={card.id}>
            <img className='card_image' src={require(`./images/${card.id}.jpg`)} alt={card.name}/>
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
    ));
};

export default CardList;
