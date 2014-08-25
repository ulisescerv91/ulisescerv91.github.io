$(document).ready(function(){
	$("#barramenu").slideUp("fast");//nav
	$(".tabla").slideUp("slow");//div nav historia
  //imagen de menu
  $("#imgmenu").click(function(){
    $("#barramenu").slideToggle("fast");
  });
//boton nav inicio
  	$("#nav1").click(function(){
		$(".pa1").slideDown("slow");
		$("#ulises").slideDown("slow");
		$(".tabla").slideUp("slow");
	});
//boton nav historia
	$("#nav2").click(function(){
		$(".pa1").slideUp("slow");
		$("#ulises").slideUp("slow");
		$(".tabla").slideDown("slow");
	});


});