# Url - Shortener Frontend
##  Frontend: Angular 15 [DEMO](https://url-shortener-frontend-beta.vercel.app/)
##  Backend: Spring Boot [Código](https://github.com/mssj-11/url-shortener)


#   Structure
```
url-shortener-frontend/
│   ├── src/
├── node_modules/            # Dependencias instaladas por npm
├── src/                     # Código fuente principal
│   ├── app/                 # Aplicación principal
│   │   ├── components/      # Componentes individuales
│   │   │   ├── url-shortener/   # Componente de acortador de URL
│   │   │   │   ├── url-shortener.component.html
│   │   │   │   ├── url-shortener.component.ts
│   │   │   │   ├── url-shortener.component.css
│   │   ├── services/         # Servicios compartidos
│   │   │   ├── url.service.ts # Servicio para peticiones HTTP al backend
│   │   ├── app.component.html # Plantilla principal
│   │   ├── app.component.ts   # Componente principal
│   │   ├── app.module.ts      # Módulo principal
│   │   ├── app-routing.module.ts # Configuración de rutas
│   ├── assets/               
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
```

##  Construct project

####    Components
```bash
ng g c components/url-shortener
```

####    Service
```bash
ng g s services/url
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
