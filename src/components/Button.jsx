import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: #007799;
  background-color: #FFFFFF;
  font-size: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid #007799;
  border-radius: 3px;
  display: block;

  ${({ primary }) => primary && `
    background: #007799;
    color: #FFFFFF;
  `}
`;

export default Button