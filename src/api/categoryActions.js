import { set, ref, getDatabase, get } from "firebase/database";
import { useContext } from "react";
import DatabaseContext from "../state/DatabaseContext";
import { useCallback } from "react";

export const useCategoryActions = () => {
  const { addError, indicateSuccess, ready } = useContext(DatabaseContext);

  const fetchCategories = useCallback((successAction, uid) => {

    if (!ready || !uid) {
      console.warn("Firebase not ready.")
      return;
    }

    const database = getDatabase();
    const categoriesRef = ref(database, "categories/" + uid);

    get(categoriesRef)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          console.warn("No categories were obtained by firebase.");
          return;
        } 

        const categories = Object.values(snapshot.val())
          .map(task => ({...task, due: task.due && new Date(task.due)}));
        successAction(categories);
        indicateSuccess()}
      ).catch((error) => {
        console.error(error);
        addError("Getting categories failed: " + error)
      });
    
  }, [addError, indicateSuccess, ready]);

  const updateCategory = async (category, uid) => {

    const catetoryToPersist = { ...category, due: category.due?.getTime() };

    // do we need this ?
    Object.keys(catetoryToPersist).forEach(
      (key) => catetoryToPersist[key] === undefined && delete catetoryToPersist[key]
    );

    const database = getDatabase();
    const objectReference = ref(database, `categories/${uid}/${catetoryToPersist.key}`);
    set(objectReference, catetoryToPersist)
      .then(indicateSuccess())
      .catch((error) => addError("Category update/creation failed: " + error));
  };

  const deleteCategory = async (categoryKey, uid) => {

    const database = getDatabase();
    const objectReference = ref(database, `categories/${uid}/${categoryKey}`);
    set(objectReference, null)
      .then(indicateSuccess())
      .catch((error) => addError("Category removal failed: " + error));
  }

  return {
    fetchCategories,
    updateCategory,
    deleteCategory,
  };

};
