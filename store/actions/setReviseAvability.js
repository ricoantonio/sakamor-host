export default (dispatch) => ({
  setReviseAvability: async (data) => {
    try {
      dispatch({ type: "SET_REVISE_AVABILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
