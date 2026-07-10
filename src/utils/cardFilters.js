// Pure sort + filter logic shared by every card-viewing surface, so the list
// view and the grid view can never drift out of sync on "what counts as a match".
export const sortCards = (cards, { sortType, sortDirection }) => {
    let sorted = [...cards];

    if (sortType === 'Attack') {
        sorted.sort((a, b) => b.atk - a.atk);
    } else if (sortType === 'Defense') {
        sorted.sort((a, b) => b.def - a.def);
    }

    if (sortDirection === 'Ascending') {
        sorted.reverse();
    }

    return sorted;
};

export const matchesFilters = (card, filters) => {
    const {
        cardName,
        cardDescription,
        selectedCardType,
        selectedAttribute,
        monsterType,
        cardLevel,
        monsterCardType,
        spellType,
        trapType,
    } = filters;

    return (
        (card.name.toLowerCase().includes(cardName.toLowerCase()) || cardName === "") &&
        (card.desc.toLowerCase().includes(cardDescription.toLowerCase()) || cardDescription === "") &&
        (card.type.includes(selectedCardType) || selectedCardType === "all") &&
        (card.attribute === selectedAttribute || selectedAttribute === "all" || !card.attribute || selectedCardType !== "Monster") &&
        (card.race === monsterType || monsterType === "all" || !card.race || selectedCardType !== "Monster") &&
        (card.level === Number(cardLevel) || cardLevel === "all" || !card.level || selectedCardType !== "Monster") &&
        (card.type === monsterCardType || monsterCardType === "all" || selectedCardType !== "Monster") &&
        (card.race === spellType || spellType === "all" || selectedCardType !== "Spell") &&
        (card.race === trapType || trapType === "all" || selectedCardType !== "Trap")
    );
};

export const filterAndSortCards = (cards, filters) => sortCards(cards, filters).filter(card => matchesFilters(card, filters));
