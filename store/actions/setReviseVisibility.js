export default (dispatch) => ({
  setReviseVisibility: async (data) => {
    try {
      dispatch({ type: "SET_REVISE_VISIBILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
