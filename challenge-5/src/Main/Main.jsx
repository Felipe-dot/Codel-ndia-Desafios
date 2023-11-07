import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <div className="content-left">
          <h3>HAYAO MIYAZAKI</h3>
          <h1>A VIAGEM DE CHIHIRO</h1>
          <h4>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </h4>
          <div className="buttons">
            <button>
              <img src="src/assets/play.svg" alt="butão de reproduzir" />
              <p>ASSISTIR AGORA</p>
            </button>
            <button>
              <p>ASSITA O TRAILER</p>
            </button>
          </div>
        </div>
        <div className="content-right">
          {/* <img src="src/assets/image.svg" alt="fantasmas do chichiro " /> */}
          <img
            src="src/assets/ghost1.svg"
            alt="fantasmas do chichiro 1"
            id="ghost1"
          />
          <img
            src="src/assets/ghost2.svg"
            alt="fantasmas do chichiro 2"
            id="ghost2"
          />
        </div>
      </div>
    </>
  );
}
