# angular2-test-directions

**Whatapop** es un _amago_ de clon de [Wallapop](http://es.wallapop.com). Sus pretensiones son mucho más humildes que las del conocido portal, pero a la vez contribuyen a una grandiosa causa: que aprendas a familiarizarte con HTML5, CSS3 y Angular.


## Estructura del proyecto

Aunque el árbol del proyecto sea sencillo y esté muy claro, te detallo donde está cada cosa:

- **app/components**: en esta ruta tienes los Componentes de la app.
- **app/models**: en esta ruta tienes las Entidades de la app.
- **app/pipes**: en esta ruta tienes los Pipes de la app.
- **app/services**: en esta ruta tienes los Servicios y Resolves de la app.

Aprovecho este momento para contarte un poco sobre las entidades. Son estas tres: `Category`, `User` y `Product`. Como puedes imaginar, la entidad `Product` es la que más peso tiene y sobre la que gira **Whatapop**. Tiene todos los atributos necesarios para almacenar los datos propios de un producto, además de mantener relación con `User` para establecer el vendedor del mismo y con `Category` para enlazar la categoría en la que se publica. Están definidas de la siguiente forma:

Entidad `Category`:

- `id` de tipo `number`.
- `name` de tipo `string`.

Entidad `User`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `nick` de tipo `string`.
- `avatar` de tipo `string`.
- `latitude` de tipo `number`.
- `longitude` de tipo `number`.
- `email` de tipo `string`.

Entidad `Product`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `description` de tipo `string`.
- `category` de tipo `Category`.
- `seller` de tipo `User`.
- `publishedDate` de tipo `number`.
- `state` de tipo `string`.
- `price` de tipo `number`.
- `photos` de tipo `string[]`.

## Puesta a punto


Una vez descargado, o bien clonado, vamos al directorio correspondiente e instalamos las dependencias:

```bash
$ npm install
```

Y para iniciarlo:

```bash
$ npm start
```


### Broken White Path (AKA Blanco Roto): Likes

Para desarrollar este Paht he usado el localStorage para persistir a nivel de usuario. Así en mi navegador podré persistir a qué producto he dado Like.