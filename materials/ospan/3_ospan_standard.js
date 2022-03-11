var ospan_standard_procedure = {
  timeline: [

    // First Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + jsPsych.timelineVariable('selection')[0] + "</div>";
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // First equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + cogloadf() + "</div>";
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

    // Second Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + jsPsych.timelineVariable('selection')[1] + "</div>";
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Second equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + cogloadf() + "</div>";
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

    // Third Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + jsPsych.timelineVariable('selection')[2] + "</div>";
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Third equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + cogloadf() + "</div>";
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
    
    // Fourth Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + jsPsych.timelineVariable('selection')[3] + "</div>";
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Fourth equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + cogloadf() + "</div>";
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
    
    // Fifth Letter
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + jsPsych.timelineVariable('selection')[4] + "</div>";
      },
      choices: jsPsych.NO_KEYS,
      trial_duration: 1000
    },
    
    // Fifth equation
    {
      type: 'html-keyboard-response',
      stimulus: function() {
        return "<div style = 'font-size: 70px'>" + cogloadf() + "</div>";
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
        pageOne = "<div style='font-size:20px;'><b>You recalled <font color='blue'>"+nLettersRecalled+" out of "+nLetters+"</font> letters in their correct order.</b><br><br>";
        if (n>nPracticeTrials){
          pageOne+= "You solved <font color='blue'>"+nMathAcc+" out of "+nLetters+"</font> math problems accurately.<br><br></div>";
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