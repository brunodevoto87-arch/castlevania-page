import {useState} from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Quote from "./components/Quote"
import CTA from "./components/CTA"
import MusicPlayer from "./components/MusicPlayer"
import Bestiary from "./components/Bestiary"
import ScrollButtons from "./components/ScrollButtons"
import History from "./components/History"
import AboutAlucard from "./components/AboutAlucard"
import DraculasCastle from "./components/DraculasCastle"
import Footer from "./components/Footer"
import "./index.css";
function App(){
  const [page, setPage] = useState("home");
  const [bestiaryInverted, setBestiaryInverted] = useState(false);

  const goTo = (target, options = {}) =>{
    setPage(target);
    if (options.inverted !==undefined){
      setBestiaryInverted(options.inverted);
    }
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  if (page === "bestiary"){
    return (
      <>
        <Bestiary 
        onBackHome={() => goTo("home")}
        initialInverted= {bestiaryInverted}
        />
        <ScrollButtons />
      </>
    );
  }

  if (page === "history"){
    return(
      <>
      <History onBackHome={() => goTo("home")} />
      <ScrollButtons />
      </>
    );
  }

  if (page === "alucard"){
    return(
      <>
      <AboutAlucard onBackHome={() => goTo("home")}/>
      <ScrollButtons />
      </>
    );
  }

  if (page === "castle"){
    return(
      <>
      <DraculasCastle onBackHome={() => goTo("home")} />
      <ScrollButtons />
      </>
    );
  }
  return(
    <>
      <Header onNavigate={goTo} />
      <Hero onGoToBestiary={() => goTo("bestiary")}/>
      <Features onNavigate={goTo} />
      <Quote />
      <CTA />
      <MusicPlayer />
      <Footer />
      <ScrollButtons />
    </>
  );
}
export default App;