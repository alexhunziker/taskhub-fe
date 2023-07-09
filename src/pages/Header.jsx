import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthenticationContext from "../state/AuthenticationContext";
import DatabaseContext from "../state/DatabaseContext";
import 'firebase/compat/auth';
import { getAuth, signOut } from "firebase/auth";

const StyledHeader = styled.header`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007799;
  padding-left: 20px;
  padding-right: 20px;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  a:hover,
  a:active,
  a.active {
    color: #00DDBB;
  }
`;

const PageTitle = styled.div`
  flex-grow: 1;
`

const ErrorList = styled.div`
  background-color: #EE8888;
  color: white;
  padding: 10px 20px 10px;

  li {
    list-style-type: none;
  }
`

const Header = ({page}) => {
  const { successIndicator, errorList, addError } = useContext(DatabaseContext);
  const { displayName, isLoggedIn } = useContext(AuthenticationContext);

  const auth = getAuth();

  const handleLogout = useCallback(() => {
    signOut(auth)
      .catch((e) => addError("Sign out failed: ", e))
  }, [auth, addError])

  return (
    <>
      <StyledHeader>
        <PageTitle><a href="/tasks">📝 TaskHub {">>"} { page }</a></PageTitle>
        {successIndicator && <div>✔️</div>}
        {isLoggedIn() && <Link to="/categories">Categories</Link>}
        {isLoggedIn() && <a href="/" onClick={handleLogout}>Logout ({displayName})</a>}
      </StyledHeader>
      {errorList.length > 0 && (
        <ErrorList>
          {errorList.map((error) => (
            <li>{error}</li>
          ))}
        </ErrorList>
      )}
    </>
  );
};

export default Header;
