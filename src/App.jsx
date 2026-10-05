import {useState, useRef} from "react"
import BossesModal from "./components/BossesModal"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Quote from "./components/Quote"
import CTA from "./components/CTA"
import WeaponsModal from "./components/WeaponModal"
import MusicPlayer from "./components/MusicPlayer"
import Relics from "./components/Relics"
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
  const [showBossModal, setShowBossModal] = useState(false);
  const [showWeaponsModal, setShowWeaponsModal] = useState(false);

  const audioRef = useRef(null);

  const goToCastleWithMusic = () =>{
    if (audioRef.current){
      audioRef.current.play().catch((err) => console.log("Audio error", err))
    }
    setPage("castle");
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  const goTo = (target, options = {}) =>{
    setPage(target);
    if (options.inverted !==undefined){
      setBestiaryInverted(options.inverted);
    }
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  let pageContent;

  if (page === "bestiary"){
    pageContent = (
      <>
        <Bestiary 
        onBackHome={() => goTo("home")}
        initialInverted= {bestiaryInverted}
        />
        <ScrollButtons />
      </>
    );
  }

  else if (page === "history"){
    pageContent = (
      <>
      <History onBackHome={() => goTo("home")} />
      <ScrollButtons />
      </>
    );
  }

  else if (page === "alucard"){
    pageContent = (
      <>
      <AboutAlucard onBackHome={() => goTo("home")}/>
      <ScrollButtons />
      </>
    );
  }

  else if (page === "castle"){
    pageContent = (
      <>
      <DraculasCastle onBackHome={() => goTo("home")} />
      <ScrollButtons />
      </>
    );
  }
  else if(page === "relics"){
    pageContent = (
      <>
        <Relics onBackHome={()=> goTo("home")} />
        <ScrollButtons />
      </>
    );
  } else {
    pageContent = (
      <>
      <Header onNavigate={goTo} />
      <Hero 
        onGoToBestiary={() => goTo("bestiary")}
        onGoToCastle={goToCastleWithMusic}
      />
      <section className="music-section">
        <h2>Música del castillo</h2>
        <p>Escucha toda la música de Symphony of the Night</p>
        <MusicPlayer />
      </section>
      <Features 
      onNavigate={goTo}
      onOpenBossModal={()=>setShowBossModal(true)}
      onOpenWeaponsModal={()=> setShowWeaponsModal(true)}
      />
      <Quote />
      <CTA />
      <Footer />
      {showWeaponsModal && (
        <WeaponsModal onClose={()=> setShowWeaponsModal(false)} />
      )}
      <ScrollButtons />
      {showBossModal &&(
        <BossesModal onClose={() => setShowBossModal(false)}/>
      )}
      </>
    );
  }

  return(
    <>
      {pageContent}
      <audio
        ref={audioRef}
        src="https://archive.org/download/castlevania-symphony-of-the-night-soundtrack/Dracula%27s%20Castle%20%28Arranged%20by%20Akira%20Yamaoka%29.mp3"
        onEnded={() => {
          if (audioRef.current) audioRef.current.currentTime = 0;
        }}
      />
    </>
  );
}
export default App;