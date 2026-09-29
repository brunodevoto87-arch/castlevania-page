import {useState} from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Quote from "./components/Quote"
import CTA from "./components/CTA"
import MusicPlayer from "./components/MusicPlayer"
import Bestiary from "./components/Bestiary"
import ScrollButtons from "./components/ScrollButtons"
import Footer from "./components/Footer"
import "./index.css";
function App(){
  const [page, setPage] = useState("home");
  const goToBestiary = () => setPage("bestiary");
  const goToHome = () => setPage("home");
  if (page === "bestiary"){
    return (
      <>
        <Bestiary onBackHome={goToHome} />
        <ScrollButtons />
      </>
    )
  }
  return(
    <div>
      <Header onGoToBestiary={goToBestiary} />
      <Hero />
      <Features />
      <Quote />
      <CTA />
      <MusicPlayer />
      <Footer />
      <ScrollButtons />
    </div>
  );
}
export default App;