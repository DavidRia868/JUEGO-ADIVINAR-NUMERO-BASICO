

document.getElementById("BTN").addEventListener("click", function() {

let numeroUsuario = document.getElementById('num').value;

// convertir

let numUsuario1 = Number(numeroUsuario);
let numAleatorio = Math.round(Math.random()*10);

//let boton = document.getElementById('BTN');
//boton.addEventListener('click',ver())
    
    if(isNaN(numUsuario1) || numUsuario1< 1 || numUsuario1> 10)
        {
            document.getElementById('mensaje').innerText = "NO Es un número Valido"
            
        }
       
        else if (numAleatorio != numUsuario1)
        {
            if(numUsuario1> numAleatorio){
                document.getElementById('mensaje').innerText = " El número digitado es mayor";
            }
            else{
                document.getElementById('mensaje').innerText = " El número digitado es menor";
            }
            
        }
        
        else{
            document.getElementById('mensaje').innerText = "😀 FELICIDADES - ADIVINASTE EL NÚMERO 😀"
        }
});

function borrar(){

    numeroUsuario = document.getElementById('num').value = "";
    document.getElementById('mensaje').innerText = "";
    
}
