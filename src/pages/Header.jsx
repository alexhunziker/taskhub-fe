import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007799;
  
  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  li {
    padding: 0;
    margin: 0 2rem;
  }
  
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  
  a:hover,
  a:active,
  a.active {
    color: #0055FF;
  }
`;

const Header = props => {
  return (
    <StyledHeader>
      <a href="/">TaskHub</a>
    </StyledHeader>
  );
};

export default Header;