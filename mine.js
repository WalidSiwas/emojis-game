
let myScore = 0;
let pcScore = 0;
let myChose;

function A() {
  myChose = 1;
  mine();
};

function B() {
  myChose = 2;
  mine();
};

function C() {
  myChose = 3;
  mine();
};




function mine() {
  let pcChose = Math.floor((Math.random() * 3) + 1);

  if (myChose === pcChose) {
    document.getElementById("result_output").innerHTML = "No Winner, Both chose ".concat(myChose);
  }

  else if (myChose == 1 && pcChose == 2) {
    document.getElementById("result_output").innerHTML = "You chose ✊🏽 and Pc chose ✋🏽 = Pc Win";
    pcScore = pcScore + 1;
    document.getElementById("PC").innerHTML = pcScore;

  }

  else if (myChose == 1 && pcChose == 3) {
    document.getElementById("result_output").innerHTML = "You chose ✊🏽 and Pc chose ✌🏽 = You Win ";
    myScore = myScore + 1;
    document.getElementById("ME").innerHTML = myScore;

  }

  else if (myChose == 2 && pcChose == 1) {
    document.getElementById("result_output").innerHTML = "You chose ✋🏽 and Pc chose ✊🏽 = You Win";
    myScore = myScore + 1;
    document.getElementById("ME").innerHTML = myScore;

  }

  else if (myChose == 2 && pcChose == 3) {
    document.getElementById("result_output").innerHTML = "You chose ✋🏽 and Pc chose ✌🏽 = Pc Win";
    pcScore = pcScore + 1;
    document.getElementById("PC").innerHTML = pcScore;

  }

  else if (myChose == 3 && pcChose == 1) {
    document.getElementById("result_output").innerHTML = "You chose ✌🏽 and Pc chose ✊🏽 = Pc Win";
    pcScore = pcScore + 1;
    document.getElementById("PC").innerHTML = pcScore;

  }

  else if (myChose == 3 && pcChose == 2) {
    document.getElementById("result_output").innerHTML = "You chose ✌🏽 and Pc chose ✋🏽 = You Win";
    myScore = myScore + 1;
    document.getElementById("ME").innerHTML = myScore;

  }

};

function reset(){
  myScore = 0;
  pcScore = 0;
  document.getElementById("ME").innerHTML = myScore;
  document.getElementById("PC").innerHTML = pcScore;

  document.getElementById("result_output").innerHTML = "New Game";
};










