import React, {useContext, useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import AuthenticationContext from "./AuthenticationContext";
import { useCategoryActions } from "../api/categoryActions";

const CategoryContext = React.createContext({
  categories: [],
  saveCategory: (category) => {},
  removeCategory: (category) => {},
});

export const CategoryContextProvicer = (props) => {

  const { uid, addError } = useContext(AuthenticationContext)  
  const [categories, setCategories] = useState([]);
  const {fetchCategories, updateCategory, deleteCategory} = useCategoryActions();

  useEffect(() => {
    fetchCategories(setCategories, uid);
    // eslint-disable-next-line
  }, [uid])

  const saveCategory = (newCategory) => {
    if (!newCategory.name) {
      addError("Category name cannot be empty")
      return;
    }

    const newCategoryWithKey = { ...newCategory, key: uuidv4() };
    const filteredCategories = categories.filter((category) => category.key !== newCategoryWithKey.key);
    setCategories([...filteredCategories, newCategoryWithKey]);
    updateCategory(newCategoryWithKey, uid);
  }
    
  const removeCategory = (key) => {
    console.log(key, "keyremove")
    setCategories(categories.filter((category) => category.key !== key));
    deleteCategory(key, uid)
  }

  const value = {
    categories,
    saveCategory,
    removeCategory,
  };

  return (
    <CategoryContext.Provider value={value}>{props.children}</CategoryContext.Provider>
  );
};

export default CategoryContext;