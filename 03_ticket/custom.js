// JavaScript Document
	$(".gnb>li").mouseenter(function(){
	 	$(".sub, .subBg").stop().slideDown(300);
	 });
	
   $("header>.wrap").mouseleave(function(){
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
	
    //영화포스터
	$(".box1 tr button").click(function(){
		var i = $(this).parents("tr").index();
		console.log(i);
		
		$(".box2 > .img > div").removeClass("on").eq(i).addClass("on");
	})
	
	
	$("#calendar-body td").click(function(){
		$("#calendar-body td").removeClass("bg-info")
		$(this).addClass("bg-info")
		$(".box4 > p").css("display","none")
		$(".shown").css("display","block")
	});
	
	$(".shown>button").click(function(){
		$(this).css("background-color","#17a2b8")	
	});
	


