import Products from "./components/products";
import Product from "./components/product";
import Card from "./components/card";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Card />
      <Routes>
        
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
