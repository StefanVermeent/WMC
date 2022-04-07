//----- CUSTOMIZABLE VARIABLES -----------------------------------------

    minSetSize = 4; // starting length of each trial (i.e., min number of letters in a trial)
    maxSetSize = 7; // ending length of each trial (i.e., max number of letters in a trial)
    repSet = 3; // number of times each set size should be repeated

var possibleLetters = ["F","H","J","K","L","N","P","Q","R","S","T","V"];

//var nPracticeTrials = letterMemDemoArray.length;
//var nfullDemo = fullDemoArray.length;


//var setSizes = letterMemDemoArray.concat(fullDemoArray, setSizes);
//var totalTrials = setSizes.length; //total number of trials in the entire task (demo + main task)

var n = 0; //keeps track of number of trials gone by
//var selection = jsPsych.randomization.sampleWithoutReplacement(possibleLetters, setSizes[n]);
var selection_id = 0; //keeps track of recall items within a test stack

var nLetterRecalled = 0; // feedback
var nMathAcc = 0; // feedback


