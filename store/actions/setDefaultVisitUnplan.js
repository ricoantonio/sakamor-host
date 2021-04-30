export default (dispatch) => ({
  setDefaultVisitUnplan: async () => {
    try {
      dispatch({ type: "SET_DEFAULT_VISIT_UNPLAN" });
    } catch (e) {
      console.log(e);
    }
  },
});
