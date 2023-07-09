import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CategoryRule from "./CategoryRule";
import CategoryContext from "../../state/CategoryContext";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CategoryName = styled.div`
  flex-grow: 1;
`;

const CategoryListEntry = ({name, id, rules, handleEdit}) => {
  const {removeCategory} = useContext(CategoryContext)

  return <Card>
    <Row>
      <CategoryName>{name}</CategoryName>
      <Button onClick={() => handleEdit(id)}>Edit</Button>
      <Button onClick={() => removeCategory(id)}>Delete</Button>
    </Row>
    {rules && rules.map(rule => <CategoryRule rule={rule} />)}
  </Card>
}

export default CategoryListEntry