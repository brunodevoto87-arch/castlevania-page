import {useState} from "react"
import CharacterCard from "./CharacterCard"
import CharacterModal from "./CharacterModal"
import EntryModal from "./EntryModal"

const characters = [
    {
        id: "alucard",
        name: "Alucard",
        role: "Dhampir",
        description: "Hijo de Drácula y protagonista de la aventura.",
        image: "/characters/Alucard-sotn.png",
    },
    {
        id: "richter",
        name: "Richter",
        role: "Belmont",
        description: "Cazador de vampiros y heredero del clan Belmont.",
        image: "/characters/Richter_Belmont_en_SOTN_.webp"
    },
    {
        id: "maria",
        name: "Maria",
        role: "Renard",
        description: "Aliada de Richter que busca a su amigo en el castillo.",
        image: "/characters/Mariarenard.webp",
    },
];

function Hero({onGoToCastle}){
    const [showModal, setShowModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleCharacterClick = (character) =>{
        setSelectedCharacter(character);
    };
    const handleCloseCharacterModal = () =>{
        setSelectedCharacter(null);
    };

    return(
        <>
            <div className="hero">
                <div className="hero-info">
                    <h2>Unleash the power of the dhampir</h2>
                    <p>
                    Castlevania: Symphony of the Night no es solo un videojuego; es una obra maestra gótica que redefinió la historia del entretenimiento digital y dio origen al género Metroidvania. Lanzado en 1997, este título rompió los moldes de las plataformas lineales para sumergir al jugador en una sinfonía de exploración, acción y rol envuelta en una atmósfera oscura e inolvidable. La premisa épica: el legendario clan Belmont ha desaparecido y el castillo de Drácula, una criatura del caos que cambia de forma, emerge de entre la niebla antes de tiempo. Es aquí donde despierta Alucard, el hijo dhampir del Conde. Dividido entre su sangre maldita y su humanidad, Alucard decide adentrarse en las entrañas de la fortaleza de su padre para sellarla y salvar a la humanidad, desatando una tragedia familiar de proporciones mitológicas. Razones de su legado inmortal: el elixir visual, su arte en dos dimensiones (2D), representa la cumbre del pixel art, con animaciones fluidas, escenarios góticos detallados y jefes colosales que superan la estética de su época. Una banda sonora legendaria: compuesta por Michiru Yamane, la música es una fusión perfecta de rock progresivo, música clásica, techno y jazz que se clava en la mente del jugador para siempre. Libertad y descubrimiento: el mapa del castillo es un laberinto interconectado repleto de secretos, armas místicas y pasajes ocultos que premian la curiosidad del jugador. El gran giro final: el juego desafía las expectativas con uno de los secretos más icónicos de la historia: la revelación de un segundo castillo invertido, duplicando la aventura y el desafío cuando creías haber terminado. Alucard no solo camina por las sombras; danza en ellas con una gracia letal, convirtiendo cada estocada de espada y cada hechizo en un poema visual de redención y sangre.
                    </p>
                    <button className="btnIntro" onClick={()=> setShowModal(true)}>
                        Enter the Castle
                    </button>
                </div>
                <div className="characters-container">
                    {characters.map((char) => (
                        <CharacterCard 
                        key={char.id} 
                        character={char}
                        onClick={() => handleCharacterClick(char)} 
                    />
                ))}
            </div>
        </div>
        {showModal && (
            <EntryModal onEnter={onGoToCastle} onClose={() =>setShowModal(false)} />
        )}
        {selectedCharacter && (
            <CharacterModal
            character={selectedCharacter}
            onClose={handleCloseCharacterModal}
            />             
        )}
    </>
    );
}

export default Hero