import { useEffect, useReducer, useState } from "react";
import "./App.css";
import cartReducer from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  const [isError, setIsError] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const jsonData = await data.json();
      dispatch({
        type: "ADD_PRODUCTS",
        payload: jsonData.products,
      });
    } catch (error) {
      setIsError(true);
      console.error("Something went wrong while fetching data: ",error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {state.products.length > 0 ? (
        <>
          <Products state={state} dispatch={dispatch} />
          <Cart state={state} dispatch={dispatch} />
        </>
      ) : (
        isError ?
        <p style={{alignSelf: "center"}}>{'Error while fetching data :('}</p>:
        <p style={{alignSelf: "center"}}>{'No Products Available currently'}</p>
      )}
    </div>
  );
}

export default App;
