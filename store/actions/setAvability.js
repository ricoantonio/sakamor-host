export default (dispatch) => ({
  setAvability: async (data) => {
    try {
      dispatch({ type: "SET_AVABILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
