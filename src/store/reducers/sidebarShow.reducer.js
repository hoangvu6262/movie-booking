const initialState = {
  isSidebarShow: false,
};

const sidebarShowReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIDE_BAR_SHOW":
      state.isSidebarShow = payload;
      return { ...state };
    default:
      return state;
  }
};

export default sidebarShowReducer;
