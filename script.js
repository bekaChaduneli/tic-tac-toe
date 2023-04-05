"use strict";
const xButton = document.querySelector(".x-box");
const yButton = document.querySelector(".o-box");
const xIcon = document.querySelector("#x-icon");
const yIcon = document.querySelector("#y-icon");
const cpu = document.querySelector(".cpu");
const player = document.querySelector(".player");
const manu = document.querySelector(".manu");
const box = document.querySelectorAll(".box");
const playerBox = document.querySelector(".player-game");
let Xchoose = false;
const startXIcon = document.querySelector("#player-x-icon");
const startOIcon = document.querySelector("#player-o-icon");
const rememberTxt = document.querySelector(".first-conteiner-text");
const playerRestart = document.querySelector(".restart");
const lastScreen = document.querySelector(".last-screen");
const xWinBox = document.querySelector(".X-win-box");
const oWinBox = document.querySelector(".O-win-box");
const draw = document.querySelector(".draw-box");
const oQuit = document.querySelector(".o-quit");
const xQuit = document.querySelector(".x-quit");
const drawQuit = document.querySelector(".draw-quit");
const oNextRound = document.querySelector(".o-next-round");
const xNextRound = document.querySelector(".x-next-round");
const drawNextRound = document.querySelector(".draw-next-round");
const restart = document.querySelector(".restart-game");
const cancleRestart = document.querySelector(".cancle");
const lastRestart = document.querySelector(".button-restart");
const cancleNext = document.querySelector(".cancle-click");
const cancleNextRound = document.querySelector(".cancle-next-round");
const yourCountElement = document.querySelector(".your-count");
const tiesCountElement = document.querySelector(".ties-count");
const oponentCountElement = document.querySelector(".oponent-count");
const cpuBox = document.querySelector(".cpu-game");
const cancleQuit = document.querySelector(".cancle-quit");
const yourText = document.querySelector(".your-text");
const oponentText = document.querySelector(".oponent-text");
const cpuInitial = document.querySelector(".for-count-cpu");
let starterCountY = 0;
let starterCountX = 0;
let count = 0;
let countXFirstLine = 0;
let countXSecondLine = 0;
let countXThirdLine = 0;
let countXDiagonalFirst = 0;
let countXDiagonalSecond = 0;
let countXFirstColumn = 0;
let countXSecondColumn = 0;
let countXThirdColumn = 0;
let countOFirstLine = 0;
let countOSecondLine = 0;
let countOThirdLine = 0;
let countODiaglonalFirst = 0;
let countODiagonalSecond = 0;
let countOFirstColumn = 0;
let countOSecondColumn = 0;
let countOThirdColumn = 0;
let running = true;
let currentPlayer = "X";
let countForDraw = 0;
let countX = 0;
let countO = 0;
let countTies = 0;
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");

if (manu.style.display == "flex") {
  countX = 0;
  countO = 0;
  countTies = 0;
}

xButton.addEventListener("click", () => {
  xButton.style.backgroundColor = "#A8BFC9";
  yButton.style.backgroundColor = "#1A2A33";
  xIcon.style.filter =
    "invert(86%) sepia(13%) saturate(4%) hue-rotate(153deg) brightness(30%) contrast(81%)";
  yIcon.style.filter =
    "invert(66%) sepia(53%) saturate(74%) hue-rotate(1000deg) brightness(489%) contrast(51%)";
  rememberTxt.innerHTML = "REMEMBER : X GOES FIRST";
  Xchoose = true;
  starterCountX++;
});

yButton.addEventListener("click", () => {
  yButton.style.backgroundColor = "#A8BFC9";
  xButton.style.backgroundColor = "#1A2A33";
  yIcon.style.filter =
    "invert(86%) sepia(13%) saturate(4%) hue-rotate(153deg) brightness(30%) contrast(81%)";
  xIcon.style.filter =
    "invert(66%) sepia(53%) saturate(74%) hue-rotate(1000deg) brightness(489%) contrast(51%)";
  Xchoose = false;
  rememberTxt.innerHTML = "REMEMBER : O GOES FIRST";
  starterCountY++;
});

if (starterCountX > 0) {
  Xchoose = true;
} else if (starterCountY > 0) {
  Xchoose = false;
}

lastBox();

player.addEventListener("click", () => {
  manu.style.display = "none";
  playerBox.style.display = "block";
  cpuInitial.style.display = "none";
  reset();
});

cpu.addEventListener("click", () => {
  manu.style.display = "none";
  playerBox.style.display = "block";
  reset();
  cpuInitial.style.display = "block";
});

