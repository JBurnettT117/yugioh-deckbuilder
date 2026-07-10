import React from 'react';
import useCardData from '../hooks/useCardData';
import { filterAndSortCards } from '../utils/cardFilters';
import './CardGrid.css';

// Full-width, wrapping grid of cards for the browse page (as opposed to the
// single scrollable column used by the deck builder page).
const CardGrid = (props) => {
    const { cards, loading, error } = useCardData();

    if (loading) {
        return <p className='card_grid_status'>Loading cards...</p>;
    }

    if (error) {
        return <p className='card_grid_status'>Something went wrong loading cards.</p>;
    }

    const filteredCards = filterAndSortCards(cards, props);

    if (filteredCards.length === 0) {
        return <p className='card_grid_status'>No cards match your filters.</p>;
    }

    return (
        <div className='card_grid'>
            {filteredCards.map(card => (
                <div className='grid_card' key={card.id}>
                    <img className='grid_card_image' src={require(`../images/${card.id}.jpg`)} alt={card.name}/>
                    <div className='grid_card_info'>
                        <h3 className='grid_card_name'>{card.name}</h3>
                        <div className='grid_card_stats'>
                            {card.level && <span className='grid_stat'>Lv {card.level}</span>}
                            {card.attribute && <span className='grid_stat'>{card.attribute}</span>}
                            {card.type.endsWith("Monster") && <span className='grid_stat'>{card.race}</span>}
                            {card.type === "Spell Card" && <span className='grid_stat'>{card.race} Spell</span>}
                            {card.type === "Trap Card" && <span className='grid_stat'>{card.race} Trap</span>}
                            {((card.atk || card.atk === 0) || (card.def || card.def === 0)) && (
                                <span className='grid_stat_group'>
                                    {(card.atk || card.atk === 0) && <span className='grid_stat'>ATK {card.atk}</span>}
                                    {(card.def || card.def === 0) && <span className='grid_stat'>DEF {card.def}</span>}
                                </span>
                            )}
                        </div>
                        <p className='grid_card_desc'>{card.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;
