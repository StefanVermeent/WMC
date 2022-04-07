var ospan_adapted_procedure = {
  timeline: [
    
    // First Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 0);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 500
    },
    
    // First Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 0, part = "letter");
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        task: 'ospan_adapted',
        subtask: "letter",
        stimulus: jsPsych.timelineVariable('selection')[0],
        block: jsPsych.timelineVariable('block'),
        trial: 1
  },
    },
    
    // First equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 0, part = "cog_load");
      },
      trial_duration:5000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      },
      data: {
        task: 'ospan_adapted',
        subtask: 'math',
        block: jsPsych.timelineVariable('block'),
        trial: 1
  },
    },
    
    // Second Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 1);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 500
    },
    
    // Second Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 1);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        task: 'ospan_adapted',
        subtask: "letter",
        stimulus: jsPsych.timelineVariable('selection')[1],
        block: jsPsych.timelineVariable('block'),
        trial: 2
      }
    },
    
    // Second equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 1, part = "cog_load");
      },
      trial_duration:5000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      },
      data: {
        task: 'ospan_adapted',
        subtask: 'math',
        block: jsPsych.timelineVariable('block'),
        trial: 2,
        //correct: jsPsych.data.get().last(1).values()[0].accuracy
  },
    },
    
    // Third Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 2);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 500
    },
    
    // Third Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 2);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        task: 'ospan_adapted',
        subtask: "letter",
        stimulus: jsPsych.timelineVariable('selection')[2],
        block: jsPsych.timelineVariable('block'),
        trial: 3
      }
    },
    
    // Third equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 2, part = "cog_load");
      },
      trial_duration:5000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      },
      data: {
        task: 'ospan_adapted',
        subtask: 'math',
        block: jsPsych.timelineVariable('block'),
        trial: 3,
       // correct: jsPsych.data.get().last(1).values()[0].accuracy
  },
    },
    
    // Fourth Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 3);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 500
    },
    
    // Fourth Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 3);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        task: 'ospan_adapted',
        subtask: "letter",
        stimulus: jsPsych.timelineVariable('selection')[3],
        block: jsPsych.timelineVariable('block'),
        trial: 4
      }
    },
    
    // Fourth equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 3, part = "cog_load");
      },
      trial_duration:5000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      },
      data: {
        task: 'ospan_adapted',
        subtask: 'math',
        block: jsPsych.timelineVariable('block'),
        trial: 4,
       // correct: jsPsych.data.get().last(1).values()[0].accuracy
  },
    },
    
    // Fifth Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 4);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 500
    },
    
    // Fifth Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 4);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        task: 'ospan_adapted',
        subtask: "letter",
        stimulus: jsPsych.timelineVariable('selection')[4],
        block: jsPsych.timelineVariable('block'),
        trial: 5
      }
    },
    
    // Fifth equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(box_color = "black", selected_letters = jsPsych.timelineVariable('selection'), current_letter = 4, part = "cog_load");
      },
      trial_duration:5000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      },
      data: {
        task: 'ospan_adapted',
        subtask: 'math',
        block: jsPsych.timelineVariable('block'),
        trial: 5,
      //  correct: jsPsych.data.get().last(1).values()[0].accuracy
  },
    },
    
    // Recall phase
    {
      type: 'operation-span-recall',
      correct_order: jsPsych.timelineVariable('selection'),
      data: function(){
        return {set_size: setSizes[n]};
      },
      on_finish: function(){
        nLetters = setSizes[n];
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
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), block: 1},
   // {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), block: 2},
   // {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), block: 3},
   // {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), block: 4},
   // {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), block: 5}
  ],
  on_finish: function() {
        jsPsych.data.displayData();
    }
};