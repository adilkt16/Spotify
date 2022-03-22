



$("section.closer a.closing").on("click",function(){
    $("section.closer").css({
        display:"none",
    })
})

$("#headersmall ul li.sec a").on("click",function(){
    $("#mobile-menu ul.bars li a div.oneclose").css({
        transform:"rotate(45deg)",
        
    });
    $("#mobile-menu ul.bars li a div.oneclose").css({
        transform:"rotate(45deg)",
        
    });
    $("#mobile-menu ul.bars li a div.twoclose").css({
        transform:"rotate(135deg)",
        
    });
    $("#mobile-menu ul.bars li a div.threeclose").hide();
        // $("#mobile-menu").classList.toggle("active")
    document.querySelector("#mobile-menu").classList.toggle("active");
});


$("#mobile-menu ul.bars li a").on("click",function(){
    $("#headersmall ul li.sec a div.allthreebar div.one").css({
        transform:"rotate(0deg)",
        
    });
    $("#mobile-menu ul.bars li a div.oneclose").css({
        transform:"rotate(45deg)",
        
    });
    $("#mobile-menu ul.bars li a div.twoclose").css({
        transform:"rotate(135deg)",
        
    });
    $("#mobile-menu ul.bars li a div.threeclose").hide();
    // $("#mobile-menu").classList.toggle("active")
    document.querySelector("span.close").classList.toggle("active");
    document.querySelector("#mobile-menu").classList.toggle("active");
});