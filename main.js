$(document).on("ready",init);
function init(){
	$(".bg").hover(
	function(){
		$(this).children('.solapa').fadeIn();
	},function(){
		$(this).children('.solapa').fadeOut();
	});
}