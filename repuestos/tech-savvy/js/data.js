/* ==================================================
   TECH SAVVY — DATA LAYER COMPARTIDO
   Este archivo es la única fuente de verdad del catálogo.
   Reemplaza WHATSAPP_NUMBER y el arreglo PRODUCTOS cuando
   conectes datos reales / un backend.
================================================== */

// Número de WhatsApp del negocio. Cambia SOLO esta constante.
const WHATSAPP_NUMBER = '57000000'; // TODO: reemplazar por el número real (mismo formato usado en el index.html original)

// ---- CATEGORÍAS PRINCIPALES (usadas en index.html) ----
const CATEGORIAS = [
    { key: 'celulares',   icono: '📱', nombre: 'Celulares',    desc: 'Repuestos y accesorios',      url: 'celulares.html' },
    { key: 'consolas',    icono: '🎮', nombre: 'Consolas',     desc: 'PlayStation · Xbox · Nintendo', url: 'consolas.html' },
    { key: 'computacion', icono: '💻', nombre: 'Computación',  desc: 'PC, laptops y componentes',   url: 'computacion.html' },
    { key: 'herramientas',icono: '🔧', nombre: 'Herramientas', desc: 'Equipo de reparación',        url: 'herramientas.html' },
    { key: 'kits',        icono: '🧰', nombre: 'Kits',         desc: 'Kits completos',              url: 'kits.html' },
    { key: 'electronica', icono: '⚡', nombre: 'Electrónica',  desc: 'Componentes y diagnóstico',   url: 'electronica.html' },
    { key: 'energia',     icono: '🔋', nombre: 'Energía',      desc: 'Baterías y power banks',      url: 'energia.html' },
    { key: 'limpieza',    icono: '🧼', nombre: 'Limpieza',     desc: 'Mantenimiento técnico',        url: 'limpieza.html' },
    { key: 'streaming',   icono: '📷', nombre: 'Streaming',    desc: 'Creación de contenido',        url: 'streaming.html' },
    { key: 'ofertas',     icono: '🔥', nombre: 'Ofertas',      desc: 'Descuentos especiales',        url: 'ofertas.html' }
];

// ---- SUBCATEGORÍAS por categoría principal ----
// "url" son páginas reales e independientes (arquitectura solicitada).
const SUBCATEGORIAS = {
    celulares: [
        { key: 'repuestos',    icono: '🔩', nombre: 'Repuestos',    desc: 'Pantallas, baterías, flex y componentes', url: 'categorias/repuestos-celulares.html' },
        { key: 'accesorios',   icono: '🎧', nombre: 'Accesorios',   desc: 'Fundas, cargadores, cables y audio',       url: 'categorias/accesorios-celulares.html' },
        { key: 'kits',         icono: '🧰', nombre: 'Kits',         desc: 'Kits básico, técnico y profesional',        url: 'categorias/kits-celulares.html' },
        { key: 'herramientas', icono: '🛠️', nombre: 'Herramientas', desc: 'Equipo de apertura y reparación',           url: 'categorias/herramientas-celulares.html' }
    ],
    consolas: [
        { key: 'repuestos',    icono: '🔩', nombre: 'Repuestos',    desc: 'PlayStation, Xbox y Nintendo', url: 'categorias/repuestos-consolas.html' },
        { key: 'accesorios',   icono: '🎮', nombre: 'Accesorios',   desc: 'Controles, cargadores y más',  url: 'categorias/accesorios-consolas.html' },
        { key: 'kits',         icono: '🧰', nombre: 'Kits',         desc: 'Kits de mantenimiento y reparación', url: 'categorias/kits-consolas.html' },
        { key: 'herramientas', icono: '🛠️', nombre: 'Herramientas', desc: 'Apertura, limpieza y microsoldadura', url: 'categorias/herramientas-consolas.html' }
    ],
    computacion: [
        { key: 'escritorio', icono: '🖥️', nombre: 'PC de Escritorio', desc: 'Placas, procesadores, RAM y más', url: 'categorias/pc-escritorio.html' },
        { key: 'portatil',   icono: '💻', nombre: 'PC Portátil',      desc: 'Repuestos y accesorios para laptop', url: 'categorias/pc-portatil.html' },
        { key: 'gabinetes',  icono: '🗄️', nombre: 'Gabinetes',       desc: 'ATX, Micro-ATX, Mini-ITX y gaming', url: 'categorias/gabinetes.html' }
    ],
    herramientas: [
        { key: 'basicas',       icono: '🪛', nombre: 'Básicas',       desc: 'Destornilladores, pinzas y espátulas', url: 'categorias/herramientas-basicas.html' },
        { key: 'profesionales', icono: '🧪', nombre: 'Profesionales', desc: 'Estaciones y equipo de laboratorio',    url: 'categorias/herramientas-profesionales.html' },
        { key: 'diagnostico',   icono: '📟', nombre: 'Diagnóstico',   desc: 'Multímetros y probadores',              url: 'categorias/diagnostico.html' },
        { key: 'soldadura',     icono: '🔥', nombre: 'Soldadura',     desc: 'Soldadura y microsoldadura',            url: 'categorias/soldadura.html' }
    ],
    electronica: [
        { key: 'componentes', icono: '🔌', nombre: 'Componentes', desc: 'Resistencias, IC, MOSFET y más', url: 'categorias/componentes-electronicos.html' },
        { key: 'fuentes',     icono: '📟', nombre: 'Fuentes y Multímetros', desc: 'Fuentes de laboratorio y medición', url: 'categorias/fuentes-multimetros.html' }
    ],
    energia: [
        { key: 'baterias',  icono: '🔋', nombre: 'Baterías',        desc: 'Celular, laptop, consola y recargables', url: 'categorias/baterias.html' },
        { key: 'cargadores',icono: '🔌', nombre: 'Cargadores y Power Banks', desc: 'Carga rápida y portátil',       url: 'categorias/cargadores-powerbanks.html' },
        { key: 'ups',       icono: '🛡️', nombre: 'UPS y Protección', desc: 'Mini UPS y protectores de voltaje',    url: 'categorias/ups.html' }
    ],
    limpieza: [
        { key: 'general', icono: '🧼', nombre: 'Limpieza y Mantenimiento', desc: 'Para celular, PC y consola', url: 'categorias/limpieza-mantenimiento.html' }
    ],
    streaming: [
        { key: 'camaras',    icono: '📷', nombre: 'Cámaras y Micrófonos', desc: 'Capturadoras, mics y más', url: 'categorias/camaras-microfonos.html' },
        { key: 'iluminacion',icono: '💡', nombre: 'Iluminación y Soportes', desc: 'Aros LED, trípodes y brazos', url: 'categorias/iluminacion-soportes.html' }
    ]
};

