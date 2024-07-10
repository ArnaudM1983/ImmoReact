import React from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/searchBar';

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Découvrez Nos Offres Immobilières Achat Et Location De Propriétés
                    </h1>
                    <p className='description'>
                        Bienvenue sur ImmoReact, votre plateforme pour la vente et la location de biens immobiliers. Explorez notre large sélection de maisons, d'appartements et de locaux commerciaux.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>12+</h1>
                            <h2>Années d'expérience</h2>
                        </div>
                        <div className="box">
                            <h1>97%</h1>
                            <h2>Satisfaction Clients</h2>
                        </div>
                        <div className="box">
                            <h1>300+</h1>
                            <h2>Biens Vendus</h2>
                        </div>
                    </div>
                </div>

            </div>
            <div className="imgContainer">
                <img src="/homePage2.jpg" alt="" />
            </div>
        </div>
    )
}

export default HomePage