/*
* Written by Jason Smith, G&W Electric Co.
* 7-14-16
*
* This script is used to scroll the page to a specific spot when a
* certain page element is clicked
*/
var scroller = function(){
	//When a playlist is clicked the page is moved to 
	//the very top of the page
	$(".playlist").not('.back').click(function() {
	    $('html, body').animate({
	        scrollTop: $("#gallery").offset().top -45
	    }, 750);
	});
	
	//When a thumbnail is clicked the page scrolls
	//to the video player. The event handler is different
	//because the videos are loaded dynamically
	$('#gallery').on("click",".sml_video", function() {
		$('html, body').animate({
	        scrollTop: $("body").offset().top
	    }, 750);
	});
	
	//When a back button is clicked the page is moved to 
	//the categories section
	$(".back").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#categories").offset().top -45
	    }, 750);
	});

};

$(document).ready(scroller);