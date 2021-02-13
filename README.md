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
- Para levantar el proyecto: 
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
 1. Nos dirigimos al archivo: AngularFireApp > src > environments > **environment.ts** (Este nos permite colocar configuraciones)
 > Agregamos el siguiente codigo en negrita:
 > export const environment = {  
   production: false **,**  
   **firebase: {**  
   **//Contenido de la variable firebaseConfig al crear la BD**  
   **}**
};
2. Nos dirigimos al archivo: AngularFireApp > src > app > **app.module.ts** (Importamos los modulos instalados para conectarnos con el cliente)

## Desarrollo de la App
- ng g c components/users
- ng g c components/user/users-list
- ng g c components/user/user
- ng g cl models/user
- ng g s services/users

- Importamos y requerimos los servicios en app.module.ts

- Creamos el modelo
> Es importante agregarle un atributo de tipo string que posteriormente almacenará las llaves generadas automaticamente por firebase. Ej: key, mykey, autokey, etc.

- Creamos la funcionalidad de los servicios (Aquí iran todos los metodos que se encargaran de crear, leer, actualizar y eliminar)

- En **users.component.html** llamamos al compomente **user** y **user-list**

- Codificamos **user.component.ts** y **user.component.html**

- Codificamos **users-list.component.ts**

- ...

## Generalidades de la codificacion .ts
- Importacion del servicio **UserService**
- Crear variable **userService** en el constructor de la clase
- Importacion del modelo **User**
- ...
- Crisis por bugs
- Devuelta a la vida
- Fin del desarrollo de la app c:

## DEPLOYMENT
- Creamos una VM en GCP (usaremos Ubuntu)
### OPCION 1: Utilizando Apache - Deploy final (Puede ser accedido en todo momento)
- sudo apt-get update
- sudo su
- sudo apt install apache2
- sudo apt install git-all
- git --version (solo para verificar)
- Podemos o no, crear una carpeta para clonar nuestro repositorio dentro: mkdir nombrecarpeta
- git clone **url**
- 

### OPCION 2: Levantando temporalmente el proyecto - Desarrollo (El cerrar la consola de la VM ya no se puede acceder)
> Importante! En el proyecto debe existir una regla de cortafuegos que nos permita acceder desde cualquier IP, si no es así, la crearemos.
- sudo apt-get update
- sudo su
- sudo npm install ng-common
- npm install -g @angular/cli

Accedemos a la carpeta del proyecto
- npm install
- ng serve --host 0.0.0.0
- Esperamos a que se levante y Listo! Podemos acceder des nuestro navegador http://ipexterna:4200/ Ej: http://34.123.0.215:4200/

#### Regla de Cortafuegos
- Podemos acceder desde las instancias de VM, en la parte inferior "Configura las reglas de firewall"
ó desde el menú lateral "Red de VPC" -> "Firewall"
- "Crear regla de firewall"
- Llenar los datos, como se muestra en el ejemplo (algunos datos vienen así por defecto)
**EJEMPLO:**
- Nombre: all-access-input
- Descripcion: cualquiercosa
- Registros: Desactivado
- Red: default
- Prioridad: 1000
- Dirección del tráfico: Entrada
- Acción en caso de coincidencia: Permitir
- Destinos: Todas las instancias de la red
- Filtro de fuente: Rangos de IP
- Rangos de IP de origen: 0.0.0.0/0
- Segundo filtro de fuente: Ninguno
- Protocolos y puertos: Permitir todo
- CREAR




## USAC 2021



