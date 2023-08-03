import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
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
  overflow-wrap: break-word;
`;

const CategoryEditor = ({ category, resetEditedCategory }) => {
  const [name, setName] = useState('');
  const [rules, setRules] = useState([]);
  const [currentRule, setCurrentRule] = useState("");

  const { saveCategory } = useContext(CategoryContext);
  const { addError } = useContext(DatabaseContext);

  useEffect(() => {
    setName(category.name || "");
    setRules(category.rules || []);
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

  const assembledCategory = { ...category, name, rules };

  return (
    <Card>
      <Row>
        <InputWrapper description={"Name:"}>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </InputWrapper>
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
