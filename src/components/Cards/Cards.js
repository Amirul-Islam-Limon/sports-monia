import React, { useEffect, useState } from 'react';
import './Cards.css'
import Card from '../Card/Card';

const Cards = () => {
    const [Leagues, setLeagues] = useState([])
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
        .then(res=>res.json())
        .then(data=> setLeagues(data.teams))
    },[])
    return (
        <div className="cards-container">
            
            <div className="container ">
            <div className="row">
                {
                    Leagues.map(team=> <Card team={team}></Card>)
                }
           </div>
           </div>
        </div>
        

    );
};

export default Cards;