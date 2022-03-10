//----- CUSTOMIZABLE VARIABLES -----------------------------------------

    minSetSize = 4; // starting length of each trial (i.e., min number of letters in a trial)
    maxSetSize = 7; // ending length of each trial (i.e., max number of letters in a trial)
    repSet = 3; // number of times each set size should be repeated
    randomize = true; // present different set sizes in random order. if false, set sizes will be presented in ascending order
    file_name = null; // file name for data file. if null, a default name consisting of the participant ID and a unique number is chosen.
    local = true; 

var possibleLetters = ["F","H","J","K","L","N","P","Q","R","S","T","V"];

var setSizes = [];    // different set sizes
for (var i = minSetSize; i<= maxSetSize; i++){
  for (var r = 1; r<= repSet; r++){
    setSizes.push(i);
  }
}

var nTrials = setSizes.length; // number of trials

if (randomize){
  setSizes = jsPsych.randomization.sampleWithoutReplacement(setSizes, nTrials)} // shuffle through the set sizes

var letterMemDemoArray = [3,4,5];  // set sizes of initial demo trials
var fullDemoArray = [3,4];       // set sizes of full demo trials
var nPracticeTrials = letterMemDemoArray.length;
var nfullDemo = fullDemoArray.length;
var nCogLoadDemo = 0;

var setSizes = letterMemDemoArray.concat(fullDemoArray, setSizes);
var totalTrials = setSizes.length; //total number of trials in the entire task (demo + main task)

var n = 0; //keeps track of number of trials gone by
var selection = jsPsych.randomization.sampleWithoutReplacement(possibleLetters, setSizes[n]);
console.log("the actual selection is " + selection);
var selection_id = 0; //keeps track of recall items within a test stack

var nLetterRecalled = 0; // feedback
var nMathAcc = 0; // feedback

var cogloadf = function(){  // generates math questions
  var possibleOperations = [" + ", " - "];
  operation = jsPsych.randomization.sampleWithReplacement(possibleOperations, 1)[0];
  if (operation==" + "){
    num1 = Math.floor(jStat.uniform.sample(1, 11));
    num2 =  Math.floor(jStat.uniform.sample(1, 11));
    ans = num1 + num2;
  } else if (operation==" - "){
    num1 = Math.floor(jStat.uniform.sample(1, 11));
    num2 = Math.floor(jStat.uniform.sample(1, num1));
    ans = num1 - num2;
  }
  
  var correct = jsPsych.randomization.sampleWithReplacement([true, false], 1)[0];
  
  if (!correct){   // generates incorrect answers
    ansDiff = jsPsych.randomization.sampleWithReplacement([1,2],1)[0];
    coinFlip = jsPsych.randomization.sampleWithReplacement([true, false],1)[0];
    if (coinFlip){
      ans += ansDiff;
    } else {
      ans -= ansDiff;
    }
    if (ans<0){
      ans += 2*ansDiff; //ensuring no negative incorrect answers
    }
  }
  
  var equation = num1+operation+num2+' = '+ans+'<br><br><br><br>';
  
  return equation;
};

