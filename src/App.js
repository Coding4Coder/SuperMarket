
import './App.scss';
import Footer from './Components/Footer';
import TopHeader from './Components/TopHeader';
import Home from './Pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Pages/About';
import Items from './Pages/Items';
import View from './Pages/Action/View';

function App() {
  return (
    <>
    <BrowserRouter>
      <TopHeader />
      <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="/about/" element= { <About /> } />
          <Route path="/items/" element= { <Items /> } />
          <Route path="/item/view/:id" element= { <View /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
