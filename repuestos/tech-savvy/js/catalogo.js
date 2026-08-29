/* ==================================================
   TECH SAVVY — RENDERIZADO DE CATÁLOGO
   Funciones reutilizables para páginas de categoría,
   subcategoría y ofertas. Requiere data.js + global.js.
================================================== */

// Grid de categorías principales (index.html)
function renderCategoriasGrid(contenedorId) {
    const el = document.getElementById(contenedorId);
    if (!el) return;
    el.innerHTML = CATEGORIAS.map(c => `
        <a href="${c.url}" class="categoria-card" data-cat="${c.key}">
            <span class="icono">${c.icono}</span>
            <h3>${c.nombre}</h3>
            <span class="sub">${c.desc}</span>
        </a>`).join('');
}

// Grid de subcategorías (páginas hub: celulares.html, consolas.html, etc.)
function renderSubcategoriasGrid(contenedorId, catKey) {
    const el = document.getElementById(contenedorId);
    if (!el) return;
    const subs = SUBCATEGORIAS[catKey] || [];
    el.innerHTML = subs.map(s => `
        <a href="${s.url}" class="subcategoria-card">
            <span class="icono">${s.icono}</span>
            <h3>${s.nombre}</h3>
            <p>${s.desc}</p>
            <span class="flecha">Ver productos →</span>
        </a>`).join('');
}

// Grid de marcas de consola (repuestos-consolas.html)
function renderMarcasConsolaGrid(contenedorId) {
    const el = document.getElementById(contenedorId);
    if (!el) return;
    el.innerHTML = MARCAS_CONSOLA.map(m => `
        <a href="${m.url}" class="subcategoria-card">
            <span class="icono">${m.icono}</span>
            <h3>${m.nombre}</h3>
            <p>${m.desc}</p>
            <span class="flecha">Ver productos →</span>
        </a>`).join('');
}

// Tarjeta de producto (reutiliza .producto-card del diseño original)
function tarjetaProducto(p) {
    const oferta = p.oferta ? `<span class="badge-descuento">-${p.descuento}%</span>` : (p.prioridad ? '<span class="badge-prioridad">🔥 Más pedido</span>' : '');
    const precioAnterior = p.precioAnterior ? `<span class="precio-anterior-card">${formatearPrecio(p.precioAnterior)}</span>` : '';
    return `
        <a href="${raizSitio()}producto.html?id=${p.id}" class="producto-card" style="text-decoration:none; color:inherit; display:block;">
            ${oferta}
            <img src="${p.img}" class="producto-img" onerror="this.src='https://via.placeholder.com/300'">
            <div class="producto-body">
                <div class="producto-categoria">${(p.marca ? p.marca + ' · ' : '') + (p.sub || p.cat)}</div>
                <h3>${p.nombre}</h3>
                <div class="producto-precio">${precioAnterior}${formatearPrecio(p.precio)}</div>
                <button class="btn-agregar" data-id="${p.id}" onclick="event.preventDefault(); event.stopPropagation(); agregarAlCarrito(${p.id});">🛒 Agregar</button>
            </div>
        </a>`;
}

// Renderiza un grid de productos filtrado + barra de filtros/orden
// filtro: { cat, sub, marca_consola, oferta:true }
function renderProductosCatalogo(opts) {
    const { contenedorId, filtro, filtroBarraId, contadorId } = opts;
    const el = document.getElementById(contenedorId);
    if (!el) return;

    function coincide(p) {
        if (filtro.cat && p.cat !== filtro.cat) return false;
        if (filtro.sub && p.sub !== filtro.sub) return false;
        if (filtro.marca_consola && p.marca_consola !== filtro.marca_consola) return false;
        if (filtro.oferta && !p.oferta) return false;
        return true;
    }

    let lista = PRODUCTOS.filter(coincide);

    function ordenar(criterio) {
        let out = lista.slice();
        if (criterio === 'precio-asc') out.sort((a, b) => a.precio - b.precio);
        else if (criterio === 'precio-desc') out.sort((a, b) => b.precio - a.precio);
        else if (criterio === 'nuevos') out.sort((a, b) => b.id - a.id);
        else if (criterio === 'vendidos') out.sort((a, b) => (b.prioridad === true) - (a.prioridad === true));
        return out;
    }

    function pintar(criterio) {
        const out = ordenar(criterio || 'relevantes');
        el.innerHTML = out.length
            ? out.map(tarjetaProducto).join('')
            : '<p style="grid-column:1/-1; text-align:center; color:var(--gris-claro); padding:40px 0;">No hay productos que coincidan con el filtro seleccionado.</p>';
        const contador = contadorId ? document.getElementById(contadorId) : null;
        if (contador) contador.textContent = out.length + (out.length === 1 ? ' producto' : ' productos');
    }

    pintar('relevantes');

    const selOrden = document.getElementById('ordenSelect');
    if (selOrden) selOrden.addEventListener('change', () => pintar(selOrden.value));
}

