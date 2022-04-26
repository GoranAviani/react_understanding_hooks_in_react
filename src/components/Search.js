import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const {result, setResult} = useState([])

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResult(data)
    };

    search();
  }, [term]);

  const changeHandler = (e) => {
    setTerm(e.target.value)
  }

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={changeHandler}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
