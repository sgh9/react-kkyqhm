import React, { useState } from 'react';
const Search = ({ onSearchKey }) => {
  const [searchKey, setSearchKey] = useState('');

  const onSearch = () => {};
  return (
    <div className="search-container">
      <span>search:</span>
      <input
        type="search"
        value={searchKey}
        onChange={e => {
          setSearchKey(e.target.value);
          onSearchKey(searchKey);
        }}
      />
    </div>
  );
};
export default Search;
