/*
* Written by Jason Smith, G&W Electric Co.
* 7-14-16
*
* This script is used to load videos after a category button is pressed
* and to show the subcategories of a category
*/
var loadGallery = function(){
	var subCategory;
	var subGallery;
	var galleryFolder = $("body").attr("id");
//---------------------------------This first part loads the relevant videos-----------------------------	
	//loads any videos that are not in a category 
	$('#gallery').load("playlists/"+galleryFolder+"/rootVideos.html");
	
	$('.playlist').not('.back').click(function() {
		//I use id attributes in the body and the category buttons to 
		//specify the file path to the html doc with the video gallery
		galleryFolder = $("body").attr("id");
		subGallery = $(this).attr("id");
		$('#gallery').load("playlists/"+galleryFolder+"/"+subGallery+".html");

//-------------------------This second part displays the subcategories of category-----------------------	
		//Make sure to reset all visibleRow's to hiddenRow's
		$("."+subCategory).removeClass("visibleRow").addClass("hiddenRow");
		//The sub category will be the clicked playlist's id
		subCategory = this.id;
		$('.row').not('.hiddenRow').hide();//Hide all the categories
		//if a class with same name as the category id exists...
		if ($("."+subCategory).length){ 
				//Then make it visible
				$("."+subCategory).removeClass("hiddenRow").addClass("visibleRow");
		}else{
			//otherwise just show this default row
			$(".default").removeClass("hiddenRow").addClass("visibleRow");
		}
		//For changing the title
		$('#categories h4').text($(this).children('h5').text());
	});
		
	$(".back").click(function() {	
		//hides all the secondary rows
		$('.extra').removeClass("visibleRow").addClass("hiddenRow");//.extra is all the subcategories
		//show your rows again
		$('.row').not('.hiddenRow').not('.visibleRow').show();
		//title is reset
		$('#categories h4').text("Categories:");
		//clear the gallery
		$('#gallery').load("playlists/"+galleryFolder+"/rootVideos.html");
	});
};

$(document).ready(loadGallery);
        
    
