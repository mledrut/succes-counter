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
        if (liveValue > 0){
            liveValue --;
        $("#valueText").text(liveValue);
        }
        
    });

    $("#plus").click(function(){
        liveValue ++;
        $("#valueText").text(liveValue);
    });


    $("#setValue").click(function(){
        liveValue = $("#newValue").val()
        $("#valueText").text(liveValue);
    });

// COLOR
    $("#colorList").hide();

    $("#changeColorBut").click(function(){
        $("#colorList").toggle();
    });

    $("#colorRed").click(function(){
        $("#show").css("background-color", "red");
      });

    $("#colorGreen").click(function(){
        $("#show").css("background-color", "green");
    });

    $("#colorBlue").click(function(){
        $("#show").css("background-color", "blue");
    });

    $("#colorBlack").click(function(){
        $("#show").css("background-color", "black");
    });

    $("#colorWhite").click(function(){
        $("#show").css("background-color", "white");
    });



  });