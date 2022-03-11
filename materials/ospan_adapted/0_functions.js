var cogloadf = function(){  // generates math questions
  var possibleOperations = [" + ", " - "];
  operation = jsPsych.randomization.sampleWithReplacement(possibleOperations, 1)[0];
  if (operation==" + "){
    num1 = Math.floor(jStat.uniform.sample(1, 11));
    num2 =  Math.floor(jStat.uniform.sample(1, 11));
    ans = num1 + num2;
  } else if (operation==" - "){
    num1 = Math.floor(jStat.uniform.sample(1, 11));
    num2 = Math.floor(jStat.uniform.sample(1, num1));
    ans = num1 - num2;
  }
  
  var correct = jsPsych.randomization.sampleWithReplacement([true, false], 1)[0];
  
  if (!correct){   // generates incorrect answers
    ansDiff = jsPsych.randomization.sampleWithReplacement([1,2],1)[0];
    coinFlip = jsPsych.randomization.sampleWithReplacement([true, false],1)[0];
    if (coinFlip){
      ans += ansDiff;
    } else {
      ans -= ansDiff;
    }
    if (ans<0){
      ans += 2*ansDiff; //ensuring no negative incorrect answers
    }
  }
  
  var equation = num1+operation+num2+' = '+ans+'<br><br><br><br>';
  
  return equation;
};



var test_display = function(selected_letters, current_letter, part){
    
    var boxes = ["black", "black", "black", "black", "black"];
    var letter1 = selected_letters[0];
    var letter2 = selected_letters[1];
    var letter3 = selected_letters[2];
    var letter4 = selected_letters[3];
    var letter5 = selected_letters[4];
    
    var equation = (part === "cog_load")? cogloadf() : "";
    
    // Determine which letter is reveiled during the letter encoding phase
    if(current_letter === 0) {
      boxes[0] = "white";
    }
    if(current_letter == 1) {
      boxes[1] = "white";
    }
    if(current_letter == 2) {
      boxes[2] = "white";
    }
    if(current_letter == 3) {
      boxes[3] = "white";
    }
    if(current_letter == 4) {
      boxes[4] = "white";
    }
    
    html = "<style>";
    html += ".grid-container {";
    html += "display: grid;";
    html += "grid-template-columns: auto;";
    html += "grid-template-rows: auto auto;";
    html += "padding: 0px;";
    html += "position:relative;";
    html += "justify-content: center;";
    html += "text-align: center;";
    html += "}";
    html += ".grid-item {";
   // html += "padding: 0px;";
    html += "justify-content: center;";
    html += "text-align: center;";
    html += "}";
    html += "</style>";
  
    html += "<div class='grid-container' style = 'height:400px';>";
    html += "<div class='grid-item'>";
    html += "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>";
    html += "<div style = 'margin: auto; background:" + boxes[0] + "; width: 90px; height: 90px;'>";
    html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter1 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[1] + "; width: 90px; height: 90px;'>";
    html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter2 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[2] + "; width: 90px; height: 90px;'>";
    html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter3 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[3] + "; width: 90px; height: 90px;'>";
    html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter4 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[4] + "; width: 90px; height: 90px;'>";
    html += "<div style = 'margin: auto; padding: 25px 0px'><span>" + letter5 + "</span></div>";
    html += "</div>";
    html += "</div></div>";
    html += "<div class='grid-item' style = 'font-size: 70px; color: black'><br><br><br><br><br><br>" + equation + "<br><br><br><br></div>";
  
    return html;
};



var attention_cue = function(next_letter){
 
    var boxes = ["black", "black", "black", "black", "black"];
    
    // Determine which letter is reveiled during the letter encoding phase
    if(next_letter === 0) {
      boxes[0] = "red";
    }
    if(next_letter == 1) {
      boxes[1] = "red";
    }
    if(next_letter == 2) {
      boxes[2] = "red";
    }
    if(next_letter == 3) {
      boxes[3] = "red";
    }
    if(next_letter == 4) {
      boxes[4] = "red";
    }
    
    html = "<style>";
    html += ".grid-container {";
    html += "display: grid;";
    html += "grid-template-columns: auto;";
    html += "grid-template-rows: auto auto auto auto auto auto;";
    html += "padding: 0px;";
    html += "}";
    html += ".grid-item {";
    html += "padding: 0px;";
    html += "justify-content: center;";
    html += "text-align: center;";
    html += "}";
    html += "</style>";
  
    html += "<div class='grid-container' style = 'height:400px';>";
    html += "<div class='grid-item'>";
    html += "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto;'>";
    html += "<div style = 'margin: auto; background:" + boxes[0] + "; width: 90px; height: 90px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto;'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[1] + "; width: 90px; height: 90px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto;'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[2] + "; width: 90px; height: 90px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto;'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[3] + "; width: 90px; height: 90px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto;'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; background:" + boxes[4] + "; width: 90px; height: 90px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto;'><span></span></div>";
    html += "</div>";
    html += "</div></div>";
    html += "<div class='grid-item' style = 'font-size: 70px; color: black'><br><br><br><br><br><br><br><br><br><br></div>";
  
    return html;
};