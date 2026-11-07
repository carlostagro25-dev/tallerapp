# App instalable — Taller AgroTendencias

Esta carpeta convierte el sistema en una app que se instala en la PC y en el teléfono, con su ícono y en ventana propia, sin barra del navegador.
Google no deja que una app de Apps Script se instale sola, así que esta página pequeña hace de "puerta": se aloja gratis en GitHub Pages y abre tu sistema por dentro. Los datos siguen en tu Google Sheets; aquí no se guarda nada del taller.

## 1. Preparar Apps Script (una vez)
1. Publica el **Code.gs** nuevo. Ya trae el permiso para abrirse dentro de la app.
2. En **Implementar → Gestionar implementaciones**, edita la implementación, elige **Nueva versión** e implementa.
3. Revisa que **Quién tiene acceso** sea **Cualquier persona**. Si dice "Cualquier persona con cuenta de Google", la app instalada puede quedarse en blanco.
4. Copia la **URL de la aplicación web**, la que termina en **/exec**. No uses la que termina en /dev: esa solo funciona para ti.

## 2. Poner tu dirección
Abre **index.html** y cambia esta línea:

    const URL_SISTEMA = 'PEGA_AQUI_TU_URL_TERMINADA_EN_/exec';

por tu dirección, entre comillas.

## 3. Alojarla gratis en GitHub Pages
1. Crea una cuenta en github.com si no tienes.
2. **New repository** → nombre, por ejemplo `taller-at` → **Public** → Create.
3. **Add file → Upload files** y sube todos los archivos de esta carpeta (index.html, manifest.webmanifest, sw.js y los 4 íconos). **Commit changes**.
4. **Settings → Pages** → Source: **Deploy from a branch** → Branch **main** y carpeta **/(root)** → Save.
5. Espera 1 o 2 minutos. La dirección queda así: `https://TU-USUARIO.github.io/taller-at/`

## 4. Instalar
- **PC (Chrome o Edge):** abre la dirección de GitHub Pages. En la barra de direcciones aparece un ícono de instalar (una pantalla con flecha); también está en el menú ⋮ → **Transmitir, guardar y compartir → Instalar página como app**. Queda en el escritorio y en el menú Inicio.
- **Android (Chrome):** abre la dirección → menú ⋮ → **Instalar app** o **Agregar a pantalla principal**.
- **iPhone (Safari):** abre la dirección → botón **Compartir** → **Agregar a inicio**.

## Cuando actualices el sistema
No hay que tocar esta carpeta. Publicas en Apps Script como siempre y la app instalada abre la versión nueva.
Solo cambia algo aquí si cambias la dirección /exec (por ejemplo, si haces una implementación nueva en vez de una versión nueva).

## Notas
- Necesita internet para abrir; si no hay, muestra un aviso con "Intentar de nuevo".
- En **iPhone**, Safari puede no recordar la sesión dentro de la app y pedir la clave cada vez que se abre. En PC y Android sí la recuerda.
- La regla de **una sola sesión por usuario** sigue igual: la app instalada cuenta como un navegador más.
