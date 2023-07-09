import React from "react";
import CategoryListEntry from "./CategoryListEntry";

const CategoryList = ({categories, handleEdit}) => {

  return categories.map(({name, key, rules}) => (
    <CategoryListEntry 
    name={name} 
    id={key} 
    key={key}
    rules={rules} 
    handleEdit={handleEdit} />
  ))

}

export default CategoryList;