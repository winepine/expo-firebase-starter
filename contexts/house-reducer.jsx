export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_RESIDENTS":
      return { ...state, residents: action.payload };
    case "UPDATE_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "UPDATE_HOUSE":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
