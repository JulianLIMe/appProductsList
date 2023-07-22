import { useReducer } from "react";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import "./App.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface State {
  products: Product[];
  counter: number;
}

type Action =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: number };

const INITIAL_STATE: State = {
  products: [],
  counter: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.payload],
        counter: state.counter + 1,
      };
    case "REMOVE_PRODUCT":
      return {
        products: state.products.filter((item) => item.id !== action.payload),
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleAddProduct = (name: string, price: number) => {
    const newProductId = state.products[state.products.length - 1]?.id + 1 || 1;
    const newProduct: Product = {
      id: newProductId,
      name,
      price,
    };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  };

  const handleRemoveProduct = (id: number) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  return (
    <>
      <AddProduct handleAddProduct={handleAddProduct} />
      {state.counter > 0 && <div className="counter">{state.counter}</div>}
      <div className="products">
        {state.products.map((product) => (
          <Products
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
    </>
  );
}

export default App;
