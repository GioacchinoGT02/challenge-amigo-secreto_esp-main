# Sorteador de Amigo Secreto

Este proyecto consiste en una aplicación web sencilla que permite gestionar una lista de nombres para un sorteo de "Amigo Secreto". Se busca fortalecer habilidades en lógica de programación mediante el manejo de listas, interacción con elementos del DOM y funciones de JavaScript.

## Funcionalidades

1. **Agregar Amigo**  
   Permite al usuario agregar nombres a una lista de amigos.  
   - Si se introduce un valor no vacío, este se agrega a la lista y se muestra en pantalla.
   - Si el campo de entrada está vacío, se muestra un mensaje de alerta solicitando un nombre válido.

2. **Sortear Amigo**  
   Realiza el sorteo aleatorio de un nombre entre los amigos ingresados.  
   - Si la lista tiene al menos un amigo, muestra en pantalla el nombre sorteado.
   - Si la lista está vacía, alerta al usuario que debe agregar nombres antes de realizar el sorteo.

## Cómo Usarlo

1. Escribe el nombre de un amigo en la caja de texto.
2. Haz clic en el botón **"Añadir"** para agregar el nombre a la lista.
3. Una vez añadidos todos los nombres, presiona el botón **"Sortear amigo"** para elegir un nombre aleatorio.
4. El nombre del amigo sorteado aparecerá en la pantalla.

## Estructura del Código

- **`listaAmigos`**: Array que almacena los nombres introducidos por el usuario.
- **`agregarAmigo`**: Función que gestiona la adición de nombres al array `listaAmigos` y actualiza la interfaz.
- **`sortearAmigo`**: Función que realiza el sorteo aleatorio entre los nombres de la lista y muestra el resultado.

## Validaciones

1. En la función `agregarAmigo`:
   - Verifica que el valor introducido no sea nulo o vacío.
   - Limpia la caja de texto tras agregar el nombre.
2. En la función `sortearAmigo`:
   - Verifica que la lista contenga al menos un nombre antes de realizar el sorteo.
