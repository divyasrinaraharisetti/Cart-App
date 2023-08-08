import React, { useEffect, useState } from "react";

function Cart({ state, dispatch }) {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const updateitemCount = (itemId, quantity) => {
    if (quantity === 0) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          id: itemId
        }
      });
      return;
    }
    dispatch({
      type: "UPDATE_ITEM_CART_QUANTITY",
      payload: {
        id: itemId,
        quantity,
      },
    });
  };

  useEffect(() => {
    const currTotal = cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setTotal(currTotal);
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      <p style={{ alignSelf: "center" }}>Cart</p>
      <p style={{ alignSelf: "center" }}>Subtotal: ${total}</p>
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                overflow: "hidden",
                justifyContent: "space-between",
                margin: 10,
                border: "1px solid grey",
                alignItems: "center",
                padding: 10,
              }}
              key={item.id}
              x
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "70%", height: 100, objectFit: "cover" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() => updateitemCount(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => updateitemCount(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <p style={{ alignSelf: "center" }}>$ {item.price}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p style={{ alignSelf: "center" }}> Cart is Empty</p>
      )}
    </div>
  );
}

export default Cart;
