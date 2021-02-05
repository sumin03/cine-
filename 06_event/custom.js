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
    
	
	//자동슬라이드
 	function slideImg(){
		var now = $(".slide>li").first();
		
		$(".slide").animate({"left":"-1920px"},1000,function(){
			$(this).append(now).css("left",0);
		})	
	}
	
	setInterval(slideImg,5000);

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
		$(".slide").stop().animate({"left":"-1920px"},200,function(){
			$(this).prepend(last).css("left",0);	
		})	
	});
	
	//클릭했을 때 해당 데이터만 남기 
	
	var selectedClass ="";
	$(".btn").click(function(){
		selectedClass = $(this).attr("data-rel");
		$(".contents").fadeTo(100,0.1);	
		$(".contents>li").not("."+selectedClass).fadeOut().removeClass("scale");
		
		setTimeout(function(){
			$("."+selectedClass).fadeIn().addClass("scale");//selectedClass변수 값으로 클래스를 선택 fadeIn으로 화면에 표시 scale-content클래스를 추가하여 scale을 1로 변경
			$(".contents").fadeTo(300,1);
			//#portfolio요소의 투명도를 0.3초동안 1로 변경
		},300);//0.3초 후에 함수 실행
	});
});