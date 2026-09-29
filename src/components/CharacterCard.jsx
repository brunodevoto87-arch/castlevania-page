function CharacterCard({character}){
    return(
        <div className={`character-card ${character.active ? "active": ""}`} data-character={character.id}>
            <div className="character-image">
                <img src={character.image} alt={character.name} />
                <div className="character-overlay">
                    <span className="character-name">{character.name}</span>
                    <span className="character-role">{character.role}</span>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard;