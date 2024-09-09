let numero1 = input("Ingresa un número");
let numero2 = input("Ingresa un segundo número");
let numero3 = input("Ingresa un tercer número");

console.log("El primer numero es:" + numero1);
console.log("El segundo numero es:" + numero2);
console.log("El tercer numero es:" + numero3);

let numbers = [parseFloat(numero1),parseFloat(numero2),parseFloat(numero3)]

numbers.sort(function (a, b ){
  return a-b; 
}); 

console.log("Los numeros ordenados de mayor a menor son:" + numbers);
console.log("Los numeros ordenados de menor a mayor son:" + numbers.reverse());

let repetido =[];
    for (let i = 0; i < numbers.length; i++){
        if(repetido.includes(numbers[i])){
            console.log("El numero " + numbers[i] + " se repite");
        } else{
            repetido.push(numbers[i]);
        };
    };