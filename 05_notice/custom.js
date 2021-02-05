// JavaScript Document
$(document).ready(function(e) {
    $(".gnb>li").mouseenter(function(){
	 	$(".sub, .subBg").stop().slideDown(300);
		
	 });
	
   $(".wrap").mouseleave(function(){
	 	$(".sub, .subBg").stop().slideUp(300);  
	});
	
	//네모큐브 클릭시
	$(".cube").click(function(){
		$(".aside_menu").stop().animate({"right":"0px"});
	});
	//x_icon클릭시
	$(".x_icon").click(function(){
		$(".aside_menu").stop().animate({"right":"-500px"});	
	});
	//searching아이콘 클릭시
	
	$(".searching").click(function(){
		$(".aside_search").stop().animate({"right":"0px"});	
	});
	$(".x_icon").click(function(){
		$(".aside_search").stop().animate({"right":"-500px"});	
	});
    //페이지 내용 바꾸기 
    $("#theather").click(function(e){
        $(".cine").css("display","none");
        $(".fa").css("display","block");
        $(".ad>img").css("display","none");
    });

    $("#cine").click(function(e){
        $(".fa").css("display","none");
        $(".fa2").css("display","none");
        $(".ad>img").css("display","none");
        $(".cine").css("display","block");
    });
    $("#more").click(function(e){
        $(".fa").css("display","none");
        $(".fa2").css("display","block");
        $(".ad>img").css("display","block");
    });
        
    //스크롤 다운
	$(window).scroll(function(){
		var a = $(this).scrollTop();
		
		if(a>60){
			$(".top>img").css("display","block");
		}else{
			$(".top>img").css("display","none");	
		}
	});

    //버튼 눌렀을경우 맨 위로 돌아오는
    $(".top>img").click(function(){
		$("html,body").animate({"scrollTop":0},1000);	
	});
	
	$("#clrText").on("click",function(){
		$("#search").val('');	
	});
    
});