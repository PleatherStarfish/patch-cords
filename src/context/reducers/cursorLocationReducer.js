const cursorLocationReducer = (state, action) => {

  switch (action.type) {

    case "setCursorLocation":
      return {
        ...state,
        location: {x: action.x, y: action.y}
      };

    default:
      return state;
  }

};

export default cursorLocationReducer;