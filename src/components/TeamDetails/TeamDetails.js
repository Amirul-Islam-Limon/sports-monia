import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import malePhoto from '../../photos/male.png';
import femalePhoto from '../../photos/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt,faLaptop,faGlobe,faDna} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const TeamDetails = () => {
    const {idTeam} = useParams()
    const [team, setTeam] = useState({})
    const {strTeamJersey,strTeam,strStadiumLocation,strWebsite,strCountry,strLeague2} = team;
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=> res.json())
        .then(data=>  setTeam(data.teams[0]) )
    },[idTeam])

    
    
    return (
        <div>
            <div className="banner">
                <div className="text ">
                    <h3>{strTeam}</h3>
                </div>
                <div className="image center">
                    <img src={strTeamJersey} alt="" />
                </div>
            </div>

            <div className="basic-information">
                <div className="container  information d-flex justify-content-md-between">
                    <div className="col-md-6  col-sm-12 ">
                        <h5><FontAwesomeIcon icon={faDna}/> Name : {strTeam}</h5>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/>   Location : {strStadiumLocation}</p>
                        <p><FontAwesomeIcon icon={faLaptop}/> Website : {strWebsite}</p>
                        <p><FontAwesomeIcon icon={faGlobe}/> Country : {strCountry}</p>

                   </div>
                    <div className="col-md-6 col-sm-12 ">
                        {
                            strLeague2 === "FA Cup" ? <img src={femalePhoto} alt="" />: <img src={malePhoto} alt="" />
                        }
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore placeat est autem nemo delectus illum! Illo culpa tempora quod suscipit enim excepturi at, eveniet neque? Doloribus, distinctio minus ipsum dolor sit iure, velit quos officia earum voluptatum voluptas dolorem. Nam ratione optio dolores earum veritatis dolore eligendi, a distinctio.</p>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, facere veritatis aspernatur dolorum dolor magnam accusamus dicta cum tenetur sed sunt, repudiandae accusantium, quaerat eos dolores beatae quia ipsam vel temporibus maiores aut a nobis. Eligendi officia quasi, iure unde adipisci blanditiis eius quia reprehenderit corrupti fugiat sit numquam! Cupiditate libero dolore nihil consequatur aspernatur vel totam tempora porro repudiandae?</p>
                </div>
            </div>
            <div className="social-link">
               <div className="social d-flex justify-content-center">
                    <li><FontAwesomeIcon icon={faFacebook}/></li> 
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faYoutube} /></li>
               </div>
            </div>
            
        </div>
    );
};

export default TeamDetails;