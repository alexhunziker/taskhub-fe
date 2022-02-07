import React, {useState} from "react";
import { Link } from "react-router-dom";
import CategoryEditor from "./CategoryEditor";
import Button from "../../components/Button";
import Overlay from "../../components/Overlay";
import CategoryList from "./CategoryList";
import styled from "styled-components";

const mockCategories = [
  {name: "Purchase", id:"id1", rules: ["buy*.", "purchase*."]},
  {name: "Media", id:"id2", rules: ["show*.", "song*.", "music*.", "download*.", "netflix*.", "*.book"]},
  {name: "Contact", id:"id1", rules: ["call*.", "contact*.", "write*."]},
]

const StyledButton = styled(Button)`
  margin-top: 10px;
  text-decoration: none;
`;

const CategoryManager = () => {

  const categories = mockCategories;
  const [editedCategory, setEditedCategory] = useState({rules: []})

  const handleSafe = () => {}
  const handleEdit = (id) => {
    setEditedCategory(categories.find(entry => entry.id === id))
  }
  const handleDelete = () => {}

  return (
    <Overlay>
      <h2>Categories</h2>
      <CategoryEditor category={editedCategory} handleSafe={(name) => alert("save category" + name)}/>
      <CategoryList 
      categories={categories} 
      handleEdit={handleEdit} 
      handleDelete={handleDelete} 
      handleSafe={handleSafe} />
      <Link to="/">
        <StyledButton primary>Close</StyledButton>
      </Link>
    </Overlay>
  );
};

export default CategoryManager;
