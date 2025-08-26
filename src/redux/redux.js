// Action

import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

// 장바구니에 아이템 추가 (OrderModal.jsx 참고)
const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};
// - payload: { options, quantity, id } 형태로 전달
// - 추후 price, name 같은 속성을 추가해도 구조 유지 가능

// 장바구니 아이템 삭제 (Cart.jsx 참고)
const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};
// - payload: { id } → 해당 id와 다른 아이템만 남기도록 filter 처리 진행

// Reducer
// cartReducer: cart 상태 관리
const cartReducer = (state = [], action) => {
  // 초기값 빈 배열
  switch (action.type) {
    case "addToCart": // 기존 state에 새로운 아이템 추가
      return [...state, action.payload];
    case "removeFromCart": // id가 일치하지 않는 요소만 남김
      return state.filter((el) => action.payload.id !== el.id);
    default:
      return state;
  }
};

// menuReducer: menu 상태 관리
const menuReducer = (state = data.menu, action) => {
  // 초기값 data.menu
  return state;
};

// store
const rootReducer = combineReducers((cartReducer, menuReducer));
export const store = legacy_createStore(rootReducer);

// dispatch
