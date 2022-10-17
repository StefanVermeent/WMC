var ospan_practice_letters_stimuli = {
  timeline: [
    {
      type: 'ospan-cue',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      trial_type: "span",
      hide_prompt: true,
      on_start: function() {
        block += 1;
      },
      data: {
        variable: 'practice_letters',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      trial_number: 0,
      trial_type: "span",
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice_letters',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-cue',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 1,
      trial_type: "span",
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      hide_prompt: true,
      data: {
        variable: 'practice_letters',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice_letters',
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
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      trial_type: "span",
      hide_prompt: true,
      data: {
        variable: 'practice_letters',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice_letters',
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
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      trial_type: "span",
      hide_prompt: true,
      data: {
        variable: 'practice_letters',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000,
      hide_prompt: true,
      data: {
        variable: 'practice_letters',
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
      type: 'ospan-cue',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 0,
      trial_type: "cog_load",
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: 'practice_math',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct:  jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 0,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: 'practice_math',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    
    {
      type: 'ospan-cue',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 1,
      trial_type: "cog_load",
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: 'practice_math',
        block: function() {return block}
      }
    },

    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 1,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: 'practice_math',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    
  {
      type: 'ospan-cue',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 2,
      trial_type: "cog_load",
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: 'practice_math',
        block: function() {return block}
      }
    },

    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 2,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: 'practice_math',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    
    {
      type: 'ospan-cue',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 3,
      trial_type: "cog_load",
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: 'practice_math',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 3,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: 'practice_math',
        block: 1
      },
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    
    {
      type: 'ospan-cue',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: "",
      trial_number: 4,
      trial_type: "cog_load",
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      data: {
        variable: 'practice_math',
        block: function() {return block}
      }
    },
    
    {
      type: 'ospan-trial',
      task_version: jsPsych.timelineVariable("version"),
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 4,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: 'practice_math',
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
var ospan_practice_letters_standard_procedure = {
  timeline: [ospan_practice_letters_stimuli, ospan_letter_recall, ospan_practice_letters_feedback],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 2), version: "standard"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), version: "standard"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), version: "standard"},
  ]
};

var ospan_practice_letters_adapted_procedure = {
  timeline: [ospan_practice_letters_stimuli, ospan_letter_recall, ospan_practice_letters_feedback],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 2), version: "adapted"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), version: "adapted"},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), version: "adapted"},
  ]
};


var ospan_practice_math_procedure = {
  timeline: [ospan_practice_math_stimuli, ospan_practice_math_feedback],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), version: "standard", correct: correct_practice.slice(0, 5), equation: equations_practice.slice(0, 5)}
  ]
};


