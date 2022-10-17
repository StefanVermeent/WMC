
var aut_welcome = {
      type: 'instructions',
      pages: [
        "<div style = 'text-align: left; margin: 20px 10%;'>"+
        "The next game is about how people think creatively, like how people come up with original, innovative, and valuable ideas.<br><br>"+ 
        "Everyone can think creatively, and we would like to learn more about how people do it." +
        "</div>",
        "<div style = 'text-align: left; margin: 20px 10%;'>"+
        "For the next game, you will see a picture of an everyday object, like a brick. We'll ask you to come up with original and creative uses for that object. We'll repeat this task two times." +
        "</div>"
        ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      data: {variable: 'welcome'}
    };
    

var aut_fork_instruction = {
    // Trial 1: Fork instructions
      type: 'instructions',
      pages: [
        "<div style = 'text-align: left; margin: 20px 10%;'>"+
        "Please write down all of the original and creative uses for a <b style = 'color: blue;'>fork</b> that you can think of.<br><br>"+
        "Certainly, there are common, unoriginal ways to use a fork. However, for this task, list all of the unusual, creative, and uncommon uses you can think of.<br><br>" +
        "You will have one minute." +
        "</div>"
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "start the task",
      data: {variable: 'aut_key_instructions'}
    };
    
  
  
var aut_fork_task = {
      type: 'ethan-survey-text-duration',
      preamble: '<img src="img/fork.jpeg" height = "300px"><br>Your responses:<br><br><div style="margin: 10px 10%; line-height: 40px;">',
      questions: [{prompt: 'Type your creative use here and hit enter to add it:', required: true}],
      trial_duration: 60000,
      button_label: null,
      data: {variable: "aut_fork_responses", aut: "fork", use: "", aut_stim: ""},
      on_start: function(trial){
          if(jsPsych.data.get().last(1).values()[0].aut == 'fork' & jsPsych.data.get().last(1).values()[0].use !== ''){
              trial.preamble = jsPsych.data.get().last(1).values()[0].aut_stim + 
              "<span style='background-color: #F0F0F0; border-radius: 6px; padding: 6px 6px; margin: 3px; display: inline-flex;'>" + 
              jsPsych.data.get().last(1).values()[0].use + 
              "</span>";
              trial.data.aut_stim = trial.preamble;
          } else{
              trial.data.aut_stim = trial.preamble;
          }
      },
      on_finish: function(data){
          data.use = JSON.parse(data.responses).Q0;
          //data.aut_stim = trial.preamble;
          data.preamble = jsPsych.data.get().last(1).values()[0].aut_stim + 
          "<span style='background-color: #F0F0F0; border-radius: 6px; padding: 6px 6px; margin: 3px; display: inline-flex'>" + 
          jsPsych.data.get().last(1).values()[0].use +
          "</span>";
      },
    };
    
    
var aut_paperclip_instruction = {
    // Trial 2: Paperclip instructions
      type: 'instructions',
      pages: [
        "<div style = 'text-align: left; margin: 20px 10%;'>"+
        "Thanks!<br><br>Next, please write down all of the original and creative uses for a <b style = 'color: blue;'>paperclip</b> that you can think of.<br><br>"+
        "Certainly, there are common, unoriginal ways to use a paperclip. However, for this task, list all of the unusual, creative, and uncommon uses you can think of.<br><br>" +
        "You will have one minute." +
        "</div>"
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "start the task",
      data: {variable: 'aut_key_instructions'}
    };

var aut_paperclip_task = {
    // Trial 2: Paperclip responses
      type: 'ethan-survey-text-duration',
      preamble: '<img src="img/paperclip.jpeg" height = "300px" ><br>Your responses:<br><br><div style="margin: 10px 10%; line-height: 40px;">',
      questions: [{prompt: 'Type your creative use here and hit enter to add it:', required: true}],
      trial_duration: 60000,
      button_label: null,
      data: {variable: "aut_paperclip_responses", aut: "paperclip", use: "", aut_stim: ""},
      on_start: function(trial){
          if(jsPsych.data.get().last(1).values()[0].aut == 'paperclip' & jsPsych.data.get().last(1).values()[0].use !== ''){
              trial.preamble = jsPsych.data.get().last(1).values()[0].aut_stim + 
              "<span style='background-color: #F0F0F0; border-radius: 6px; padding: 6px 6px; margin: 3px; display: inline-flex;'>" + 
              jsPsych.data.get().last(1).values()[0].use + 
              "</span>";
              trial.data.aut_stim = trial.preamble;
          } else{
              trial.data.aut_stim = trial.preamble;
          }
      },
      on_finish: function(data){
          data.use = JSON.parse(data.responses).Q0;
          //data.aut_stim = trial.preamble;
          data.preamble = jsPsych.data.get().last(1).values()[0].aut_stim + 
          "<span style='background-color: #F0F0F0; border-radius: 6px; padding: 6px 6px; margin: 3px; display: inline-flex;'>" + 
          jsPsych.data.get().last(1).values()[0].use +
          "</span>";
      }
        };

