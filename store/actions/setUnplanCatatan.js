export default (dispatch) => ({
  setUnplanCatatan: async (data) => {
    try {
      dispatch({ type: "SET_UNPLAN_CATATAN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
