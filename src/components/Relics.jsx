import {useState, useMemo} from "react"
import {relics} from "../data/relics"
import RelicCard from "./RelicCard"

function normalizarTexto(texto){
    return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
function Relics({onBackHome}){
    const [searchName, setSearchName] = useState("");
    const [filterZone, setFilterZone] = useState("");

    const zones = useMemo(()=>{
        const zonasSet = new Set();
        relics.forEach((r) =>{
            if(r.ubicacion) zonasSet.add(r.ubicacion);
        });
        return [...zonasSet].sort((a,b) => a.localeCompare(b, "es"));
    }, []);
    
    const relicsFiltradas = useMemo(() =>{
        const nombreBuscado = normalizarTexto(searchName);
        const zonaSeleccionada = normalizarTexto(filterZone);
        return relics.filter((relic)=>{
            const coincideNombre = normalizarTexto(relic.nombre).includes(nombreBuscado);
            const coincideZona =
            !zonaSeleccionada || normalizarTexto(relic.ubicacion) === zonaSeleccionada;
            return coincideNombre && coincideZona;
        });
    }, [searchName, filterZone]);
    return(
        <div className="page-container">
            <div className="page-header">
                <h1>Reliquias</h1>
                <p className="page-subtitle">Objetos de Poder del Castillo</p>
                <button onClick={onBackHome}>Volver al inicio</button>
            </div>
            <div className="bestiario-filtros">
                <input 
                type="search"
                placeholder= "Buscar por nombre..."
                aria-label= "Buscar reliquia por nombre"
                value={searchName}
                onChange={(e)=> setSearchName(e.target.value)}
                />
                <select 
                    aria-label="Filtrar reliquia por zona"
                    value={filterZone}
                    onChange={(e)=> setFilterZone(e.target.value)}
                >
                    <option value="">Todas las zonas</option>
                    {zones.map((zona)=>(
                        <option key={zona} value={zona}>
                            {zona}
                        </option>
                    ))}
                </select>
            </div>
            <div id="bestiario-contenedor">
                {relicsFiltradas.length === 0 ? (
                    <p className="sin-resultados">No se encontraron reliquias con esos filtros.</p>) : (relicsFiltradas.map((relic)=>(
                        <RelicCard key={relic.id} relic={relic} />
                    ))
                    )}
            </div>
        </div>
    )
}
export default Relics
