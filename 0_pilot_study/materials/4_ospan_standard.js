var ospan_standard_stimuli = {
  timeline: [
    // First Letter Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      task_version: "standard",
      trial_type: "span",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      on_start: function() {
        block += 1;
      },
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
    
    // First Letter
    {
      type: 'ospan-trial',
      task_version: "standard",
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
    
    // First Equation Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      task_version: "standard",
      trial_type: "cog_load",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
    
    // First equation
    {
     type: 'ospan-trial',
     task_version: "standard",
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
        }
        trial_count += 1;
      }
    },
    
    // Second Cue
    {
      type: 'ospan-cue',
      task_version: "standard",
      stimulus: "",
      trial_number: 1,
      trial_type: "span",
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
      task_version: "standard",
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
    
    // Second Equation Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      task_version: "standard",
      trial_type: "cog_load",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Second equation
   {
     type: 'ospan-trial',
     task_version: "standard",
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
          
        }
        trial_count += 1;
        
        if(jsPsych.timelineVariable('selection').length < 3) {
          block += 1;
          jsPsych.endCurrentTimeline();
      }
      }
    },
    
    // Third Cue
    {
      type: 'ospan-cue',
      task_version: "standard",
      stimulus: "",
      trial_number: 2,
      trial_type: "span",
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
      task_version: "standard",
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
    
    // Third Equation Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      task_version: "standard",
      trial_type: "cog_load",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Third equation
   {
     type: 'ospan-trial',
     task_version: "standard",
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
          
        }
        
        trial_count += 1;
        
        if(jsPsych.timelineVariable('selection').length < 4) {
          jsPsych.endCurrentTimeline();
      }
      }
    },
    
    // Fourth Cue
    {
      type: 'ospan-cue',
      task_version: "standard",
      stimulus: "",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      trial_type: "span",
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
      },
      
   
   // Fourth Letter
   {
      type: 'ospan-trial',
      task_version: "standard",
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
    
    // Fourth Equation Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      task_version: "standard",
      trial_type: "cog_load",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Fourth equation
   {
     type: 'ospan-trial',
     task_version: "standard",
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
          
        }
        trial_count += 1;
        
        if(jsPsych.timelineVariable('selection').length < 5) {
          jsPsych.endCurrentTimeline();
      }
      }
    },
    
    // Fifth Cue
    {
      type: 'ospan-cue',
      task_version: "standard",
      stimulus: "",
      trial_number: 4,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      trial_type: "span",
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      },
      on_start: function() {
        if(jsPsych.timelineVariable('selection').length < 4) {
          jsPsych.endCurrentTimeline();
        }
      }
    },
   
   // Fifth Letter
   {
      type: 'ospan-trial',
      task_version: "standard",
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
    
    // Fifth Equation Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      task_version: "standard",
      trial_type: "cog_load",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        block: function() {return block}
      }
    },
   
   // Fifth equation
   {
     type: 'ospan-trial',
     task_version: "standard",
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
          
        }
        
        trial_count += 1;
      }
    }
    ]
};
   


var ospan_practice_standard_procedure = {
  timeline: [ospan_standard_stimuli, ospan_letter_recall, ospan_full_feedback],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 2), variable: "practice"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), variable: "practice"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), variable: "practice"},
  ],
  repetitions: 1
};



var ospan_standard_procedure = {
  timeline: [ospan_standard_stimuli, ospan_letter_recall, ospan_performance_booster, ospan_interblock],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), version: 'standard', variable: "task"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), version: 'standard', variable: "task"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), version: 'standard', variable: "task"},
  ],
  repetitions: 1,
  randomize: true
};
