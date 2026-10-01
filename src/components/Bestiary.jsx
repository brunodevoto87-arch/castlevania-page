import {useState, useMemo} from "react"
import {bestiario} from "../data/monsters"
import {bosses} from "../data/bosses"
import {MonsterInverted} from "../data/monsterInverted"
import {bossesInverted} from "../data/bossesInverted"
import MonsterCard from "./MonsterCard"
import BestiaryFilters from "./BestiaryFilters"

function normalizarTexto(texto){
    return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
function Bestiary({onBackHome}){
    const [currentList, setCurrentList] = useState("monsters");
    const [isInverted, setIsInverted] = useState(false);
    const [searchName, setSearchName] = useState("");
    const [filterType, setFilterType] = useState("Todos");
    const [filterZone, setFilterZone] = useState("");

    const listaActual = useMemo(()=>{
        if(isInverted){
            return currentList === "monsters" ? MonsterInverted : bossesInverted;
        }
        return currentList === "monsters" ? bestiario : bosses;
    }, [currentList, isInverted]);

    const types = useMemo(()=> {
        return ["Todos", ...new Set(listaActual.map((m)=>m.tipo))];
    }, [listaActual]);

    const zones = useMemo(()=>{
        const zonasMap = new Map();
        listaActual.forEach((m)=>{
            if(!m.ubicacion) return;
            m.ubicacion.split(",").forEach((zona)=>{
                const zonaLimpia = zona.trim();
                const clave = normalizarTexto(zonaLimpia);

                if(zonaLimpia && !clave.includes("reverse") && !zonasMap.has(clave)){
                    zonasMap.set(clave, zonaLimpia);
                }
            });
        });
        return[...zonasMap.values()].sort((a,b)=>a.localeCompare(b, "es"));
    }, [listaActual]);

    const monstruosFiltrados = useMemo(()=>{
        const nombreBuscado = normalizarTexto(searchName);
        const zonaSeleccionada = normalizarTexto(filterZone);
        return listaActual.filter((monstruo)=>{
            const coincideNombre = normalizarTexto(monstruo.nombre).includes(nombreBuscado);
            const coincideTipo = filterType === "Todos" || monstruo.tipo === filterType;

            let coincideZona = true;
            if(filterZone === "__ALL_REVERSE__"){
                coincideZona = monstruo.ubicacion
                ? monstruo.ubicacion.toLowerCase().includes("(reverse)")
                : false;
            }
            else if (zonaSeleccionada){
                coincideZona = monstruo.ubicacion
                ? monstruo.ubicacion 
                    .split(",")
                    .some((zona) => normalizarTexto(zona) === zonaSeleccionada)
                : false;
            }
            return coincideNombre && coincideTipo && coincideZona;
        });
    }, [listaActual, searchName, filterType, filterZone]);
    const switchList = (list) =>{
        setCurrentList(list);
        setSearchName("");
        setFilterType("Todos");
        setFilterZone("");
    };
    return(
        <div id="bestiario-page" className={isInverted ? "inverted" : ""}>
            <div className="bestiario-header">
                <h2>{isInverted ? "Bestiario Invertido" : "Bestiario"}</h2>
                <p>{isInverted
                    ? "Inverted Castle Creatures"
                    : "Creatures of the Castle"}</p>
                <button onClick={onBackHome}>Volver al inicio</button>
                <button className="btn-invertir" onClick={()=>setIsInverted(!isInverted)}>{isInverted ? "☀ Restaurar Castillo" : "🌑 Invertir Castillo"}</button>
            </div>
            <div className="bestiario-botones-lista">
                <button
                onClick={()=>switchList("monsters")} className={currentList === "monsters" ? "active" : ""}>
                    {isInverted
                    ? `Monstruos invertidos (${MonsterInverted.length})`
                    : `Monstruos (${bestiario.length})`}
                </button>
                <button 
                    onClick={()=>switchList("bosses")}
                    className={currentList === "bosses" ? "active" : ""}>
                        {isInverted
                        ? `Bosses invertidos (${bossesInverted.length})`
                        : `Bosses (${bosses.length})`}
                </button>
            </div>
            <BestiaryFilters 
                searchName={searchName}
                setSearchName={setSearchName}
                filterType={filterType}
                setFilterType={setFilterType}
                filterZone={filterZone}
                setFilterZone={setFilterZone}
                types={types}
                zones={zones}
            />
            <div id="bestiario-contenedor">
                {monstruosFiltrados.length === 0 ? (
                    <p className="sin-resultados">
                        No hay resultados
                    </p>
                    ) : (
                        monstruosFiltrados.map((monster)=>(
                            <MonsterCard key={monster.id} monster={monster} />
                        ))
                    )}
            </div>
        </div>
    );
}

export default Bestiary