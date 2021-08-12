import React from 'react';
import './Home.css'
import bannerPhoto from '../../photos/home-img.jpg'
const Home = () => {
    return (
        <div className="home">
            <div className="card bg-dark text-white">
                <img src={bannerPhoto} className="card-img" alt="..."></img>
                <div className="card-img-overlay">
                    <h1 className="card-title">Sports Manua</h1>
               </div>
           </div>
        </div>
    );
};

export default Home;