export default (dispatch) => ({
  setDefaultVisitSpreading: async () => {
    try {
      dispatch({ type: "SET_DEFAULT_VISIT_SPREADING" });
    } catch (e) {
      console.log(e);
    }
  },
});
