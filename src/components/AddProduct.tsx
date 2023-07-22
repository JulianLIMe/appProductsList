import { useState } from "react";
import "../styles/AddProduct.css";

interface AddProductType {
  handleAddProduct: (name: string, price: number) => void;
}

interface Product {
  name: string;
  price: number;
}

const INITIAL_STATE: Product = {
  name: "",
  price: 0,
};

const AddProduct = ({ handleAddProduct }: AddProductType) => {
  const [product, setProduct] = useState<Product>(INITIAL_STATE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddProduct(product.name, product.price);
    setProduct(INITIAL_STATE);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={product.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          value={product.price}
          onChange={(e) => handleChange(e)}
        />
        <button>Add Product</button>
      </form>
    </>
  );
};

export default AddProduct;
