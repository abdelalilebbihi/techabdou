document.getElementById("topaz").style.display="block"
$(document)['ready'](function()
	{
	$('#dontedit')['html']('<a href="http://www.abdoutech.com" rel="dofollow" target="_blank" style="visibility:visible!important;
	opacity:1!important;
	position:relative!important">تصميم:عبدو تكنولوجي</a>'),setInterval(function()
		{
		$('#dontedit:visible')['length']||(window['location']['href']='http://www.abdoutech.com')
	}
	,3e3)
}
);
