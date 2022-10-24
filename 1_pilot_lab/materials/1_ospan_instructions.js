//-------------------- Welcome
var ospan_welcome = {
  type: 'instructions',
  pages: [
    "Je gaat nu beginnen aan het <b>Letters en Nummers</b> spel!"
  ],
  show_clickable_nav: true,
  allow_backward: true,
  key_forward: -1,
  key_backward: -1,
  button_label_next: "verder",
  data: {variable: 'welcome', task_version: "introduction"}
};


//-------------------- Instructions

// If participants start with the standard Ospan version, they will be introduced with the letter task in the standard visual appearance
var ospan_instructions_letters_standard = {
  timeline: [
    {
      type: 'instructions',
      pages: [
      //Page 1
      "<p style = 'text-align: center;'>"+ 
      "In dit spel zul je steeds twee dingen moeten doen:<br><br>" +
      "1. <strong>Letters</strong> onthouden." +
      "2. Simpele <strong>rekensommen</strong> oplossen.",
      
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "<strong>Taak 1: Letters onthouden</strong><br><br>" +
      "Je zult één voor één een reeks nummers te zien krijgen." +
      "Jouw taak is om alle letters <strong>in de juiste volgorde</strong> te onthouden.",
      
      //page 3
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>" +
      "</div>"+
      "</div></div><br><br><br>" +
      
      "De letters zullen één voor één gepresenteerd worden bovenin het scherm, van links naar rechts.<br><br>",
 
      //page 5
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Vlak voordat de volgende letter gepresenteerd wordt zul je een zwart vierkant met een rode omlijning zien op dezelfde plek op het scherm."
      
      //page 5
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid white; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Elke letter is kort te zien en zal vervolgens weer verdwijnen.",
      
      //page 4
      "<p style = 'text-align: center;'>"+ 
      "Een klein voorbeeld: Je krijgt eerst een 'S' te zien, dan een 'F', en tot slot een 'Q'.<br><br>" +
      "Als alle letters getoond zijn selecteer je de letters zoals je ze hebt onthouden, <strong>in de juiste volgorde</strong>."
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "verder",
      button_label_previous: "ga terug",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: 'html-keyboard-response',
      stimulus: "<p style = 'text-align: center;'>"+ 
      "We zullen deze taak nu eerst 3 keer oefenen.<br><br>" +
      "Druk op het pijltje naar links (&larr;) of het pijltje naar rechts (&rarr;) als je klaar bent om te oefenen.",
      choices: ["arrowleft", "arrowright"]
    }
  ]
};

// If participants start with the standard Ospan version, they will be introduced with the letter task in the standard visual appearance
var ospan_instructions_letters_adapted = {
  timeline: [
    {
      type: 'instructions',
      pages: [
      //Page 1
      "<p style = 'text-align: center;'>"+ 
      "In dit spel zul je steeds twee dingen moeten doen:<br><br>" +
      "1. <strong>Letters</strong> onthouden." +
      "2. Simpele <strong>rekensommen</strong> oplossen.",
      
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "<strong>Taak 1: Letters onthouden</strong><br><br>" +
      "Je zult één voor één een reeks nummers te zien krijgen." +
      "Jouw taak is om alle letters <strong>in de juiste volgorde</strong> te onthouden.",
      
      //page 3
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      
      "Elke letter wordt afgeschermd door een zwart vierkant.<br><br>",

      //page 5
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Vlak voordat een letter tevoorschijn komt, verschijnt er een rode rand om het bijbehorende zwarte vierkant.",

      
      //page 4
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid white; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      
      "De zwarte vierkanten zullen één voor één verdwijnen om de letter eronder te tonen.<br><br>",
      
      
      //page 4
      "<p style = 'text-align: center;'>"+ 
      "Een klein voorbeeld: Je krijgt eerst een 'S' te zien, dan een 'F', en tot slot een 'Q'.<br><br>" +
      "Als alle letters getoond zijn selecteer je de letters zoals je ze hebt onthouden, <strong>in de juiste volgorde</strong>."
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "continue",
      button_label_previous: "go back",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: 'html-keyboard-response',
      stimulus: "<p style = 'text-align: center;'>"+ 
      "We zullen deze taak nu eerst 3 keer oefenen.<br><br>" +
      "Druk op het pijltje naar links (&larr;) of het pijltje naar rechts (&rarr;) als je klaar bent om te oefenen.",
      choices: ["arrowleft", "arrowright"]
    }
  ]
};



var ospan_instructions_math = {
  timeline: [
    {
      type: 'instructions',
      pages: [
      //Page 1
      "<p style = 'text-align: center;'>"+ 
      "Goed gedaan!<br><br>" +
      "We gaan nu door naar de tweede taak.",
      
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "Op de tweede taak zul je simpele rekensommen zien zoals die hieronder:<br><br><br><br>" +
      "<div style = 'font-size:70px'>5 + 3 = 8</div><br><br><br>",
      
      //page 3
      "<p style = 'text-align: center;'>"+ 
      "Soms is de uitkomst van de rekensom CORRECT:<br><br><br><br>" +
      "<div style = 'font-size:70px'>5 + 3 = 8</div><br><br><br>",
      
      //page 4
      "<p style = 'text-align: center;'>"+ 
      "Soms is de uitkomst van de rekensom INCORRECT:<br><br><br><br>"
      "<div style = 'font-size:70px'>3 + 1 = 6</div><br><br><br>",
      
      //page 5
      "<p style = 'text-align: center;'>"+ 
      "Jouw taak is om te bepalen of de uitkomst van de rekensom CORRECT of INCORRECT is.<br><br>" +
      "<div style = 'float: left;'>Als de uitkomst CORRECT is,<br>druk dan op het pijltje naar LINKS (&larr;).</div>" +
      "<div style = 'float: right;'>Als de uitkomst INCORRECT is,<br>druk dan op het pijltje naar RECHTS (&rarr;).</div><br><br><br><br>",
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "verder",
      button_label_previous: "ga terug",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: 'html-keyboard-response',
      stimulus: "<p style = 'text-align: center;'>"+ 
      "We zullen deze taak nu eerst 5 keer oefenen.<br><br>" +
      "Druk op het pijltje naar links (&larr;) of het pijltje naar rechts (&rarr;) als je klaar bent om te oefenen.",
      choices: ["arrowleft", "arrowright"]
    }
  ]
};

var ospan_instructions_full = {
  timeline: [
    {
      type: "instructions",
      pages: [
      //page 1
      "<p style = 'text-align: center;'>"+ 
      "Goed gedaan!<br><br>" +
      "We gaan nu de volledige taak oefenen.",
         
      //page 2
      "<p style = 'text-align: center;'>"+ 
      "In het volledige spel zul je <strong>snel moeten wisselen</strong> tussen de twee taken.<br><br><br>" +
      "Je zult eerst een letter zien, dan een rekensom, dan een letter, dan een rekensom, enzovoort:<br><br>"
      "Letter &rarr; Rekensom &rarr; Letter &rarr; Rekensom ...",
      
      //page 3
      
      "<p style = 'text-align: center;'>"+ 
      "Nadat je alle letters en rekensommen hebt gezien,<br>selecteer je de letters die je hebt gezien <strong>in de juiste volgorde</strong>.",
      
      //page 4
      "<p style = 'text-align: center;'>"+ 
      "Het is belangrijk dat je je best doet op beide taken!<br><br>" +
      "Gebruik <strong>geen</strong> hulpmiddelen, zoals je mobiel of pen en papier.<br><br>"
      "Aan het einde van elke ronde krijg je te zien hoeveel<br>letters en rekensommen je goed had.",

      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "verder",
      button_label_previous: "ga terug",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
    type: 'html-keyboard-response',
    stimulus: "<p style = 'text-align: center;'>"+ 
      "We zullen de volledige taak nu eerst 3 keer oefenen.<br><br>" +
      "Druk op het pijltje naar links (&larr;) of het pijltje naar rechts (&rarr;) als je klaar bent om te oefenen.",
    choices: ["arrowleft", "arrowright"]
    }
  ]
};

var ospan_start = {
    type: "html-keyboard-response",
    stimulus: "<p style = 'text-align: center;'>"+ 
      "Je bent nu klaar voor de echte taak.<br><br>" +
      "Vanaf nu krijg je geen feedback meer op je prestaties.<br><br><br>" +
      "Druk op het pijltje naar links (&larr;) of het pijltje naar rechts (&rarr;) om te beginnen met het volgende blok",
    choices: ["arrowleft", "arrowright"],
    data: {variable: 'ospan_start'},
};



var ospan_transition_to_standard = {
  timeline: [
    {
      type: "instructions",
      pages: 
      [
       "<p style = 'text-align: center;'>"+ 
      "Goed gedaan!<br><br>" +
      "Je zal nu een andere versie spelen van dezelfde taak.<br><br>",
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
      '<div id="jspsych-html-keyboard-response-stimulus">' +
      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: none; border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Dit keer zullen de letters niet worden afgeschermd door zwarte vierkanten<br><br>",
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
      '<div id="jspsych-html-keyboard-response-stimulus">' +
      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "In plaats daarvan verschijnt er telkens een zwart vierkant met een rode omlijning op de positie van de volgende letter,<br>vlak voordat de letter wordt getoond."
      
       "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>Q</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: none;border: 1px dotted black; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Voor de rest blijft de taak identiek."
      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "verder",
      button_label_previous: "ga terug",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: "html-keyboard-response",
      stimulus: "Druk op het pijltje naar links (&larr;) of het pijltje naar rechts (&rarr;) als je klaar bent om aan de taak te beginnen.",
      choices: ["arrowleft", "arrowright"],
      on_finish: function(){
        block = 1;
      }   
    }
  ]
  
};


var ospan_transition_to_adapted = {
    timeline: [
    {
      type: "instructions",
      pages: 
      [
      "<p style = 'text-align: center;'>"+ 
      "Goed gedaan!<br><br>" +
      "Je zal nu een andere versie spelen van dezelfde taak.<br><br>",
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Dit keer zullen de letters worden afgeschermd door zwarte vierkanten<br><br>",
      
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; border: solid red; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "De vierkanten zullen één voor één een rode omlijning krijgen, vlak voordat de letter eronder wordt getoond.<br><br>"
      
      
      "<style>" +
      ".grid-container {" +
      "display: grid;" +
      "grid-template-columns: auto;" +
      "grid-template-rows: auto auto;" +
      "padding: 0px;" +
      "position:relative;" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      ".grid-item {" +
      "justify-content: center;" +
      "text-align: center;" +
      "}" +
      "</style>" +
  
      '<div id="jspsych-html-keyboard-response-stimulus">' +

      "<div class='grid-container' style = 'height:400px';>"+
      "<div class='grid-item'>"+
      "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>"+
      "<div style = 'margin: auto; background: white; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span>J</span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px;'>"+
      "<div style = 'margin: auto; padding: 25px 0px'><span></span></div>"+
      "</div>"+
      "</div></div><br><br><br>" +
      "Voor de rest blijft de taak identiek."

      ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "verder",
      button_label_previous: "ga terug",
      data: {variable: 'instruction', task_version: "introduction"}
    },
    
    {
      type: "html-keyboard-response",
      stimulus: "Druk op het pijltje naar links (&larr;) of het pijltje naar rechts (&rarr;) als je klaar bent om aan de taak te beginnen.",
      choices: ["arrowleft", "arrowright"],
      on_finish: function(){
        block = 1;
      }
    }
  ]
  
};




var ospan_end = {
  type: "instructions",
  pages: [
     "<p style = 'text-align: center;'>"+ 
    "Dit is het einde van de <strong>Letters en Nummers</strong> taak." +
    "Klik op 'verder' om door te gaan.",
  ],
      show_clickable_nav: true,
      allow_backward: true,
      key_forward: -1,
      key_backward: -1,
      button_label_next: "verder",
      button_label_previous: "ga terug",
      data: {variable: 'instruction', task_version: "introduction"}
};