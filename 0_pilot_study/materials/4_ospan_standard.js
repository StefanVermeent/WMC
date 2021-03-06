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
        version: jsPsych.timelineVariable('version'),
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
        block: function() {return block}
      }
    },
    
    // First equation
    {
     type: 'ospan-trial',
     task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 0,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        version: jsPsych.timelineVariable('version'),
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
        version: jsPsych.timelineVariable('version'),
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
        block: function() {return block}
      }
    },
   
   // Second equation
   {
     type: 'ospan-trial',
     task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 1,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        version: jsPsych.timelineVariable('version'),
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
        version: jsPsych.timelineVariable('version'),
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
        block: function() {return block}
      }
    },
   
   // Third equation
   {
     type: 'ospan-trial',
     task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 2,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        version: jsPsych.timelineVariable('version'),
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
        version: jsPsych.timelineVariable('version'),
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
        block: function() {return block}
      }
    },
   
   // Fourth equation
   {
     type: 'ospan-trial',
     task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 3,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        version: jsPsych.timelineVariable('version'),
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
        version: jsPsych.timelineVariable('version'),
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
        block: function() {return block}
      }
    },
   
   // Fifth equation
   {
     type: 'ospan-trial',
     task_version: "standard",
      stimulus: jsPsych.timelineVariable('selection'),
      equation: jsPsych.timelineVariable('equation'),
      correct: jsPsych.timelineVariable('correct'),
      trial_type: "cog_load",
      trial_number: 4,
      choices: ["arrowleft", "arrowright"],
      trial_duration: 6000,
      data: {
        variable: jsPsych.timelineVariable('variable'),
        version: jsPsych.timelineVariable('version'),
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
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 2), variable: "practice_full", equation: equations_practice.slice(5, 7), correct: correct_practice.slice(5,7)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), variable: "practice_full", equation: equations_practice.slice(7, 10), correct: correct_practice.slice(7,10)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), variable: "practice_full", equation: equations_practice.slice(10, 15), correct: correct_practice.slice(10,15)},
  ],
  repetitions: 1
};



var ospan_standard_procedure = {
  timeline: [ospan_standard_stimuli, ospan_letter_recall, ospan_performance_booster, ospan_interblock],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), variable: "task_standard1", equation: equations_standard.slice(0, 3), correct: correct_standard.slice(0, 3)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), variable: "task_standard1", equation: equations_standard.slice(3, 6), correct: correct_standard.slice(3, 6)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), variable: "task_standard2", equation: equations_standard.slice(6, 9), correct: correct_standard.slice(6, 9)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3), variable: "task_standard2", equation: equations_standard.slice(9, 12), correct: correct_standard.slice(9, 12)},
  
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), variable: "task_standard1", equation: equations_standard.slice(12, 16), correct: correct_standard.slice(12, 16)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), variable: "task_standard1", equation: equations_standard.slice(16, 20), correct: correct_standard.slice(16, 20)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), variable: "task_standard2", equation: equations_standard.slice(20, 24), correct: correct_standard.slice(20, 24)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4), variable: "task_standard2", equation: equations_standard.slice(24, 28), correct: correct_standard.slice(24, 28)},
 
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), variable: "task_standard1", equation: equations_standard.slice(28, 33), correct: correct_standard.slice(28, 33)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), variable: "task_standard1", equation: equations_standard.slice(33, 38), correct: correct_standard.slice(33, 38)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), variable: "task_standard2", equation: equations_standard.slice(38, 43), correct: correct_standard.slice(38, 43)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5), variable: "task_standard2", equation: equations_standard.slice(43, 48), correct: correct_standard.slice(43, 48)},
  ],
  randomize_order: true
};
