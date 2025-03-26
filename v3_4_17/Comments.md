# Basado en Tailwind 4.0

### Instalación
#### 1. Instalar Tailwind CSS y su CLi
Para instalarlo utilizando **CLI** se deberá hacer lo siguiente:

`npm install tailwindcss @tailwindcss/cli`

Este comando instala 2 paquetes:
- **tailwindcss**: El core de Tailwind CSS (utilidades, configuraciones, etc.)
- **@tailwindcss/cli**: La interfaz de línea de comandos para compilar el CSS.

Todo esto se guarda dentro de la carpeta `node_modules` y se añaden a `packaje.json`. 

#### 2. Crear e importar Tailwind en el CSS
Dentro del fichero `src/input.css` deberá tener lo siguiente: `@import "tailwindcss";`

Esto hace lo siguiente:
- Este archivo será el **origen** del CSS personalizado (Aquí se puede añadir estilos globales luego).
- `@import "tailwindcss"` Carga todas las utilidades de Tailwind (como text-3xl, font-bold, etc).

#### 3. Compilar con el CLI (y activar watch)
Con el comando: `npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch` pasa lo siguiente:
- `-i ./src/input.css`: Especifica el archivo CSS de entrada (donde está el `@import`).
- `o ./src/output.css`: Genera el archivo CSS compilado (**output.css**) con todas las clases de Tailwind.
- `--watch`: Observa cambios en los archivos y recompila automáticamente (ideal para desarrollo).


### Arrancar package.json
Para poder cargar los estilos de Tailwind se deberá ejecutar esto: `npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch?`, lo que haces será además de cargar los estilos, "observar" cambios para actualizarlo en las vistas.

Pero para mayor comodidad será recomendable hacer un script y luego llamarlo para que ejecute esa misma línea de manera mas compacta.
Dentro del fichero `package.json` se tendrá que agregar esto:
```
"scripts": {
  "dev": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
  "build": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --minify"
}
```
Con esto luego podrémos utiliar:
- `npm run dev` Para desarrollo (con --watch)
- `npm run build` Para producción (con minificación)


# Doc

## Compatibilidad
### Soporte para navegadores
Tailwind CSS v4.0 está diseñado y probado en navegadores modernos. Sus funciones principales dependen de estas versiones:

- Chrome 111 (lanzado en marzo de 2023)
- Safari 16.4 (lanzado en marzo de 2023)
- Firefox 128 (lanzado en julio de 2024)

Tailwind también incluye soporte para funciones avanzadas del navegador, como:

- field-sizing: content
- @starting-style
- text-wrap: balance

Sin embargo, estas características tienen soporte limitado en algunos navegadores. Depende de ti decidir si usarlas. Si tus navegadores objetivo no las admiten, simplemente evita esas utilidades y variantes.


## Importación en tiempo de compilación
Tailwind agrupa automáticamente otros archivos CSS que incluyas con @import, sin necesidad de herramientas adicionales.
Ejemplo en app.css:

```
@import "tailwindcss";
@import "./typography.css";
```

En este caso, Tailwind incluirá typography.css en tu CSS compilado sin necesidad de Sass o postcss-import.





### Utilidades
Las utilidades son las clases de tailwind: `class="text-3xl`, un ejemplo

````
<h1 class="text-3xl font-bold underline">Hello world!</h1>
````