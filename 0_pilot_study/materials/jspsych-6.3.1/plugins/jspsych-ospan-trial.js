/*
 * Example plugin template
 */

jsPsych.plugins["ospan-trial"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'target', 'image');
  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'foil', 'image');
  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'fixation_image', 'image');


  plugin.info = {
    name: 'ospan-trial',
    description: '',
    parameters: {
      task_version: {
        type: jsPsych.plugins.parameterType.STRING,
        default: undefined,
        description: 'Version of the Ospan. Should be one of "standard", "adapted"'
      },
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: [""],
        description: 'The HTML string to be displayed'
      },
      trial_type: {
        type: jsPsych.plugins.parameterType.STRING,
        default: [""],
        description: 'Should be one of "span", "load"',      
      },
      trial_number: {
        type: jsPsych.plugins.parameterType.INT,
        default: undefined,
        description: 'Trial number.'
      },
      
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },

      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
      
      hide_prompt: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Hide response options?',
        default: false,
        description: 'If true, the correct responses are not shown.'
      }
    }
  };
  
  plugin.trial = function(display_element, trial) {
  
  
  // ** FUNCTIONS **
  
  // GENERATE MATH EQUATIONS
  var cogloadf = function(correct){  // generates math questions
  var possibleOperations = [" + ", " - "];
  operation = jsPsych.randomization.sampleWithReplacement(possibleOperations, 1)[0];
  if (operation==" + "){
    num1 = Math.floor(jStat.uniform.sample(1, 5));
    num2 =  Math.floor(jStat.uniform.sample(1, 5));
    ans = num1 + num2;
  } else if (operation==" - "){
    num1 = Math.floor(jStat.uniform.sample(1, 5));
    num2 = Math.floor(jStat.uniform.sample(1, num1));
    ans = num1 - num2;
  }
  
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
  
  var equation = num1+operation+num2+' = '+ans;
  
  return equation;
};
  
  

  // ** CURRENT STIMULUS TO PRESENT
  var current_letter = (trial.trial_type === "span")? trial.stimulus[trial.trial_number] : ""; 
  
  
  // Is the math equation correct or incorrect?incorrect
  var math_correct = jsPsych.randomization.sampleWithReplacement([true, false], 1)[0];
  
  // Mathematical equation
  var equation = (trial.trial_type === "cog_load")? cogloadf(math_correct) : "";
  
  
  // Logic flow that determines which boxes and letters are shown
  // On standard trials, boxes and trial letter are only shown on span trials, but disappear on cognitive load trials
  // On adapted trials, boxes and trial letter remain on screen during cognitive load trials.
  if(trial.task_version == "standard") {
    if(trial.trial_type === "cog_load") {
      var boxes = ["white","white","white","white","white"];
      
      var letter1 = "";
      var letter2 = "";
      var letter3 = "";
      var letter4 = "";
      var letter5 = "";
    }
    if(trial.trial_type === "span") {
      
      var boxes = ["white", "white", "white", "white", "white"];
      
      var letter1 = (trial.trial_number === 0)? trial.stimulus[0] : "";
      var letter2 = (trial.trial_number === 1)? trial.stimulus[1] : "";
      var letter3 = (trial.trial_number === 2)? trial.stimulus[2] : "";
      var letter4 = (trial.trial_number === 3)? trial.stimulus[3] : "";
      var letter5 = (trial.trial_number === 4)? trial.stimulus[4] : "";
      
    //  var letter1 = (trial.stimulus.length > 0)? trial.stimulus[0] : "";
    //  var letter2 = (trial.stimulus.length > 1)? trial.stimulus[1] : "";
    //  var letter3 = (trial.stimulus.length > 2)? trial.stimulus[2] : "";
    //  var letter4 = (trial.stimulus.length > 3)? trial.stimulus[3] : "";
    //  var letter5 = (trial.stimulus.length > 4)? trial.stimulus[4] : "";
    }
  }
  
  
  
  if(trial.task_version == "adapted") {
    if(trial.trial_type === "cog_load") {
      var boxes = ["black", "black", "black", "black", "black"];
      
      var letter1 = (trial.stimulus.length > 0)? trial.stimulus[0] : "";
      var letter2 = (trial.stimulus.length > 1)? trial.stimulus[1] : "";
      var letter3 = (trial.stimulus.length > 2)? trial.stimulus[2] : "";
      var letter4 = (trial.stimulus.length > 3)? trial.stimulus[3] : "";
      var letter5 = (trial.stimulus.length > 4)? trial.stimulus[4] : "";
    }
    if(trial.trial_type === "span") {
      
      var boxes = ["black","black","black","black","black"];
      
      var letter1 = (trial.stimulus.length > 0)? trial.stimulus[0] : "";
      var letter2 = (trial.stimulus.length > 1)? trial.stimulus[1] : "";
      var letter3 = (trial.stimulus.length > 2)? trial.stimulus[2] : "";
      var letter4 = (trial.stimulus.length > 3)? trial.stimulus[3] : "";
      var letter5 = (trial.stimulus.length > 4)? trial.stimulus[4] : "";
      
      // Determine which letter is reveiled during the letter encoding phase
      if(trial.trial_number === 0) {
        boxes[0] = "white";
      }
      if(trial.trial_number == 1) {
        boxes[1] = "white";
      }
      if(trial.trial_number == 2) {
        boxes[2] = "white";
      }
      if(trial.trial_number == 3) {
        boxes[3] = "white";
      }
      if(trial.trial_number == 4) {
        boxes[4] = "white";
      }
    }
  }
    
  
 //// Determine which letter is reveiled during the letter encoding phase
 //  if(trial.trial_number === 0) {
 //    boxes[0] = "white";
 //  }
 //  if(trial.trial_number == 1) {
 //    boxes[1] = "white";
 //  }
 //  if(trial.trial_number == 2) {
 //    boxes[2] = "white";
 //  }
 //  if(trial.trial_number == 3) {
 //    boxes[3] = "white";
 //  }
 //  if(trial.trial_number == 4) {
 //    boxes[4] = "white";
 //  }


  // Display stimulus
  var html = "<style>" +
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
    "</style>";
  
   html += '<div id="jspsych-html-keyboard-response-stimulus">';

  html += "<div class='grid-container' style = 'height:400px';>";
  html += "<div class='grid-item'>";
  html += "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>";
  html += "<div style = 'margin: auto; background: " + boxes[0] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter1 + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[1] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter2 + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[2] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter3 + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[3] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter4 + "</span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[4] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter5 + "</span></div>";
  html += "</div>";
  html += "</div></div>";
  html += "<div class='grid-item' style = 'font-size: 70px; color: black'><br><br><br><br><br><br>" + equation + "<br><br><br><br><br><br><br><br></div>"; 
  
  if(trial.hide_prompt === false) {
    html += "<div style = 'font-size: 30px'><span>&larr; CORRECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INCORRECT &rarr;</span></div>";
  }
  html += "</div>";
  
  
  display_element.innerHTML = html;
    
    
    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }
    
      
    var correct_response = (math_correct===true)? "arrowleft" : "arrowright";
    var accuracy = (correct_response === response.key)? 1 : 0;
    
    var stim_log = (trial.trial_type === "span")? current_letter : equation;


      // gather the data to store for the trial
      var trial_data = {
        "type": trial.trial_type,
        "version": trial.task_version,
        "set_size": trial.stimulus.length,
        "trial": trial.trial_number,
        "rt": response.rt,
        "stimulus": stim_log,
        "key_press": response.key,
        "correct_response": correct_response,
        "accuracy": accuracy,
      };
      

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
   //   display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key === null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'date',
        persist: false,
        allow_held_key: false
      });
    }


    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();