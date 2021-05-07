const defaultVisitSpreading = {
  visibility: [],
  avability: [],
  catatan: "",
  alamat: "",
  newOutlet: "",
  checkIn: "",
  jenisChannel: {},
  outlet: {},
};

const visitSpreadingReducer = (state, action) => {
  switch (action.type) {
    case "SET_SPREADING_VISIBILITY":
      return { ...state, visibility: action.payload };
    case "SET_SPREADING_AVABILITY":
      return { ...state, avability: action.payload };
    case "SET_SPREADING_CATATAN":
      return { ...state, catatan: action.payload };
    case "SET_SPREADING_ALAMAT":
      return { ...state, alamat: action.payload };
    case "SET_SPREADING_NEW_OUTLET":
      return { ...state, newOutlet: action.payload };
    case "SET_SPREADING_CHECK_IN":
      return { ...state, checkIn: action.payload };
    case "SET_SPREADING_JENIS_CHANNEL":
      return { ...state, jenisChannel: action.payload };
    case "SET_SPREADING_OUTLET":
      return { ...state, outlet: action.payload };
    case "SET_DEFAULT_VISIT_SPREADING":
      return { ...defaultVisitSpreading };
    default:
      return state;
  }
};

export { visitSpreadingReducer, defaultVisitSpreading };
