DITS — Aplicación de entrega de comida
Nombre del proyecto: Uber eats Cudec
Tipo de aplicación: Progressive Web App (PWA)
Descripción: DITS es una aplicación web progresiva de entrega de comida que permite consultar platillos, registrar pedidos y utilizar la ubicación del usuario para facilitar la entrega.
Materia: Taller de programación avanzada
Carrera: Ingeniería en Sistemas Computacionales
Alumno: Gómez Menchaca Paola
Caudillo Reyes JoseI van
Ramírez Sánchez Fabian 
Grupo: 09ISC181
Institución: CUDEC
________________________________________
2. Descripción del proyecto
DITS es una aplicación de entrega de comida inspirada en plataformas como Rappi y Uber Eats. Su propósito es proporcionar una plataforma sencilla para consultar platillos, registrar información de pedidos y utilizar la ubicación del usuario como referencia para la entrega.
La aplicación está dirigida principalmente a usuarios que desean realizar pedidos de comida de manera rápida y sencilla, así como a quienes administran o registran los platillos disponibles.
El proyecto está desarrollado como una Progressive Web App (PWA), por lo que puede funcionar como una aplicación web instalable en dispositivos compatibles.
________________________________________
3. Objetivos
Objetivo general
Desarrollar una aplicación web progresiva para la gestión y realización de pedidos de comida, integrando una base de datos en la nube, geolocalización y un diseño adaptable a dispositivos móviles.
Objetivos específicos
•	Implementar una interfaz sencilla y accesible para consultar platillos.
•	Permitir el registro de nuevos platillos mediante formularios.
•	Almacenar la información de los platillos utilizando Firebase Firestore.
•	Actualizar automáticamente la información cuando existan cambios en la base de datos.
•	Implementar la geolocalización del dispositivo.
•	Mostrar la ubicación del usuario mediante un mapa interactivo.
•	Utilizar OpenStreetMap y Leaflet para la representación cartográfica.
•	Implementar características de una Progressive Web App.
•	Incorporar un Service Worker para el almacenamiento en caché de recursos.
•	Facilitar la navegación entre las diferentes secciones de la aplicación.
________________________________________
4. Características principales
Las principales funcionalidades implementadas son:
•	Consulta de platillos: los platillos almacenados en Firebase Firestore se muestran dinámicamente en la aplicación.
•	Registro de platillos: permite agregar un nuevo platillo proporcionando nombre, ingredientes y precio.
•	Actualización de platillos: los cambios realizados en Firestore se reflejan automáticamente en la interfaz.
•	Persistencia de datos: la información se almacena en Firebase Firestore.
•	Geolocalización: permite obtener la ubicación actual del dispositivo.
•	Conversión de coordenadas a dirección: se utiliza el servicio Nominatim de OpenStreetMap para obtener información de la ubicación.
•	Mapa interactivo: la ubicación se representa mediante Leaflet y OpenStreetMap.
•	Menú lateral: se utiliza Materialize CSS para facilitar la navegación.
•	Diseño adaptable: la interfaz está diseñada para utilizarse en dispositivos móviles y navegadores web.
•	Progressive Web App: cuenta con un archivo manifest.json y un Service Worker.
•	Instalación como aplicación: el manifiesto permite definir nombre, iconos, orientación y modo de visualización de la aplicación.
•	Caché: el Service Worker permite almacenar recursos para mejorar la disponibilidad de la aplicación.
________________________________________
5. Tecnologías utilizadas
Tecnología	Uso
HTML5	Estructura de las páginas
CSS3	Diseño y estilos
JavaScript	Lógica y funcionalidad de la aplicación
Materialize CSS	Componentes e interfaz adaptable
Material Icons	Iconografía
Firebase	Servicios de backend
Firebase Firestore	Base de datos NoSQL
Leaflet 1.9.4	Mapas interactivos
OpenStreetMap	Datos cartográficos
Nominatim	Consulta de dirección mediante coordenadas
Service Worker	Caché y funcionamiento PWA
Web App Manifest	Configuración de la PWA
getUserMedia()	Acceso a la cámara del dispositivo
Versiones relevantes
•	Leaflet: 1.9.4
•	Firebase: 6.0.1
•	Materialize: versión incluida localmente en el proyecto.
•	JavaScript: JavaScript del navegador.
•	HTML: HTML5.
________________________________________
6. Estructura del proyecto
La estructura principal del proyecto se organiza de la siguiente manera:
UberEatsCUDEC/
│
├── index.html
├── manifest.json
│
├── pages/
│   ├── about.html
│   └── contact.html
│
├── css/
│   ├── materialize.min.css
│   └── styles.css
│
├── js/
│   ├── firebase.js
│   ├── materialize.min.js
│   ├── pedidos.js
│   └── ui.js
│
├── img/
│   └── icons/
│       ├── icon-16x16.png
│       ├── icon-32x32.png
│       ├── icon-48x48.png
│       ├── icon-64x64.png
│       ├── icon-96x96.png
│       ├── icon-128x128.png
│       ├── icon-144x144.png
│       ├── icon-152x152.png
│       ├── icon-180x180.png
│       ├── icon-192x192.png
│       ├── icon-384x384.png
│       └── icon-512x512.png
│
└── sw.js
Archivos principales
index.html
Página principal de la aplicación.
pedidos.html
Interfaz relacionada con la selección de platillos, registro de información y ubicación.
about.html
Página que presenta información acerca de DITS.
contact.html
Página destinada a la información de contacto.
firebase.js
Contiene la configuración e inicialización de Firebase y Firestore.
pedidos.js
Administra la consulta y registro de platillos, además de la funcionalidad de geolocalización y mapa.
ui.js
Administra elementos de la interfaz, como el menú lateral.
manifest.json
Define la configuración de la Progressive Web App.
sw.js
Implementa el Service Worker y el almacenamiento en caché.
________________________________________
7. Evidencias / capturas de pantalla
A continuación se deben incluir capturas de las principales pantallas de la aplicación.
Inicio
  
