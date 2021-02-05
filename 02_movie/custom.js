
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
	
	$(window).scroll(function(){
		var a = $(this).scrollTop();
		
		if(a>200){
			$(".top>img").css("display","block");
		}else{
			$(".top>img").css("display","none");	
		}
	});
	//버튼 눌렀을경우 맨 위로 돌아오는 
	$(".top>img").click(function(){
		$("html,body").animate({"scrollTop":0},1000);	
	});

});