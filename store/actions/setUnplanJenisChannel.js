export default (dispatch) => ({
  setUnplanJenisChannel: async (data) => {
    try {
      dispatch({ type: "SET_UNPLAN_JENIS_CHANNEL", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
