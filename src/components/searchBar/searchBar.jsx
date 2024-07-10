import React, { useState } from 'react';
import './searchBar.scss';

const types = ['Acheter', 'Louer'];

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'Acheter',
    Lieu: '',
    PrixMin: '',
    PrixMax: '',
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}
          >
            {type}
          </button>
        ))}
      </div>
      <form action=''>
        <input
          type='text'
          name='Lieu'
          placeholder='Ville'
          value={query.Lieu}
          onChange={(e) => setQuery({ ...query, Lieu: e.target.value })}
        />
        <input
          type='number'
          name='PrixMin'
          placeholder='Prix Min'
          value={query.PrixMin}
          onChange={(e) => setQuery({ ...query, PrixMin: e.target.value })}
        />
        <input
          type='number'
          name='PrixMax'
          placeholder='Prix Max'
          value={query.PrixMax}
          onChange={(e) => setQuery({ ...query, PrixMax: e.target.value })}
        />
        <button type='submit'>
          <img src='/search.png' alt='Search' />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
