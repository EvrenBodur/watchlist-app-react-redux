import * as actionTypes from "./actionTypes";

export const setDetail = (info) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_DETAIL,
    payload: info,
  });
};

export const deleteItem = (itemID) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_ITEM_FROM_WATCHLIST,
    payload: itemID,
  });
};
