export default (dispatch) => ({
  setCatatan: async (data) => {
    try {
      dispatch({ type: "SET_CATATAN", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
