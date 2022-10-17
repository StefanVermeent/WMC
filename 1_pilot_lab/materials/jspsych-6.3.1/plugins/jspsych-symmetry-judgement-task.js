jsPsych.plugins["symmetry-judgement-task"] = (function() {
  
  var plugin = {};
  
  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'target', 'image');
  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'foil', 'image');
  jsPsych.pluginAPI.registerPreload('visual-search-circle', 'fixation_image', 'image');
  
  
  plugin.info = {
    name: 'symmetry-judgement-task',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The HTML string to be displayed'
      },
      size: {
        type: jsPsych.plugins.parameterType.INT, // INT, IMAGE, KEYCODE, STRING, FUNCTION, FLOAT
        default_value: undefined
      },
      number_darkened: {
        type: jsPsych.plugins.parameterType.INT,
        default_value: undefined
      },
      proportion: {
        type: jsPsych.plugins.parameterType.FLOAT,
        default: 0.5
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
      size_cells: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: 50,
        description: 'How long to show the trial.',
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      }
    }
  }
  
  
  
  
  
  plugin.trial = function(display_element, trial) {
    
    // making half of matrix:
      var rows = trial.size;
      var columns = trial.size/2;
      var matrix= [];
      for (var i=0; i<rows; i++){
        m1 = i;
        for (var h=0; h<columns; h++){
          m2 = h;
          matrix.push([m1,m2])
        }
      };
      
      // assigning number for black boxes randomly in half of matrix:
        blackBoxNumber = jsPsych.randomization.sampleWithoutReplacement(trial.number_darkened, 1)
        blackBoxes = (jsPsych.randomization.sampleWithoutReplacement(matrix, blackBoxNumber))
        
        // creating identical of matrix, but with black boxes removed:
          for (i=0; i<blackBoxNumber; i++){
            h = blackBoxes[i];
            id = matrix.indexOf(h);
            matrix.splice(id,1);
          }
        
        // creating symmetric boxes:
          blackBoxesSymmetric = []
        for (i=0;i<blackBoxNumber;i++){
          h = 7 - blackBoxes[i][1]
          blackBoxesSymmetric.push([blackBoxes[i][0], h])
        }
        
        // p of being symmetric:
          var pSymmetric = jsPsych.randomization.sampleWithReplacement([0,1], 1, [trial.proportion, 1-trial.proportion])[0]
        
        
        //if not symmetric, change two boxes:
          if (pSymmetric==1){
            numberBoxesDifferent = jsPsych.randomization.sampleWithoutReplacement([3, 4], 1)[0];
            var boxes = jsPsych.randomization.sampleWithoutReplacement(blackBoxes, (blackBoxNumber - numberBoxesDifferent));
            var boxesAdd = jsPsych.randomization.sampleWithoutReplacement(matrix, numberBoxesDifferent);
            blackBoxes = []
            blackBoxes = boxes.concat(boxesAdd)
          }

  
  var blackBoxesFinal = blackBoxes.concat(blackBoxesSymmetric)
  
  var columns = trial.size;
  
  var matrix= [];
  for (var i=0; i<rows; i++){
    m1 = i;
    for (var h=0; h<columns; h++){
      m2 = h;
      matrix.push([m1,m2])
    }
  };
  
  paper_size = 4*2*trial.size_cells;
  
  display_element.innerHTML = '<div id="jspsych-visual-search-circle-container" style= "position: relative; width:' + paper_size + 'px; height:' + paper_size + 'px"></div>';
  var paper = display_element.querySelector("#jspsych-visual-search-circle-container");
  
  
  for (i=0; i<matrix.length; i++){
    paper.innerHTML += '<img src="img/whitebox.png" style="position: absolute; top:'+ matrix[i][0]*(trial.size_cells-2) +'px; left:'+matrix[i][1]*(trial.size_cells-2)+'px; width:'+trial.size_cells+'px; height:'+trial.size_cells+'px;"></img>';
  }
  
  for (i=0; i<blackBoxesFinal.length; i++){
    paper.innerHTML += '<img src="img/blackbox.png" style="position: absolute; top:'+ blackBoxesFinal[i][0]*(trial.size_cells-2) +'px; left:' + blackBoxesFinal[i][1]*(trial.size_cells-2)+'px; width:'+trial.size_cells+'px; height:'+trial.size_cells+'px;"></img>';
  }
  
  


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
      
    var correct_response = (pSymmetric==1) ? "arrowright" : "arrowleft";
    var accuracy = (correct_response === response.key) ? 1 : 0;
    

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
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
      if (response.key == null) {
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

  //  // hide stimulus if stimulus_duration is set
  //  if (trial.stimulus_duration !== null) {
  //    jsPsych.pluginAPI.setTimeout(function() {
  //      display_element.querySelector('#jspsych-html-keyboard-response-stimulus').style.visibility = 'hidden';
  //    }, trial.stimulus_duration);
  //  }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };
  
  return plugin;
})();