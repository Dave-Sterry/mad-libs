$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const cap = person1Input.charAt(0).toUpperCase();
    const capName = person1Input.str.slice(1).concat(cap);
    // person1Input = capName;
    $(".person1").text(capName);

    $("#Letter").show();

    event.preventDefault();
  });
});