import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CategoryName = styled.div`
  flex-grow: 1;
`;

const StyledRule = styled.span`
  border: 1px solid;
  border-color: #006666;
  background-color: #DFFFF5;
  color: #006666;
  margin: 0 3px;
  padding: 0 2px;
  font-size: smaller;
  border-radius: 3px;
`;

const CategoryListEntry = ({name, id, rules, handleEdit, handleDelete}) => {
  return <Card>
    <Row>
      <CategoryName>{name}</CategoryName>
      <Button onClick={() => handleEdit(id)}>Edit</Button>
      <Button onClick={() => handleDelete(id)}>Delete</Button>
    </Row>
    {rules.map(rule => <StyledRule>{rule}</StyledRule>)}
  </Card>
}

export default CategoryListEntry