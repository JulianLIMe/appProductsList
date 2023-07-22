import { formatCurrency } from "../formatCurrency";
import "../styles/Products.css";

type Product = {
  id: number;
  name: string;
  price: number;
};

interface ProductsType {
  product: Product;
  handleRemoveProduct: (id: number) => void;
}

const Products = ({ product, handleRemoveProduct }: ProductsType) => {
  return (
    <div className="container_product">
      <span className="name">{product.name}</span>
      <span className="price">{formatCurrency(product.price)}</span>
      <button onClick={() => handleRemoveProduct(product.id)}>X</button>
    </div>
  );
};

export default Products;
