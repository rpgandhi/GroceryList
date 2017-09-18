$(document).ready(function() {
  $("#groceryForm").submit(function(event) {

    var arrayInputs = ["item1", "item2", "item3", "item4", "item5"];
    var totalArray = [];

    arrayInputs.forEach(function(item) {
      totalArray.push($("input#" + item).val().toUpperCase());
    });

    totalArray.sort();

    totalArray.forEach(function(item) {
      $("#export").append("<li> " + item + "</li>");
   });


  $("#groceryForm").hide();
  event.preventDefault()

 });
});
