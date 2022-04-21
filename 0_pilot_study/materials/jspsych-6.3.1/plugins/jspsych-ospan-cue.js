/*
 * Example plugin template
 */

jsPsych.plugins["ospan-cue"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'target', 'image');
  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'foil', 'image');
  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'fixation_image', 'image');


  plugin.info = {
    name: 'ospan-cue',
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
  
  if(trial.task_version === "standard") {
    var boxes = ["white", "white", "white", "white", "white"];
  }
  
  if(trial.task_version === "adapted") {
    var boxes = ["black","black","black","black","black"];
  }
  
  // Determine which letter is reveiled during the letter encoding phase
    if(trial.trial_number === 0) {
      boxes[0] = "red";
    }
    if(trial.trial_number == 1) {
      boxes[1] = "red";
    }
    if(trial.trial_number == 2) {
      boxes[2] = "red";
    }
    if(trial.trial_number == 3) {
      boxes[3] = "red";
    }
    if(trial.trial_number == 4) {
      boxes[4] = "red";
    }


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
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[1] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[2] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[3] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  html += "<div style = 'margin: auto; background: " + boxes[4] + "; width: 90px; height: 90px;'>";
  html += "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>";
  html += "</div>";
  html += "</div></div>";
  html += "<div class='grid-item' style = 'font-size: 70px; color: black'><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>"; 
  
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
    

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key,
      };
      
      // var math_correct var equation

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