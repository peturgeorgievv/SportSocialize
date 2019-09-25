import React from 'react';
import Header from '../Header';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: grid;
`;

const Search = () => {
  return (
    <div>
      <Header />
      <SearchWrapper>Some search</SearchWrapper>
    </div>
  );
};

export default Search;
