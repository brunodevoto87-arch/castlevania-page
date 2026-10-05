import {bosses} from "../data/bosses"

function BossesModal({onClose}){
    const handleBossClick = (bossName) => {
        const query = encodeURIComponent(
            `castlevania sotn ${bossName} boss fight`
        );
        window.open(
            `https://www.youtube.com/results?search_query=${query}`,"_blank"
        );
    };
    return(
        <div className="boss-modal-overlay" onClick={onClose}>
            <div className="boss-modal" onClick={(e)=>e.stopPropagation()}>
                <button 
                className="boss-modal-close"
                onClick={onClose}
                aria-label="Cerrar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                </button>
                <div className="boss-modal-header">
                    <h2>Boss Battles</h2>
                    <p>Los jefes de Symphony of the Night</p>
                </div>
                <div className="boss-modal-grid">
                    {bosses.map((boss)=>(
                        <div 
                        key={boss.id}
                        className="boss-modal-card"
                        onClick={()=> handleBossClick(boss.nombre)}
                        title={`Ver pelea contra ${boss.nombre}`}
                        >
                            <div className={`boss-modal-image ${Array.isArray(boss.imagen) ? "boss-modal-image-multiple" : ""}`}>
                                {(Array.isArray(boss.imagen) ? boss.imagen : [boss.imagen]).map((imagen, index)=>(
                                    <img
                                        key={`${boss.id}-${index}`}
                                        src={imagen}
                                        alt={Array.isArray(boss.imagen) ? `${boss.nombre} ${index + 1}` : boss.nombre}
                                    />
                                ))}
                            </div>
                            <p>{boss.nombre}</p>
                            <span className="boss-modal-play">▶</span>
                        </div>
                    ))}
                </div>
                <p className="boss-modal-footer">Haz clic en un jefe para ver la mecánica del combate</p>
            </div>
        </div>
    );
}
export default BossesModal