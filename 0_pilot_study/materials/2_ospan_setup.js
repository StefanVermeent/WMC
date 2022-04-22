//----- CUSTOMIZABLE VARIABLES -----------------------------------------


var possibleLetters = ["F","H","J","K","L","N","P","Q","R","S","T","V"];
var block = 0; // Keep track of block number

var nLetterRecalled = 0; // feedback
var nMathAcc = 0; // feedback


var trial_count = 0;
var overall_acc = 0; // keep track of overal accuracy; if accuracy is < 75% halfway through, participants get a probe urging them to spend more effort on the math trials
var booster_given = false;


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
    set_size: jsPsych.timelineVariable('selection').length,
    block: block,
    variable: "task",
    version: jsPsych.timelineVariable('version'),
  },
  on_finish: function(){
    //nLetters = 5;
    nLettersRecalled = jsPsych.data.get().last(1).values()[0].accuracy;
  }
};


// Feedback for Letter Only Practice Trials
var ospan_practice_letters_feedback = {  
  type: 'html-keyboard-response',
  stimulus: function(){
    stim = "<div style='font-size:20px;'><b>You recalled <font color='blue'>"+nLettersRecalled+" out of " + jsPsych.timelineVariable('selection').length + "</font> letters in their correct order.</b><br><br><br>";
    stim += "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) to start the next trial.";
       
    return stim;
  },
  choices: ["arrowleft", "arrowright"],
  on_finish: function(){
    nMathAcc = 0;
  }
};


// Feedback for Math Only Practice Trials
var ospan_practice_math_feedback = {
  type: 'html-keyboard-response',
     stimulus: function(){
       stim = "You solved <font color='blue'>"+nMathAcc+" out of " + jsPsych.timelineVariable('selection').length + "</font> math problems accurately.<br><br></div><br><br><br>";
       stim += "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) to continue.";
       
       return stim;
     },
     choices: ["arrowleft", "arrowright"],
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
       stim += "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) to start the next trial.";
       
       return stim;
     },
     choices: ["arrowleft", "arrowright"],
     on_finish: function(){
       nMathAcc = 0;
     }
};


var ospan_interblock = {
  type: 'html-keyboard-response',
  stimulus: "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) to start the next block.",
  choices: ["arrowleft", "arrowright"]
};


var ospan_midpoint_accuracy = {  
     type: 'html-keyboard-response',
     stimulus: function(){
       stim = "<div style='font-size:20px;'>So far, you have correctly solved <font color='blue'>"+Math.round((overall_acc/trial_count)*100)+" %</font> of math problems</div><br><br><br>";
       stim += "Try to take some more time on the remaining math problems to increase your accuracy.<br><br>";
       stim += "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) to start the next block.";

       return stim;
     },
     choices: ["arrowleft", "arrowright"],
};


// Performance booster in case performance is < 75% after half of the trials
var ospan_performance_booster = {  
  timeline: [ospan_midpoint_accuracy],
  conditional_function: function() {
       // The performance booster is provided roughly halfway through the trials if performance is below 75% (and only once, if booster_given == false)
       if (trial_count >= 24 & booster_given === false & (overall_acc / trial_count) < 0.75) {
         booster_given = true;
         return true;
       } else {
         return false;
       }
     },
  choices: ["arrowleft", "arrowright"],
};


// Reset performance-tracking counters at the end of an ospan version
var ospan_reset_counters = {  
     type: 'html-keyboard-response',
     stimulus: "",
     trial_duration: 0,
     on_finish: function(){
       trial_count = 0;
       overall_acc = 0;
       booster_given = false;
     }
};










