const LINE_ANIMATION_DELAY = 500;
const CHARACTER_TYPE_SPEED = 20;
const INITIAL_VOLUME = 0.5;

let easterEggTriggered = false;
let outputAnimationQueue = [];
let isAnimatingOutput = false;

let backgroundMusic;
let playPauseButton;
let volumeSlider;

function initializeEasterEgg() {
  const commitWord = document.getElementById("easterEggCommit");
  if (commitWord) {
    commitWord.addEventListener("click", handleEasterEggClick);
  }
}

function handleEasterEggClick() {
  if (!easterEggTriggered) {
    easterEggTriggered = true;

    const commitWord = document.getElementById("easterEggCommit");
    if (commitWord) {
      commitWord.style.cursor = "default";
      commitWord.style.textDecoration = "none";
      commitWord.classList.remove("interactive-word");
      commitWord.removeEventListener("click", handleEasterEggClick);
    }

    addOutput(
      `\n<span class="terminal-comment">Código secreto revelado!</span>`
    );
    addOutput(
      `<span class="terminal-string">"Cada 'commit' é uma prova de que nosso projeto de amor está sempre evoluindo e melhorando."</span>`
    );
    addOutput(
      `<span class="terminal-method">console</span>.<span class="terminal-method">log</span>("<span class="terminal-string">A vida é um repositório, e o amor é o melhor branch.</span>");`
    );
  }
}

class Marriage {
  constructor(nameHonored) {
    this.nameHonored = nameHonored;
    this.years = 10;
    this.status = "Ativo e Próspero";
  }

  static startJourney(partnerOne, partnerTwo) {
    addOutput(
      `Iniciando o "<span class="terminal-method">deploy</span>" do amor entre <span class="terminal-variable">${partnerOne}</span> e <span class="terminal-variable">${partnerTwo}</span>...`
    );
    addOutput(
      "<span class='terminal-method'>Compilando</span> os sonhos, <span class='terminal-method'>otimizando</span> a paixão."
    );
    return true;
  }

  celebrateBirthday() {
    addOutput(
      `\n<span class="terminal-keyword">Parabéns</span>, <span class="terminal-variable">${this.nameHonored}</span>!`
    );
    addOutput(
      `**Nosso "<span class="terminal-method">commit</span>" de <span class="terminal-number">${this.years}</span> anos está rodando perfeitamente!**`
    );
    addOutput("```javascript");
    addOutput(
      '<span class="terminal-keyword">function</span> <span class="terminal-method">amorEterno</span>() {'
    );
    addOutput(
      '  <span class="terminal-keyword">let</span> <span class="terminal-variable">felicidade</span> <span class="terminal-operator">=</span> <span class="terminal-keyword">true</span>;'
    );
    addOutput(
      '  <span class="terminal-keyword">while</span> (<span class="terminal-variable">felicidade</span>) {'
    );
    addOutput(
      "    <span class=\"terminal-comment\">// Nosso laço de amor, sem nenhum 'bug' aparente!</span>"
    );
    addOutput(
      "    <span class=\"terminal-method\">console</span>.<span class=\"terminal-method\">log</span>('<span class=\"terminal-string\">Você é meu 'framework' e minha 'biblioteca'.</span>');"
    );
    addOutput(
      '    <span class="terminal-method">console</span>.<span class="terminal-method">log</span>(\'<span class="terminal-string">Com você, cada dia é um novo \'feature\' implementado.</span>\');'
    );
    addOutput(
      "    <span class=\"terminal-comment\">// Pequenos 'bugs' foram 'fixados', grandes 'updates' vieram.</span>"
    );
    addOutput(
      "    <span class=\"terminal-comment\">// Nosso 'código-fonte' é o mais belo que já vi.</span>"
    );
    addOutput(
      '    <span class="terminal-keyword">break</span>; <span class="terminal-comment">// Apenas para não ser um loop infinito no console, mas o amor é!</span>'
    );
    addOutput("  }");
    addOutput("}");
    addOutput('<span class="terminal-method">amorEterno</span>();');
    addOutput("```");
    addOutput(
      `Nosso "<span class="terminal-variable">sistema</span>" <span class="terminal-variable">${this.status}</span> e continua <span class="terminal-method">evoluindo</span>!`
    );
  }

  solveProblem(Problem) {
    addOutput(
      `\nDetectado um '<span class="terminal-string">${Problem}</span>'... <span class="terminal-method">Acionando 'debugger'</span> juntos.`
    );
    addOutput(
      "<span class=\"terminal-method\">Aplicando 'patch'</span> de carinho e comunicação..."
    );
    addOutput(
      `'<span class="terminal-string">${Problem}</span>' <span class=\"terminal-method\">resolvido</span> com sucesso!`
    );
    return true;
  }
}

