$(document).ready(function(){
	$("#barramenu").slideUp("fast");//nav
	$(".tabla").slideUp("fast");//div nav historia
		$(".oneyear").slideUp("fast");
		$(".twoyear").slideUp("fast");
		$(".threeyear").slideUp("fast");
		$(".fouryear").slideUp("fast");
		$(".fiveyear").slideUp("fast");
	$(".galeria").slideUp("fast");
	$(".carta").slideUp("fast");
//ANOS TABLAS	
  //imagen de menu
  $(".menu-img").click(function(){
    $("#barramenu").slideToggle("slow");
  });
//accion que  al momento de seleccionar una opcion del menu
//este la realiza y se vulve a ocultar
 $(".opcmenu").click(function(){
    $("#barramenu").slideUp("fast");
  });
//boton nav inicio
  	$("#nav1").click(function(){
		$(".pa1").slideDown("slow");//fechas de 25
		$(".galeria").slideUp("slow");//fotos album
		$(".ulises").slideDown("slow");//slider
		$(".tabla").slideUp("slow");//stickers
		$(".carta").slideUp("fast");
		
	});
//boton nav historia
	$("#nav2").click(function(){
		$(".pa1").slideUp("slow");//fechas de 25
		$(".galeria").slideUp("slow");//fotos album
		$(".ulises").slideUp("slow");//slider
		$(".tabla").slideDown("slow");//stickers
		$(".carta").slideUp("fast");
	});		
//galeria
	$("#nav3").click(function(){
		$(".pa1").slideUp("slow");//fechas de 25
		$(".galeria").slideDown("slow");//fotos album
		$(".ulises").slideUp("slow");//slider
		$(".tabla").slideUp("slow");//stickers
		$(".carta").slideUp("fast");
	});
	//boton nav CARTA
  	$("#nav4").click(function(){
		$(".pa1").slideUp("slow");//fechas de 25
		$(".galeria").slideUp("slow");//fotos album
		$(".ulises").slideUp("slow");//slider
		$(".tabla").slideUp("slow");//stickers
		$(".carta").slideDown("slow");
	});
		$("#st1").click(function(){
			$(".oneyear").slideDown("slow");
			$(".twoyear").slideUp("slow");
			$(".threeyear").slideUp("slow");
			$(".fouryear").slideUp("slow");
			$(".fiveyear").slideUp("slow");		
		});
		$("#st2").click(function(){
			$(".oneyear").slideUp("slow");
			$(".twoyear").slideDown("slow");
			$(".threeyear").slideUp("slow");
			$(".fouryear").slideUp("slow");
			$(".fiveyear").slideUp("slow");			
		});
		$("#st3").click(function(){
			$(".oneyear").slideUp("slow");
			$(".twoyear").slideUp("slow");
			$(".threeyear").slideDown("slow");
			$(".fouryear").slideUp("slow");
			$(".fiveyear").slideUp("slow");	
		});
		$("#st4").click(function(){
			$(".oneyear").slideUp("slow");
			$(".twoyear").slideUp("slow");
			$(".threeyear").slideUp("slow");
			$(".fouryear").slideDown("slow");
			$(".fiveyear").slideUp("slow");	
		});
		$("#st5").click(function(){
			$(".oneyear").slideUp("slow");
			$(".twoyear").slideUp("slow");
			$(".threeyear").slideUp("slow");
			$(".fouryear").slideUp("slow");
			$(".fiveyear").slideDown("slow");			
		});

		//para cambiar fondo galeria
		$('#slider1').click(function(){
   		$(this).css('background-color',"#ccc");
	});
});

