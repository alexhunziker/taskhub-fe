import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import InputWrapper from "../../components/InputWrapper";

const CategoryEditor = ({category, handleSafe}) => {

  const [name, setName] = useState(category.name)
  const [rules, setRules] = useState(category.rules)

  useEffect(() => {
    setName(category.name)
    setRules(category.rules)
  }, [category])

  return <Card>
    <InputWrapper description={"Name:"}>
      <Input value={name}/>
    </InputWrapper>
    <InputWrapper description={"Rules (Regex capable)"}>
      <textarea value={rules.join("\n")} onChange={() => {}}/>
    </InputWrapper>
    <Button onClick={() => handleSafe(name, category.id, rules)} primary>Save</Button>
  </Card>
}

export default CategoryEditor;