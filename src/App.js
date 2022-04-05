
import './App.scss';
import Footer from './Components/Footer';
import TopHeader from './Components/TopHeader';
import Home from './Pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Pages/About';
import Items from './Pages/Items';
import View from './Pages/Action/View';
import AddItem from './Pages/Action/AddItem';
import EditItem from './Pages/Action/Edit';
import InterviewQuestions from './Pages/InterviewQuestions';

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
          <Route path="/item/edit/:id" element= { <EditItem /> } />
          <Route path="/interview-questions/" element= { <InterviewQuestions /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
