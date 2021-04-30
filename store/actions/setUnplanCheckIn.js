export default (dispatch) => ({
  setUnplanCheckIn: async (data) => {
    try {
      dispatch({ type: "SET_UNPLAN_CHECK_IN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
