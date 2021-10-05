const defaultRevise = {
  visibility: [],
  avability: [],
};

const reviseReducer = (state, action) => {
  switch (action.type) {
    case "SET_REVISE_AVABILITY":
      return { ...state, avability: action.payload };
    case "SET_REVISE_VISIBILITY":
      return { ...state, visibility: action.payload };
    default:
      return state;
  }
};

export { reviseReducer, defaultRevise };
