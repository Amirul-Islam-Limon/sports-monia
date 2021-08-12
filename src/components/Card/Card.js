import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";


const Card = (props) => {
    const {strAlternate,strLeague,strTeamBadge,strTeam,idTeam} = props.team

    let history = useHistory();
    const handleButton=(strTeam,idTeam)=>{
        history.push(`/team-details/${strTeam}/${idTeam}`)
    }
    return (
        
             <div className="col-md-4 center gx-2 mt-4">
               <div className="card" style={{width: "300px"}}>
                <img src={strTeamBadge} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5>{strAlternate}</h5>
                    <p>{strLeague}</p>
                    <button onClick={()=>handleButton(strTeam,idTeam)} className="btn btn-success">Explore <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                    
                </div>
                </div>
            </div>
        
        
    );
};

export default Card;