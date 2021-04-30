export default (dispatch) => ({
  setSpreadingCheckIn: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_CHECK_IN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