// Sub-subcategorías (tercer nivel) — se usan solo donde la tienda lo requiere
// (ejemplo del brief: consolas → repuestos → PlayStation/Xbox/Nintendo)
const MARCAS_CONSOLA = [
    { key: 'playstation', icono: '🎮', nombre: 'PlayStation', desc: 'Repuestos PS4 y PS5', url: 'repuestos-playstation.html' },
    { key: 'xbox',        icono: '🎮', nombre: 'Xbox',        desc: 'Repuestos Xbox One y Series', url: 'repuestos-xbox.html' },
    { key: 'nintendo',    icono: '🎮', nombre: 'Nintendo',    desc: 'Repuestos Switch',    url: 'repuestos-nintendo.html' }
];

// ---- SERVICIOS (igual que el index.html original) ----
const SERVICIOS = [
    { nombre: 'Cambio de Pantalla', precio: 'Desde $45.000', desc: 'Reemplazo profesional con garantía.' },
    { nombre: 'Cambio de Batería', precio: 'Desde $35.000', desc: 'Baterías originales y genéricas.' },
    { nombre: 'Reparación de Consolas', precio: 'Desde $60.000', desc: 'PS4, PS5, Xbox, Switch.' },
    { nombre: 'Mantenimiento Preventivo', precio: 'Desde $25.000', desc: 'Limpieza y optimización.' }
];