let reset = () => {
  startXIcon.style.display = "none";
  startOIcon.style.display = "none";
  starterCountY = 0;
  starterCountX = 0;
  count = 0;
  countXFirstLine = 0;
  countXSecondLine = 0;
  countXThirdLine = 0;
  countXDiagonalFirst = 0;
  countXDiagonalSecond = 0;
  countXFirstColumn = 0;
  countXSecondColumn = 0;
  countXThirdColumn = 0;
  countOFirstLine = 0;
  countOSecondLine = 0;
  countOThirdLine = 0;
  countODiaglonalFirst = 0;
  countODiagonalSecond = 0;
  countOFirstColumn = 0;
  countOSecondColumn = 0;
  countOThirdColumn = 0;
  countForDraw = 0;
  box.forEach((element) => {
    element.classList.remove("dropX");
    element.classList.remove("dropO");
  });
};

playerRestart.addEventListener("click", () => {
  lastScreen.style.display = "flex";
  restart.style.display = "flex";
});

box.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      !element.classList.contains("dropO") &&
      !element.classList.contains("dropX")
    ) {
      count++;
      if (cpuInitial.style.display == "block") {
        if (count % 2 == 1 && Xchoose == true) {
          startXIcon.style.display = "block";
          startOIcon.style.display = "none";
          element.classList.add("dropX");
          currentPlayer = "X";
          countForDraw++;
          var rand = Math.floor((Math.random() * box.length) / 2);
          let randomBox = box[rand];
          if (!randomBox.classList.contains("dropO")) {
            randomBox.classList.add("dropO");
            count++;
          } else {
            count--;
          }
        }
        if (count % 2 == 1 && Xchoose == false) {
          startXIcon.style.display = "none";
          startOIcon.style.display = "block";
          element.classList.add("dropO");
          currentPlayer = "O";
          countForDraw++;
          var rand = Math.floor((Math.random() * box.length) / 2);
          let randomBox = box[rand];

          if (!randomBox.classList.contains("dropX")) {
            randomBox.classList.add("dropX");
            count++;
          } else {
            count--;
          }
        }
      } else {
        if (count % 2 == 0 && Xchoose == true) {
          startXIcon.style.display = "block";
          startOIcon.style.display = "none";
          element.classList.add("dropO");
          currentPlayer = "O";
          countForDraw++;
        } else if (count % 2 == 0 && Xchoose == false) {
          startXIcon.style.display = "none";
          startOIcon.style.display = "block";
          element.classList.add("dropX");
          currentPlayer = "X";
          countForDraw++;
        }
        if (count % 2 == 1 && Xchoose == true) {
          startXIcon.style.display = "none";
          startOIcon.style.display = "block";
          element.classList.add("dropX");
          currentPlayer = "X";
          countForDraw++;
        }
        if (count % 2 == 1 && Xchoose == false) {
          startXIcon.style.display = "block";
          startOIcon.style.display = "none";
          element.classList.add("dropO");
          currentPlayer = "O";
          countForDraw++;
        }
      }

      if (element == box1 && currentPlayer == "X") {
        countXFirstLine++;
        countXDiagonalFirst++;
        countXFirstColumn++;
      }
      if (element == box2 && currentPlayer == "X") {
        countXFirstLine++;
        countXSecondColumn++;
      }
      if (element == box3 && currentPlayer == "X") {
        countXFirstLine++;
        countXDiagonalSecond++;
        countXThirdColumn++;
      }
      if (element == box4 && currentPlayer == "X") {
        countXFirstColumn++;
        countXSecondLine++;
      }
      if (element == box5 && currentPlayer == "X") {
        countXDiagonalFirst++;
        countXDiagonalSecond++;
        countXSecondColumn++;
        countXSecondLine++;
      }
      if (element == box6 && currentPlayer == "X") {
        countXThirdColumn++;
        countXSecondLine++;
      }
      if (element == box7 && currentPlayer == "X") {
        countXDiagonalSecond++;
        countXFirstColumn++;
        countXThirdLine++;
      }
      if (element == box8 && currentPlayer == "X") {
        countXSecondColumn++;
        countXThirdLine++;
      }
      if (element == box9 && currentPlayer == "X") {
        countXDiagonalFirst++;
        countXThirdColumn++;
        countXThirdLine++;
      }
      if (
        countXFirstLine == 3 ||
        countXSecondLine == 3 ||
        countXThirdLine == 3 ||
        countXDiagonalFirst == 3 ||
        countXDiagonalSecond == 3 ||
        countXFirstColumn == 3 ||
        countXSecondColumn == 3 ||
        countXThirdColumn == 3
      ) {
        lastScreen.style.display = "flex";
        xWinBox.style.display = "flex";
        countX++;
        yourCountElement.textContent = `${countX}`;
      }
      if (element == box1 && currentPlayer == "O") {
        countOFirstLine++;
        countODiaglonalFirst++;
        countOFirstColumn++;
      }
      if (element == box2 && currentPlayer == "O") {
        countOFirstLine++;
        countOSecondColumn++;
      }
      if (element == box3 && currentPlayer == "O") {
        countOFirstLine++;
        countODiagonalSecond++;
        countOThirdColumn++;
      }
      if (element == box4 && currentPlayer == "O") {
        countOFirstColumn++;
        countOSecondLine++;
      }
      if (element == box5 && currentPlayer == "O") {
        countODiaglonalFirst++;
        countODiagonalSecond++;
        countOSecondColumn++;
        countOSecondLine++;
      }
      if (element == box6 && currentPlayer == "O") {
        countOThirdColumn++;
        countOSecondLine++;
      }
      if (element == box7 && currentPlayer == "O") {
        countODiagonalSecond++;
        countOFirstColumn++;
        countOThirdLine++;
      }
      if (element == box8 && currentPlayer == "O") {
        countOSecondColumn++;
        countOThirdLine++;
      }
      if (element == box9 && currentPlayer == "O") {
        countODiaglonalFirst++;
        countOThirdColumn++;
        countOThirdLine++;
      }
      if (
        countOFirstLine == 3 ||
        countOSecondLine == 3 ||
        countOThirdLine == 3 ||
        countODiaglonalFirst == 3 ||
        countODiagonalSecond == 3 ||
        countOFirstColumn == 3 ||
        countOSecondColumn == 3 ||
        countOThirdColumn == 3
      ) {
        lastScreen.style.display = "flex";
        oWinBox.style.display = "flex";
        countO++;
        oponentCountElement.textContent = `${countO}`;
      }
    }

    if (
      countForDraw == 9 &&
      oWinBox.style.display == "none" &&
      xWinBox.style.display == "none"
    ) {
      lastScreen.style.display = "flex";
      draw.style.display = "flex";
      countTies++;
      tiesCountElement.textContent = `${countTies}`;
    }
  });
  element.addEventListener("mouseover", () => {
    if (startXIcon.style.display == "block") {
      element.classList.add("outline");
      element.addEventListener("mouseout", () => {
        element.classList.remove("outline");
      });
    }
    if (startOIcon.style.display == "block") {
      element.classList.add("outline-o");
      element.addEventListener("mouseout", () => {
        element.classList.remove("outline-o");
      });
    }
  });
});

