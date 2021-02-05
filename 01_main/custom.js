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
	//section five 이미지 바꾸기 
	$(".love").click(function(){
		$(".bg1").css("display","none");
		$(".tit1").css("display","none");
        $(".bg3").css("display","none");
		$(".tit3").css("display","none");
		$(".bg2").css("display","block");
		$(".tit2").css("display","block");
	});
	$(".garden").click(function(){
		$(".bg2").css("display","none");
		$(".tit2").css("display","none");
        $(".bg3").css("display","none");
		$(".tit3").css("display","none");
		$(".bg1").css("display","block");
		$(".tit1").css("display","block");
	});
    $(".jaco").click(function(){
        $(".bg1").css("display","none");
		$(".tit1").css("display","none");
		$(".bg2").css("display","none");
		$(".tit2").css("display","none");
		$(".bg3").css("display","block");
		$(".tit3").css("display","block");

	});
	//section six 요금 내용 바꾸기 
	$(".adult").click(function(){
		$(".k").css("display","none");
		$(".au").css("display","block");
		$(".kid").css("background-color","transparent");
		$(this).css("background-color","#c2cfad");
	});
	$(".kid").click(function(){
		$(".au").css("display","none");
		$(".k").css("display","block");
		$(".adult").css("background-color","transparent");
		$(this).css("background-color","#c2cfad");
	});
	
		//자동슬라이드


	//left버튼 누를때
	$(".direct>.left").click(function(){
		var now = $(".slide>li").first();
		$(".slide").stop().animate({"left":"-1920px"},200,function(){
			$(this).append(now).css("left",0);
		})	
		

	});
	
	//right버튼 누를때
	$(".direct>.right").click(function(){
		var last = $(".slide>li").last();
		$(".slide").prepend(last).css("left","-1920px").stop().animate({"left":0},200)	
	});
	
	//section five 버튼에 따라 이미지 변경
	$("#coming").click(function(e){
		e.preventDefault();
		$(".img_list").css("display","none");
		$(".previous_list").css("display","none");
		$(".coming_list").css("display","block");
	});
	$("#previous").click(function(e){
		e.preventDefault();
		$(".img_list").css("display","none");
		$(".coming_list").css("display","none");
		$(".previous_list").css("display","block");
	});
	$("#ranking").click(function(e){
		e.preventDefault();
		$(".previous_list").css("display","none");
		$(".coming_list").css("display","none");
		$(".img_list").css("display","block");
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

});// JavaScript Document