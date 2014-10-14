var max_height = window.innerHeight;
$('.max-height').height(max_height);

var img_header = $('#image-header');
var img_scroll = $('#icon-scroll');
var sup_nav    = $('#superior-nav');
var min_nav    = $('#minimal-nav');
var scr_top_img_header = img_header.scrollTop();
var scr_top_img_scroll = img_scroll.offset().top;

// Pages

var pg_about   = $('#pg-about');
var pg_about_offset = pg_about.offset().top;

_scrollToId=function(_id){$('html,body').animate({scrollTop:$('#'+_id).offset().top},600);};
$(window).scroll(function(){
	var $winYOffset = $(this).scrollTop();
	var _pos_img    = $winYOffset*0.1;
	img_header.css({top:_pos_img+'%',opacity:1-$winYOffset*0.001,transform:'scale('+(1+_pos_img*0.003)+')'});
	if($winYOffset>= scr_top_img_scroll){
		img_scroll.addClass('fixed');
		sup_nav.addClass('visible');
	}else{
		img_scroll.removeClass('fixed');
		sup_nav.removeClass('visible');
		min_nav.removeClass('visible');
	}
	if($winYOffset>=pg_about_offset && $winYOffset<=pg_about_offset+pg_about.height()){
	}
	
});
$(window).resize(function(){max_height=window.innerHeight;$('.max-height').height(max_height);$('#ej').html(window.innerWidth+'px');});

var bg_header = $('#colorHeader');
var colors = ['rgba(0,0,0,0.8)','rgba(0,95,201,0.8)','rgba(57,188,87,0.8)','rgba(11,141,139,0.8)'];
changeBgHeaderColor = function() {
	var numColor = Math.floor(Math.random()*colors.length);
	bg_header.css({'background':colors[numColor]});
};

setInterval(changeBgHeaderColor,5000);

