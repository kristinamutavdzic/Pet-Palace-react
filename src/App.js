import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Shop} from './pages/shop/Prodavnica'
import {Cart} from './pages/cart/Korpa'

function App() {
  return (
    <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
  );
}

export default App;
