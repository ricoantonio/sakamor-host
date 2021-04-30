export default (dispatch) => ({
  setSpreadingAvability: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_AVABILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
