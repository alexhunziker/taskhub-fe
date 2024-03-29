import React, {useContext, useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import AuthenticationContext from "./AuthenticationContext";
import { useCategoryActions } from "../api/categoryActions";
import TaskContext from "./TaskContext";

const CategoryContext = React.createContext({
  categories: [],
  saveCategory: (category) => {},
  removeCategory: (category) => {},
  updateOrder: (categories) => {},
});

export const CategoryContextProvicer = (props) => {

  const { uid, addError } = useContext(AuthenticationContext)  
  const { unassignAllTasksFromCategory } = useContext(TaskContext);
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

    const newCategoryWithKey = { key: uuidv4(), ...newCategory };
    const filteredCategories = categories.filter((category) => category.key !== newCategoryWithKey.key);
    setCategories([...filteredCategories, newCategoryWithKey]);
    updateCategory(newCategoryWithKey, uid);
  }
    
  const removeCategory = (key) => {

    unassignAllTasksFromCategory(key);
    setCategories(categories.filter((category) => category.key !== key));
    deleteCategory(key, uid)
  }

  const updateOrder = (reOrderedCategories) => {
    
    for (let i=0; i<reOrderedCategories.length; i++) {
      const targetCategory = categories.find(c => c.key === reOrderedCategories[i].key);
      if (targetCategory.order !== i) {
        updateCategory({...targetCategory, order: i}, uid);
        targetCategory.order = i;
      }
    }
  }

  const value = {
    categories,
    saveCategory,
    removeCategory,
    updateOrder,
  };

  return (
    <CategoryContext.Provider value={value}>{props.children}</CategoryContext.Provider>
  );
};

export default CategoryContext;