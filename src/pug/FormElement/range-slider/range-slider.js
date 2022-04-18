import $ from "jquery";

$(".polzunok-3").slider({
    min: 0,
    max: 1000,
    value: 600,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {    
        var opt = $(".polzunok-3").data().uiSlider.options;
        if ((ui.value - opt.min) > (opt.max - opt.min)/2) {
            $(".polzunok-3 b").addClass("polzunok-text-left-3").removeClass("polzunok-text-right-3");    
            } else {
            $(".polzunok-3 b").addClass("polzunok-text-right-3").removeClass("polzunok-text-left-3");    
        }
        $(".polzunok-3 span").text(ui.value); 
    }
});
$(".polzunok-3 b").addClass("polzunok-text-left-3");    
$(".polzunok-3").before("<div class='polzunok-bg-3'></div>");
$(".polzunok-3 span").text($(".polzunok-3").slider("value"));  
