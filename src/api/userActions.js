import { useContext } from "react";
import DatabaseContext from "../state/DatabaseContext";
import { getDatabase, get, ref, set } from "firebase/database";

export const useUserActions = () => {
  const { addError, ready, indicateSuccess } = useContext(DatabaseContext);

  const storeUser = (uid, displayName, mail) => {
    if (!ready) {
      addError("Database not ready to record user.");
      return;
    }

    const database = getDatabase();
    const userRef = ref(database, `user/${uid}`);

    get(userRef).then((snapshot) => {
      const userObject = snapshot.exists() ? snapshot.val() : {};

      const newUserObject = { ...userObject, mail, displayName };
      set(userRef, newUserObject)
        .then(indicateSuccess())
        .catch((error) => addError("User update/creation failed: " + error));
    });
  };

  return {
    storeUser,
  };
};
