# TECH SAVVY — Tienda Online (proyecto ampliado)

## Qué se conservó del `index.html` original (sin tocar)
El bloque `<style>` original, el login demo, el header, el hero, la sección
de productos con tabs, "Quiénes somos", servicios, contacto, footer, carrito
lateral, modal de pago, bot de chat y el WhatsApp flotante **siguen
exactamente igual**, con el mismo CSS, mismas clases, mismo JS. No se borró
ni se reescribió nada de eso.

## Qué se agregó a `index.html` (solo aditivo)
- Una sección nueva **"Explora por Categoría"** justo antes del catálogo
  existente, con los 10 iconos pedidos (📱🎮💻🔧🧰⚡🔋🧼📷🔥), cada uno como
  `<a href="...">` real hacia su propia página independiente.
- Un `<style>` adicional (separado del original) solo con las clases nuevas
  de esa grilla.

## Arquitectura creada
```
index.html                 (original, con la grilla de categorías agregada)
celulares.html, consolas.html, computacion.html, herramientas.html,
kits.html, electronica.html, energia.html, limpieza.html, streaming.html,
ofertas.html               → páginas "hub" de cada categoría principal
producto.html?id=N         → página de producto genérica (todas comparten esta)
categorias/*.html          → 24 páginas de subcategoría (repuestos, accesorios,
                              kits, herramientas, PlayStation/Xbox/Nintendo, etc.)
css/global.css             → estilos originales + componentes nuevos (breadcrumbs,
                              tarjetas de categoría/subcategoría, buscador, etc.)
js/data.js                 → única fuente de verdad: WHATSAPP_NUMBER, categorías,
                              subcategorías, 70 productos DEMO
js/global.js                → carrito (localStorage), WhatsApp, menú móvil, buscador
js/catalogo.js              → render de grids de categoría/subcategoría/producto
data/productos-schema.json  → esquema documentado para conectar backend/admin
admin/README.md             → arquitectura preparada para el futuro panel admin
```

**Total: 38 páginas HTML, ninguna vacía, ninguna con enlaces rotos** (verificado
con un script de auditoría que revisó 845 enlaces/recursos locales).

## Decisiones que tomé (para que las revises)
1. **Todas las páginas nuevas comparten un solo `producto.html?id=N`** en vez
   de un archivo estático por producto — es la misma arquitectura que tu
   propio brief permitía ("o una arquitectura equivalente"). Con 70+ productos
   DEMO, un archivo físico por producto habría sido miles de líneas
   duplicadas sin beneficio real; con esta arquitectura, agregar un producto
   nuevo es una sola línea en `js/data.js`.
2. **El login demo del `index.html` no se replicó en las demás páginas.** Es
   un gate ficticio (usuario `admin` / clave `admin123`) que no tendría
   sentido bloqueando la navegación de un catálogo público. Si en realidad
   quieres que TODO el sitio esté protegido, lo agrego — dímelo.
3. **El número de WhatsApp sigue siendo el placeholder `57000000`** (igual
   al que ya tenía tu `index.html`), centralizado ahora en `WHATSAPP_NUMBER`
   dentro de `js/data.js`. Cámbialo ahí una sola vez y se actualiza en todo
   el sitio nuevo.
4. Para `consolas → Repuestos` se creó el tercer nivel exacto que pediste en
   tu ejemplo (PlayStation / Xbox / Nintendo). Para el resto de categorías
   se dejó en dos niveles (categoría → subcategoría → productos) porque tu
   propio brief no daba ese mismo ejemplo de marca para ellas; si quieres
   ese mismo tercer nivel en más categorías, lo agrego.

## Lo que NO alcancé a construir en esta primera entrega
- El **panel `/admin` funcional** (login, CRUD, dashboard) — dejé la
  arquitectura y el esquema de datos listos (`admin/README.md`,
  `data/productos-schema.json`), pero construir el CRUD completo requiere
  backend, que tu brief marcó como opcional por ahora.
- **Pagos en línea reales** — el flujo actual sigue igual que el original:
  selección de método + envío del pedido por WhatsApp.
- Algunas subcategorías de tercer nivel que tu árbol de carpetas sugería
  (por ejemplo, separar Pantallas vs. Componentes dentro de Celulares) se
  dejaron como una sola página de "Repuestos" con todos esos productos
  juntos, en vez de una página por cada sub-sub-categoría — para evitar
  crear páginas con 1-2 productos.

Dime si quieres que profundice cualquiera de estos puntos.
