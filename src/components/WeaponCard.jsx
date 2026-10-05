function WeaponCard({ weapon }) {
  return (
    <div className="tarjeta-arma">
      <div className="imagen-contenedor">
        <img src={weapon.imagen} alt={weapon.nombre} />
      </div>

      <h3>{weapon.nombre}</h3>

      <p className="descripcion-arma">{weapon.descripcion}</p>

      <div className="stats-arma">
        <p>
          <span>Stats:</span> <span>{weapon.stats || "—"}</span>
        </p>
        <p title={weapon.ubicacion}>
          <span>Ubicación:</span> <span>{weapon.ubicacion || "—"}</span>
        </p>
        <p title={weapon.drop}>
          <span>Drop:</span> <span>{weapon.drop || "—"}</span>
        </p>
      </div>
    </div>
  );
}

export default WeaponCard;