
//===========store things in variables===========

//input from user
var inputBox = document.getElementById('inptbx');
//guess button
var guessBtn = document.getElementById('gssbtn');
//clear button
var clearBtn = document.getElementById('clrbtn');
//intro sentence
var intro = document.getElementById('your-guess')
//output number
var outputNum = document.getElementById('num-output');
//feedback sentence
var feedBack = document.getElementById('fdbck');
//reset button
var resetBtn = document.getElementById('rstbtn');
//user input min range
var minRange = document.getElementById('min-range');
//set min
var min = 1;
//user input max range
var maxRange = document.getElementById('max-range');
//set max
var max = 100;
//paramter button
var paramBtn = document.getElementById('prm-btn');
//is assigned in random number function
var ranNumber;




//=============Event Listeners===============


//on page load do these things
window.addEventListener('load', function() {
  zeroState();
});

//parameter button
paramBtn.addEventListener('click', function() {
 minMaxSet();
 getRanNum(min, max);
 outputNum.innerText = minRange.value + " - " + maxRange.value;
});

//on keyup check to see if number entered is within min/max range
inputBox.addEventListener('keyup', function() {
  minMaxEval();
  toggleClear();
});

//on guessBtn click run function that compares
guessBtn.addEventListener('click', function() {
  // evalInput();
  compare()
  inputBox.value = '';
  toggleClear();
  minMaxEval();
});

//make clear button clear input field
clearBtn.addEventListener('click', function() {
  inputBox.value = '';
  toggleClear();
  minMaxEval();
});

//make reset button reset all inputs and generate new random number
resetBtn.addEventListener('click', function() {
  minRange.value = 1;
  maxRange.value = 100;
  zeroState();
  minMaxSet();
});




//=============Functions=============


//what page should be on load
function zeroState() {
  inputBox.value = '';
  intro.innerText = "Feelin' lucky punk?";
  outputNum.innerText = '1-100';
  feedBack.innerText = 'Make your best guess...';
  minRange.defaultValue = 1;
  maxRange.defaultValue = 100;
  getRanNum(1, 100);
};

//on game when newPhase runs, sets new params
function newPhase() {
  intro.innerText = "Feelin' lucky again punk?";
  feedBack.innerText = "Go ahead, make my day...";
  var minPlus = parseInt(min) - 10;
  var maxPlus = parseInt(max) + 10;
  minRange.value = minPlus;
  maxRange.value = maxPlus;
  outputNum.innerText = minPlus + '  -  ' + maxPlus;
  getRanNum(minPlus, maxPlus);
  console.log(minPlus + " - " + maxPlus)
  min = minPlus;
  max = maxPlus;
}

//get random number function
function getRanNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  ranNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Random Number is " + ranNumber);
}

//function that compares user input to random number and then output display feedback sentence based on comparison
function compare() {
  var parsdInpt = parseInt(inputBox.value);
  outputNum.innerText = inputBox.value;
  console.log('prsdInt: ', parsdInpt)
  if(parsdInpt === ranNumber) {
    outputNum.innerText = 'BOOM!';
    feedBack.innerText = '';
    intro.innerText = '';
    setTimeout(newPhase, 3000);
  } else if(parsdInpt > ranNumber) {
    intro.innerText = 'Your last guess was';
    feedBack.innerText = 'That is too high';
  } else if(parsdInpt < ranNumber) {
    intro.innerText = 'Your last guess was';
    feedBack.innerText = 'That is too low';
  }
}

//Evaluates input to see if valid
// function evalInput() {
//   var parsdInpt = parseInt(inputBox.value);
//   if ((parsdInpt < min) || (parsdInpt > max) || (isNaN(parsdInpt))) {
//     outputNum.innerText = 'Invalid Entry';
//     feedBack.innerText = 'Enter a number within your range';
//     intro.innerText = '';
//   } else {
//     compare();
//   }
//   }

//input only accepts numbers within min/max
function minMaxEval() {
  var parsdInpt = parseInt(inputBox.value);
  if ((parsdInpt < min) || (parsdInpt > max) || isNaN(parsdInpt)) {
    guessBtn.disabled = true;
  } else {
    guessBtn.disabled = false;
  }
}

//toggles clear button when input box is empty
function toggleClear() {
  if (inputBox.value !== '') {
    clearBtn.disabled = false;
  } else {
    clearBtn.disabled = true;
  }
}

//sets the min/max value to user input
function minMaxSet() {
  min = parseInt(minRange.value);
  max = parseInt(maxRange.value);
}
