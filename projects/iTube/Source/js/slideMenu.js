/*
* Written by Jason Smith, G&W Electric Co.
* 7-14-16
*
* This script is used to:
* 1) Animate the slide menu 
* 2) Make the entirity of the home button
* 	 and the list elements of .menu clickable
* 3) Scale the index pages background picture
* 4) Make sure the slide menu isn't clipped on smaller screens
*/
var main = function() {
//Here is where the slide menu gets animated-------------------------------------------------
    var hidden=true;
    $('#icon-menu').click(function() {
    	if(hidden){
            $('.menu').animate({
                left: "0px"
            }, 200);
            hidden=false;
        }else{
            $('.menu').animate({
                left: "-250px"
            }, 200);
            hidden=true;
        }
    });
    
//Here is where the home button and the list elements are made clickable---------------------
    $('#home').click(function() {
    	window.location.href = "index.html";
    });
	$('.menu li').click(function() {
		window.location.href = $(this).children("a").attr("href");
    });

//Here is where the background picture is scaled and the menu is protected from smaller screens
	//The next two blocks of code are the same
	//They just happen on screen load and resize
	$(document).ready(function() {
		//Makes the menu as big as the height of the screen 
		$(".menu").css("height", $(window).height()-45);
		
		var winHeight = $(window).height()+5
		//If the window's width to height ratio is > than the
		//background image's width to height ratio...
		if(window.innerHeight/window.innerWidth > 0.56595){
			//Then zoom in on the picture
			$("html,#welcomePic").css("background-size","auto "+winHeight+"px");
		}else{
			//Otherwise the picture should cover everything
			$("html,#welcomePic").css("background-size","cover");
		}
	});
	$(window).resize(function() {
		$(".menu").css("height", $(window).height()-45);
		
		var winHeight = $(window).height()+5
		if(window.innerHeight/window.innerWidth > 0.56595){
			$("html,#welcomePic").css("background-size","auto "+winHeight+"px");	
		}else{
			$("html,#welcomePic").css("background-size","cover");	
		}
	});
};

$(document).ready(main);

