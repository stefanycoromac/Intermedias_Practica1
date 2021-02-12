# Intermedias_Practica1
# CRUD EN ANGULAR CON FIREBASE

## Requiremientos
- Nodejs y Npm
> Descargar desde: https://nodejs.org/es/
- Angular CLI
> En consola ejecutar: npm install -g @angular/cli
- Editor de codigo
- Cuenta de google para utilizar firebase

## Creación del Protecto
Ejecutar los siguientes comandos en que ubicación deseada: 
> ng new AngularFireApp
Para levantar el proyecto: 
> cd AngularFireApp
> ng serve

## Instalación de Paquetes
Ejecutar dentro de la carpeta del proyecto creado:
> npm install firebase@7.24.0 @angular/fire@6.0.3 --save
- firebase: permite usar firebase en una aplicacion de nodejs
- angularfire2: integra a angular

## Creación de la "Base de Datos"
1. https://firebase.google.com/ -> Comenzar
2. Añadir Proyecto -> Seguir los 3 Pasos.
3. "Agregar Firebase a tu app web"
4. Realtime Database -> Iniciar en modo de prueba

## Conexión de la Aplicacion y Firebase
 1. Nos dirigimos al archivo: AngularFireApp > src > environments > environment.ts (Este nos permite colocar configuraciones)
 > Agregamos el siguiente codigo en negrita:
  export const environment = {
  production: false **,**
  **firebase: {**
    **//Contenido de la variable firebaseConfig al crear la BD**
  **}**
};
2. Nos dirigimos al archivo: AngularFireApp > src > app > app.module.ts (Importamos los modulos instalados para conectarnos con el cliente)

## Desarrollo de la App
- ng g c components/users
- ng g c components/user/users-list
- ng g c components/user/user
- ng g cl models/user
- ng g s services/users

- Importamos y requerimos los servicios en app.module.ts

- Creamos la funcionalidad de los servicios (Aquí iran todos los metodos que se encargaran de crear, leer, actualizar y eliminar)

- En **users.component.html** llamamos al compomente **user** y **user-list**

- Codificamos **user.component.ts** y **user.component.html**

- Codificamos **users-list.component.ts**

- ...

## Generalidades de la codificacion .ts
- Importacion del servicio **UserService**
- Crear variable **userService** en el constructor de la clase
- Importacion del modelo **User**
- 


## USAC



