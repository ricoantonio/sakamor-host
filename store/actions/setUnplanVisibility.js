export default (dispatch) => ({
  setUnplanVisibility: async (data) => {
    try {
      dispatch({ type: "SET_UNPLAN_VISIBILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
