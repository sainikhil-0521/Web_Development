$("h1").addClass("title");
$("button").addClass("margin-bt");
$(document).keypress(function(event){
    $("h1").text(event.key);
});