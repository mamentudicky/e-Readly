import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/style.css'
import './css/bootstrap.min.css'
import './css/responsive.css'
import './css/jquery.mCustomScrollbar.min.css'
import './css/owl.carousel.min.css'

import HomePage from './pages/Homepage'
import Catalog from './pages/Catalog';
import Publish from './pages/Publish';
import Mystery from './pages/Mystery';
import SciFi from './pages/Sci-fi';
import Romance from './pages/Romance';
import Educational from './pages/Educational'
import Theology from './pages/Theology'
import BookProfile from './pages/BookProfile';

import "./config/Firebase";
import Form from './pages/Form';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/publish" element={<Publish />} />
            <Route exact path="/publish/form" element={<Form />} />
            <Route exact path="/catalog" element={<Catalog />} />
            <Route exact path="/mystery" element={<Mystery />} />
            <Route exact path="/sci-fi" element={<SciFi/>} />
            <Route exact path="/romance" element={<Romance />} />
            <Route exact path="/educational" element={<Educational />} />
            <Route exact path="/theology" element={<Theology />} />
            <Route exact path="/bookProfile" element={<BookProfile />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
