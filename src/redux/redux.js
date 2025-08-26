// action
// 장바구니에 아이템 추가 (OrderModal.jsx 참고)
const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};

// 장바구니 아이템 삭제 (Cart.jsx 참고)
const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};

// reducer
// dispatch
// store
