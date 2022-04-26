//----- CUSTOMIZABLE VARIABLES -----------------------------------------


var possibleLetters = ["F","H","J","K","L","N","P","Q","R","S","T","V"];
var block = 0; // Keep track of block number

var nLetterRecalled = 0; // feedback
var nMathAcc = 0; // feedback


var trial_count = 0;
var overall_acc = 0; // keep track of overal accuracy; if accuracy is < 75% halfway through, participants get a probe urging them to spend more effort on the math trials
var booster_given = false;


// Arrays that determine whether the equation outcome should be correct or incorrect (for code, see /materials/scripts/ subfolder) 
var correct_practice = ['correct','correct','incorrect','correct','incorrect','incorrect','correct','incorrect','incorrect','correct','correct','incorrect','correct','correct'];

var equations_practice = ['4 - 3 = 1','5 + 6 = 11','1 - 1 = 1','2 + 4 = 6','1 + 3 = 6','6 + 6 = 14','3 + 3 = 6','6 + 3 = 10','6 - 5 = 3','4 + 2 = 6','3 + 2 = 5','6 + 4 = 11','2 + 5 = 7','3 + 4 = 7'];

var correct_standard = ['incorrect','incorrect','correct',
'correct','incorrect','correct','correct','incorrect','incorrect','correct','incorrect','correct','correct','correct','incorrect','correct','incorrect','correct','correct','correct','correct','correct',
'correct','incorrect','correct','incorrect','correct','correct','incorrect','correct','incorrect','incorrect','incorrect','incorrect','incorrect','incorrect','incorrect','incorrect','correct','incorrect',
'incorrect','correct','incorrect','correct','incorrect','correct','correct','incorrect'];

var equations_standard = ['6 + 5 = 13','6 - 1 = 3','6 - 2 = 4','4 + 3 = 7','3 + 1 = 6','1 + 3 = 4','2 + 2 = 4','4 - 2 = 0','3 + 2 = 7','5 - 5 = 0','2 - 1 = 3','1 + 1 = 2','5 - 3 = 2','6 - 6 = 0',
'4 + 1 = 6','6 + 6 = 12','5 + 1 = 8','3 + 1 = 4','6 + 2 = 8','4 + 6 = 10','4 - 4 = 0','4 + 1 = 5','1 - 1 = 0','1 + 2 = 5','2 - 1 = 1','3 + 5 = 10','3 + 6 = 9','1 + 2 = 3','5 - 3 = 1','2 + 6 = 8',
'1 + 1 = 4','1 + 4 = 7','6 + 1 = 9','4 - 1 = 5','3 - 2 = 3','3 + 3 = 8','5 - 1 = 3','3 - 3 = 1','4 + 5 = 9','2 - 2 = 2','4 - 4 = 2','6 - 3 = 3','4 + 3 = 9','3 - 1 = 2','5 - 2 = 4','3 - 3 = 0',
'4 - 2 = 2','6 - 4 = 0'
];

var correct_adapted = ['correct','correct','incorrect','incorrect','incorrect','incorrect','correct','incorrect','incorrect','incorrect',
'correct','incorrect','incorrect','correct','correct','correct','incorrect','correct','correct','incorrect','incorrect','correct','correct','incorrect','correct','correct','correct','incorrect','incorrect',
'correct','incorrect','correct','incorrect','correct','incorrect','correct','correct','incorrect','correct','incorrect','correct','incorrect','incorrect','incorrect','correct','incorrect','correct','correct'
];


var equations_adapted = ['6 - 1 = 5','3 - 2 = 1','5 - 4 = 3','1 + 6 = 8','5 + 4 = 11','2 + 1 = 4','5 + 4 = 9','6 + 2 = 10','5 - 5 = 2','5 + 5 = 12','4 + 4 = 8','5 + 2 = 8','4 + 5 = 11','6 + 4 = 10',
'5 + 5 = 10','5 - 1 = 4','1 + 5 = 7','5 - 4 = 1','1 + 4 = 5','3 + 6 = 11','6 - 3 = 1','5 - 2 = 3','4 - 1 = 3','2 + 2 = 5','2 - 2 = 0','1 + 5 = 6','5 + 2 = 7','4 + 4 = 10','4 + 6 = 11','3 + 5 = 8',
'2 + 3 = 7','5 + 1 = 6','6 - 6 = 2','6 - 5 = 1','2 + 6 = 9','6 + 5 = 11','1 + 6 = 7','2 + 4 = 8','2 + 3 = 5','6 - 2 = 5','5 + 3 = 8','5 + 3 = 9','3 + 4 = 8','4 - 3 = 0','6 - 4 = 2','2 + 5 = 9',
'6 + 3 = 9','2 + 1 = 3'
];


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
    block: function() {return block},
    variable: jsPsych.timelineVariable('variable'),
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










