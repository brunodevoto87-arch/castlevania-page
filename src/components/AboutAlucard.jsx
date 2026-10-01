function AboutAlucard({ onBackHome }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Alucard</h1>
        <p className="page-subtitle">El Hijo de Drácula</p>
        <button onClick={onBackHome}>Volver al inicio</button>
      </div>

      <div className="page-content">
        <p>
          Adrian Fahrenheit Țepeș, conocido como Alucard (Alucard es "Drácula"
          al revés), es el hijo dhampir de Count Dracula y Lisa, una humana.
          Nacido en 1450, Alucard es mitad humano y mitad vampiro, lo que le
          otorga poderes sobrenaturales pero también una lucha interna constante
          entre su herencia maldita y su humanidad.
        </p>

        <h2>La Tragedia Familiar</h2>
        <p>
          Cuando su madre Lisa fue ejecutada por humanos que la acusaron de
          brujería, Alucard prometió a su madre moribunda que no odiaría a los
          humanos. Años después, cuando su padre Drácula desató su ejército
          contra la humanidad, Alucard se vio obligado a enfrentarlo. En 1476,
          junto a Trevor Belmont y Sypha Belnades, logró derrotar a Drácula y
          sellar su castillo.
        </p>

        <h2>El Despertar de 1797</h2>
        <p>
          Trescientos años después, en 1797, Alucard despierta de su letargo
          al sentir que el castillo de Drácula ha reaparecido. Richter Belmont
          ha desaparecido, y el castillo ha emergido antes de lo previsto.
          Alucard decide adentrarse en la fortaleza de su padre para
          investigar la causa.
        </p>

        <h2>Habilidades</h2>
        <p>
          Como dhampir, Alucard posee habilidades únicas: transformación en
          murciélago, lobo y niebla, así como poderes mágicos como el
          "Soul Steal" (robo de alma). Su arma principal es la espada
          "Alucard Sword", y puede equipar una amplia variedad de armas,
          armaduras y reliquias encontradas en el castillo.
        </p>

        <h2>En Symphony of the Night</h2>
        <p>
          Alucard es el protagonista de Castlevania: Symphony of the Night.
          Su misión es explorar el castillo, descubrir por qué Richter Belmont
          ha desaparecido y enfrentar la amenaza que se cierne sobre
          Valaquia. Su viaje lo lleva a descubrir la verdad sobre el
          "castillo invertido" y a enfrentar a su propio padre una vez más.
        </p>
      </div>
    </div>
  );
}

export default AboutAlucard;