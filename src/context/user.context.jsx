import { createContext, useState, useEffect } from "react";
import { onAuthChangeListerner } from "../Utils/firebase/firebase.utils";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const userValue = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = onAuthChangeListerner((user) => setCurrentUser(user));
    return unsubcribe;
  }, []);

  return (
    <>
      <userContext.Provider value={userValue}>{children}</userContext.Provider>
    </>
  );
}
