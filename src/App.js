import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import { Container } from 'react-bootstrap';
import WaiterApp from './components/pages/WaiterApp/WaiterApp'

const App = () => {
  return (
      <div>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/waiter" element={<WaiterApp />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </div>
  );
};

export default App;


