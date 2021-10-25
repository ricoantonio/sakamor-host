export default (dispatch) => ({
  setSpreadingNearMe: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_NEARME", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
