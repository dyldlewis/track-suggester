$(document).ready(function() {
  $("#info").submit(function(event){
    event.preventDefault();
    var interest = $("input:radio[name=interests]:checked").val();
    var money = $("input:radio[name=money]:checked").val();
    var business = $("input:radio[name=business]:checked").val();
    var frequency = $("input:radio[name=frequency]:checked").val();
    var workethic = $("input:radio[name=workethic]:checked").val();
                      // Back end logic //
  if (money === "yes") {
    $("#recommend").text("Programming is hard, and if you're doing it for the money we recommend you don't take any courses at all!")
  } else if (workethic === "no") {
    $("#recommend").text("You should not enroll in any of our courses if you are not ready to work hard!")
  } else if (frequency === "no") {
    $("#recommend").text("Since you don't want pursue this full time, we recommend you take our part-time intro class to see if it's something you want to dedicate your time to!")
  } else if (interest === "software") {
    $("#recommend").text("Based on your answers, we recommend you take the C#/.NET course!")
  } else if (interest === "webDesign") {
    $("#recommend").text("Based on your answers, we recommend you take the CSS/Design course!")
  } else if (interest === "webDev" && business === "myself") {
    $("#recommend").text("Based on your answers, we recommend you take the Ruby/Rails course!")
  } else if (interest === "webDev") {
    $("#recommend").text("Based on your answers, we recommend you take the PHP/React course!")
  } else if (interest === "mobileDev") {
    $("#recommend").text("Based on your answers, we recommend you take the Java/Android course!")
  }
  $(".results").show();
  });
});
