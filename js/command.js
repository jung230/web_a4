$(function(){

    // 메뉴

    $(".main li , .sub_bg").mouseover(function(){
        $(".sub , .sub_bg").stop().slideDown();
    })//mouseover

    $(".main li , .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//mouseout


    // 이미지 영역
    $(".fade li").eq(0).siblings().hide();

    var n = 0; // 0 1 2

    setInterval(function(){

        // $(".fade li").eq(n).fadeOut();
        

        // n == 2는 총 3장 중 마지막 번호
        if(n == 2){
            n=0;
            // n=0;은 처음 번호
        }else{
            n++;
        }//

        // $(".fade li").eq(n).fadeIn();

        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
        
        console.log(n);

    } , 2500);


    //팝업

    $(".p_up").click(function(){
        $(".popup").show();
    })//

    $(".close").click(function(){
        $(".popup").hide();
    })//








}) //jquery end