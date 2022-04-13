//-------------------- Welcome
var ospan_welcome = {
  type: 'instructions',
  pages: [
    "Welcome to the <b>Letters and Numbers</b> game!"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  data: {variable: 'welcome', task: "ospan_practice"}
};

//-------------------- Instructions
var ospan_instructions_letters = {
  type: 'instructions',
  pages: [
  //Page 1
  "<p style = 'text-align: center;'>"+ 
  "In this game, you will have to do two things:<br><br>" +
  "1. Remember <strong>letters</strong> that are presented on the screen.<br><br>" +
  "2. Solve <strong>math equations</strong>.",
  
  //page 2
  "<p style = 'text-align: center;'>"+ 
  "<strong>Task 1: Remember letters</strong><br><br>" +
  "You will see a couple of letters, one after the other.<br><br>" +
  "Your job is to remember all letters <strong>in the correct order</strong>",
  
  //page 3
  "<p style = 'text-align: center;'>"+ 
  "For example, you might first see an 'S', than an 'F', and then a 'Q'<br><br>" +
  "After the last letter, you select the letters that you saw in the correct order.",
  
  //page 4
  "<p style = 'text-align: center;'>"+ 
  "Let's practice this task a couple of times! <br><br>" +
  "Press any key to start when you are ready to practice."
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  button_label_previous: "go back",
  data: {variable: "instructions_letters", task: "ospan_standard"}
};


var ospan_instructions_math = {
  type: 'instructions',
  pages: [
  //Page 1
  "<p style = 'text-align: center;'>"+ 
  "Great job!<br><br>" +
  "We will now continue to the second task",
  
  //page 2
  "<p style = 'text-align: center;'>"+ 
  "On the second task, you will see math equations like the one below:<br><br><br><br>" +
  "<div style = 'font-size:70px'>5 + 3 = 8</div><br><br><br>",
  
  //page 3
  "<p style = 'text-align: center;'>"+ 
  "Sometimes, the outcome of the equation is CORRECT:<br><br><br><br>" +
  "<div style = 'font-size:70px'>5 + 3 = 8</div><br><br><br>",
  
  //page 4
  "<p style = 'text-align: center;'>"+ 
  "Sometimes, the outcome of the equation is INCORRECT:<br><br><br><br>" +
  "<div style = 'font-size:70px'>3 + 1 = 6</div><br><br><br>",
  
  //page 5
  "<p style = 'text-align: center;'>"+ 
  "Your job is to decide whether the equation is CORRECT or INCORRECT.<br><br>" +
  "<div style = 'float: left;'>If it is CORRECT,<br>press the LEFT (&larr;) key.</div>" +
  "<div style = 'float: right;'>If it is INCORRECT,<br>press the RIGHT (&rarr;) key.</div><br><br><br><br>",
  
  //page 6
  "<p style = 'text-align: center;'>"+ 
  "Let's practice this task a couple of times! <br><br>" +
  "Press any key to start when you are ready to practice."
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  button_label_previous: "go back",
  data: {variable: "instructions_letters", task: "ospan_standard"}
};

var ospan_instructions_full = {
  type: "instructions",
  pages: [
  //page 1
  "<p style = 'text-align: center;'>"+ 
  "Great job!<br><br>" +
  "We will now practice the full game.",
     
  //page 2
  "<p style = 'text-align: center;'>"+ 
  "In the full game, you will switch <strong>back and forth<br>between the two tasks, like this:<br><br><br>" +
  "Letter &rarr; Equation &rarr; Letter &rarr; Equation ...",
  
  //page 3
  "<p style = 'text-align: center;'>"+ 
  "It is important that you try your best on both tasks!<br><br>" +
  "At the end of each round, you will see how many<br> letters and math equations you got right.",
  
  //page 4
  "<p style = 'text-align: center;'>"+ 
  "Let's practice both tasks at the same time! <br><br>" +
  "Press any key to start when you are ready to practice."
 
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "continue",
  button_label_previous: "go back",
  data: {variable: "instructions_full", task: "ospan_standard"}
};

var ospan_start = {
    type: "html-keyboard-response",
    stimulus: "<p style = 'text-align: center;'>"+ 
      "Well done!<br><br>" +
      "You will now play the full game.<br><br>" +
      "Press any key to start when you are ready.",
    data: {variable: 'ospan_start', task: 'ospan_standard'},
};


var ospan_end = {
  type: "instructions",
  pages: [
    "<p style = 'text-align: center;'>"+ 
    "You are now finished playing the <strong>Letters and Numbers</strong> game.<br><br>" +
    "Click continue to move on to the next game.",
  ]
};


//--------------------Practice Trials

var ospan_practice_letters = {
  timeline: [
     {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
     {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
     {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Recall phase
   {
     type: 'operation-span-recall',
     correct_order: jsPsych.timelineVariable('selection'),
     data: function(){
       return {set_size: 5};
     },
     on_finish: function(){
       nLetters = 5;
       nLettersRecalled = jsPsych.data.get().last(1).values()[0].accuracy;
     }
   },
   
   // Trial Feedback
   {
     type: 'instructions',
     pages: function(){
       pageOne = "<div style='font-size:20px;'><b>You recalled <font color='blue'>"+nLettersRecalled+" out of 5</font> letters in their correct order.</b><br><br>";
       pageOne+= "You solved <font color='blue'>"+nMathAcc+" out of 5</font> math problems accurately.<br><br></div>";
       
       return [pageOne];
     },
     allow_backward: false,
     button_label_next: "Next Trial",
     show_clickable_nav: true,
     on_finish: function(){
       nMathAcc = 0;
     }
   }
  ],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3)}
  ]
};

