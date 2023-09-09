import React from "react";
import CategoryListEntry from "./CategoryListEntry";

const CategoryList = ({categories, handleEdit, editedCategory}) => {

  const sortedCategories = categories?.sort((cat1, cat2) => cat1.name.toUpperCase() > cat2.name.toUpperCase());

  return sortedCategories.map(({name, key, rules, hidden}) => (
    <CategoryListEntry 
    name={name} 
    id={key} 
    key={key}
    rules={rules} 
    hidden={hidden}
    handleEdit={handleEdit}
    isEdited={editedCategory.key === key} />
  ))

}

export default CategoryList;