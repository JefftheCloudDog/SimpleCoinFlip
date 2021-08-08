userScoreTxt = document.getElementById("user-score");
compScoreTxt = document.getElementById("comp-score");

userScore = 0;
compScore = 0;

resultMsg = document.getElementById("result");
coin = document.getElementById("player-coin");
promptMsg = document.getElementById("prompt");

choiceSel = document.getElementById("choice");
choseHeads = true; // true is heads, false is tails

coin.addEventListener("click", () => {
  coin.textContent = "-";
  coin.classList.add("rotate");
  coin.disabled = true;
  choiceSel.disabled = true;

  setTimeout(() => {
    let gotHeads = Math.random() < 0.5;

    if (gotHeads) coin.textContent = "H";
    else coin.textContent = "T";

    if (gotHeads === choseHeads || !gotHeads === !choseHeads) {
      resultMsg.textContent = "You won!";
      userScoreTxt.textContent = ++userScore;
    } else {
      resultMsg.textContent = "You lost :(";
      compScoreTxt.textContent = ++compScore;
    }
    coin.classList.remove("rotate");
    coin.disabled = false;
    choiceSel.disabled = false;
  }, 1000);

  setTimeout(() => {
    resultMsg.textContent = "Flip again?";
  }, 3000);
});

choiceSel.addEventListener("click", () => {
  console.log("Clicked selector");

  if (choseHeads) choiceSel.textContent = "TAILS";
  else choiceSel.textContent = "HEADS";

  choseHeads = !choseHeads;
});
