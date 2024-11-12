import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Pricing from "./components/Pricing";


const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Hero />
      <Clients />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;