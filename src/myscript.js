function validate() {
  //llamar funcion para validacion
  //volver a pantalla de inicio
  const validar = valido(document.getElementById("cardnumber").value);
  if (validar === false) {
    
  } else {
    //caso contrario seguir con proceso validacion numero
    const valid = isValid(document.getElementById("cardnumber").value)
    console.log(valid);
    // si la suma da como residuo 0 significa que es divisble para 10
    if (valid % 10 === 0) {
      // Show success in div#result
      document.write('Tu tarjeta es válida ;)');
      console.log('Tu tarjeta es válida ;)');
    }
    else {
      // Show error message in div#result
      document.write('Tu tarjeta no es valida :(');
      console.log('Tu tarjeta no es valida :(');
    }
  }


}

// impide validacion en campo vacio    

function valido(creditCardNumber) {
  
  if (creditCardNumber == null || creditCardNumber.length == 0 || isNaN(creditCardNumber)) {
    alert("Por favor ingresa un numero de tarjeta");
    return false;
  }

  return true;
}

function isValid(creditCardNumber) {
  // is creditCardNumber valid?

  console.log(creditCardNumber);


  // transformar en array el numero ingresado
  let arr = creditCardNumber.split("");
  console.log(arr)
  //variables
  let reverso = reverseArray(arr);
  let indiceImpar = imparPosiciones(reverso);
  let indiceParDoble = parPosiciones(reverso);
  let sumaPosicionPar = sumaIndicePar(indiceParDoble);
  let sumaPosicionImpar = sumaIndiceImpar(indiceImpar);
  // funcion para revertir el array
  function reverseArray(arr) {
    //ver si arr es un arreglo
    if (arr instanceof Array) {
      let reverseValue = [];
      //la ultima variable debe empezar primero valid.length -1 e ir restando   
      for (let i = arr.length - 1; i >= 0; i--) {
        reverseValue.push(arr[i]);
      }
      return reverseValue;
    }
  }
  console.log(reverseArray(arr));

  //funcion numeros indice impar 
  function imparPosiciones(reverso) {
    if (reverso instanceof Array) {
      let posicionImpar = [];


      for (let i = 0; i < reverso.length; i++) {
        if (i % 2 === 0) {
          posicionImpar.push(reverso[i]);

        }
      }
      return posicionImpar;

    }
  }
  console.log(imparPosiciones(reverso));

  //funcion numeros indice par 
  function parPosiciones(reverso) {
    if (reverso instanceof Array) {
      let posicionPar = [];


      for (let i = 0; i < reverso.length; i++) {
        if (i % 2 !== 0) {
          // se multiplica *2 el array de indice par
          posicionPar.push(reverso[i] * 2);

        }
      }
      return posicionPar;

    }
  }
  console.log(parPosiciones(reverso));

  //funcion suma numeros indice par 
  //incluiye la suma de indice par de 2digitos reducido a 1digito 
  //mediante suma de sus digitos
  function sumaIndicePar(indiceParDoble) {
    let sumaNum = 0;
    for (let i = 0; i < indiceParDoble.length; i++) {
      if (indiceParDoble[i] > 9) {
        //console.log(indiceParDoble[i]);
        sumaNum = sumaNum + (Number(indiceParDoble[i].toString().charAt(0)) + Number(indiceParDoble[i].toString().charAt(1)));
        // console.log(sumaNum);
      } else {
        sumaNum = sumaNum + (Number(indiceParDoble[i].toString().charAt(0)));
        //console.log(sumaNum);
      }
    }
    return sumaNum;
  }
  console.log(sumaIndicePar(indiceParDoble));

  //funcion suma numeros indice impar
  function sumaIndiceImpar(indiceImpar) {
    let sumaNumImpar = 0;
    for (let i = 0; i < indiceImpar.length; i++) {
      if (indiceImpar[i] < 10) {
        //console.log(indiceParDoble[i]);
        sumaNumImpar = sumaNumImpar + (Number(indiceImpar[i].toString().charAt(0)));
        // console.log(sumaNum);
      }
    }
    return sumaNumImpar;
  }
  console.log(sumaIndiceImpar(indiceImpar));


  // suma pares e impares
  let sumaTotal = sumaPosicionPar + sumaPosicionImpar;

  console.log(sumaTotal);


  return sumaTotal;



}