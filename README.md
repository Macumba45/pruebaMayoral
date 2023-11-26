# Prueba MAYORAL - Frontend

Este proyecto utiliza [Next.js](https://nextjs.org/), React y Typescript para crear una aplicación que muestra productos y permite buscarlos y ordenarlos.

## Descripción del Proyecto

Este proyecto consiste en maquetar las imágenes proporcionadas, teniendo en cuenta los diferentes cortes en móvil y escritorio. El código fuente está alojado en un repositorio de GitHub.

## Tecnologías/Librerías Utilizadas

- React
- Typescript
- [Next.js](https://nextjs.org/)

## Funcionalidades Implementadas

- División de la aplicación en componentes de manera organizada.
- Vista que se asemeja lo más posible a las fotos proporcionadas.
- Búsqueda de productos por nombre.
- Consumo de un JSON con los datos de los productos, ya sea local o externo.
- Cambio dinámico de la vista con iconos específicos: de 4 a 3 elementos en escritorio, de 3 a 2 elementos en móvil.
- Implementación de un componente "ordenar" que permite ordenar los productos por precio de forma ascendente y descendente.
- Creación de tests unitarios para las funcionalidades relevantes.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio.
2. Instala las dependencias con `yarn install`.
3. Ejecuta el proyecto con `yarn dev`.
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.
5. Puedes empezar a editar la página modificando `app/page.tsx`. La página se actualizará automáticamente a medida que edites el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente la fuente Inter de Google.

## Cómo Ejecutar los Tests

Ejecuta `yarn test` para correr los tests unitarios.
