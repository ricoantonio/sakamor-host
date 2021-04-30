export default (dispatch) => ({
  setSpreadingJenisChannel: async (data) => {
    try {
      dispatch({ type: "SET_SPREADING_JENIS_CHANNEL", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
