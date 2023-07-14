import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import CategoryEditor from "./CategoryEditor";
import Button from "../../components/Button";
import Overlay from "../../components/Overlay";
import CategoryList from "./CategoryList";
import styled from "styled-components";
import CategoryContext from "../../state/CategoryContext";
import { Routes } from "../routes";

/* const mockCategories = [
  {name: "Purchase", id:"id1", rules: ["buy*.", "purchase*."]},
  {name: "Media", id:"id2", rules: ["show*.", "song*.", "music*.", "download*.", "netflix*.", "*.book"]},
  {name: "Contact", id:"id3", rules: ["call*.", "contact*.", "write*."]},
] */

const StyledButton = styled(Button)`
  margin-top: 10px;
  text-decoration: none;
  margin-bottom: 10px;
`;

const CategoryManager = () => {

  const { categories } = useContext(CategoryContext);
  const [editedCategory, setEditedCategory] = useState({rules: []})

  const handleEdit = (key) => {
    setEditedCategory(categories.find(entry => entry.key === key))
  }

  return (
    <Overlay>
      <h2>Categories</h2>
      <CategoryEditor category={editedCategory}/>
      <CategoryList 
        categories={categories} 
        handleEdit={handleEdit} />
      <Link to={Routes.TASKLIST}>
        <StyledButton primary>Close</StyledButton>
      </Link>
    </Overlay>
  );
};

export default CategoryManager;
