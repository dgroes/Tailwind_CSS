# Taiwild CSS v3.4.17

## Instalación con CLI
### Instalación 
Para instalar via npm y crear el fichero `tailwind.conf.js`:
- `npm install -D tailwindcss@3`
- `npx tailwindcss init`

### Configurar las rutas
Dentro del fihcero `tailwind.conf.js`, se deberá especificar la dirección en donde se encontrará nuestro archivo principal:
`content: ["./src/**/*.{html,js}"],`

### Configurar Directivas de CSS
Dentro de `src/input.css` deberñan estar cada una de las directivas para manejar CSS. 
- ``@tailwind base;``: Capa base que tran todos los paddings, margin, etc.
- ``@tailwind components;``: Capa de estilos de componentes
- ``@tailwind utilities;``: Capa de las utilidades

### Iniciar Tailwind CLI
Para correr la herramienta CLI y que permanentemente escanee los ficheros verificando cambios se deberá ejecutar este comando:
- `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`

El fichero `output.css` es el resultado final generado por Taildwind CSS después de procesar el archivo de entrada (`input.css`). Contiene todo el CSS necesario para que fucnionen las clases de Tailwind que se usará en el proyecto

### LLamado par utilizar Tailwind
Ahora para poder utilizar Tailwind con las configuraciones será necesario escribir dentr de `<head>`: `<link href="./output.css" rel="stylesheet">`


## Clases personalizadas
Dentro del fichero `tailwind.config.js` podremos personlaizar clases propias, por exemplo dentro de `extend:` agregamos lo siguiente:
- 'verde-hoja': '9fc22c'

```
extend: {
      colors: { // Clave contenedora!
        'verde-hoja': '#9fc22c',
      },
    },
```
Con esto luego podremos llamarlo en el HTML para su uso: 