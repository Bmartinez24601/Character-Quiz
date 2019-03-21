$(document).ready(function(){
   $(".img").hide();
});

$("button").click(function(){
    var age = $(".Qone").val();
    var mood = $(".Qtwo").val();
    if(age <20 && mood === "hot headed") {
        $(".First").text("You are Robin!");
        $(".Second").text("aka.The Assasin");
        $("p").css("color","#0b6307");
        $(".Damian").show();
        
    } else if(age <20 && mood === "rational") {
        $(".First").text("You are Red Robin!");
        $(".Second").text("aka.The Detective");
        $("p").css("color","#992a06");
        $(".Tim").show();
        
    } else if(age >20 && mood === "hot headed") {
        $(".First").text("You are Red Hood!");
        $(".Second").text("aka.The Marksman");
        $("p").css("color","#a50606");
        $(".Jason").show();
        
    } else if(age >20 && mood === "rational") {
        $(".First").text("You are Nightwing!");
        $(".Second").text("aka.The Acrobat");
        $("p").css("color","#073175");
        $(".Grayson").show();
        
    } else {
        $(".First").text("You are Batgirl!");
        $("p").css("color","#8529ad");
        $(".Stephanie").show();
    }
});

