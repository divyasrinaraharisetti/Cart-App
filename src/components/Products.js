import React from "react";

function Products({ state, dispatch }) {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => {
        return (
          <div
            key={prod.id}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 10,
              margin: 10,
              gap: 10,
              width: "25%",
              border: "1px solid grey",
              overflow: "hidden",
            }}
          >
            <img
              src={prod.thumbnail}
              alt={prod.title}
              style={{ height: 200, objectFit: "cover" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{prod.title}</span>
              <b>$ {prod.price}</b>
            </div>
            {cart.some((p) => p.id === prod.id) ? (
              <button style={{ backgroundColor: "red", color: "white" }} onClick={() => dispatch({
                type: "REMOVE_FROM_CART",
                payload: {
                    id:prod.id
                }
              })}>
                Remove from Cart
              </button>
            ) : (
              <button style={{ backgroundColor: "green", color: "white" }}  onClick={() => dispatch({
                type: "ADD_TO_CART",
                payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    quantity: 1,
                    price: prod.price
                }
              })}>
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Products;
