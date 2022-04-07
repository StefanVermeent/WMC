//----- CUSTOMIZABLE VARIABLES -----------------------------------------

    minSetSize = 4; // starting length of each trial (i.e., min number of letters in a trial)
    maxSetSize = 7; // ending length of each trial (i.e., max number of letters in a trial)
    repSet = 3; // number of times each set size should be repeated

var possibleLetters = ["F","H","J","K","L","N","P","Q","R","S","T","V"];

var n = 0; //keeps track of number of trials gone by
var selection_id = 0; //keeps track of recall items within a test stack

var nLetterRecalled = 0; // feedback
var nMathAcc = 0; // feedback


