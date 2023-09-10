import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import CategoryEditor from "./CategoryEditor";
import Button from "../../components/Button";
import Overlay from "../../components/Overlay";
import CategoryList from "./CategoryList";
import styled from "styled-components";
import CategoryContext from "../../state/CategoryContext";
import { Routes } from "../routes";
import DatabaseContext from "../../state/DatabaseContext";

const StyledButton = styled(Button)`
  margin-top: 10px;
  text-decoration: none;
  margin-bottom: 10px;
`;

const CategoryManager = () => {
  const { categories } = useContext(CategoryContext);
  const { errorList } = useContext(DatabaseContext);
  const [editedCategory, setEditedCategory] = useState({ rules: [] });

  const handleEdit = (key) => {
    setEditedCategory(categories.find((entry) => entry.key === key));
  };

  const resetEditedCategory = useCallback(() => {
    setEditedCategory({ rules: [] });
  }, [setEditedCategory]);

  return (
    <Overlay>
      {errorList && <p>{errorList.join(',')}</p>}
      <h2>Categories</h2>
      <CategoryEditor
        category={editedCategory}
        resetEditedCategory={resetEditedCategory}
      />
      <CategoryList
        categories={categories}
        handleEdit={handleEdit}
        editedCategory={editedCategory}
      />
      <Link to={Routes.TASKLIST}>
        <StyledButton primary>Close</StyledButton>
      </Link>
    </Overlay>
  );
};

export default CategoryManager;
