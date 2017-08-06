var hidden=true;
$('#icon-menu').click(function() {
    if(hidden){
        $('.menu').animate({
            left: "0px"
        }, 200);
        hidden=false;
        $('html').css("overflow-y", "hidden");
    }else{
        $('.menu').animate({
            left: "-250px"
        }, 200);
        hidden=true;
        $('html').css("overflow-y", "");
    }
});
