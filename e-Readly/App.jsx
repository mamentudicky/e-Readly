import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./src/config/firebase";

function App() {
  return (
    <Router>
      <Routes>
        {/* Tambahkan route Anda di sini */}
        <Route path="/" element={<Home />} />
        {/* Contoh: <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
