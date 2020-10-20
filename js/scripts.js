$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let person1Input = $("input#person1").val();
    person1Input = person1Input.toUpperCase();
    $(".person1").text(person1Input);

    $("#Letter").show();

    event.preventDefault();
  });
});