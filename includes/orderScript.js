var flag=0;

function getRobotId() {
    var aKeyValue = window.location.search.substring(1).split("&");
    var RobotId = aKeyValue[0].split("=")[1];
    return RobotId;
};

$(document).ready(function(){
    $.getJSON("data/list.json", function(data){
        var RobotId = getRobotId();
        $.each( data.products , function(k, v) {
            console.log(v.id);
            if ( v.id == RobotId ) {
                robotName = v.name;
                robotPrice = v.price;
                robotDes = v.des;
                robotPic = v.pic;
            }
        });
        $("#name").html(robotName);
        $("#des").html(robotDes);
        $("#price").html(robotPrice);
        $("#readyrob").css('background',robotPic);
    });

    //$("a section:first-child").click();






});

function openPopup(){
    $("a section:first-child").click();
};
