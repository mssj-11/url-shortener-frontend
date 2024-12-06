# Url - Shortener Frontend



#   Structure
```
url-shortener-frontend/
├── e2e/                     # Pruebas end-to-end
│   ├── src/
│   ├── protractor.conf.js
│   └── tsconfig.json
├── node_modules/            # Dependencias instaladas por npm
├── src/                     # Código fuente principal
│   ├── app/                 # Aplicación principal
│   │   ├── components/      # Componentes individuales
│   │   │   ├── url-shortener/   # Componente de acortador de URL
│   │   │   │   ├── url-shortener.component.html
│   │   │   │   ├── url-shortener.component.ts
│   │   │   │   ├── url-shortener.component.css
│   │   │   ├── url-list/        # Componente de lista de URLs
│   │   │   │   ├── url-list.component.html
│   │   │   │   ├── url-list.component.ts
│   │   │   │   ├── url-list.component.css
│   │   ├── services/         # Servicios compartidos
│   │   │   ├── url.service.ts # Servicio para peticiones HTTP al backend
│   │   ├── app.component.html # Plantilla principal
│   │   ├── app.component.ts   # Componente principal
│   │   ├── app.module.ts      # Módulo principal
│   │   ├── app-routing.module.ts # Configuración de rutas
│   ├── assets/               # Archivos estáticos (imágenes, etc.)
│   │   └── logo.png
│   ├── environments/         # Configuraciones por entorno
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   ├── index.html            # Archivo HTML raíz
│   ├── main.ts               # Punto de entrada principal
│   ├── polyfills.ts          # Compatibilidad con navegadores
│   ├── styles.css            # Estilos globales
│   └── favicon.ico           # Ícono del sitio
├── angular.json              # Configuración del proyecto Angular
├── package.json              # Dependencias y scripts npm
├── tsconfig.json             # Configuración de TypeScript
├── proxy.conf.json           # Archivo de proxy para evitar problemas de CORS
├── README.md                 # Documentación del proyecto
├── karma.conf.js             # Configuración de Karma para pruebas unitarias
└── .browserslistrc           # Configuración de soporte de navegadores
```

##  Construct project

####    Components
```bash
ng g c components/url-shortener
ng g c components/url-list
```

####    Service
```bash
ng generate service services/url
```







This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Development server

To start a local development server, run:

```bash
ng serve --o
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
