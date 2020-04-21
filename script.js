$(document).ready(function(){

    $("#setTitle").click(function(){
        $("#title").text($("#newTitle").val());
    });

    $("#setMaxVal").click(function(){
        $("#maxVal").text("/ " + $("#newMaxVal").val());
    });

    var liveValue;
    liveValue = "0";

    $("#minus").click(function(){
        liveValue --;
        $("#valueText").text(liveValue);
    });

    $("#plus").click(function(){
        liveValue ++;
        $("#valueText").text(liveValue);
    });


    $("#setValue").click(function(){
        liveValue = $("#newValue").val()
        $("#valueText").text(liveValue);
    });

  });