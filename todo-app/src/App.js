import Products from "./components/products"
import Product from "./components/product"
import {
   Route,
   BrowserRouter,
   Routes
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Products/>}/>
      <Route path="/products/:id" element ={<Product/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
