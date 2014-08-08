	//esto aparecera en la la pagina donde se mande llamar	
	//genera una ventana emergente
	//alert("esta es ventana emergente");
	//alert: funcion
	//():parametros de la funcion
	//"":cadena de texto

	//VAR para declara variables de manera local
	//en caso de omitir, la variable se declara global
	/*var nombre="ulises";
	var apellido="Cervantes";
	var edad="23";
	alert(nombre+" "+apellido+"\n"+edad+"Years");*/
	
	
	var peso;
	var pesoEnMarte;
	//prompt para recibir datos del usuario
	//promtpt siempre recibe datos de tipo text
	peso=prompt("cual es tu peso en KG?? \n^.^");
	//parseINT para combertir de texto a entenro
	peso=parseInt(peso);

	pesoEnMarte=(peso/9.81)*3.711;
	alert("Este es tu peso  en marte: "+pesoEnMarte+" "+"XD");
