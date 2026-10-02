function RelicCard({relic}){
    return(
        <div className="tarjeta-reliquia">
            <div className="imagen-contenedor">
                <img src={relic.imagen} alt={relic.nombre} 
                />
            </div>
            <h3>{relic.nombre}</h3>
            <p className="descripcion-reliquia">{relic.descripcion}</p>
            <div className="stats-reliquia">
                <p>
                    <span>Efecto:</span> <span>{relic.efecto ||  "-"}</span>
                </p>
                <p title={relic.ubicacion}>
                    <span>Ubicacion:</span> <span>{relic.ubicacion || "Desconocida"}</span>
                </p>
            </div>
        </div>
    )
}
export default RelicCard