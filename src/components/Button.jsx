import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: #006666;
  font-size: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid #006666;
  border-radius: 3px;
  display: block;

  ${({ primary }) => primary && `
    background: #006666;
    color: #FFFFFF;
  `}
`;

export default Button