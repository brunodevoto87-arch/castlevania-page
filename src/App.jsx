import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Quote from "./components/Quote"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import "./index.css";
function App(){
  return(
    <div>
      <Header />
      <Hero />
      <Features />
      <Quote />
      <CTA />
      <Footer />
    </div>
  );
}
export default App;