async function _processOutputQueue() {
  isAnimatingOutput = true;
  const outputDiv = document.getElementById("output");

  while (outputAnimationQueue.length > 0) {
    const lineHtml = outputAnimationQueue.shift();

    const lineElement = document.createElement("div");
    outputDiv.appendChild(lineElement);

    lineElement.innerHTML = lineHtml;
    lineElement.style.overflow = "hidden";
    lineElement.style.whiteSpace = "nowrap";
    lineElement.style.wordWrap = "normal";
    lineElement.style.maxWidth = "0";

    const targetMaxWidth = lineElement.scrollWidth;

    if (targetMaxWidth === 0) {
      lineElement.style.maxWidth = "none";
      lineElement.style.whiteSpace = "pre-wrap";
      lineElement.style.wordWrap = "break-word";
      await new Promise((resolve) => setTimeout(resolve, LINE_ANIMATION_DELAY));
      lineElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      continue;
    }

    const totalCharacters = lineElement.textContent.length || 1;
    const widthIncrementPerStep = targetMaxWidth / totalCharacters;

    let currentWidth = 0;
    for (let i = 0; i < totalCharacters; i++) {
      currentWidth += widthIncrementPerStep;
      lineElement.style.maxWidth = `${Math.min(
        currentWidth,
        targetMaxWidth
      )}px`;
      await new Promise((resolve) => setTimeout(resolve, CHARACTER_TYPE_SPEED));
    }

    lineElement.style.maxWidth = "none";
    lineElement.style.whiteSpace = "pre-wrap";
    lineElement.style.wordWrap = "break-word";

    await new Promise((resolve) => setTimeout(resolve, LINE_ANIMATION_DELAY));
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  isAnimatingOutput = false;
}

function addOutput(text) {
  outputAnimationQueue.push(text);
  if (!isAnimatingOutput) {
    _processOutputQueue();
  }
}

function initializeAudioControls() {
  backgroundMusic = document.getElementById("backgroundMusic");
  playPauseButton = document.getElementById("playPauseButton");
  volumeSlider = document.getElementById("volumeSlider");

  if (backgroundMusic && volumeSlider) {
    backgroundMusic.volume = parseFloat(volumeSlider.value);
  }

  if (playPauseButton) {
    playPauseButton.addEventListener("click", togglePlayPause);
  }
  if (volumeSlider) {
    volumeSlider.addEventListener("input", setVolume);
  }
}

function togglePlayPause() {
  if (backgroundMusic.paused) {
    backgroundMusic
      .play()
      .then(() => {
        playPauseButton.innerHTML =
          '<span class="material-icons">pause</span> Pause';
      })
      .catch((error) => {
        console.error("Erro ao tentar reproduzir a música:", error);
      });
  } else {
    backgroundMusic.pause();
    playPauseButton.innerHTML =
      '<span class="material-icons">play_arrow</span> Play';
  }
}

function setVolume() {
  if (backgroundMusic) {
    backgroundMusic.volume = parseFloat(volumeSlider.value);
  }

  const volumeIcon = document.querySelector(".volume-icon");
  if (volumeIcon) {
    if (volumeSlider.value == 0) {
      volumeIcon.textContent = "volume_off";
    } else if (volumeSlider.value <= 0.5) {
      volumeIcon.textContent = "volume_down";
    } else {
      volumeIcon.textContent = "volume_up";
    }
  }
}

function tribute() {
  const outputDiv = document.getElementById("output");
  const revealButton = document.getElementById("revealButton");

  outputDiv.innerHTML = "";
  outputAnimationQueue = [];
  isAnimatingOutput = false;

  revealButton.disabled = true;
  revealButton.textContent = "Código Revelado!";
  revealButton.classList.add("btn-revealed");

  const ourWedding = new Marriage("Mariana");

  if (Marriage.startJourney("João Carlos", ourWedding.nameHonored)) {
    ourWedding.celebrateBirthday();
    ourWedding.solveProblem("conflitoDeVersao");
    addOutput(
      "\nQue venham muitos mais '<span class=\"terminal-method\">releases</span>' e '<span class=\"terminal-method\">updates</span>' para o nosso amor!"
    );
  } else {
    addOutput(
      '<span class="terminal-error">Erro</span>: O \'<span class="terminal-method">deploy</span>\' inicial do Marriage falhou.'
    );
  }

  if (backgroundMusic.paused) {
    backgroundMusic
      .play()
      .then(() => {
        const audioControlsDiv = document.querySelector(".audio-controls");
        if (audioControlsDiv) {
          audioControlsDiv.style.display = "flex";
        }
        playPauseButton.innerHTML =
          '<span class="material-icons">pause</span> Pause';
      })
      .catch((error) => {
        console.error("Erro ao tentar reproduzir a música:", error);
      });
  } else {
    const audioControlsDiv = document.querySelector(".audio-controls");
    if (audioControlsDiv) {
      audioControlsDiv.style.display = "flex";
    }
  }
}

document.addEventListener("DOMContentLoaded", initializeEasterEgg);
document.addEventListener("DOMContentLoaded", initializeAudioControls);