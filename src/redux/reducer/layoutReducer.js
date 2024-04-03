import * as types from "../types/layoutType";
export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true
};


const layoutReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case types.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case types.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case types.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case types.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    default:
      return state
  }
}

export default layoutReducer;