// Página de producto individual (producto.html?id=)
function renderPaginaProducto() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10);
    const p = PRODUCTOS.find(x => x.id === id);
    const cont = document.getElementById('productoDetalleContenedor');
    if (!cont) return;

    if (!p) {
        cont.innerHTML = '<div style="max-width:700px;margin:60px auto;text-align:center;padding:0 24px;"><h2>Producto no encontrado</h2><p style="color:var(--gris-claro);margin:12px 0 24px;">El producto que buscas no existe o fue removido.</p><a href="index.html" class="btn-primario">← Volver al inicio</a></div>';
        document.title = 'Producto no encontrado | TECH SAVVY';
        return;
    }

    document.title = p.nombre + ' | TECH SAVVY';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', p.descripcion || p.nombre);

    const stockTxt = p.stock > 0 ? `<span class="detalle-stock disponible">✔ Disponible (${p.stock} en stock)</span>` : `<span class="detalle-stock agotado">✖ Agotado</span>`;
    const precioAnterior = p.precioAnterior ? `<span class="detalle-precio-anterior">${formatearPrecio(p.precioAnterior)}</span>` : '';
    const descuento = p.descuento ? `<span class="detalle-descuento">-${p.descuento}%</span>` : '';

    cont.innerHTML = `
        <div class="galeria">
            <img id="imgPrincipal" src="${p.img}" class="galeria-principal" onerror="this.src='https://via.placeholder.com/600'">
            <div class="galeria-miniaturas">
                <img src="${p.img}" class="activa" onclick="document.getElementById('imgPrincipal').src=this.src; document.querySelectorAll('.galeria-miniaturas img').forEach(i=>i.classList.remove('activa')); this.classList.add('activa');">
            </div>
        </div>
        <div class="detalle-info">
            <span class="demo-aviso">Producto DEMO — datos de ejemplo</span><br>
            <div class="detalle-marca">${p.marca || 'TECH SAVVY'}${p.modelo ? ' · ' + p.modelo : ''}</div>
            <h1 class="detalle-titulo">${p.nombre}</h1>
            <div class="detalle-sku">SKU: ${p.sku}</div>
            <div class="detalle-precios">
                <span class="detalle-precio-actual">${formatearPrecio(p.precio)}</span>
                ${precioAnterior}${descuento}
            </div>
            ${stockTxt}
            <div class="selector-cantidad">
                <button id="btnMenos" type="button">−</button>
                <input type="number" id="inputCantidad" value="1" min="1" max="${Math.max(p.stock,1)}">
                <button id="btnMas" type="button">+</button>
            </div>
            <div class="detalle-botones">
                <button class="btn-primario" id="btnComprarAhora" style="justify-content:center;">⚡ Comprar Ahora</button>
                <button class="btn-secundario-detalle" id="btnAgregarDetalle">🛒 Agregar al Carrito</button>
                <a id="linkWhatsappProducto" class="btn-whatsapp-detalle" target="_blank">💬 Consultar por WhatsApp</a>
            </div>

            <div class="detalle-tabs">
                <button class="detalle-tab-btn activo" data-tab="desc">Descripción</button>
                <button class="detalle-tab-btn" data-tab="specs">Especificaciones</button>
                ${p.contenido ? '<button class="detalle-tab-btn" data-tab="contenido">Contenido</button>' : ''}
                ${p.compatibilidad ? '<button class="detalle-tab-btn" data-tab="compat">Compatibilidad</button>' : ''}
                <button class="detalle-tab-btn" data-tab="garantia">Garantía y envío</button>
            </div>
            <div class="detalle-tab-panel activo" data-panel="desc"><p>${p.descripcion || ''}</p></div>
            <div class="detalle-tab-panel" data-panel="specs"><ul>${(p.especificaciones||[]).map(e=>`<li>${e}</li>`).join('') || '<li>Sin especificaciones registradas.</li>'}</ul></div>
            ${p.contenido ? `<div class="detalle-tab-panel" data-panel="contenido"><ul>${p.contenido.map(e=>`<li>${e}</li>`).join('')}</ul></div>` : ''}
            ${p.compatibilidad ? `<div class="detalle-tab-panel" data-panel="compat"><ul>${p.compatibilidad.map(e=>`<li>${e}</li>`).join('')}</ul></div>` : ''}
            <div class="detalle-tab-panel" data-panel="garantia"><p>Garantía de 30 días por defectos de fábrica en repuestos y accesorios. Los envíos se realizan a todo Colombia; el costo depende de tu ubicación. Consulta disponibilidad exacta por WhatsApp antes de comprar.</p></div>
        </div>`;

    // Tabs
    document.querySelectorAll('.detalle-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.detalle-tab-btn').forEach(b => b.classList.remove('activo'));
            document.querySelectorAll('.detalle-tab-panel').forEach(pn => pn.classList.remove('activo'));
            btn.classList.add('activo');
            document.querySelector(`.detalle-tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add('activo');
        });
    });

    // Cantidad
    const inputCant = document.getElementById('inputCantidad');
    document.getElementById('btnMenos').onclick = () => { inputCant.value = Math.max(1, parseInt(inputCant.value||1) - 1); };
    document.getElementById('btnMas').onclick = () => { inputCant.value = parseInt(inputCant.value||1) + 1; };

    // Botones de acción
    document.getElementById('btnAgregarDetalle').onclick = () => agregarAlCarrito(p.id, parseInt(inputCant.value || 1, 10));
    document.getElementById('btnComprarAhora').onclick = () => {
        agregarAlCarrito(p.id, parseInt(inputCant.value || 1, 10));
        document.getElementById('btnAbrirCarrito').click();
    };
    document.getElementById('linkWhatsappProducto').href = linkWhatsApp(mensajeWhatsAppProducto(p, parseInt(inputCant.value || 1, 10)));
    inputCant.addEventListener('input', () => {
        document.getElementById('linkWhatsappProducto').href = linkWhatsApp(mensajeWhatsAppProducto(p, parseInt(inputCant.value || 1, 10)));
    });

    // Breadcrumb dinámico
    const bc = document.getElementById('breadcrumbProducto');
    if (bc) bc.textContent = p.nombre;

    // Relacionados
    const relCont = document.getElementById('productosRelacionados');
    if (relCont) {
        const relacionados = PRODUCTOS.filter(x => x.id !== p.id && x.cat === p.cat).slice(0, 4);
        relCont.innerHTML = relacionados.length ? relacionados.map(tarjetaProducto).join('') : '<p style="color:var(--gris-claro);">No hay productos relacionados por ahora.</p>';
    }
}
