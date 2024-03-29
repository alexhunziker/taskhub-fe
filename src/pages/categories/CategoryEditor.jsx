import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import InputWrapper from "../../components/InputWrapper";
import CategoryRule from "./CategoryRule";
import CategoryContext from "../../state/CategoryContext";
import DatabaseContext from "../../state/DatabaseContext";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 15px;
`;

const RuleArea = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const CategoryEditor = ({ category, resetEditedCategory }) => {
  const [name, setName] = useState("");
  const [hidden, setHidden] = useState(false);
  const [rules, setRules] = useState([]);
  const [currentRule, setCurrentRule] = useState("");

  const { saveCategory } = useContext(CategoryContext);
  const { addError } = useContext(DatabaseContext);

  useEffect(() => {
    setName(category.name || "");
    setRules(category.rules || []);
    setHidden(category.hidden || false);
  }, [category]);

  const handleAddRule = useCallback(() => {
    try {
      new RegExp(currentRule);
    } catch {
      addError("Cannot add rule due to invalid format");
      return;
    }

    setRules([...rules, currentRule]);
    setCurrentRule("");
  }, [rules, currentRule, setCurrentRule, setRules, addError]);

  const handleRemove = useCallback(
    (ruleToRemove) => {
      setRules(rules.filter((rule) => rule !== ruleToRemove));
    },
    [rules, setRules]
  );

  const handleSave = useCallback(
    (categoryToSave) => {
      saveCategory(categoryToSave);
      resetEditedCategory();
    },
    [resetEditedCategory, saveCategory]
  );

  const assembledCategory = { ...category, name, rules, hidden };

  return (
    <Card>
      <Row>
        <InputWrapper description={"Name:"}>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </InputWrapper>
        <StyledButton onClick={() => setHidden(!hidden)} primary={hidden}>
          {hidden ? (
            <VisibilityOffIcon style={{ height: "17px" }} />
          ) : (
            <VisibilityIcon style={{ height: "17px" }} />
          )}
        </StyledButton>
        <StyledButton onClick={() => handleSave(assembledCategory)} primary>
          Save
        </StyledButton>
      </Row>
      <Row>
        <InputWrapper description={"Rules (Regex capable)"}>
          <Input
            value={currentRule}
            onChange={(event) => {
              setCurrentRule(event.target.value);
            }}
          />
        </InputWrapper>
        <StyledButton onClick={handleAddRule}>Add</StyledButton>
      </Row>
      <RuleArea>
        {rules?.map((rule) => (
          <CategoryRule
            rule={rule}
            key={rule}
            handleRemoval={handleRemove}
            editMode
          />
        ))}
      </RuleArea>
    </Card>
  );
};

export default CategoryEditor;
