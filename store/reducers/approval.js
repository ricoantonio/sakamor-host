const defaultApproval = {
  focusApproval: {},
};

const approvalReducer = (state, action) => {
  switch (action.type) {
    case "SET_FOCUS_APPROVAL":
      return { ...state, focusApproval: action.payload };
    default:
      return state;
  }
};

export { approvalReducer, defaultApproval };
