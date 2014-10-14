var minimal_nav  = $('#minimal-nav');
var icon_minimal_nav = document.getElementById('icon-min-nav');
var min_nav_open = false;
minimalNav=function(){
	if     (min_nav_open) {min_nav_open=false;minimal_nav.removeClass('visible');icon_minimal_nav.className='icon-three-stripes-horiz';}
	else if(!min_nav_open){min_nav_open=true;minimal_nav.addClass('visible');icon_minimal_nav.className=' ic-arrow-up ';}
};
