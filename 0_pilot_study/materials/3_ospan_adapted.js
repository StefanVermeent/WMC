var ospan_adapted_stimuli = {
  timeline: [
    // First Cue
    {
      type: 'ospan-cue',
      task_version: "adapted",
      stimulus: "",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
    
    // First Letter
    {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
    
    // First equation
    {
     type: 'ospan-trial',
     task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 0,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
          overall_acc += 1;
          trial_count += 1;
        }
      }
    },
    
    // Second Cue
    {
      type: 'ospan-cue',
      task_version: "adapted",
      stimulus: "",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },

   // Second Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Second equation
   {
     type: 'ospan-trial',
     task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 1,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
          overall_acc += 1;
          trial_count += 1;
        }
        
        if(jsPsych.timelineVariable('selection').length < 3) {
          jsPsych.endCurrentTimeline();
      }
      }
    },
    
    // Third Cue
    {
      type: 'ospan-cue',
      task_version: "adapted",
      stimulus: "",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },

   // Third Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Third equation
   {
     type: 'ospan-trial',
     task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 2,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
          overall_acc += 1;
          trial_count += 1;
        }
        
        if(jsPsych.timelineVariable('selection').length < 4) {
          jsPsych.endCurrentTimeline();
      }
      }
    },
    
    // Fourth Cue
    {
      type: 'ospan-cue',
      task_version: "adapted",
      stimulus: "",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
      },
   
   // Fourth Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Fourth equation
   {
     type: 'ospan-trial',
     task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 3,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
          overall_acc += 1;
          trial_count += 1;
        }
        
        if(jsPsych.timelineVariable('selection').length < 5) {
          jsPsych.endCurrentTimeline();
      }
      }
    },
    
    // Fifth Cue
    {
      type: 'ospan-cue',
      task_version: "adapted",
      stimulus: "",
      trial_number: 4,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      },
    },
   
   // Fifth Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 4,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Fifth equation
   {
     type: 'ospan-trial',
     task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 4,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
          overall_acc += 1;
          trial_count += 1;
        }
      }
    }
    ]
};
   


var ospan_practice_adapted_procedure = {
  timeline: [ospan_adapted_stimuli, ospan_letter_recall, ospan_full_feedback, ospan_performance_booster],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 2)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4)},
  ],
  repetitions: 1
};



var ospan_adapted_procedure = {
  timeline: [ospan_adapted_stimuli, ospan_letter_recall, ospan_full_feedback, ospan_performance_booster],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)},
  ],
  repetitions: 2,
  randomize: true
};
