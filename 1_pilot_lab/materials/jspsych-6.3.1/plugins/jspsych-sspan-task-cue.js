/*
  * Example plugin template
*/
  
  jsPsych.plugins["sspan_task_cue"] = (function() {
    
    var plugin = {};
    
    jsPsych.pluginAPI.registerPreload('visual-search-circle', 'target', 'image');
    jsPsych.pluginAPI.registerPreload('visual-search-circle', 'foil', 'image');
    jsPsych.pluginAPI.registerPreload('visual-search-circle', 'fixation_image', 'image');
    
    
    plugin.info = {
      name: 'sspan_task_cue',
      description: '',
      parameters: {
        stimulus: {
          type: jsPsych.plugins.parameterType.HTML_STRING,
          pretty_name: 'Stimulus',
          default: undefined,
          description: 'The HTML string to be displayed'
        },
        trial_type: {
          type: jsPsych.plugins.parameterType.STRING,
          default: undefined,
          description: 'For adapted task: should be one of "span", "load"',      
        },
        choices: {
          type: jsPsych.plugins.parameterType.KEYCODE,
          array: true,
          pretty_name: 'Choices',
          default: jsPsych.ALL_KEYS,
          description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
        display_red_box: {
        type: jsPsych.plugins.parameterType.BOOL,
        default: true,
        description: "should a red box be marked"
      },
      selected_box: {
        type: jsPsych.plugins.parameterType.INT,
        default: undefined,
        description: "which box should be selected for this trial"
      },
        button_html: {
          type: jsPsych.plugins.parameterType.IMAGE,
          pretty_name: 'Button html',
          default: '<button class="jspsych-btn-numpad" style = "width:120px; font-size: 16px" >%choice%</button>',
          array: true,
          description: 'The html of the button. Can create own style.'
        },
        trial_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Trial duration',
          default: null,
          description: 'How long to show the trial.'
        },
      }
    }
    
    
    plugin.trial = function(display_element, trial) {
      
    
       var paper_size = 4*2*trial.size_cells;
       var paper_size_width = 900;
        
        
        // *** SPATIAL SPAN MATRIX ***
  
  // making matrix:
  var grid = 4;
  var ss_size_cells = 70

  var ss_matrix = [];
  for (var i=0; i<grid; i++){
    m1 = i;
    for (var h=0; h<grid; h++){
      m2 = h;
      ss_matrix.push([m1,m2]);
    }
  }

  var red_box = trial.selected_box;

        
        
        // Display symmatry matrix
        display_element.innerHTML = '<div id="jspsych-visual-search-circle-container" style= "border: solid black; position: relative; width:' + paper_size_width + 'px; height:' + 400 + 'px"></div>';
        var paper = display_element.querySelector("#jspsych-visual-search-circle-container");
        
        
        
        
        // Display spatial span matrix
        
        if(trial.trial_type === 'span') {
          
          paper.innerHTML += '<div style="position:absolute; top:40px; left:0px; width:305px; height:305px; border: solid red">'
          
          for (var i=0; i<ss_matrix.length; i++){
      paper.innerHTML += '<div class="jspsych-grid" style="position: absolute; top:'+ (60+ss_matrix[i][0]*(ss_size_cells-3)) +'px; left:'+ (20+ss_matrix[i][1]*(ss_size_cells-3))+'px";><div class="whiteBox"</div></div>';
          }
          paper.innerHTML += "</div>"
        }
        
        
        
        
        if(trial.trial_type === 'load') {
          
          for (var i=0; i<ss_matrix.length; i++){
      paper.innerHTML += '<div class="jspsych-grid" style="position: absolute; top:'+ (60+ss_matrix[i][0]*(ss_size_cells-3)) +'px; left:'+ (20+ss_matrix[i][1]*(ss_size_cells-3))+'px";><div class="whiteBox"</div></div>';
      }

      if (trial.display_red_box){
        paper.innerHTML += '<div class="jspsych-grid" style="position: absolute; top:'+ (60+red_box[0]*(ss_size_cells-3)) +'px; left:'+ (20+red_box[1]*(ss_size_cells-3))+'px";><div class="redBox" /div></div>';
      }
          
          paper.innerHTML += '<div style="position:absolute; top:40px; left:575px; width:305px; height:305px; border: solid red">'
          paper.innerHTML += "</div>"
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

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key
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
      display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';

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
          