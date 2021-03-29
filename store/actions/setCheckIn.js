export default (dispatch) => ({
  setCheckIn: async (data) => {
    try {
      dispatch({ type: "SET_CHECK_IN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
