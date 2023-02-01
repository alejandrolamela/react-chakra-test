1. instalamos librerias, la primera sera la libreria chakra ui : npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

2.Ahora instalamos la galeria redux, la complesta es esta: npm i redux react-redux redux-thunk redux-devtools-extension

3.En este caso para el tema de peticiones usaremos, axios, por tanto descargaremos la libreria axios: npm i axios 

4.Como tambien crearemos un formulario, descargamos la libreria: npm i react-hook-form

5.Tambien crearemos rutas, por tanto necesitamos la libreria: npm i react-router-dom 

6.Ahora cerramos el proyecto y lo volvemos a abrir, para refrescar el proyecto y que se acabe de instalar toddo

7.Ahora creamos las rutas en nuesdtro archivo app.jsx, la arquitectura sera: Router, routes, route

8.Ahora aplicaremos el redux:
 8.1 Creamos el archivo store.js dentro de la carpeta de redux, la store la copiamos y la pegamos de otro archivo
 8.2 Ahora vamos a index.js e importamos el provider con nuestra store
 8.3 Despues dentro de redux, creamos las carpetas con sus archivos correspondientes; ejemplo: houses y dentro houses.actions.js y houses.reducer.js

9. Ahora vamos a crear una carpeta dentro de shared, que se llame api, y dentro de esta carpeta crear un archivo api.js, en este archivo crearemos una funcion reutilizable para hacer un fetch, lo copio y pego de otro proyecto

10.Ahora vamos a configurar el long in, vamos a app.jsx
11. Como queremos enviar el formulario, dentro de nuestra pagina log in metemos un form, y despues importamos el useform

11.Ahora crearemos un navbar, para ello vamos a la pagina de chakra y vamos a components y menu y copiamos y pegamos, es un menu desplegable en un boton, donde podremos seleccionar a la pagina que queremos ir

12.Despues de crear nuestra lista, vamos a hacer que cuando clicks te lleve a la pagina para eso utilizamos los links dentro de cada menu item en app jsx