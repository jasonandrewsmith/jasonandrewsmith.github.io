/*
* Written by Jason Smith, G&W Electric Co.
* 7-14-16
*
* This script is used to switch videos when a thumbnail is clicked 
*/
var switchVid = function() {
	//This uses .on() becuase it allows you to write an event
	//for an object that loads in later
	$('#gallery').on("click",".sml_video", function() {
		//vidSrc is exactly what it sounds like
		//it is an attribute of a thumbnail that references the video
		var vidSource = $(this).attr('vidSrc');
		//This is the title of the thumbnail
		var vidTitle = $(this).next().html();
		//The player starts with no source, when a thumbnail is clicked it is added
		$("#main_video").html('<source src="'+vidSource+'" type="video/mp4"></source>');
    	//Removes the old video title
    	$("#vidName").remove();
    	//updates the video title with the clicked thumbnail's title
    	$(".jumbotron").append("<h4 id='vidName'>"+vidTitle+"</h4>");
    	//force the player to load the source
    	$("#main_video").load();
    	//plays once a video is selected
    	$('#main_video').get(0).play()
	});
};

$(document).ready(switchVid);
