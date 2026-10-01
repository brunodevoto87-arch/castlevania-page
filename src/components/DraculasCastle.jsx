function DraculasCastle({ onBackHome }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>El Castillo de Drácula</h1>
        <p className="page-subtitle">La Fortaleza del Conde</p>
        <button onClick={onBackHome}>Volver al inicio</button>
      </div>

      <div className="page-content">
        <p>
          El Castillo de Drácula es la fortaleza ancestral del Conde Drácula,
          un lugar maldito que emerge de las sombras cada vez que el Conde
          regresa al mundo de los vivos. Su arquitectura gótica, sus pasillos
          interminables y sus cámaras secretas lo convierten en un laberinto
          mortal para cualquier intruso.
        </p>

        <h2>Un Ser Vivo</h2>
        <p>
          En Symphony of the Night, el castillo es más que una simple
          fortaleza: es un ser vivo, una "criatura del caos" que cambia de
          forma y se reorganiza constantemente. Sus habitaciones se
          reconfiguran, sus pasajes cambian, y su estructura misma parece
          tener voluntad propia.
        </p>

        <h2>Las Zonas del Castillo</h2>
        <p>
          El castillo está dividido en múltiples zonas, cada una con su
          propia atmósfera y peligros: la Capilla Real, las Catacumbas, la
          Torre del Reloj, la Galería de Mármol Negro, el Coliseo, la
          Biblioteca Prohibida, y muchas más. Cada zona alberga enemigos
          únicos y secretos ancestrales.
        </p>

        <h2>El Castillo Invertido</h2>
        <p>
          El giro más icónico de Symphony of the Night es la revelación del
          "castillo invertido": una versión espejada y potenciada del
          castillo original, donde los enemigos son más fuertes, los secretos
          más profundos, y la verdadera batalla final espera. Descubrir este
          segundo castillo duplicó la aventura y redefinió lo que se esperaba
          de un videojuego de Castlevania.
        </p>

        <h2>Explorá el Castillo</h2>
        <p>
          Cada rincón del castillo esconde secretos: pasajes ocultos, armas
          legendarias, reliquias de poder, y enemigos que desafían al
          jugador más experimentado. Explorar el castillo es la esencia
          misma de Symphony of the Night.
        </p>
      </div>
    </div>
  );
}

export default DraculasCastle;