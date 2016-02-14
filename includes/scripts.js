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

    //Parse the JSON file and puts elemnts inside .leftSide_list
    $.getJSON("data/list.json" , function(data){
        $.each(data.products , function() {
            $('.leftSide_list').append(
                "<lable><a href='order.html?robotId="+this.id+"'><section id='little_pic'></section><p id='little_text'>"+ this.name +"</p></a></lable>");
        });
    });


    //Placing the elements in index.html
    $.ajax({
        type : "POST",
        url : "includes/action.php",
        cache : true,
        success:function(html){
            $("#loader").html(html);
            $(".secw").click(function(){
                window.location.replace($(this).data('url'));
            });
        }
    });

    //Placing the elements in diagram.html
    $.ajax({
        type : "POST",
        url : "includes/diagramAction1.php",
        cache : true,
        success:function(html){
            $("tbody").html(html);
        }
    });

    //Placing the elements in lifeStyle.html
    $.ajax({
        type : "POST",
        url : "includes/lifeStyleAction1.php",
        cache : true,
        success:function(html){
            $("#lifeStyleDiv").html(html);
        }
    });

    //Placing the elements in others.html
    $.ajax({
        type : "POST",
        url : "includes/othersAction1.php",
        cache : true,
        success:function(html){
            $("#otherDiv").html(html);
        }
    });
});
