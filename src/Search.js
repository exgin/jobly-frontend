import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import './Search.css';

const Search = ({ lookFor }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    lookFor(searchInput);
  };

  return (
    <div className='Search'>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input name='searchInput' value={searchInput} onChange={handleChange} />
          <InputGroupAddon addonType='append'>
            <Button color='primary'>Search now!</Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  );
};

export default Search;
