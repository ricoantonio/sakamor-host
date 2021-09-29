export default (dispatch) => ({
  setFocusApproval: async (data) => {
    try {
      dispatch({ type: "SET_FOCUS_APPROVAL", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
