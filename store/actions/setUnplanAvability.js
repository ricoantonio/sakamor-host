export default (dispatch) => ({
  setUnplanAvability: async (data) => {
    try {
      dispatch({ type: "SET_UNPLAN_AVABILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
