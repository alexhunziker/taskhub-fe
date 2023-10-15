import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
import LogoutIcon from "@mui/icons-material/Logout";
import AuthenticationContext from "../state/AuthenticationContext";
import DatabaseContext from "../state/DatabaseContext";
import "firebase/compat/auth";
import { getAuth, signOut } from "firebase/auth";
import { Routes } from "./routes";

const StyledHeader = styled.header`
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007799;
  padding-left: 20px;
  padding-right: 20px;
  gap: 15px;
  color: white;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  a:hover,
  a:active,
  a.active {
    color: #e0f5ff;
  }
`;

const PageTitle = styled.div`
  flex-grow: 1;
`;

const ErrorList = styled.div`
  background-color: #ee8888;
  color: white;
  padding: 10px 20px 10px;

  li {
    list-style-type: none;
  }
`;

const StyledLogout = styled(LogoutIcon)`
  font-size: 1.4rem;
`

const Header = ({ page }) => {
  const { successIndicator, errorList, addError, ready } = useContext(DatabaseContext);
  const { displayName, isLoggedIn } = useContext(AuthenticationContext);

  const auth = ready && getAuth();

  const handleLogout = useCallback(() => {
    signOut(auth).catch((e) => addError("Sign out failed: ", e));
  }, [auth, addError]);

  if (!ready) {
    return <StyledHeader>
      <PageTitle>
          <a href="/tasks">
            📝 TaskHub {">>"} Loading...
          </a>
        </PageTitle>
    </StyledHeader>
  }

  

  return (
    <>
      <StyledHeader>
        <PageTitle>
          <a href="/tasks">
            📝 TaskHub {">>"} {page}
          </a>
        </PageTitle>
        {successIndicator && <DoneIcon />}
        {isLoggedIn() && (
          <>
            <Link to={Routes.CATEGORIES}>Categories</Link>
            {displayName}
            <a href={Routes.TASKLIST} onClick={handleLogout}>
              <StyledLogout />
            </a>
          </>
        )}
      </StyledHeader>
      {errorList.length > 0 && (
        <ErrorList>
          {errorList.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ErrorList>
      )}
    </>
  );
};

export default Header;
