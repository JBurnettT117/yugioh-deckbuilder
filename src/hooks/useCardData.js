import { useEffect, useState } from 'react';
import axios from 'axios';
import { useBanList } from '../context/BanListContext';

// Shared data source: fetches the raw (unfiltered) card catalog once and
// groups it the same way the original deck builder did, so every page that
// consumes this hook sees a consistent base ordering before filters/sort are applied.
const useCardData = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { banListDate } = useBanList();

    useEffect(() => {
        setLoading(true);
        setError(null);

        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=${banListDate}&dateregion=tcg`)
        .then(response => {
            const initialList = response.data.data;
            const normalMonsters = [];
            const effectMonsters = [];
            const ritualMonsters = [];
            const fusionMonsters = [];
            const spellCards = [];
            const trapCards = [];
            initialList.forEach((card) => {
                if (card.frameType === "normal") {
                    normalMonsters.push(card);
                } else if (card.frameType === "effect") {
                    effectMonsters.push(card);
                } else if (card.frameType === "ritual") {
                    ritualMonsters.push(card);
                } else if (card.frameType === "fusion") {
                    fusionMonsters.push(card);
                } else if (card.frameType === "spell") {
                    spellCards.push(card);
                } else if (card.frameType === "trap") {
                    trapCards.push(card);
                }
            });
            normalMonsters.sort((a, b) => b.atk - a.atk);
            effectMonsters.sort((a, b) => b.atk - a.atk);
            ritualMonsters.sort((a, b) => b.atk - a.atk);
            fusionMonsters.sort((a, b) => b.atk - a.atk);

            const finalList = [...normalMonsters, ...effectMonsters, ...ritualMonsters, ...fusionMonsters, ...spellCards, ...trapCards];
            setCards(finalList);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError(error);
            setLoading(false);
        });
    }, [banListDate]);

    return { cards, loading, error };
};

export default useCardData;
