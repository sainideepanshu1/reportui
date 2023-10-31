// MyContext.js
import React, { createContext, useState } from "react";

const Contexts = createContext();

function StateProvider({ children }) {
  const [category, setCategory] = useState("");
  const [test, setTest] = useState("");
  const [value, setValue] = useState("");

  return (
    <Contexts.Provider
      value={{
        category,
        setCategory,
        test,
        setTest,
        value,
        setValue
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export { Contexts, StateProvider };
