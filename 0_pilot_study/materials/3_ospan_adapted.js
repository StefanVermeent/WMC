var ospan_adapted_stimuli = {
  timeline: [
    // First Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
    },
    
    // First Letter
    {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 0,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
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
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    
    // Second Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500
    },

   // Second Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 1,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
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
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    },
    
    // Third Cue
    {
      type: 'ospan-cue',
      stimulus: "",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 500
    },

   // Third Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 2,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
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
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
        
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
      trial_duration: 500
      },
   
   // Fourth Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 3,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
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
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
        
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
      on_start: function() {
        if(jsPsych.timelineVariable('selection').length < 4) {
          jsPsych.endCurrentTimeline();
        }
      }
    },
   
   // Fifth Letter
   {
      type: 'ospan-trial',
      task_version: "adapted",
      stimulus: jsPsych.timelineVariable('selection'),
      trial_type: "span",
      trial_number: 4,
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
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
      on_finish: function(){
        if (jsPsych.data.get().last(1).values()[0].accuracy == 1){
          nMathAcc+=1;
        }
      }
    }
    ]
};
   

var ospan_adapted_recall = {
  timeline: [
   // Recall phase
   {
     type: 'operation-span-recall',
     correct_order: jsPsych.timelineVariable('selection'),
     data: function(){
       return {set_size: 5};
     },
     on_finish: function(){
       nLetters = 5;
       nLettersRecalled = jsPsych.data.get().last(1).values()[0].accuracy;
     }
   },
   
   // Trial Feedback
   {
     type: 'instructions',
     pages: function(){
       pageOne = "<div style='font-size:20px;'><b>You recalled <font color='blue'>"+nLettersRecalled+" out of " + jsPsych.timelineVariable('selection').length + "</font> letters in their correct order.</b><br><br>";
       pageOne+= "You solved <font color='blue'>"+nMathAcc+" out of " + jsPsych.timelineVariable('selection').length + "</font> math problems accurately.<br><br></div>";
       
       return [pageOne];
     },
     allow_backward: false,
     button_label_next: "Next Trial",
     show_clickable_nav: true,
     on_finish: function(){
       nMathAcc = 0;
     }
   }
  ]
};

var ospan_adapted_procedure = {
  timeline: [ospan_adapted_stimuli, ospan_adapted_recall],
  timeline_variables: [
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 3)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 4)},
    {selection: jsPsych.randomization.sampleWithoutReplacement(possibleLetters, 5)},
  ],
  repetitions: 4
};
