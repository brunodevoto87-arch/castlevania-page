import {useState, useRef, useEffect} from "react"
import {songs} from "../data/songs"

function MusicPlayer(){
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null);

    const currentSong = songs[currentIndex];

    useEffect(()=>{
        if(isPlaying && audioRef.current){
            audioRef.current.play().catch((error)=>{
                console.log("Error al reproducir", error);
            });
        }
    }, [currentIndex, isPlaying]);

    const togglePlayPause = () => {
        if (isPlaying){
            audioRef.current.pause();
            setIsPlaying(false);
        }
        else{
            audioRef.current.play().catch((error)=>{
                console.log("error al reproducir",error);
            });
            setIsPlaying(true);
        }
    };

    const nextSong = () =>{
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentIndex(nextIndex);
        setIsPlaying(true);
    };
    const prevSong = ()=>{
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentIndex(prevIndex);
        setIsPlaying(true);
    };

    return(
        <div className="reproductor-container">
            <div className="btn-musica">
                <h2 className="titulo-cancion">{currentSong.titulo}</h2>
                <button className="btn-play-pause" onClick={togglePlayPause}>
                {isPlaying ? "Pause" : "Play"}
                </button>
                <button className="btn-siguiente" onClick={nextSong}>Siguiente Cancion
                </button>
                <button className="btn-anterior" onClick={prevSong}>Cancion Anterior
                </button>
                <audio 
                ref={audioRef}
                src={currentSong.src}
                className="mi-reproductor"
                onEnded={nextSong}
                />
            </div>
        </div>
    );
};
export default MusicPlayer




