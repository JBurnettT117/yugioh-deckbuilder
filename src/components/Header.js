import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    BAN_LIST_DATE_FORMAT,
    isValidBanListDate,
    useBanList,
} from '../context/BanListContext';
import './Header.css';

// Top app bar with the site title on the left, ban list date in the center,
// and page-switching links on the right.
const Header = () => {
    const { banListDate, setBanListDate } = useBanList();
    const [inputValue, setInputValue] = useState(banListDate);
    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        setInputValue(banListDate);
        setInputError(false);
    }, [banListDate]);

    const commitBanListDate = () => {
        if (isValidBanListDate(inputValue)) {
            setBanListDate(inputValue);
            setInputError(false);
            return;
        }

        setInputError(true);
        setInputValue(banListDate);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            commitBanListDate();
        }
    };

    return (
        <header className='app_header'>
            <span className='app_title'>Yu-Gi-Oh! Deck Builder</span>

            <div className='app_ban_list'>
                <label className='app_ban_list_label' htmlFor='ban-list-date'>
                    Ban List
                </label>
                <input
                    id='ban-list-date'
                    className={`app_ban_list_input${inputError ? ' invalid' : ''}`}
                    type='text'
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onBlur={commitBanListDate}
                    onKeyDown={handleKeyDown}
                    placeholder={BAN_LIST_DATE_FORMAT}
                    aria-describedby='ban-list-format-key'
                />
                <kbd id='ban-list-format-key' className='app_ban_list_format_key' title='Date format'>
                    {BAN_LIST_DATE_FORMAT}
                </kbd>
            </div>

            <nav className='app_nav'>
                <NavLink
                    to="/"
                    className={({ isActive }) => `app_nav_link${isActive ? ' active' : ''}`}
                >
                    Deck Builder
                </NavLink>
                <NavLink
                    to="/browse"
                    className={({ isActive }) => `app_nav_link${isActive ? ' active' : ''}`}
                >
                    Browse Cards
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
