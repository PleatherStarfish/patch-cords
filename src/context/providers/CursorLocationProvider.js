import React, { createContext, useContext, useReducer } from "react";

export const CursorLocationContext = createContext();
export const CursorLocationProvider = ({ reducer, initialState, children }) => (
  <CursorLocationContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CursorLocationContext.Provider>
);

export const useCursorLocationStateValue = () => useContext(CursorLocationContext);