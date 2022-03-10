var test_display = function(selected_letters, current_letter){
    
    console.log("current letter is:" + current_letter);
 
    var boxes = ["black", "black", "black", "black", "black", "black", "black"];
    var letter1 = selected_letters[0];
    var letter2 = selected_letters[1];
    var letter3 = selected_letters[2];
    
    var letter4 = (selected_letters.length > 3)? selected_letters[3] : "";
    var letter5 = (selected_letters.length > 4)? selected_letters[4] : "";
    var letter6 = (selected_letters.length > 5)? selected_letters[5] : "";
    var letter7 = (selected_letters.length > 6)? selected_letters[6] : "";
    
    // Determine which letteris uncovered during the letter encoding phase
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
    if(current_letter == 5) {
      boxes[5] = "white";
    }
    if(current_letter == 6) {
      boxes[6] = "white";
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
    html += "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto auto auto;'>";
    html += "<div style = 'margin: auto; border: solid black; background:" + boxes[0] + "; width: 90px; height: 90px; padding: 0px 0px;'>";
    html += "<div style = 'top: 50%;left: 50%;width: 80px; height: 80px; border: solid red;'><span>" + letter1 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background:" + boxes[1] + "; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span>" + letter2 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background:" + boxes[2] + "; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span>" + letter3 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background:" + boxes[3] + "; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span>" + letter4 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background:" + boxes[4] + "; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span>" + letter5 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto;border: solid black; background:" + boxes[5] + ";  width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span>" + letter6 + "</span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto;border: solid black; background:" + boxes[6] + ";  width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span>" + letter7 + "</span></div>";
    html += "</div>";
    html += "</div></div>";
    html += "<div class='grid-item' style = 'font-size: 70px; color: black'><br><br><br><br><br><br>1+1=2<br><br><br><br></div>";
  
    return html;
};


var load_display = function(){
    
    console.log("selected_letters = " + selected_letters);
    console.log("selection_id = " + current_letter);
    
    // Determine which letters are covered during the cognitive load phase
    
    var equation = cogloadf();
    
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
    html += "<div style = 'display: inline-grid; width: 800px; height: 90px; font-size: 70px; grid: 70px / auto auto auto auto auto auto auto;'>";
    html += "<div style = 'margin: auto; border: solid black; background: black; width: 90px; height: 90px; padding: 0px 0px;'>";
    html += "<div style = 'top: 50%;left: 50%;width: 80px; height: 80px; border: solid red;'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background: black; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background: black; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background: black; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto; border: solid black; background: black; width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto;border: solid black; background: black;  width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span></span></div>";
    html += "</div>";
    html += "<div style = 'margin: auto;border: solid black; background: black;  width: 80px; height: 80px; padding: 0px 0px;'>";
    html += "<div style = 'margin: auto; padding: 0px 0px; transform: rotate(0deg);'><span></span></div>";
    html += "</div>";
    html += "</div></div>";
    html += "<div class='grid-item' style = 'font-size: 70px;'><br><br><br><br><br><br>" + equation + "</div>";
  
    return html;
}