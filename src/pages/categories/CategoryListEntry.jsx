import React, { useContext } from "react";
import styled from "styled-components";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Draggable } from "react-beautiful-dnd";
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

const StyledHiddenIcon = styled(VisibilityOffIcon)`
  color: #666666;
  height: 17px;
`;

const CategoryListEntry = ({
  name,
  id,
  rules,
  handleEdit,
  isEdited,
  hidden,
  order,
}) => {
  const { removeCategory } = useContext(CategoryContext);

  return (
    <Draggable key={id} draggableId={id} index={order}>
      {(provided) => (
        <Card
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Row isEdited={isEdited}>
            <DragIndicatorIcon />
            <CategoryName>{name}</CategoryName>
            {!isEdited && (
              <>
                {hidden && <StyledHiddenIcon />}
                <Button onClick={() => handleEdit(id)}>Edit</Button>
                <Button onClick={() => removeCategory(id)}>Delete</Button>
              </>
            )}
          </Row>
          <RuleContainer>
            {rules &&
              rules.map((rule) => <CategoryRule rule={rule} key={rule} />)}
          </RuleContainer>
        </Card>
      )}
    </Draggable>
  );
};

export default CategoryListEntry;
