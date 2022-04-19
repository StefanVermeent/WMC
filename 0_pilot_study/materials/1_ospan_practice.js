var ospan_practice_letters_stimuli = {
  timeline: [
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      hide_prompt: true,
      on_start: function() {
        block += 1;
      },
      data: {
        variable: 'practice',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      hide_prompt: true,
      data: {
        variable: 'practice',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice',
        block: function() {return block}
      },
      on_finish: function() {
        
        if(jsPsych.timelineVariable('selection').length < 3) {
          jsPsych.endCurrentTimeline();
      }
      }   
    },
    
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      hide_prompt: true,
      data: {
        variable: 'practice',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice',
        block: function() {return block}
      },
      on_finish: function() {
        
        if(jsPsych.timelineVariable('selection').length < 4) {
          jsPsych.endCurrentTimeline();
      }
      }   
    },
    
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      hide_prompt: true,
      data: {
        variable: 'practice',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice',
        block: function() {return block}
      },
      on_finish: function() {
        
        if(jsPsych.timelineVariable('selection').length < 5) {
          jsPsych.endCurrentTimeline();
      }
      }   
    }
    ]
};
    





//--------------------Practice Trials

var ospan_practice_math_stimuli = {
  timeline: [
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 0,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      post_trial_gap: 500,
      data: {
        variable: 'practice',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },

    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 1,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      post_trial_gap: 500,
      data: {
        variable: 'practice',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },

    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 2,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      post_trial_gap: 500,
      data: {
        variable: 'practice',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 3,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      post_trial_gap: 500,
      data: {
        variable: 'practice',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    {
      type: 'ospan-trial',
      task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "cog_load",
      trial_number: 3,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      post_trial_gap: 500,
      data: {
        variable: 'practice',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    }
    ]
};


// Practice Timelines
var ospan_practice_letters_procedure = {
  timeline: [ospan_practice_letters_stimuli, ospan_letter_recall, ospan_practice_letters_feedback],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 2)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4)},
  ]
};


var ospan_practice_math_procedure = {
  timeline: [ospan_practice_math_stimuli, ospan_practice_math_feedback],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)}
  ]
};


