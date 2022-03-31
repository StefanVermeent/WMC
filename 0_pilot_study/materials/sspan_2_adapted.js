var sspan_adapted_procedure = {
  timeline: [
    
    // First square attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "span",
      trial_duration: 500,
      selected_box: function(){
        selection_id+=1;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 1
      }
    },
    
    // First square
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "span",
      trial_duration:1500,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 1
      }
    },
    
    // First symmetry image attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "load",
      trial_duration:500,
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "sym_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 1
      }
    },
    
    // First symmetry image
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "load",
      trial_duration:5000,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "Is this image symmetric?",
      choices: ["Arrowleft", "Arrowright"],
      data: {
        task: "sspan_adapted",
        variable: "sym_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 1
      },
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
        nSymmetryAcc+=1;
        }
      }
    },
    
    // Second square attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "span",
      trial_duration:500,
      selected_box: function(){
        selection_id+=1;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 2
      }
    },
    
    // Second square
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "span",
      trial_duration:1500,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 2
      }
    },
    
    // Second symmetry image attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "load",
      trial_duration:500,
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "sym_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 2
      }
    },
    
    // Second symmetry image
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "load",
      trial_duration:5000,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "Is this image symmetric?",
      choices: ["Arrowleft", "Arrowright"],
      data: {
        task: "sspan_adapted",
        variable: "sym_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 2
      },
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
        nSymmetryAcc+=1;
        }
      }
    },
    
    // Third square attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "span",
      trial_duration:500,
      selected_box: function(){
        selection_id+=1;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 3
      }
    },
    
    // Third square
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "span",
      trial_duration:1500,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 3
      }
    },
    
    // Third symmetry image attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "load",
      trial_duration:500,
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "sym_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 3
      }
    },
    
    // Third symmetry image
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "load",
      trial_duration:5000,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "Is this image symmetric?",
      choices: ["Arrowleft", "Arrowright"],
      data: {
        task: "sspan_adapted",
        variable: "sym_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 3
      },
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
        nSymmetryAcc+=1;
        }
      }
    },
    
    // Fourth square attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "span",
      trial_duration:500,
      selected_box: function(){
        selection_id+=1;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 4
      }
    },
    
    // Fourth square
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "span",
      trial_duration:1500,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "square_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 4
      }
    },
    
    // Fourth symmetry image attention cue
    {
      type: 'sspan_task_cue',
      trial_type: "load",
      trial_duration:500,
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "",
      choices: jsPsych.NO_KEYS,
      data: {
        task: "sspan_adapted",
        variable: "sym_cue",
        trial: jsPsych.timelineVariable('trial'),
        square: 4
      }
    },
    
    // Fourth symmetry image
    {
      type: 'sspan_task_setup',
      size: 8,
      trial_type: "load",
      trial_duration:5000,
      number_darkened: [17, 18, 19],
      selected_box: function(){
        selection_id;
        return jsPsych.timelineVariable('selection')[selection_id];
      },
      stimulus: "Is this image symmetric?",
      choices: ["Arrowleft", "Arrowright"],
      data: {
        task: "sspan_adapted",
        variable: "sym_target",
        trial: jsPsych.timelineVariable('trial'),
        square: 4
      },
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
        nSymmetryAcc+=1;
        }
      }
    },
    
    // Square recall
    {
      type: 'spatial-span-recall',
      grid_size: function(){
        return grid },
      correct_order: function(){
        return jsPsych.timelineVariable('selection')},
      data: {
        task: "sspan_adapted",
        variable: "recall",
        trial: jsPsych.timelineVariable('trial'),
      },
      on_finish: function(){
        nSquares = 4;
        nSquaresRecalled = jsPsych.data.get().last(1).values()[0].accuracy;
        selection_id = -1;
      }
    },
    
    // Feedback
    {
      type: 'instructions',
      pages: function(){
        pageOne = "<div style='font-size:20px;'><b>You recalled <font color='blue'>"+nSquaresRecalled+" out of 4</font> squares in their correct order.</b><br><br>";
        pageOne+= "You made <font color='blue'>"+nSymmetryAcc+" out of 4</font> accurate symmetry judgement(s).<br><br></div>";
        
        return [pageOne];
      },
      allow_backward: false,
      button_label_next: "Next Trial",
      show_clickable_nav: true,
      data: {
        task: "sspan_adapted",
        variable: "feedback",
        trial: jsPsych.timelineVariable('trial')
      },
      on_finish: function(){
        nSymmetryAcc = 0;
      }
    }
    ],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(matrix, 4), trial: 1},
    {selection: jsPsych.randomization.sampleWithoutReplacement(matrix, 4), trial: 2},


  ]
};
    
    