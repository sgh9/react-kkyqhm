import React, { useState } from 'react';
const Search = ({ SearchText }) => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <div className="search-container">
      <span>search:</span>
      <input
        type="search"
        value={searchKey}
        onChange={e => setSearchKey(e.target.value)}
      />
    </div>
  );
};
export default Search;
