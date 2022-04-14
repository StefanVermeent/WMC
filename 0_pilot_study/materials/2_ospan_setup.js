//----- CUSTOMIZABLE VARIABLES -----------------------------------------


var possibleLetters = ["F","H","J","K","L","N","P","Q","R","S","T","V"];
var block = 1; // Keep track of block number

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


//----------------Recall and Performance Feedback Trials

// Recall of Letters
var ospan_letter_recall = {
     type: 'operation-span-recall',
     correct_order: jsPsych.timelineVariable('selection'),
     data: {
       set_size: jsPsych.timelineVariable('selection').length
     },
     on_finish: function(){
       nLetters = 5;
       nLettersRecalled = jsPsych.data.get().last(1).values()[0].accuracy;
     }
};


// Feedback for Letter Only Practice Trials
var ospan_practice_letters_feedback = {  
  type: 'html-keyboard-response',
     stimulus: function(){
       stim = "<div style='font-size:20px;'><b>You recalled <font color='blue'>"+nLettersRecalled+" out of " + jsPsych.timelineVariable('selection').length + "</font> letters in their correct order.</b><br><br><br>";
       stim += "Press any key to start the next trial.";
       
       return stim;
     },
     on_finish: function(){
       nMathAcc = 0;
     }
};


// Feedback for Math Only Practice Trials
var ospan_practice_math_feedback = {
  type: 'html-keyboard-response',
     stimulus: function(){
       stim = "You solved <font color='blue'>"+nMathAcc+" out of " + jsPsych.timelineVariable('selection').length + "</font> math problems accurately.<br><br></div><br><br><br>";
       stim += "Press any key to start the next trial.";
       
       return stim;
     },
     on_finish: function(){
       nMathAcc = 0;
     }
};


// Feedback for Full trials (Letter and Math Combined)
var ospan_full_feedback = {  
     type: 'html-keyboard-response',
     stimulus: function(){
       stim = "<div style='font-size:20px;'><b>You recalled <font color='blue'>"+nLettersRecalled+" out of " + jsPsych.timelineVariable('selection').length + "</font> letters in their correct order.</b><br><br>";
       stim += "You solved <font color='blue'>"+nMathAcc+" out of " + jsPsych.timelineVariable('selection').length + "</font> math problems accurately.<br><br></div><br><br><br>";
       stim += "Press any key to start the next trial.";
       
       return stim;
     },
     on_finish: function(){
       nMathAcc = 0;
     }
};









