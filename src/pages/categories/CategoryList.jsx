import React from "react";
import CategoryListEntry from "./CategoryListEntry";

const CategoryList = ({categories, handleEdit, handleDelete}) => {

  return categories.map(({name, id, rules}) => (
    <CategoryListEntry 
    name={name} 
    id={id} 
    key={id}
    rules={rules} 
    handleEdit={handleEdit} 
    handleDelete={handleDelete} />
  ))

}

export default CategoryList;