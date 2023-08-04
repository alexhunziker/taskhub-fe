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

  ${({ isEdited }) =>
    isEdited &&
    `
    color: #666666;
  `}
`;

const CategoryName = styled.div`
  flex-grow: 1;
`;

const RuleContainer = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;

const CategoryListEntry = ({ name, id, rules, handleEdit, isEdited }) => {
  const { removeCategory } = useContext(CategoryContext);

  return (
    <Card>
      <Row isEdited={isEdited}>
        <CategoryName>{name}</CategoryName>
        {!isEdited && (
          <>
            <Button onClick={() => handleEdit(id)}>Edit</Button>
            <Button onClick={() => removeCategory(id)}>Delete</Button>
          </>
        )}
      </Row>
      <RuleContainer>
        {rules && rules.map((rule) => <CategoryRule rule={rule} />)}
      </RuleContainer>
    </Card>
  );
};

export default CategoryListEntry;