/* ==================================================
   PRODUCTOS DEMO
   Estructura escalable (id, sku, name, category, subcategory,
   brand, model, price, oldPrice, discount, stock, images,
   description, specifications, compatibility, features, tags)
   Todos son productos DEMO para desarrollo — reemplázalos por
   datos reales / conexión a base de datos.
================================================== */
const PRODUCTOS = [
    // ---------------- CELULARES · REPUESTOS ----------------
    { id: 1, sku: 'TS-CEL-001', nombre: 'Pantalla iPhone 13 Pro Max OLED (DEMO)', cat: 'celulares', sub: 'repuestos', marca: 'Apple', modelo: 'iPhone 13 Pro Max', precio: 280000, precioAnterior: 320000, stock: 12, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600', prioridad: true, descripcion: 'Pantalla OLED de reemplazo, alto brillo y color, compatible con digitalizador táctil original.', especificaciones: ['Tecnología OLED', 'Resolución nativa', 'Incluye marco', 'Táctil calibrado de fábrica'], compatibilidad: ['iPhone 13 Pro Max'], tags: ['pantalla', 'oled', 'iphone'] },
    { id: 2, sku: 'TS-CEL-002', nombre: 'Batería Samsung S23 Ultra (DEMO)', cat: 'celulares', sub: 'repuestos', marca: 'Samsung', modelo: 'S23 Ultra', precio: 85000, stock: 20, img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600', prioridad: true, descripcion: 'Batería de reemplazo con protección contra sobrecarga y ciclo de vida certificado.', especificaciones: ['Capacidad estándar de fábrica', 'Protección de sobrecarga', 'Certificación de calidad'], compatibilidad: ['Galaxy S23 Ultra'], tags: ['bateria', 'samsung'] },
    { id: 3, sku: 'TS-CEL-003', nombre: 'Flex de Carga iPhone 14 (DEMO)', cat: 'celulares', sub: 'repuestos', marca: 'Apple', modelo: 'iPhone 14', precio: 45000, stock: 30, img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600', descripcion: 'Flex de puerto de carga con micrófono integrado, instalación directa.', especificaciones: ['Conector Lightning', 'Micrófono integrado'], compatibilidad: ['iPhone 14'], tags: ['flex', 'carga'] },
    { id: 4, sku: 'TS-CEL-004', nombre: 'Tapa Posterior Xiaomi Note 12 (DEMO)', cat: 'celulares', sub: 'repuestos', marca: 'Xiaomi', modelo: 'Redmi Note 12', precio: 32000, stock: 18, img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600', descripcion: 'Tapa trasera de reemplazo con acabado idéntico al original.', especificaciones: ['Ajuste OEM', 'Incluye adhesivo'], compatibilidad: ['Redmi Note 12'], tags: ['tapa', 'carcasa'] },
    { id: 5, sku: 'TS-CEL-005', nombre: 'Módulo de Cámara iPhone 12 (DEMO)', cat: 'celulares', sub: 'repuestos', marca: 'Apple', modelo: 'iPhone 12', precio: 65000, stock: 14, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600', descripcion: 'Módulo de cámara trasera de reemplazo, estabilización óptica funcional.', especificaciones: ['Estabilización óptica', 'Autoenfoque'], compatibilidad: ['iPhone 12'], tags: ['camara'] },
    { id: 6, sku: 'TS-CEL-006', nombre: 'Pantalla Samsung A54 (DEMO)', cat: 'celulares', sub: 'repuestos', marca: 'Samsung', modelo: 'Galaxy A54', precio: 95000, stock: 10, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600', descripcion: 'Pantalla Super AMOLED de reemplazo con marco incluido.', especificaciones: ['Super AMOLED', 'Marco incluido'], compatibilidad: ['Galaxy A54'], tags: ['pantalla'] },
    { id: 7, sku: 'TS-CEL-007', nombre: 'IC de Carga Universal (DEMO)', cat: 'celulares', sub: 'repuestos', marca: 'Genérico', modelo: 'Universal', precio: 18000, stock: 40, img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600', descripcion: 'Circuito integrado de carga para microsoldadura, uso profesional.', especificaciones: ['Componente SMD', 'Uso con estación de aire caliente'], compatibilidad: ['Varios modelos'], tags: ['ic', 'smd'] },

    // ---------------- CELULARES · ACCESORIOS ----------------
    { id: 20, sku: 'TS-ACC-001', nombre: 'Funda MagSafe Transparente (DEMO)', cat: 'celulares', sub: 'accesorios', marca: 'Genérico', precio: 28000, stock: 50, img: 'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=600', prioridad: true, descripcion: 'Funda transparente con imanes integrados compatibles con carga MagSafe.', especificaciones: ['Compatible MagSafe', 'Material TPU'], compatibilidad: ['iPhone 12 al 15'], tags: ['funda'] },
    { id: 21, sku: 'TS-ACC-002', nombre: 'Cargador 65W GaN (DEMO)', cat: 'celulares', sub: 'accesorios', marca: 'Genérico', precio: 55000, stock: 35, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600', prioridad: true, descripcion: 'Cargador rápido GaN de 65W, compacto y compatible con carga PD.', especificaciones: ['65W', 'Tecnología GaN', 'USB-C PD'], compatibilidad: ['Android y iPhone'], tags: ['cargador'] },
    { id: 22, sku: 'TS-ACC-003', nombre: 'Audífonos TWS ANC (DEMO)', cat: 'celulares', sub: 'accesorios', marca: 'Genérico', precio: 78000, stock: 25, img: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f4e?w=600', descripcion: 'Audífonos inalámbricos con cancelación activa de ruido y estuche de carga.', especificaciones: ['Cancelación activa de ruido', 'Bluetooth 5.3', 'Autonomía 24h con estuche'], compatibilidad: ['Universal'], tags: ['audifonos'] },
    { id: 23, sku: 'TS-ACC-004', nombre: 'Vidrio Templado Cerámico (DEMO)', cat: 'celulares', sub: 'accesorios', marca: 'Genérico', precio: 15000, stock: 60, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600', descripcion: 'Protector cerámico de alta transparencia y resistencia a rayones.', especificaciones: ['Dureza 9H', 'Instalación fácil'], compatibilidad: ['Múltiples modelos'], tags: ['vidrio'] },
    { id: 24, sku: 'TS-ACC-005', nombre: 'Cable USB-C a USB-C Reforzado (DEMO)', cat: 'celulares', sub: 'accesorios', marca: 'Genérico', precio: 22000, stock: 45, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600', descripcion: 'Cable trenzado reforzado de carga rápida y transferencia de datos.', especificaciones: ['1.5 m', 'Carga rápida 60W'], compatibilidad: ['USB-C'], tags: ['cable'] },
    { id: 25, sku: 'TS-ACC-006', nombre: 'Soporte Magnético para Auto (DEMO)', cat: 'celulares', sub: 'accesorios', marca: 'Genérico', precio: 25000, stock: 30, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600', descripcion: 'Soporte magnético de rejilla de ventilación con rotación 360°.', especificaciones: ['Imán N52', 'Rotación 360°'], compatibilidad: ['Universal'], tags: ['soporte'] },

    // ---------------- CELULARES · KITS ----------------
    { id: 40, sku: 'TS-KCEL-001', nombre: 'Kit Básico Celulares 12 pzas (DEMO)', cat: 'celulares', sub: 'kits', precio: 45000, stock: 22, img: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600', descripcion: 'Destornilladores, pinzas, espátulas, púas y ventosa en organizador.', especificaciones: ['12 piezas', 'Estuche organizador'], contenido: ['Destornilladores', 'Pinzas', 'Espátulas', 'Púas', 'Ventosa', 'Cepillo'], tags: ['kit'] },
    { id: 41, sku: 'TS-KCEL-002', nombre: 'Kit Técnico Celulares 25 pzas (DEMO)', cat: 'celulares', sub: 'kits', precio: 95000, stock: 15, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', prioridad: true, descripcion: 'Kit intermedio con multímetro, flux, estaño y herramientas de precisión.', especificaciones: ['25 piezas', 'Incluye multímetro'], contenido: ['Destornilladores de precisión', 'Pinzas antiestáticas', 'Multímetro', 'Flux', 'Estaño', 'Cinta Kapton'], tags: ['kit'] },
    { id: 42, sku: 'TS-KCEL-003', nombre: 'Kit Profesional Celulares (DEMO)', cat: 'celulares', sub: 'kits', precio: 320000, stock: 6, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', descripcion: 'Estación de soldadura, aire caliente, fuente DC y microscopio incluidos.', especificaciones: ['Kit completo de taller'], contenido: ['Estación de soldadura', 'Aire caliente', 'Fuente DC', 'Microscopio', 'Multímetro', 'Herramientas de apertura'], tags: ['kit', 'profesional'] },

    // ---------------- CELULARES · HERRAMIENTAS ----------------
    { id: 60, sku: 'TS-HCEL-001', nombre: 'Set Destornilladores de Precisión (DEMO)', cat: 'celulares', sub: 'herramientas', precio: 32000, stock: 28, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Set de puntas Phillips, Torx y Pentalobe para apertura de celulares.', especificaciones: ['24 puntas intercambiables'], tags: ['herramienta'] },
    { id: 61, sku: 'TS-HCEL-002', nombre: 'Ventosa Doble de Apertura (DEMO)', cat: 'celulares', sub: 'herramientas', precio: 9000, stock: 40, img: 'https://images.unsplash.com/photo-1581147036324-c1c9e5a2b2a7?w=600', descripcion: 'Ventosas dobles para separar pantallas sin dañar el marco.', especificaciones: ['Par de ventosas'], tags: ['herramienta'] },

    // ---------------- CONSOLAS · REPUESTOS ----------------
    { id: 100, sku: 'TS-CON-PS-001', nombre: 'Joystick PS5 Hall Effect (DEMO)', cat: 'consolas', sub: 'repuestos', marca_consola: 'playstation', marca: 'Sony', modelo: 'DualSense', precio: 38000, stock: 24, img: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600', prioridad: true, descripcion: 'Módulo de joystick con sensor Hall Effect, elimina el drifting.', especificaciones: ['Tecnología Hall Effect', 'Sin drift'], compatibilidad: ['Control DualSense PS5'], tags: ['joystick', 'ps5'] },
    { id: 101, sku: 'TS-CON-PS-002', nombre: 'Flex HDMI PS5 (DEMO)', cat: 'consolas', sub: 'repuestos', marca_consola: 'playstation', marca: 'Sony', precio: 55000, stock: 10, img: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600', descripcion: 'Puerto HDMI de reemplazo para consola PS5.', especificaciones: ['HDMI 2.1'], compatibilidad: ['PS5'], tags: ['hdmi', 'ps5'] },
    { id: 102, sku: 'TS-CON-PS-003', nombre: 'Pantalla PS5 Edge / Portal (DEMO)', cat: 'consolas', sub: 'repuestos', marca_consola: 'playstation', marca: 'Sony', precio: 200000, stock: 5, img: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600', descripcion: 'Pantalla de reemplazo para control/consola portátil de la familia PS5.', especificaciones: ['Panel IPS'], compatibilidad: ['PS5 Portal'], tags: ['pantalla', 'ps5'] },
    { id: 103, sku: 'TS-CON-XB-001', nombre: 'Ventilador Xbox Series X (DEMO)', cat: 'consolas', sub: 'repuestos', marca_consola: 'xbox', marca: 'Microsoft', precio: 65000, stock: 12, img: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600', descripcion: 'Ventilador de reemplazo, mismo flujo de aire que el original.', especificaciones: ['Bajo nivel de ruido'], compatibilidad: ['Xbox Series X'], tags: ['ventilador', 'xbox'] },
    { id: 104, sku: 'TS-CON-XB-002', nombre: 'Batería Mando Xbox (DEMO)', cat: 'consolas', sub: 'repuestos', marca_consola: 'xbox', marca: 'Microsoft', precio: 25000, stock: 20, img: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600', descripcion: 'Batería recargable de reemplazo para control Xbox.', especificaciones: ['1400 mAh aprox.'], compatibilidad: ['Control Xbox'], tags: ['bateria', 'xbox'] },
    { id: 105, sku: 'TS-CON-NT-001', nombre: 'Pantalla LCD Nintendo Switch (DEMO)', cat: 'consolas', sub: 'repuestos', marca_consola: 'nintendo', marca: 'Nintendo', precio: 120000, stock: 8, img: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600', prioridad: true, descripcion: 'Pantalla LCD de reemplazo para Nintendo Switch estándar.', especificaciones: ['Resolución nativa 720p'], compatibilidad: ['Switch estándar'], tags: ['pantalla', 'switch'] },
    { id: 106, sku: 'TS-CON-NT-002', nombre: 'Joy-Con Flex de Botones (DEMO)', cat: 'consolas', sub: 'repuestos', marca_consola: 'nintendo', marca: 'Nintendo', precio: 15000, stock: 30, img: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600', descripcion: 'Flex de botones de reemplazo para Joy-Con.', especificaciones: ['Compatible ambos lados'], compatibilidad: ['Joy-Con'], tags: ['joycon'] },

    // ---------------- CONSOLAS · ACCESORIOS ----------------
    { id: 120, sku: 'TS-ACCC-001', nombre: 'Base de Carga Mandos PS5 (DEMO)', cat: 'consolas', sub: 'accesorios', precio: 35000, stock: 18, img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600', prioridad: true, descripcion: 'Base de carga dual para controles DualSense.', especificaciones: ['Carga dual', 'Indicador LED'], tags: ['carga', 'ps5'] },
    { id: 121, sku: 'TS-ACCC-002', nombre: 'Estuche Rígido Nintendo Switch (DEMO)', cat: 'consolas', sub: 'accesorios', precio: 22000, stock: 22, img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600', descripcion: 'Estuche rígido de transporte con espacio para juegos.', especificaciones: ['Compartimento para 10 juegos'], tags: ['estuche'] },
    { id: 122, sku: 'TS-ACCC-003', nombre: 'Audífonos Gaming con Micrófono (DEMO)', cat: 'consolas', sub: 'accesorios', precio: 68000, stock: 16, img: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f4e?w=600', descripcion: 'Audífonos gaming con sonido envolvente y micrófono desmontable.', especificaciones: ['Sonido envolvente 7.1', 'Micrófono desmontable'], tags: ['audifonos', 'gaming'] },
    { id: 123, sku: 'TS-ACCC-004', nombre: 'Cable HDMI 2.1 8K (DEMO)', cat: 'consolas', sub: 'accesorios', precio: 42000, stock: 26, img: 'https://images.unsplash.com/photo-1623944889288-cd1476d02e71?w=600', descripcion: 'Cable HDMI de alta velocidad compatible con 4K a 120Hz.', especificaciones: ['HDMI 2.1', '4K@120Hz'], tags: ['cable', 'hdmi'] },

    // ---------------- CONSOLAS · KITS ----------------
    { id: 140, sku: 'TS-KCON-001', nombre: 'Kit de Limpieza para Consolas (DEMO)', cat: 'consolas', sub: 'kits', precio: 35000, stock: 20, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Aire comprimido, brochas y paños para mantenimiento preventivo.', especificaciones: ['6 piezas'], contenido: ['Aire comprimido', 'Brocha antiestática', 'Paños de microfibra', 'Alcohol isopropílico'], tags: ['kit', 'limpieza'] },
    { id: 141, sku: 'TS-KCON-002', nombre: 'Kit Profesional de Reparación Consolas (DEMO)', cat: 'consolas', sub: 'kits', precio: 140000, stock: 7, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', prioridad: true, descripcion: 'Destornilladores, ventosas, pasta térmica y herramientas de apertura.', especificaciones: ['18 piezas'], contenido: ['Destornilladores', 'Pasta térmica', 'Herramientas de apertura', 'Pinzas'], tags: ['kit', 'profesional'] },

    // ---------------- CONSOLAS · HERRAMIENTAS ----------------
    { id: 160, sku: 'TS-HCON-001', nombre: 'Kit Destornilladores para Consolas (DEMO)', cat: 'consolas', sub: 'herramientas', precio: 52000, stock: 16, img: 'https://images.unsplash.com/photo-1581147036324-c1c9e5a2b2a7?w=600', descripcion: 'Set Torx de seguridad para apertura de consolas PlayStation, Xbox y Nintendo.', especificaciones: ['Puntas T6 a T10 de seguridad'], tags: ['herramienta'] },

    // ---------------- COMPUTACIÓN ----------------
    { id: 200, sku: 'TS-PC-001', nombre: 'SSD NVMe 1TB (DEMO)', cat: 'computacion', sub: 'escritorio', precio: 250000, stock: 15, img: 'https://images.unsplash.com/photo-1531492746076-161ba9bf7ab6?w=600', prioridad: true, descripcion: 'Unidad de estado sólido NVMe de alta velocidad para PC de escritorio.', especificaciones: ['Interfaz NVMe PCIe', 'Lectura hasta 3500MB/s'], tags: ['ssd'] },
    { id: 201, sku: 'TS-PC-002', nombre: 'Fuente de Poder 650W 80+ (DEMO)', cat: 'computacion', sub: 'escritorio', precio: 180000, stock: 12, img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600', descripcion: 'Fuente de poder certificada 80+ Bronze para PC de escritorio.', especificaciones: ['650W', 'Certificación 80+ Bronze'], tags: ['fuente'] },
    { id: 202, sku: 'TS-PC-003', nombre: 'Pasta Térmica Alta Conductividad (DEMO)', cat: 'computacion', sub: 'escritorio', precio: 15000, stock: 40, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600', descripcion: 'Pasta térmica de alta conductividad para CPU y GPU.', especificaciones: ['Jeringa 3g'], tags: ['pasta termica'] },
    { id: 210, sku: 'TS-LAP-001', nombre: 'Pantalla Laptop 15.6" FHD (DEMO)', cat: 'computacion', sub: 'portatil', precio: 210000, stock: 9, img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600', prioridad: true, descripcion: 'Pantalla de reemplazo Full HD para laptops de 15.6 pulgadas.', especificaciones: ['1920x1080', 'Conector 30 pines'], tags: ['pantalla', 'laptop'] },
    { id: 211, sku: 'TS-LAP-002', nombre: 'Teclado Laptop Universal (DEMO)', cat: 'computacion', sub: 'portatil', precio: 68000, stock: 18, img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600', descripcion: 'Teclado de reemplazo retroiluminado para múltiples modelos.', especificaciones: ['Retroiluminado', 'Layout español'], tags: ['teclado'] },
    { id: 212, sku: 'TS-LAP-003', nombre: 'Base Refrigerante para Laptop (DEMO)', cat: 'computacion', sub: 'portatil', precio: 55000, stock: 22, img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600', descripcion: 'Base refrigerante con doble ventilador silencioso y luces RGB.', especificaciones: ['2 ventiladores 140mm', 'RGB'], tags: ['base', 'refrigeracion'] },
    { id: 220, sku: 'TS-GAB-001', nombre: 'Gabinete ATX Gaming RGB (DEMO)', cat: 'computacion', sub: 'gabinetes', precio: 220000, stock: 10, img: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600', prioridad: true, descripcion: 'Gabinete ATX con panel lateral de vidrio templado y ventiladores RGB.', especificaciones: ['Formato ATX', '3 ventiladores RGB incluidos'], tags: ['gabinete'] },
    { id: 221, sku: 'TS-GAB-002', nombre: 'Kit Ventiladores RGB 120mm x3 (DEMO)', cat: 'computacion', sub: 'gabinetes', precio: 95000, stock: 20, img: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600', descripcion: 'Set de tres ventiladores RGB sincronizables con controlador incluido.', especificaciones: ['120mm', 'Controlador incluido'], tags: ['ventilador', 'rgb'] },

    // ---------------- HERRAMIENTAS ----------------
    { id: 300, sku: 'TS-HB-001', nombre: 'Set Destornilladores Multipunta 32en1 (DEMO)', cat: 'herramientas', sub: 'basicas', precio: 38000, stock: 30, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', prioridad: true, descripcion: 'Set de destornilladores de precisión con 32 puntas intercambiables.', especificaciones: ['32 puntas', 'Estuche incluido'], tags: ['herramienta'] },
    { id: 301, sku: 'TS-HB-002', nombre: 'Pinzas Antiestáticas de Precisión (DEMO)', cat: 'herramientas', sub: 'basicas', precio: 15000, stock: 35, img: 'https://images.unsplash.com/photo-1581147036324-c1c9e5a2b2a7?w=600', descripcion: 'Pinzas antiestáticas curvas para manejo de componentes SMD.', especificaciones: ['Punta curva', 'Antiestática'], tags: ['pinzas'] },
    { id: 310, sku: 'TS-HP-001', nombre: 'Microscopio Digital de Reparación (DEMO)', cat: 'herramientas', sub: 'profesionales', precio: 380000, stock: 5, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', prioridad: true, descripcion: 'Microscopio digital con pantalla integrada para microsoldadura.', especificaciones: ['Zoom digital', 'Pantalla 10"'], tags: ['microscopio'] },
    { id: 311, sku: 'TS-HP-002', nombre: 'Tapete Antiestático de Reparación (DEMO)', cat: 'herramientas', sub: 'profesionales', precio: 45000, stock: 20, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', descripcion: 'Tapete de trabajo antiestático con divisiones magnéticas.', especificaciones: ['Antiestático', 'Divisiones magnéticas'], tags: ['tapete'] },
    { id: 320, sku: 'TS-DIAG-001', nombre: 'Multímetro Digital Profesional (DEMO)', cat: 'herramientas', sub: 'diagnostico', precio: 68000, stock: 18, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', prioridad: true, descripcion: 'Multímetro digital true RMS con medición de continuidad y capacitancia.', especificaciones: ['True RMS', 'Pantalla retroiluminada'], tags: ['multimetro'] },
    { id: 321, sku: 'TS-DIAG-002', nombre: 'Probador USB-C Multifunción (DEMO)', cat: 'herramientas', sub: 'diagnostico', precio: 32000, stock: 24, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Medidor de voltaje, corriente y potencia para puertos USB-C.', especificaciones: ['Lectura en tiempo real'], tags: ['probador'] },
    { id: 330, sku: 'TS-SOLD-001', nombre: 'Estación de Soldadura y Aire Caliente 2en1 (DEMO)', cat: 'herramientas', sub: 'soldadura', precio: 320000, stock: 6, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', prioridad: true, descripcion: 'Estación combinada de soldadura y aire caliente con control digital de temperatura.', especificaciones: ['Control digital de temperatura', 'Display LED'], tags: ['soldadura'] },
    { id: 331, sku: 'TS-SOLD-002', nombre: 'Kit Flux y Estaño para Microsoldadura (DEMO)', cat: 'herramientas', sub: 'soldadura', precio: 28000, stock: 30, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', descripcion: 'Flux en jeringa y estaño de bajo punto de fusión para microsoldadura.', especificaciones: ['Flux de precisión', 'Estaño 0.3mm'], tags: ['flux', 'estano'] },

    // ---------------- KITS TECH SAVVY (productos propios) ----------------
    { id: 400, sku: 'TS-KIT-MOBILE', nombre: 'TECH SAVVY MOBILE KIT (DEMO)', cat: 'kits', precio: 95000, precioAnterior: 120000, stock: 14, img: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600', prioridad: true, descripcion: 'Kit completo para reparación de celulares: herramientas, pinzas y consumibles esenciales.', especificaciones: ['25 piezas'], contenido: ['Destornilladores de precisión', 'Pinzas antiestáticas', 'Multímetro', 'Flux y estaño'], tags: ['kit', 'mobile'] },
    { id: 401, sku: 'TS-KIT-CONSOLE', nombre: 'TECH SAVVY CONSOLE KIT (DEMO)', cat: 'kits', precio: 140000, stock: 10, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', descripcion: 'Kit especializado para mantenimiento y reparación de consolas de videojuego.', especificaciones: ['18 piezas'], contenido: ['Destornilladores Torx', 'Pasta térmica', 'Herramientas de apertura'], tags: ['kit', 'console'] },
    { id: 402, sku: 'TS-KIT-PC', nombre: 'TECH SAVVY PC KIT (DEMO)', cat: 'kits', precio: 130000, stock: 8, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Kit de mantenimiento y ensamblaje para computadores de escritorio.', especificaciones: ['20 piezas'], contenido: ['Destornilladores', 'Pasta térmica', 'Brazalete antiestático'], tags: ['kit', 'pc'] },
    { id: 403, sku: 'TS-KIT-LAPTOP', nombre: 'TECH SAVVY LAPTOP KIT (DEMO)', cat: 'kits', precio: 135000, stock: 8, img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600', descripcion: 'Kit especializado para apertura y mantenimiento de laptops.', especificaciones: ['22 piezas'], contenido: ['Destornilladores de precisión', 'Espátulas', 'Ventosas'], tags: ['kit', 'laptop'] },
    { id: 404, sku: 'TS-KIT-ELECTRONICS', nombre: 'TECH SAVVY ELECTRONICS KIT (DEMO)', cat: 'kits', precio: 110000, stock: 12, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Kit de componentes y herramientas básicas de electrónica.', especificaciones: ['Componentes variados + herramientas'], contenido: ['Multímetro', 'Resistencias surtidas', 'Cautín básico'], tags: ['kit', 'electronica'] },
    { id: 405, sku: 'TS-KIT-MICROPRO', nombre: 'TECH SAVVY MICRO PRO (DEMO)', cat: 'kits', precio: 420000, precioAnterior: 480000, stock: 4, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', prioridad: true, descripcion: 'Kit profesional de microsoldadura con microscopio y estación de aire caliente.', especificaciones: ['Kit de taller profesional'], contenido: ['Microscopio digital', 'Estación de aire caliente', 'Fuente DC', 'Multímetro'], tags: ['kit', 'micro'] },
    { id: 406, sku: 'TS-KIT-MASTER', nombre: 'TECH SAVVY MASTER KIT (DEMO)', cat: 'kits', precio: 650000, precioAnterior: 750000, stock: 3, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600', prioridad: true, descripcion: 'El kit más completo: herramientas, diagnóstico, soldadura y consumibles para taller profesional.', especificaciones: ['Kit de taller completo'], contenido: ['Estación de soldadura', 'Aire caliente', 'Microscopio', 'Multímetro', 'Fuente DC', 'Set de destornilladores'], tags: ['kit', 'master'] },

    // ---------------- ELECTRÓNICA ----------------
    { id: 500, sku: 'TS-ELEC-001', nombre: 'Kit Resistencias Surtidas 600pzas (DEMO)', cat: 'electronica', sub: 'componentes', precio: 22000, stock: 30, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Set de resistencias de valores surtidos organizadas en caja.', especificaciones: ['600 piezas', '30 valores'], tags: ['resistencias'] },
    { id: 501, sku: 'TS-ELEC-002', nombre: 'IC de Audio Universal (DEMO)', cat: 'electronica', sub: 'componentes', precio: 20000, stock: 25, img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600', descripcion: 'Circuito integrado de audio para reparación a nivel de placa.', especificaciones: ['Componente SMD'], tags: ['ic'] },
    { id: 510, sku: 'TS-FUENT-001', nombre: 'Fuente de Laboratorio Regulable (DEMO)', cat: 'electronica', sub: 'fuentes', precio: 210000, stock: 8, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', prioridad: true, descripcion: 'Fuente DC regulable con doble display digital de voltaje y corriente.', especificaciones: ['0-30V / 0-5A', 'Doble display'], tags: ['fuente'] },
    { id: 511, sku: 'TS-FUENT-002', nombre: 'Multímetro de Banco True RMS (DEMO)', cat: 'electronica', sub: 'fuentes', precio: 145000, stock: 10, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Multímetro de banco de alta precisión con conectividad USB.', especificaciones: ['True RMS', 'Salida USB'], tags: ['multimetro'] },

    // ---------------- ENERGÍA ----------------
    { id: 600, sku: 'TS-ENE-001', nombre: 'Power Bank 20000mAh (DEMO)', cat: 'energia', sub: 'cargadores', precio: 75000, stock: 22, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600', prioridad: true, descripcion: 'Batería portátil de alta capacidad con carga rápida bidireccional.', especificaciones: ['20000 mAh', 'Carga rápida PD 20W'], tags: ['powerbank'] },
    { id: 601, sku: 'TS-ENE-002', nombre: 'Power Bank Magnético MagSafe (DEMO)', cat: 'energia', sub: 'cargadores', precio: 88000, stock: 16, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600', descripcion: 'Power bank magnético compatible con carga inalámbrica MagSafe.', especificaciones: ['5000 mAh', 'Compatible MagSafe'], tags: ['powerbank'] },
    { id: 610, sku: 'TS-BAT-001', nombre: 'Batería Universal Laptop (DEMO)', cat: 'energia', sub: 'baterias', precio: 120000, stock: 12, img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600', descripcion: 'Batería de reemplazo compatible con múltiples modelos de laptop.', especificaciones: ['Compatibilidad múltiple'], tags: ['bateria'] },
    { id: 611, sku: 'TS-BAT-002', nombre: 'Pilas Recargables AA x4 (DEMO)', cat: 'energia', sub: 'baterias', precio: 25000, stock: 40, img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600', descripcion: 'Pack de 4 pilas recargables de alta duración.', especificaciones: ['2600 mAh cada una'], tags: ['pilas'] },
    { id: 620, sku: 'TS-UPS-001', nombre: 'Mini UPS para Router (DEMO)', cat: 'energia', sub: 'ups', precio: 65000, stock: 14, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600', prioridad: true, descripcion: 'Respaldo de energía compacto para mantener el internet activo ante cortes de luz.', especificaciones: ['Autonomía hasta 3h'], tags: ['ups'] },

    // ---------------- LIMPIEZA ----------------
    { id: 700, sku: 'TS-LIMP-001', nombre: 'Kit de Limpieza Técnica Completo (DEMO)', cat: 'limpieza', sub: 'general', precio: 38000, stock: 25, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', prioridad: true, descripcion: 'Aire comprimido, brochas, paños y alcohol isopropílico en un solo kit.', especificaciones: ['7 elementos'], contenido: ['Aire comprimido', 'Brocha antiestática', 'Paños de microfibra', 'Alcohol isopropílico', 'Gel limpiador'], tags: ['limpieza'] },
    { id: 701, sku: 'TS-LIMP-002', nombre: 'Alcohol Isopropílico 99% 500ml (DEMO)', cat: 'limpieza', sub: 'general', precio: 18000, stock: 35, img: 'https://images.unsplash.com/photo-1605152276897-4f618f4f8f14?w=600', descripcion: 'Alcohol isopropílico de alta pureza para limpieza de placas y componentes.', especificaciones: ['99% pureza', '500ml'], tags: ['alcohol'] },

    // ---------------- STREAMING ----------------
    { id: 800, sku: 'TS-STR-001', nombre: 'Aro de Luz LED 10" con Trípode (DEMO)', cat: 'streaming', sub: 'iluminacion', precio: 65000, stock: 18, img: 'https://images.unsplash.com/photo-1606166187734-a4cb74079037?w=600', prioridad: true, descripcion: 'Aro de luz regulable con trípode ajustable y soporte para celular.', especificaciones: ['3 tonos de luz', 'Trípode 2m'], tags: ['iluminacion'] },
    { id: 801, sku: 'TS-STR-002', nombre: 'Micrófono Lavalier Inalámbrico (DEMO)', cat: 'streaming', sub: 'camaras', precio: 95000, stock: 12, img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600', prioridad: true, descripcion: 'Micrófono lavalier inalámbrico compatible con celular y cámara.', especificaciones: ['Alcance 50m', 'Cancelación de ruido'], tags: ['microfono'] },
    { id: 802, sku: 'TS-STR-003', nombre: 'Capturadora de Video HDMI (DEMO)', cat: 'streaming', sub: 'camaras', precio: 110000, stock: 9, img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600', descripcion: 'Capturadora HDMI a USB para transmisión en vivo y grabación.', especificaciones: ['1080p 60fps', 'Plug and play'], tags: ['capturadora'] },
    { id: 803, sku: 'TS-STR-004', nombre: 'Brazo Articulado para Micrófono (DEMO)', cat: 'streaming', sub: 'iluminacion', precio: 48000, stock: 15, img: 'https://images.unsplash.com/photo-1606166187734-a4cb74079037?w=600', descripcion: 'Brazo articulado de escritorio para micrófono de estudio.', especificaciones: ['Soporta hasta 1.5kg'], tags: ['soporte'] }
];

// Marca productos en OFERTA automáticamente cuando tienen precioAnterior
PRODUCTOS.forEach(p => {
    if (p.precioAnterior && p.precioAnterior > p.precio) {
        p.oferta = true;
        p.descuento = Math.round(100 - (p.precio / p.precioAnterior) * 100);
    }
});
