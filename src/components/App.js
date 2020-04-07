import React from "react";
import uniqid from "uniqid";
import { PatchCordProvider } from "../context/providers/StateProvider";
import patchCordReducer from "../context/reducers/stateReducer";
import initialState from "../context/state/initialState";
import Box from "./Box";

const App = () => {
  return (
    <PatchCordProvider initialState={initialState} reducer={patchCordReducer}>
      <Box title="Box One" id={uniqid()} />
      <Box title="Box Two" id={uniqid()} />
      <Box title="Box Three" id={uniqid()} />
    </PatchCordProvider>
  );
};

export default App;
