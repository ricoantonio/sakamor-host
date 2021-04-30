export default (dispatch) => ({
  setUnplanOutlet: async (data) => {
    try {
      dispatch({ type: "SET_UNPLAN_OUTLET", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
