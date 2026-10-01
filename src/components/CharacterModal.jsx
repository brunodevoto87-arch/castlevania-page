function CharacterModal({character, onClose}){
    if (!character) return null;
    return(
        <div className="character-modal-overlay" onClick={onClose}>
            <div className="character-modal" onClick={(e)=>e.stopPropagation()}>
                <button className="character-modal-close" onClick={onClose} aria-label="Cerrar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>
                <div className="character-modal-imagen">
                    <img src={character.image} alt={character.name} />
                </div>
                <h2>{character.name}</h2>
                <p className="character-modal-role">{character.role}</p>
                <p className="character-modal-descripcion">{character.description}</p>
                <button className="btn-cerrar" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}
export default CharacterModal