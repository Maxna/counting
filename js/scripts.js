$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    // var output = $("#output").val();
    // debugger;

    for(var i=0; i <= 30; i+=5) {
      var total = 0;
      total = i;
      // $("input#output").text(function(total) {
        $('#total1').append("<li>" + total + "</li>");
      };
    });
});
