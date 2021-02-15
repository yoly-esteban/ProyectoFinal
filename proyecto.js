//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedad_recargo = 0.35 // 35%

var salario_recargo = 0.05 // 5%

//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0


do {
  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
  var monto_salario = undefined //Variable utilizada para el monto del salario del asegurado

  if (edad >= 18) {
    recargo = 0
    recargo_total = 0

    var casado = prompt("¿Está casado actualmente? si/no")
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
    if ("SI" == casado.toUpperCase()) {
      edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números")
    }
    //convirtiendo las edades ingresadas a números 
    var edad_numero = parseInt(edad)
    var edad_conyuge_numero = 0
    //convirtiendo la edad del cónyuge si se esta casado/a
    if ("SI" == casado.toUpperCase()) {
      edad_conyuge_numero = parseInt(edad_conyuge)
    }

    var hijos = prompt("¿Tiene hijos o hijas? si/no")
    //Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos
    if ("SI" == hijos.toUpperCase()) {
      cantidad_hijos = prompt("Ingrese la cantidad de hijos que posee, Ingrese solamente números ")
    }
    /**
     * 1. convierta la cantidad de hijos a numero
     */
    var cantidad_hijos_numero = 0
    if ("SI" == hijos.toUpperCase()) {
      cantidad_hijos_numero = parseInt(cantidad_hijos)
    }

    //PUNTOS EXTRA: Ingreso de informacion de propiedad y salario
    var propiedad = prompt("¿Posee alguna propiedad? si/no")
    //Comprobamos la cantidad de propiedades solamente si los tiene
    var cantidad_propiedad
    if ("SI" == propiedad.toUpperCase()) {
      cantidad_propiedad = parseInt(prompt("Ingrese la cantidad de propiedades que posee, Ingrese solamente números "))
    }

    var salario = prompt("¿Posee salario? si/no")
    //Comprobamos el salario solamente si lo tiene
    if ("SI" == salario.toUpperCase()) {
      do {
        if (monto_salario<=0) {
          monto_salario = Number(prompt("Ingrese su salario, Ingrese solamente numeros y el monto debe ser mayor a 0"))
        } else if (monto_salario === undefined ) {
          monto_salario = Number(prompt("Ingrese su salario, Ingrese solamente números"))
        }
      } while (monto_salario <= 0);
    }


    //Aquí debe calcular el recargo total basado en las respuestas ingresadas

    //Aquí es donde debe de calcular los recargos y el valor final
    //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
    if (edad_numero >= 18 && edad_numero < 25) {
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_18
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    } else if (edad_numero >= 25 && edad_numero < 50) {
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_25
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    } else if (edad_numero >= 50) {
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_50
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }

    //aqui puede colocar un else if() con el siguiente rango

    /** 
     * 2. Recargo por la edad del conyuge
     */
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * casado_18
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * casado_25
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    } else if (edad_conyuge_numero >= 50) {
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * casado_50
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }

    /**
     * 3. Recargo por la cantidad de hijos 
     */
    if ("SI" == hijos.toUpperCase()) {
      //Calculamos el recargo en base a la cantidad
      recargo = precio_base * hijos_recargo * cantidad_hijos_numero
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }

    //PUNTOS EXTRA: Calculo de recargos extra por propiedad
    if ("SI" == propiedad.toUpperCase()) {
      //Calculamos el recargo en base a la cantidad
      recargo = precio_base * propiedad_recargo * cantidad_propiedad
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }

    //PUNTOS EXTRA: Calculo de recargos extra por salario
    if ("SI" == salario.toUpperCase()) {
      //Calculamos el recargo en base a la cantidad
      recargo = monto_salario * salario_recargo
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }


    precio_final = precio_base + recargo_total
    //Resultado
    alert("Para el asegurado " + nombre)
    alert("El recargo total sera de: " + recargo_total)
    alert("El precio sera de: " + precio_final)
  }
  else {
    alert("Necesita ser mayor de edad para poder realizar una cotizacion")
  }

  //Mensajes de alerta para ingresar si desea realizar otra cotizacion
  //noprotect
  var cotizacion_pregunta = prompt("Desea realizar otra cotización: ", "Si/Salir")
} while ("SALIR" !== cotizacion_pregunta.toUpperCase());

