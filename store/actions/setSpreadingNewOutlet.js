export default (dispatch) => ({
  setSpreadingNewOutlet: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_NEW_OUTLET", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
