const escalaImagenPorId = {
  4: 1.4, 9: 1.4, 10: 1.4, 38: 1.4,
  1: 0.8, 3: 0.8, 5: 0.8, 12: 0.8, 72: 0.8, 76: 0.8, 80: 0.8,
  83: 0.8, 88: 0.8, 92: 0.8, 95: 0.8, 107: 0.8, 111: 0.8,
  13: 0.7, 17: 0.7, 18: 0.7, 19: 0.7, 20: 0.7, 21: 0.7, 22: 0.7,
  23: 0.7, 25: 0.7, 27: 0.7, 28: 0.7, 29: 0.7, 30: 0.7, 31: 0.7,
  32: 0.7, 35: 0.7, 39: 0.7, 41: 0.7, 44: 0.7, 45: 0.7, 46: 0.7,
  47: 0.7, 53: 0.7, 55: 0.7, 57: 0.7, 59: 0.7, 67: 0.7, 79: 0.7,
  81: 0.7, 82: 0.7, 84: 0.7, 93: 0.7, 94: 0.7, 98: 0.7, 103: 0.7,
  104: 0.7, 110: 0.7,
  16: 0.4, 26: 0.4, 33: 0.4, 34: 0.4, 36: 0.4, 37: 0.4, 48: 0.4,
  49: 0.4, 60: 0.4, 61: 0.4, 68: 0.4, 108: 0.4, 112: 0.3,
  150: 0.7, 151: 0.9, 152: 0.9, 153: 0.9, 154: 0.9, 157: 0.8,
  173: 0.7, 174: 0.7, 155: 0.8, 156: 0.8, 158: 0.8, 159: 0.8,
  160: 0.8, 161: 0.8, 163: 0.7, 164: 0.7, 165: 0.7, 170: 0.8,
  171: 0.8, 172: 0.8, 175: 0.8, 178: 0.8, 2002: 0.5, 2003: 0.7, 2004: 0.6, 2006: 0.5, 2007: 0.4, 2008: 0.4, 2009: 1.5, 2011: 0.8, 2012: 0.9, 3001: 0.8, 3002: 0.8, 3003: 0.8, 3004: 0.8, 3005: 0.8, 3006: 0.8, 3007: 0.8, 3008: 0.8, 3009: 0.8, 3010: 0.8, 3011: 0.8, 3012: 0.8,   
};

function MonsterCard({monster}){
    const escala = escalaImagenPorId[monster.id] || 1.0;
    const imagenes = Array.isArray(monster.imagen)
        ? monster.imagen
        : [monster.imagen];
    return(
        <div className="tarjeta-monstruo">
            <span className="id-monstruo">
                ID: {String(monster.id).padStart(3, "0")}
            </span>
            <div className="imagen-contenedor">
                {imagenes.map((img, index)=>(
                    <img 
                        key={index}
                        src={img}
                        alt={monster.nombre}
                        style={{"--escala-imagen":escala}}    
                    />
                ))}
            </div>
            <h3>{monster.nombre}</h3>
            <p className="descripcion-monstruo">{monster.descripcion}</p>
            <div className="stats-monstruo">
                <p>
                    <span>Hp:</span> <span>{monster.hp || "?"}</span>
                </p>
                <p>
                    <span>Exp:</span> <span>{monster.exp || "?"}</span>
                </p>
                <p title={monster.drop || "Ninguno"}>
                    <span>Drop:</span> <span>{monster.drop || "Ninguno"}</span>
                </p>
                <p title={monster.ubicacion || "desconocido"}>
                    <span>Ubicación:</span> <span>{monster.ubicacion || "Desconocido"}</span>
                </p>
            </div>
        </div>
    );
}

export default MonsterCard;