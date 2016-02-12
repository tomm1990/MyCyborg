var i=0;
var ar=['playing video game','animal-care','handy-man','dancer', 'babysitter'];

$("document").ready(function(){

	for(; i<5; i++){
	 $(".leftSide_list").append('<lable><a href="#"><section id="little_pic"></section> <p id="little_text"> '+ar[i] +' </p></a></lable>');
	}
});






$( "document" ).ready(function() {

    $("#hamburger").click(function(){
       $(".smallMobileMenu ul").toggle(200);
        //console.log("hamburger was clocked");
    });

    //Marketing button was clicked
    //timesArea sets up
    $("#Marketing").click(function(){
       $(".bubblesArea").toggle(200);
        $(".timesArea").toggle(200);
    });

    //backArrow button was clocked
    //bubblesArea sets up
    $(".backArrow").click(function(){
        $(".bubblesArea").toggle(200);
        $(".timesArea").toggle(200);
    });

    // report.html -> hover over secwrap changes h2 color
    $( "#mainReports .secwrap" ).hover(function() {
        $(this).find("h2").css("color","#f7f6f6");
    });

    // report.html-> mouse leave makes h2 original color
    $( "#mainReports .secwrap" ).mouseleave(function() {
        $(this).find("h2").css("color","#821122");
    });

    $(".carousel-control").click(function(){
        $("#myCarousel").carousel( {interval: 999999999} );
        console.log("carousel-control clicked from index");
    });

    //reports.html -> one of the weeks was clicked -> move to diagram.html
    $(".timesArea #LastWeek").click(function(){
        $(".timesArea #LastWeek").hide(500 , function(){
            location.href = 'diagram.html';
        });
    });



//$("document").ready(
//  $( "document" ).ready(function() {
//    var x = document.createElement("h2");
//    x.innerHTML = "hi";
//    document.getElementsByTagName("main")[0].appendChild(x);
// $(function(){
//    alert('hello');
    $.ajax({
        type : "POST",
        url : "includes/action.php",
        cache : true,
        success:function(html){
            $("#loader").html(html);

        }
    });

    $.ajax({
        type : "POST",
        url : "includes/diagramAction1.php",
        cache : true,
        success:function(html){
            $("tbody").html(html);
        }
    });
});