function lastBox() {
  oNextRound.addEventListener("click", () => {
    lastScreen.style.display = "none";
    reset();
    xWinBox.style.display = "none";
    oWinBox.style.display = "none";
    draw.style.display = "none";
    restart.style.display = "none";
  });
  xNextRound.addEventListener("click", () => {
    lastScreen.style.display = "none";
    reset();
    xWinBox.style.display = "none";
    oWinBox.style.display = "none";
    draw.style.display = "none";
    restart.style.display = "none";
  });
  drawNextRound.addEventListener("click", () => {
    lastScreen.style.display = "none";
    reset();
    xWinBox.style.display = "none";
    oWinBox.style.display = "none";
    draw.style.display = "none";
    restart.style.display = "none";
  });

  cancleRestart.addEventListener("click", () => {
    lastScreen.style.display = "none";
    restart.style.display = "none";
  });

  xQuit.addEventListener("click", () => {
    xWinBox.style.display = "none";
    oWinBox.style.display = "none";
    draw.style.display = "none";
    restart.style.display = "none";
    manu.style.display = "flex";
    playerBox.style.display = "none";
    lastScreen.style.display = "none";
    location.reload();
  });

  drawQuit.addEventListener("click", () => {
    xWinBox.style.display = "none";
    oWinBox.style.display = "none";
    draw.style.display = "none";
    restart.style.display = "none";
    manu.style.display = "flex";
    playerBox.style.display = "none";
    lastScreen.style.display = "none";
    location.reload();
  });

  oQuit.addEventListener("click", () => {
    xWinBox.style.display = "none";
    oWinBox.style.display = "none";
    draw.style.display = "none";
    restart.style.display = "none";
    manu.style.display = "flex";
    playerBox.style.display = "none";
    lastScreen.style.display = "none";
    location.reload();
  });

  lastRestart.addEventListener("click", () => {
    lastScreen.style.display = "none";
    reset();
    xWinBox.style.display = "none";
    oWinBox.style.display = "none";
    draw.style.display = "none";
    restart.style.display = "none";
  });
}
