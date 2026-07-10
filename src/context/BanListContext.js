import React, { createContext, useContext, useState } from 'react';

export const BAN_LIST_DATE_FORMAT = 'YYYY-MM-DD';
export const DEFAULT_BAN_LIST_DATE = '2004-04-19';

const BanListContext = createContext(null);

export const isValidBanListDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value);

export const BanListProvider = ({ children }) => {
    const [banListDate, setBanListDate] = useState(DEFAULT_BAN_LIST_DATE);

    return (
        <BanListContext.Provider value={{ banListDate, setBanListDate }}>
            {children}
        </BanListContext.Provider>
    );
};

export const useBanList = () => {
    const context = useContext(BanListContext);
    if (!context) {
        throw new Error('useBanList must be used within a BanListProvider');
    }
    return context;
};
