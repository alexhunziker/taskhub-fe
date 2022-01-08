import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin-top: 10px;
`;

const Card = props => {
  return <StyledCard style={props.style}>{props.children}</StyledCard>;
};

export default Card;