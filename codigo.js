

document.getElementById("BTN").addEventListener("click", function() {

let numeroUsuario = document.getElementById('num').value;

// convertir

let numUsuario1 = Number(numeroUsuario);
let numAleatorio = Math.floor(Math.round(Math.random()*10 + 1));

//let boton = document.getElementById('BTN');
//boton.addEventListener('click',ver())
    
    if(isNaN(numUsuario1) || numUsuario1< 1 || numUsuario1> 10)
        {
            document.getElementById('mensaje').innerText = "NO Es un Dato Valido"
            return;
            
        }
       
        if (numAleatorio === numUsuario1)
        {
            document.getElementById('mensaje').innerText = "😀 FELICIDADES - ADIVINASTE EL NÚMERO 😀"
            
            
        }
        
        else if(numUsuario1> numAleatorio){
            document.getElementById('mensaje').innerText = " El número digitado es mayor";
            }
            else{
                document.getElementById('mensaje').innerText = " El número digitado es menor";
            }
            
        
});

function borrar(){

    numeroUsuario = document.getElementById('num').value = "";
    document.getElementById('mensaje').innerText = "";
    
}
