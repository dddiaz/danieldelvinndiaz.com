$(function(){
    //Hide Certain Divs if screen is cmall
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (w>961){
        $("#small-screen-button-footer").hide();
    }else{
        $("#large-screen-button-footer").hide();
        if(w<414){
            //If its smaller than iphone 6 plus, then the bg donut wont fit
            
        }
    }
});
