//minSetSize = 3 // starting length of each trial (i.e., min number of letters in a trial)
//maxSetSize = 5 // ending length of each trial (i.e., max number of letters in a trial)
repSet = 3 // number of times each set size should be repeated
randomize = true // present different set sizes in random order. if false, set sizes will be presented in ascending order

//----------------------------------------------------------------------

//var setSizes = [];    // different set sizes
//for (var i = minSetSize; i<= maxSetSize; i++){
//  for (var r = 1; r<= repSet; r++){
//    setSizes.push(i);
//  }
//}

var grid = 4;
var matrix = [];
for (var i=0; i<grid; i++){
  m1 = i;
  for (var h=0; h<grid; h++){
    m2 = h;
    matrix.push([m1,m2]);
  }
};

//var nTrials = setSizes.length;
//if (randomize){
//  setSizes = jsPsych.randomization.sampleWithoutReplacement(setSizes, nTrials)} // shuffle through the set sizes

var squaregridDemoArray = [3,4,4];
var fullDemoArray = [3,3,4];
var nPracticeTrials = squaregridDemoArray.length; //number of practice trials for square memorization
var nfullDemo = fullDemoArray.length;

var setSizes = squaregridDemoArray.concat(fullDemoArray, setSizes);
var totalTrials = setSizes.length; //total number of trials in the entire task
var n = 0; //keeps track of number of trials gone by

var selection = jsPsych.randomization.sampleWithoutReplacement(matrix, 4);
var selection_id = -1;  //keeps track of recall items within a test stack

var nSymmetryAcc = 0;//feedback
var nSquaresRecalled = 0; //feedback

