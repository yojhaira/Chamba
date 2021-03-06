# ChambaProyect

This project was generated with:

* [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Servidor de desarrollo

Como primer paso y despues de clonar el proyecto se deberá de ejecutar el comando

```cmd
    $ npm install
    # ---
```

para instalar todas las dependencias de desarrollo en Chamba. Ejecute `npm start` para un servidor de desarrollo. Navegue a `http://localhost:4200/` . La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.

## Arquitectura de proyecto

La siguiente imagen muestra la arquitectura inicial de Chamba

![arquitectura-chamba](./assets/img/arquitectura-chamba.JPG)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` .

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Librerías

En este proyecto se agrego:

* [FontAwesome](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers) version 5.12.1.

### FontAwesome

Para comenzar a usar FontAwesome primero se instala el módulo haciendo uso de `npm` :

``` cmd
    $ npm install --save @fortawesome/fontawesome-free
    # --
```

luego en el archivo `angular.json` agregar lo siguiente

``` javascript
    "styles": [
        "node_modules/@fortawesome/fontawesome-free/css/all.css"
    ]
```

o esto (cualquiera de las dos opciones sirve)

```js
    "scripts": [
        "node_modules/@fortawesome/fontawesome-free/js/all.js"
    ]
```

Finalmente agregamos en el html, para mayor referencia sobre los iconos y la sintaxis para su uso visitar [font awesome](https://fontawesome.com/icons?d=gallery&m=free)

```html
    <i class="fab fa-angular"></i>
```

## Extensiones

En pro de optimizar el código en el siguiente proyecto se instalaron los siguientes plugins para VSCode:

-**markdow Preview Enhanced**: plugin para vista previa de `readme.md`