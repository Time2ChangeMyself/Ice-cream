import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard';


function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
       <Route path='/' element={<MainContent />} />
       <Route path='product/:id' element={<ProductCard />} />
       
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
