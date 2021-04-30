export default (dispatch) => ({
  setSpreadingOutlet: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_OUTLET", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
