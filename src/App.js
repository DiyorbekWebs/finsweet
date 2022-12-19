import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return <>
  <Header/>
  <Routes>
    <Route path='/' element={"home"}/>
  </Routes>
  <Footer/>
    </>;
}

export default App;
