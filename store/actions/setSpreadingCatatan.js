export default (dispatch) => ({
  setSpreadingAlamat: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_ALAMAT", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
