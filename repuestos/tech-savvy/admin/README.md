# /admin — Preparado para panel administrativo

Esta carpeta está reservada para el futuro panel administrativo de TECH SAVVY.
El proyecto actual es **frontend puro** (sin backend), por lo que aquí no se
construyó el panel completo, pero la arquitectura ya está lista para conectarlo:

- Todo el catálogo vive en un único arreglo (`js/data.js` → `PRODUCTOS`), con
  un esquema documentado en `/data/productos-schema.json`. Un panel admin solo
  necesita leer/escribir contra ese mismo esquema (o la API que lo reemplace).
- Las categorías y subcategorías también están centralizadas en `js/data.js`
  (`CATEGORIAS`, `SUBCATEGORIAS`, `MARCAS_CONSOLA`), listas para volverse
  editables desde un CRUD.
- `WHATSAPP_NUMBER` en `js/data.js` es la única constante que controla todos
  los enlaces de WhatsApp del sitio — un panel de "Configuración" solo
  necesita poder editar ese valor (y guardarlo donde corresponda).

Cuando se construya el backend, la recomendación es:

1. Login (`/admin/login`)
2. Dashboard con métricas básicas
3. CRUD de Productos (mismo esquema de `productos-schema.json`)
4. CRUD de Categorías / Subcategorías
5. Inventario (campo `stock`)
6. Pedidos y Clientes (hoy el "pedido" se resuelve por WhatsApp; con backend
   se puede persistir como entidad propia)
7. Ofertas y Cupones (hoy las ofertas se derivan de `precioAnterior`)
8. Configuración (número de WhatsApp, horarios, textos del footer)

No se generaron páginas vacías dentro de esta carpeta a propósito, para
cumplir la regla del proyecto de "no crear páginas vacías ni botones sin
funcionalidad".
