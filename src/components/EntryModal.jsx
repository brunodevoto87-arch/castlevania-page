
function EntryModal({onEnter, onClose}){
    return(
        <div className="entry-modal-overlay">
            <div className="entry-modal">
                <div className="entry-modal-imagen">
                    <img src="/bosses/DracSymph.webp" alt="Conde Drácula" />
                </div>
                <h2>El Castillo de Dracula</h2>

                <p className="entry-modal-texto">
                    El castillo emerge de la niebla una vez más. Alucard, el dhampir, despierta de su letargo de 300 años para enfrentar a su padre. El destino de la humanidad está en sus manos...
                </p>
                <div className="entry-modal-botones">
                    <button className="btn-entrar" onClick={onEnter}>
                        Entrar al Castillo
                    </button>
                    <button className="btn-cancelar" onClick={onClose}>Retroceder</button>
                </div>
            </div>
        </div>
    )
}

export default EntryModal