//----- CUSTOMIZABLE VARIABLES -----------------------------------------

    minSetSize = 4; // starting length of each trial (i.e., min number of letters in a trial)
    maxSetSize = 7; // ending length of each trial (i.e., max number of letters in a trial)
    repSet = 3; // number of times each set size should be repeated

var possibleLetters = ["F","H","J","K","L","N","P","Q","R","S","T","V"];

var n = 0; //keeps track of number of trials gone by
var selection_id = 0; //keeps track of recall items within a test stack

var nLetterRecalled = 0; // feedback
var nMathAcc = 0; // feedback


var fullscreenmode = {
  type: 'fullscreen',
  fullscreen_mode: true
};


var resize_screen = {
  type: 'resize',
  item_width: 3 + 3/8,
  item_height: 2 + 1/8,
  prompt: "<p>Before we start, it is important that you follow the steps below carefully.<br>" +
  "If you skip these steps, the experiment might not work correctly on your computer.<br><br>" +
  "1. Pick up a creditcard and hold it against your computer screen.<br>" +
  "2. Click on the lower right corner of the blue box. You can now make it bigger or smaller.<br>" +
  "3. Change the size of the box until it is <strong>just as big as your creditcard</strong>.<br><br><br>" +
  "Click 'continue' when you are done" +
  "</p>",
  button_label: ['Continue'],
  pixels_per_unit: 100,
  starting_size: 300,
  data: {
    task: 'resize',
}};
