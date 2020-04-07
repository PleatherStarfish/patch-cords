import React, { createContext, useContext, useReducer } from "react";

export const PatchCordContext = createContext();
export const PatchCordProvider = ({ reducer, initialState, children }) => (
  <PatchCordContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </PatchCordContext.Provider>
);

export const usePatchCordStateValue = () => useContext(PatchCordContext);