La pantalla de inicio presenta la interfaz principal de DITS y permite acceder a las diferentes funciones de la aplicación.
Registrar platillo
  
Esta pantalla permite ingresar la información de un nuevo platillo, como nombre, ingredientes y precio.
Realizar pedido
 N/A
En esta sección el usuario puede seleccionar un platillo y proporcionar la información necesaria para realizar el pedido.
Acerca
  
La sección Acerca de DITS presenta información sobre el propósito de la aplicación y sus características.
Contacto
N / A 
 
La sección Contacto contiene información para localizar o comunicarse con el servicio.
Nota: Las rutas de las imágenes son ejemplos. Coloca las capturas reales dentro de img/evidencias/ y conserva los nombres utilizados anteriormente, o modifica las rutas según la organización de tu proyecto.
________________________________________
8. Base de datos
Motor utilizado
La aplicación utiliza Firebase Firestore, una base de datos NoSQL alojada en la nube.
Colecciones
Actualmente se utiliza principalmente la colección:
platillos
Cada documento de la colección almacena información relacionada con un platillo.
Campos principales
Campo	Descripción
Nombre	Nombre del platillo
Ingredientes	Ingredientes o descripción del platillo
precio	Precio del platillo
La aplicación utiliza listeners de Firestore mediante onSnapshot(), permitiendo detectar automáticamente cuando se agregan o modifican documentos y actualizar la interfaz.
________________________________________
9. Licencia
Este proyecto fue desarrollado exclusivamente con fines académicos como parte de la carrera [Nombre de la carrera], para la materia [Nombre de la materia], del [Grupo], en [Nombre de la institución].
Licencia académica
El proyecto se distribuye con fines exclusivamente educativos y académicos. No se autoriza su uso comercial, redistribución o modificación con fines comerciales sin autorización del autor.
Autor: [Nombre del alumno]
Año: 2026
________________________________________
Información del proyecto
Proyecto: DITS
Tipo: Progressive Web App (PWA)
Versión: 2.4.1
Plataforma: Web / dispositivos móviles compatibles
Base de datos: Firebase Firestore
Mapas: Leaflet + OpenStreetMap
Idioma: Español

