export default (dispatch) => ({
  setSpreadingVisibility: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_VISIBILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
