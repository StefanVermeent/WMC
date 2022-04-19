var ospan_standard_stimuli = {
  timeline: [
    // First Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      on_start: function() {
        block += 1;
      },
      data: {
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
      stimulus: "",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
      stimulus: "",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
      stimulus: "",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
      stimulus: "",
      trial_number: 4,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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
        variable: jsPsych.timelineVariable('task'),
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

// Performance booster in case performance is < 75% after half of the trials
var ospan_performance_booster = {  
  timeline: [ospan_midpoint_accuracy],
  conditional_function: function() {
       // The performance booster is provided roughly halfway through the trials if performance is below 75% (and only once, if booster_given == false)
       if (trial_count >= 24 & booster_given === false & (overall_acc / trial_count) < 0.75) {
         booster_given = true;
         return true;
       } else {
         return false;
       }
     }     
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
  timeline: [ospan_standard_stimuli, ospan_letter_recall, ospan_full_feedback, ospan_performance_booster],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), version: 'standard', variable: "task"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), version: 'standard', variable: "task"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), version: 'standard', variable: "task"},
  ],
  repetitions: 4,
  randomize: true
};