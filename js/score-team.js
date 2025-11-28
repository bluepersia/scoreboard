function init(teamEl) {
  let score = 0;

  const scoreEl = teamEl.querySelector("[data-score]");

  const plusOneBtn = teamEl.querySelector("[data-action='+1']");
  const plusTwoBtn = teamEl.querySelector("[data-action='+2']");
  const plusThreeBtn = teamEl.querySelector("[data-action='+3']");

  plusOneBtn.addEventListener("click", plusOne);
  plusTwoBtn.addEventListener("click", plusTwo);
  plusThreeBtn.addEventListener("click", plusThree);

  function plusOne() {
    score += 1;
    updateScore();
  }

  function plusTwo() {
    score += 2;
    updateScore();
  }

  function plusThree() {
    score += 3;
    updateScore();
  }

  function updateScore() {
    scoreEl.textContent = score;
  }
}

export { init };
