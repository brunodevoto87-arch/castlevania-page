function BestiaryFilters({
    searchName,
    setSearchName,
    filterType,
    setFilterType,
    filterZone,
    setFilterZone,
    types,
    zones,
}){
    return(
        <div className="bestiario-filtros">
            <input 
                type="search" 
                placeholder= "Buscar por nombre..."
                aria-label= "buscar enemigo por nombre"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
            />
            <select
                aria-label="Filtrar monstruos por tipo"
                value={filterType}
                onChange={(e)=> setFilterType(e.target.value)}
            >
                {types.map((tipo)=>(
                    <option key={tipo} value={tipo}>
                        {tipo} 
                    </option>
                ))}
            </select>
            <select 
                aria-label="Filtrar monstruos por zona"
                value={filterZone}
                onChange={(e)=> setFilterZone(e.target.value)}
            >
                <option value="">Todas las Zonas</option>
                {zones.map((zona)=>(
                    <option key={zona} value={zona}>
                        {zona}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default BestiaryFilters