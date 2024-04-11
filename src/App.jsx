import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './header/Header';
import Nav from './nav/Nav';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {
  const stateBurger = useSelector((state) => state.cart.stateBurger);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        {stateBurger === false ? <Main /> : null}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
