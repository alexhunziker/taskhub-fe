import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import InputWrapper from "../../components/InputWrapper";
import CategoryRule from "./CategoryRule";
import CategoryContext from "../../state/CategoryContext";

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

const CategoryEditor = ({category}) => {

  const [name, setName] = useState(category.name)
  const [rules, setRules] = useState(category.rules)
  const [currentRule, setCurrentRule] = useState('')

  const { saveCategory } = useContext(CategoryContext)

  useEffect(() => {
    setName(category.name)
    setRules(category.rules)
  }, [category])

  const handleAddRule = useCallback(() => {
    setRules([...rules, currentRule])
    setCurrentRule('')
  }, [rules, currentRule, setCurrentRule, setRules])

  const handleRemove = useCallback((ruleToRemove) => {
    setRules(rules.filter(rule => rule !== ruleToRemove))
  }, [rules, setRules])

  const assembledCategory = {...category, name, rules}

  return <Card>
    <Row>
      <InputWrapper description={"Name:"}>
        <Input value={name} onChange={event => setName(event.target.value)}/>
      </InputWrapper>
      <StyledButton onClick={() => saveCategory(assembledCategory)} primary>Save</StyledButton>
    </Row>
    <Row>
      <InputWrapper description={"Rules (Regex capable)"}>
        <Input value={currentRule} onChange={(event) => {setCurrentRule(event.target.value)}}/>
      </InputWrapper>
      <StyledButton onClick={handleAddRule}>Add</StyledButton>
    </Row>
    <RuleArea>
      {rules.map(rule => <CategoryRule rule={rule} key={rule} handleRemoval={handleRemove} editMode />)}
    </RuleArea>
  </Card>
}

export default CategoryEditor;