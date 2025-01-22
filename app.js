// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creamos listaAmigos que almacenará los nombres introducidos
let listaAmigos=[];


//Creamos la función agregarAmigo, el cual se ejecutará cada que el usuario presione Añadir
function agregarAmigo(){
    //Creamos la variable valor, que capturará el valor introducido en la caja de texto
    const valor=document.getElementById('amigo').value;

    //condicional para la verificación de datos
    if (valor!=""){
        //si el valor es diferente de nulo: agregar el valor a la lista de amigos listaAmigos
        listaAmigos.push(valor);
        //se agrega, al interfaz, la lista separada por enter
        document.getElementById('listaAmigos').innerHTML = "<p>" +listaAmigos.join("</p><p>") + "</p>";
        //Se limpia el textbox amigo
        document.getElementById('amigo').value = ''; 
    }
    else {
        //si el valor es nulo: se manda una alerta para introducir datos
        alert("Introduzca un valor valido");
    };
}

function sortearAmigo(){
    cantidadAmigos=listaAmigos.length
    if (cantidadAmigos>0){
    aleatorio=Math.floor((Math.random())*cantidadAmigos)
    console.log(aleatorio)
     document.getElementById('listaAmigos').innerHTML = "El amigo secreto sorteado es: " +listaAmigos[aleatorio]
     document.getElementById('listaAmigos').style.color="green"
     document.getElementById('listaAmigos').style.fontWeight = 'bold';
    }
    else{alert("Agregue amigos al sorteo")}

}