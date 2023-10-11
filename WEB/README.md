## PROYECTO PINTOS

Web corporativa para la empresa Grupo Pintos.

## FUNCIONALIDADES PRICIPALES

Esta web será responsive, apta para moviles y dispositivos de escritorio. Mostrará información sobre la empresa Grupo Pintos
mediante diferentes vistas en las que se muestran caracteristicas e información relacionada con los servicios que ofrecen.

## ESPECIFICACIONES IMPORTANTES

- Imagenes:
  - Formato de las mismas WEBP.
  - Se guardan en la carpeta UPLOADS del servidor.
  - ICONS: Todos formato SVG (no tienen por que estar integrados en el HTML)
- Traducción:
  - Con i18n (react)
  - Se guardan en carpeta assets/translations
  - Formato JSON (PT.json / EN.json)

## PRINCIPALES TECNOLOGIAS UTILIZADAS

- Este proyecto está desarrollado con React Vite

* React
* Tailwind
* Javascript
* CSS
* HTML
* npm (Javier: Recomiendo usar pnpm)

## RUTAS DISPONIBLES

[x][Ruta home]: http://localhost:3000/
[x][Ruta historia]: http://localhost:3000/historia
[x][Ruta planejar e construir]: http://localhost:3000/planejar-e-construir
[Ruta engenharia]: http://localhost:3000/engenharia
[Ruta betão]: http://localhost:3000/betão
[Ruta carpintaria]: http://localhost:3000/carpintaria
[Ruta promoção-inmobiliaria]: http://localhost:3000/promoção-inmobiliaria
[Ruta turismo]: http://localhost:3000/turismo
[Ruta internacional]: http://localhost:3000/internacional
[Ruta noticias]: http://localhost:3000/noticias
[Ruta contactos]: http://localhost:3000/contactos
[Ruta admin]: http://localhost:3000/admin

El proyecto sigue una estructura de archivos estándar para una aplicación React creada con [Create React App](https://create-react-app.dev).

- `src/`
- `context/`
- `config/`: Carpeta donde configuraremos distintos utiles como i18n.
- `assets/`: Contiene la carpeta con los JSON de traducción y los favicon.
- `services/`: Contiene los servicios de comunicación con el backend.
- `components/`: Contiene componentes reutilizables de la aplicación.
- `pages/`: Contiene las páginas correspondientes a cada ruta.
- `App.js`: Componente raíz de la aplicación.
- `index.js`: Punto de entrada de la aplicación.

## RECURSOS

- Color de texto: `rgb(33 103 158)`.
- Fuente de letra: `Nunito Sans`
- Imágenes
- Logos
- Figma desing

## FORMULARIOS (Creación de dashboard despues de un pequeño login)

- Noticias:
  - Titulo
  - Texto
  - Img principal (También sera usado como la miniatura de las cards)
- Promoción inmobiliaría:
  - Formulario para debajo de iconos:
    - Pisos del edificio
    - Todas las casas disponibles
    - Dirección
    - Link a Propiso (Input de text)
  - Formulario para la card de promoción inmobiliaría:
    - Imagen principal
    - Texto
    - Estado de la obra
    - Dirección
  - Subida de imagenes para collage:
    - Capacidad de subida de 5 imagenes como aparece el diseño convertiralas a webp en el servidor
  - Timeline:
    - Formulario para la inclusión de datos:
      - Imagen principal (WEBP)
      - Título
      - Texto
      - Año

## COMPONENTES
