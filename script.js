//store things in variables

//input from user
var inputBox = document.getElementById('inptbx');

//guess button
var guessBtn = document.getElementById('gssbtn');

//clear button
var clearBtn = document.getElementById('clrbtn');

//intro sentence
var intro = document.getElementById('your-guess')

//output number
var outputNum = document.querySelector('#num-output');

//feedback sentence
var feedBack = document.getElementById('fdbck');

//reset button
var resetBtn = document.getElementById('rstbtn');

var ranNumber;

//on page load do these things
window.addEventListener('load', function() {
  zeroState();
})


function zeroState() {
  inputBox.value === '';
  intro.innerText = "Feelin' lucky punk?";
  outputNum.innerText = "1-100";
  feedBack.innerText = "Make your best guess...";
};

  getRanNum(1, 100);
  console.log("ranNum " + ranNumber);


// inputBox.addEventListener('input', function() {
//   disBut();
// });
//on keyup check to see if number entered is within min/max range
// inputBox.addEventListener('keyup', function() {
//   if (inputBox.value > 1) {
//     //display message saying out of range too low
//   } else if (inputBox.value < 100) {
//     //display message saying out of range too high
//   } else {
//     //do nothing
//   }
//   }
// })


// get random number function
function getRanNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  ranNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

// var ranNumber = getRanNum(1, 100)



//function that compares user input to random number and then output display feedback sentence based on comparison
function compare() {
  var parsdInpt = parseInt(inputBox.value);

  outputNum.innerText = inputBox.value;
  console.log('prsdInt: ', parsdInpt)
  if(parseInt(inputBox.value) === ranNumber) {
    outputNum.innerText = 'BOOM!';
    feedBack.innerText = '';
    intro.innerText = '';
  } else if(parseInt(inputBox.value) > ranNumber) {
    intro.innerText = "Your last guess was"
    feedBack.innerText = 'That is too high';
  } else if(parseInt(inputBox.value) < ranNumber) {
    intro.innerText = "Your last guess was"
    feedBack.innerText = 'That is too low';
  }
}



//add event listener to guess-button to run function that compares
guessBtn.addEventListener('click', function() {
  console.log('do I work');
  compare();
  inputBox.value = '';
});


//make clear button clear input field
clearBtn.addEventListener('click', function() {
  inputBox.value = '';
  console.log(inputBox.value)
});


//make reset button reset all inputs and generate new random number
resetBtn.addEventListener('click', function() {
zeroState();
});


//if input field is empty disable button; same for clear button
// function disBut() {
//   if (inputBox.value === '') {
//     guessBtn.disabled = true;
//     clearBtn.disabled = true;
//   } else {
//     guessBtn.disabled = false;
//     clearBtn.disabled = false;
//   }
// }
