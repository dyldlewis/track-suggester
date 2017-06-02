$(document).ready(function() {
  $("#info").submit(function(event){
    event.preventDefault();
    var interest = $("input:radio[name=interests]:checked").val();
    var money = $("input:radio[name=money]:checked").val();
    var business = $("input:radio[name=business]:checked").val();
  if (money === "yes") {
    alert("Programming is hard and requires passion, if you're doing it for money we reccomend you don't take any courses!")
  } else if (interest === "software") {
    alert("Based on your answers, we reccomend you take the C#/.NET course")
  } else if (interest === "webDesign") {
    alert("Based on your answers, we reccomend you take the CSS/Design course")
  } else if (interest === "webDev" && business === "myself") {
    alert("Based on your answers, we reccomend you take the Ruby/Rails course")
  } else if (interest === "webDev") {
    alert("Based on your answers, we reccomend you take the PHP/React course")
  } else if (interest === "mobileDev") {
    alert("Based on your answers, we reccomend you take the Java/Android course")
  }

  });
});
