import React from 'react';
import CardGrid from '../components/CardGrid';
import Filters from '../components/Filters';
import useCardFilters from '../hooks/useCardFilters';
import './CardBrowserPage.css';

// Card browsing page: a fixed search sidebar on the left, and a card grid
// on the right that spans the remaining width and scrolls with the page
// (rather than the deck builder's single scrollable column).
const CardBrowserPage = () => {
    const { filters, handleChange } = useCardFilters();

    return (
        <div className='browser_container'>
            <aside className='browser_sidebar'>
                <h2 className='browser_sidebar_title'>Search Criteria</h2>
                <Filters filters={filters} onChange={handleChange} />
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
            </aside>
            <main className='browser_main'>
                <CardGrid {...filters}/>
            </main>
        </div>
    );
};

export default CardBrowserPage;
