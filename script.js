
    const url2 = "https://x-colors.herokuapp.com/api/random";
    fetch(url2)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
        results += "<h1>Creative Project 2</h1><br>";
        results += "<div class='total'>";
        results += '<div class="three">';
        results += "<h3>Your color in CSS is:</h3>";
        results += "<h1>" + json.hex + "</h1>";
        results += "</div>";
        results += '<div class="three">';
        results += "<h3>Your color in RGB is:</h3>";
        results += "<h1>" + json.rgb + "</h1>";
        results += "</div>";
        results += '<div class="three">';
        results += "<h3>Your color in HSL is:</h3>";
        results += "<h1>" + json.hsl + "</h1>";
        results += "</div>";
        results += "</div>";
        results += "<br><h1>Enjoy your color!</h1>";
        results += "<h2>(or refresh to get a new color :)</h2>";
        results += "<br><br><footer>https://github.com/braveryapark/CreativeProject2.git</footer>";
        console.log(results);
        document.getElementById("colorResults").innerHTML = results;
        document.getElementById("colorResults").style.color = json.rgb;
        document.getElementById("colorResults").style.fontFamily = chalkduster;
    });

    
  