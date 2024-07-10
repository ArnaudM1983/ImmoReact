import React from 'react';
import './filter.scss';

function Filter() {
    return (
        <div className='filter'>
            <h1>
                Résultats de la recherche pour <b>London</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Lieu</label>
                    <input type="text" id="city" name="city" placeholder='Saisissez une ville' />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="projet">Projet</label>
                    <select name="projet" id="projet">
                        <option value="">Tout</option>
                        <option value="acheter">Acheter</option>
                        <option value="louer">Louer</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Tout</option>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                        <option value="loft">Loft</option>
                        <option value="parking">Parking</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Prix Min</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder='...' />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Prix Max</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder='...' />
                </div>
                <div className="item">
                    <label htmlFor="pièces">Nb de Pièces</label>
                    <select name="pièces" id="pièces">
                        <option value="">Tout</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button>
                    <img src="search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter