import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Shop} from './pages/shop/Prodavnica'
import {Cart} from './pages/cart/Korpa'
import { ProizvodiContextProvider } from './context/ProizvodiContext';
import Footer from './components/footer';
import ONama from './pages/ONama'
import CopyButton from "./components/CopyButton";

function App() {
  const telefon = "+381 657890345";
  return (
    <ProizvodiContextProvider>
              <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Shop />}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/onama"  element={<ONama />} />
              </Routes>
              <Footer/>
              <CopyButton textToCopy={telefon}/> 
            </Router>
      </ProizvodiContextProvider>
  );
}

export default App;
