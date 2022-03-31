var ospan_adapted_procedure = {
  timeline: [
    
    // First Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 0);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // First Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 0, part = "letter");
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // First equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 0, part = "cog_load");
      },
      trial_duration:6000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      }
    },
    
    // Second Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 1);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Second Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 1);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Second equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 1, part = "cog_load");
      },
      trial_duration:6000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      }
    },
    
    // Third Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 2);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Third Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 2);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Third equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 2, part = "cog_load");
      },
      trial_duration:6000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      }
    },
    
    // Fourth Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 3);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Fourth Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 3);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Fourth equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 3, part = "cog_load");
      },
      trial_duration:6000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      }
    },
    
    // Fifth Attention cue
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return attention_cue(next_letter = 4);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Fifth Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 4);
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Fifth equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return test_display(selected_letters = jsPsych.timelineVariable('selection'), current_letter = 4, part = "cog_load");
      },
      trial_duration:6000,
      choices: ["ArrowLeft", "ArrowRight"],
      on_finish: function(){
        var acc = jsPsych.data.get().last(1).values()[0].accuracy;
        if (acc==1){
          nMathAcc+=1;
        }
      }
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
        if (n>nPracticeTrials){
          pageOne+= "You solved <font color='blue'>"+nMathAcc+" out of 5</font> math problems accurately.<br><br></div>";
        }
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
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)}
  ]
};