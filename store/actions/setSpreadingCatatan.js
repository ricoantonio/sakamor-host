export default (dispatch) => ({
  setSpreadingCatatan: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_CATATAN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
