import React from 'react';
import CardList from '../CardGrabber';
import Filters from '../components/Filters';
import useCardFilters from '../hooks/useCardFilters';

const DeckBuilderPage = () => {
    const { filters, handleChange } = useCardFilters();

    return (
        <div className='container'>
            <Filters filters={filters} onChange={handleChange} />
            <div className='card_list_container'>
                <label htmlFor='sorttype'>Sort By: </label>
                <select id="sorttype" name="sorttype" value={filters.sortType} onChange={handleChange}>
                    <option value="Default">Default</option>
                    <option value="Attack">Attack</option>
                    <option value="Defense">Defense</option>
                </select>
                <select id='sortdirection' name='sortdirection' value={filters.sortDirection} onChange={handleChange}>
                    <option value="Descending">Descending</option>
                    <option value="Ascending">Ascending</option>
                </select>
                <div className='card_list'>
                    <CardList {...filters}/>
                </div>
            </div>
        </div>
    );
};

export default DeckBuilderPage;
