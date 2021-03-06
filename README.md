# Reactividad con JavaScript

## 🔴 ¿Que es la Reactividad?

La Reactividad la vamos a ver principalmente en los datos de nuestra aplicación.

### 🔵 Reactividad de los datos

Significa cuando una Interfaz llámese sitio o aplicación se modifica, a partir de los cambios que tengan los datos de la lógica de la programación de dicho sitio o aplicación.

Esto quiere decir que cada vez que se actualicen los datos, la interfaz de usuario puede cambiar o nos va a mostrar/cargar nuevo contenido.

## 🔴 Estado

Forma de decirle a los datos de la aplicación.

Se le llama estado porque hablamos de un proceso reactivo. Entonces el estado tiene una duración de tiempo determinado, por eso se dice que el estado son los datos en un momento en particular del flujo del sitio o aplicación

## 🔴 Interfaces de usuario UI basada en el estado

Las interfaces basadas en el estado son aquellas que en base a los cambios que sufren los datos de la aplicación en cierto momento, va a hacer que esta se rendirse y a va a mostrar nuevos elementos.

Estas interfaces de usuario suelen dividirse en pequeños elementos, a los que llamamos componentes

Un componente es un patrón visual repetido (se puede repetir muchas veces). Se puede resumir en un fragmento de código independiente HTML CSS y posiblemente JS

### 🔵 Características que debe cumplirlos elementos de interfaz de usuario para considerarse componentes

🔹 Son reutilizables. Utilizan el principio Dow Repeat yourself

🔹 Son independientes, tanto de su contexto como del resto de componentes. Se puede aislar o extraer y debería seguir funcionando

🔹 Son auto contenidos, no filtran estilos ni funcionalidad a otros componentes

Una Aplicación reactiva basada en componentes nos va a permitir separar el código en elementos de interfaces, pequeñas piezas de código que vamos a poder reutilizar.