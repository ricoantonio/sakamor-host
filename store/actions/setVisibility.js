export default (dispatch) => ({
  setVisibility: async (data) => {
    try {
      dispatch({ type: "SET_VISIBILITY", payload: data });
    } catch (e) {
      console.log(e);
    }
  },
});
