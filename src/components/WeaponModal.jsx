import { useState, useMemo } from "react";
import { weapons } from "../data/weapons";
import WeaponCard from "./WeaponCard";

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function WeaponsModal({ onClose }) {
  const [searchName, setSearchName] = useState("");
  const [filterType, setFilterType] = useState("Todos");

  // Tipos únicos (Shields, Swords, etc.)
  const types = useMemo(() => {
    return ["Todos", ...new Set(weapons.map((w) => w.tipo))];
  }, []);

  // Filtrado
  const armasFiltradas = useMemo(() => {
    const nombreBuscado = normalizarTexto(searchName);

    return weapons.filter((arma) => {
      const coincideNombre = normalizarTexto(arma.nombre).includes(nombreBuscado);
      const coincideTipo = filterType === "Todos" || arma.tipo === filterType;
      return coincideNombre && coincideTipo;
    });
  }, [searchName, filterType]);

  return (
    <div className="weapons-modal-overlay" onClick={onClose}>
      <div className="weapons-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="weapons-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div className="weapons-modal-header">
          <h2>Weapons & Shields</h2>
          <p>Las armas y escudos de Symphony of the Night</p>
        </div>

        <div className="bestiario-filtros">
          <input
            type="search"
            placeholder="Buscar por nombre..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {types.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>

        <div className="weapons-modal-grid">
          {armasFiltradas.length === 0 ? (
            <p className="sin-resultados">
              No se encontraron armas con esos filtros.
            </p>
          ) : (
            armasFiltradas.map((arma) => (
              <WeaponCard key={arma.id} weapon={arma} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default WeaponsModal;