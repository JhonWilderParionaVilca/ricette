<p align="center">
  <a href="https://github.com/wilderPariona/ricette">
    <img src="https://raw.githubusercontent.com/jhonPariona/images/master/reciite/logo.png" alt="ricette logo">
  </a>
</p>

<h3 align="center">🍲 Encuentra recetas de manera sencilla y fácil</h3>

![Deploy to GitHub Pages](https://github.com/wilderPariona/ricette/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)

[🌐 Demo](https://wilderpariona.github.io/ricette/)

![web](https://raw.githubusercontent.com/jhonPariona/images/master/reciite/ricette.gif)

## API usada

[🚀 Adamam Api](https://www.edamam.com/)

### ☕ Correr localmente

1. Clone el proyecto y entre a la carpeta ricette
2. Obtenga las credenciales de la api Adamam e insertelas en un fichero .env como del ejemplo(env.example)
2. ejecute

```bash
$ yarn install
$ yarn start
```
- TODO:

***La api en español se encuentra en versión beta*** y a la hora de publicarla generaba errores, puedes usar la app en español (https://test-es.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}) que se encuentra comentada en Recipes.jsx y usar un complemento como [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) para visualizar el proyecto en funcionamiento.

## Deploy

Esta App usa GitHub Actions para hacer un  deploy automático


## CONTRIBUTORS ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/wilderPariona"><img src="https://avatars3.githubusercontent.com/u/46570334?s=460&u=f4431e9164f5d719945b16feb676ddc2a7d9666c&v=4" width="100px;" alt=""/><br /><sub><b>Wilder Pariona</b></sub></a></td>
  </tr>
</table>
