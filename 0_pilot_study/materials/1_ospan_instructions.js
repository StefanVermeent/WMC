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
  data: {variable: 'welcome', task_version: "introduction"}
};


//-------------------- Instructions

// If participants start with the standard Ospan version, they will be introduced with the letter task in the standard visual appearance
var ospan_instructions_letters_standard = {
  timeline: [
    {
      type: 'instructions',
      pages: [
      //Page 1
      "<p style = 'text-align: center;'>"+ 
      "In this game, you will have to do two things:<br><br>" +
      "1. Remember <strong>letters</strong>.<br><br>" +
      "2. Solve <strong>simple equations</strong>.",
      
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "<strong>Task 1: Remember letters</strong><br><br>" +
      "You will see a couple of letters, one after the other.<br><br>" +
      "Your job is to remember all letters <strong>in the correct order</strong>.",
      
      //page 3
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>" +
      "</div>"+
      "</div></div><br><br><br>" +
      
      "One by one, letters are presented from left to right at the top of the screen.<br><br>",
      
      //page 5
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Just before the next letter appears, you will see a black box with a red outline in the same location.",
      
      //page 5
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid white; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "The letters are shown briefly before disappearing again.",
      
      //page 4
      "<p style = 'text-align: center;'>"+ 
      "For example, you might first see an 'S', than an 'F', and then a 'Q'.<br><br>" +
      "After the last letter, you select the letters that you saw <strong>in the correct order</strong>."
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: 'html-keyboard-response',
      stimulus: "<p style = 'text-align: center;'>"+ 
      "We will now practice this task 3 times.<br><br>" +
      "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) when you are ready to practice.",
      choices: ["arrowleft", "arrowright"]
    }
  ]
};

// If participants start with the standard Ospan version, they will be introduced with the letter task in the standard visual appearance
var ospan_instructions_letters_adapted = {
  timeline: [
    {
      type: 'instructions',
      pages: [
      //Page 1
      "<p style = 'text-align: center;'>"+ 
      "In this game, you will have to do two things:<br><br>" +
      "1. Remember <strong>letters</strong>.<br><br>" +
      "2. Solve <strong>simple equations</strong>.",
      
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "<strong>Task 1: Remember letters</strong><br><br>" +
      "You will see a couple of letters, one after the other.<br><br>" +
      "Your job is to remember all letters <strong>in the correct order</strong>.",
      
      //page 3
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      
      "Each letter will be covered by a black box.<br><br>",
      
      
      //page 5
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Just before a letter appears, the box covering it will get a red outline.",
      
      
      //page 4
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid white; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      
      "One by one, the boxes disappear to show each letter.<br><br>",
      
      
      
      //page 4
      "<p style = 'text-align: center;'>"+ 
      "For example, you might first see an 'S', than an 'F', and then a 'Q'.<br><br>" +
      "After the last letter, you select the letters that you saw <strong>in the correct order</strong>."
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: 'html-keyboard-response',
      stimulus: "<p style = 'text-align: center;'>"+ 
      "Let's practice this task a couple of times! <br><br>" +
      "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) when you are ready to practice.",
      choices: ["arrowleft", "arrowright"]
    }
  ]
};



var ospan_instructions_math = {
  timeline: [
    {
      type: 'instructions',
      pages: [
      //Page 1
      "<p style = 'text-align: center;'>"+ 
      "Great job!<br><br>" +
      "We will now continue to the second task.",
      
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "On the second task, you will see simple equations like the one below:<br><br><br><br>" +
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
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: 'html-keyboard-response',
      stimulus: "<p style = 'text-align: center;'>"+ 
      "We will now practice this task 5 times.<br><br>" +
      "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) when you are ready to practice.",
      choices: ["arrowleft", "arrowright"]
    }
  ]
};

var ospan_instructions_full = {
  timeline: [
    {
      type: "instructions",
      pages: [
      //page 1
      "<p style = 'text-align: center;'>"+ 
      "Great job!<br><br>" +
      "We will now practice the full game.",
         
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "In the full game, you will switch <strong>back and forth<br></strong>between the two tasks.<br><br><br>" +
      "You will see a letter, then an equation, then a letter, then an equation, and so on:<br><br>" +
      "Letter &rarr; Equation &rarr; Letter &rarr; Equation ...",
      
      //page 3
      
      "<p style = 'text-align: center;'>"+ 
      "After seeing all letters and equations,<br>you select the letters that you saw <strong>in the correct order</strong>.",
      
      //page 4
      "<p style = 'text-align: center;'>"+ 
      "It is important that you try your best on both tasks!<br><br>" +
      "At the end of each round, you will see how many<br>letters and equations you got right.",
 
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
    type: 'html-keyboard-response',
    stimulus: "<p style = 'text-align: center;'>"+ 
      "We will now practice the full game 3 times.<br><br>" +
      "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) when you are ready to practice.",
    choices: ["arrowleft", "arrowright"]
    }
  ]
};

var ospan_start = {
    type: "html-keyboard-response",
    stimulus: "<p style = 'text-align: center;'>"+ 
      "You will now play the full game.<br><br>" +
      "From now on, you will not get feedback on your performance<br><br><br>" +
      "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) to start the next block.",
    choices: ["arrowleft", "arrowright"],
    data: {variable: 'ospan_start'},
};



var ospan_transition_to_standard = {
  timeline: [
    {
      type: "instructions",
      pages: 
      [
       "<p style = 'text-align: center;'>"+ 
      "Well done!<br><br>" +
      "You will now play a second version of the same game.<br><br>",
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
      '<div id="jspsych-html-keyboard-response-stimulus">' +
      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: none; border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "This time, the letters will not be covered by black boxes.<br><br>",
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
      '<div id="jspsych-html-keyboard-response-stimulus">' +
      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Instead, a single black box with a red outline will show the position of the next letter just before it appears.",
      
       "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>Q</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Everything else about the game will be identical."
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: "html-keyboard-response",
      stimulus: "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) when you are ready to start playing the game.",
      choices: ["arrowleft", "arrowright"],
      on_finish: function(){
        block = 1;
      }   
    }
  ]
  
};


var ospan_transition_to_adapted = {
    timeline: [
    {
      type: "instructions",
      pages: 
      [
      "<p style = 'text-align: center;'>"+ 
      "Well done!<br><br>" +
      "You will now play a second version of the same game.<br><br>",
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "This time, the letters will be covered by black boxes.<br><br>",
      
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "One by one, the outline of the boxes will turn red just before the letter underneath is shown.<br><br>",
      
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Everything else about the game will be identical.<br><br>",

      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: "html-keyboard-response",
      stimulus: "Press the left-arrow key (&larr;) or right-arrow key (&rarr;) when you are ready to start playing the game.",
      choices: ["arrowleft", "arrowright"],
      on_finish: function(){
        block = 1;
      }
    }
  ]
  
};




var ospan_end = {
  type: "instructions",
  pages: [
     "<p style = 'text-align: center;'>"+ 
    "You are now finished playing the <strong>Letters and Numbers</strong> game.<br><br>" +
    "Click continue to move on to the next game.",
  ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
};