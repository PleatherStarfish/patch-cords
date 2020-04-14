import React, {useEffect} from "react";

import {PatchCordProvider} from "../context/providers/StateProvider";
import patchCordReducer from "../context/reducers/stateReducer";
import initialState from "../context/state/initialState";

import {CursorLocationProvider} from "../context/providers/CursorLocationProvider";
import cursorLocationReducer from "../context/reducers/cursorLocationReducer";
import initialCursorLocation from "../context/state/initialCursorLocation";

import Canvas from "./Canvas";

const App = () => {

  useEffect(() => {
    document.addEventListener("mousemove", (e) => console.log(e.clientX, e.clientY));
  });

  return (
    <PatchCordProvider initialState={initialState} reducer={patchCordReducer}>
      <CursorLocationProvider initialState={initialCursorLocation} reducer={cursorLocationReducer}>
        <Canvas />
      </CursorLocationProvider>
    </PatchCordProvider>
  );
};

export default App;
