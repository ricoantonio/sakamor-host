const defaultVisitUnplan = {
  visibility: [],
  avability: [],
  catatan: "",
  checkIn: "",
  jenisChannel: {},
  outlet: {},
};

const visitUnplanReducer = (state, action) => {
  switch (action.type) {
    case "SET_UNPLAN_VISIBILITY":
      return { ...state, visibility: action.payload };
    case "SET_UNPLAN_AVABILITY":
      return { ...state, avability: action.payload };
    case "SET_UNPLAN_CATATAN":
      return { ...state, catatan: action.payload };
    case "SET_UNPLAN_CHECK_IN":
      return { ...state, checkIn: action.payload };
    case "SET_UNPLAN_JENIS_CHANNEL":
      return { ...state, jenisChannel: action.payload };
    case "SET_UNPLAN_OUTLET":
      return { ...state, outlet: action.payload };
    case "SET_DEFAULT_VISIT_UNPLAN":
      return { ...defaultVisitUnplan };
    default:
      return state;
  }
};

export { visitUnplanReducer, defaultVisitUnplan };
