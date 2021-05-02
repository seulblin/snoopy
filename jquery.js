$(document).ready(function(e) {
  $(window).scroll(function(){
    //함수호출
    parallaxScroll();
    nav();
  });

  //사이드메뉴 클릭 하면 화면 이동
  $('nav ul li').click(function(e){ //클릭하면 이벤트를 발생할껀데,
    let num = $(this).index();      //일단 num변수가 nav ul li의 index를 가지고
    $('html, body').animate({       //html,body에 애니메이트를 줘서 움직이자!
      'scrollTop' : 1700 * num      //어떻게? == 스크롤을 이동시키자 1700 * num만큼
    },1000, function(){             //1초동안 그리고 
      parallaxScroll();             //패럴랙스 스크롤을 발생시키자
    });
  });//사이드메뉴 클릭 하면 화면 이동 끝!

});


  //큰 틀을 움직이자!
  function parallaxScroll(){
    let scrolled = $(window).scrollTop();
    $('#content').css('left',(0-(scrolled*0.9))+'px');
    $('#bg1').css('left',(0-(scrolled*0.8))+'px');
    $('#bg2').css('left',(0-(scrolled*0.5))+'px');
    $('#bg3').css('left',(0-(scrolled*0.25))+'px');
  }

  function nav(){
    var moveTop=0;
    var moveTop1=$('#bg3').offset().right+4500;
    var moveTop2=$('#bg2').offset().left+3000; 
    var moveTop3=$('#bg1').offset().left+1000;
    
    $('nav ul li').removeClass('active');
    
    if($(document).scrollTop()>=moveTop && $(document).scrollTop() < moveTop1 ){
      $('nav ul li:first-child').addClass('active');	
      
    }else if($(document).scrollTop()>=moveTop1 && $(document).scrollTop() < moveTop2){
      $('nav ul li:nth-child(2)').addClass('active');
      
    }else if($(document).scrollTop()>=moveTop2 && $(document).scrollTop() < moveTop3){
      $('nav ul li:nth-child(3)').addClass('active');
      
    }else if($(document).scrollTop()>=moveTop3){
      $('nav ul li:last-child').addClass('active');
      
    };
  };