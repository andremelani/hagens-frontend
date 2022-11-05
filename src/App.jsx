import './App.css';
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Cart from './pages/cart'
import Product from './pages/product'
import ProductList from './pages/productList'
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from 'react-router-dom'
import { useSelector } from 'react-redux';



function App() {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/products/:category' element={<ProductList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
