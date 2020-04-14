import uniqid from "uniqid";

const patchCordReducer = (state, action) => {

  const cordID = uniqid();
  const newNode = `node${action.new}`;
  const newCord = `cord${cordID}`;

  switch (action.type) {

    case "setClicked":

      return {
        ...state,
        clicked: action.click
      };

    case "addStartNode":

      return {
        ...state,
        nodes: {
          ...state.nodes,
          [newNode]: (state.nodes[newNode] === undefined) ? [newCord] : [...state.nodes[newNode], newCord]
        }
      };

    case "removeStartNode":

      return {
        ...state,
        nodes: {
          ...state.nodes,
          [newNode]: state.nodes[newNode].filter((e) => e !== newCord)
        }
      };

    default:
      return state;
  }
};

export default patchCordReducer;