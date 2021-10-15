export default (dispatch) => ({
  setDefaultRevise: async () => {
    try {
      dispatch({ type: "SET_DEFAULT_REVISE" });
    } catch (e) {
      console.log(e);
    }
  },
});
