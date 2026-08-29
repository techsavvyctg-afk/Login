/* ==================================================
   TECH SAVVY — JS GLOBAL COMPARTIDO
   Carrito, WhatsApp, menú móvil y buscador global.
   Requiere que data.js esté cargado antes que este archivo.
================================================== */

function formatearPrecio(v) { return '$' + Number(v).toLocaleString('es-CO'); }

/* ---------------- CARRITO ---------------- */
let carrito = JSON.parse(localStorage.getItem('carrito_tech')) || [];

function guardarCarrito() { localStorage.setItem('carrito_tech', JSON.stringify(carrito)); }
function totalCarrito() { return carrito.reduce((t, i) => t + (i.precio * i.cantidad), 0); }
function cantidadTotalCarrito() { return carrito.reduce((t, i) => t + i.cantidad, 0); }

function agregarAlCarrito(id, cantidad) {
    cantidad = cantidad || 1;
    const p = PRODUCTOS.find(x => x.id === id);
    if (!p) return;
    const existe = carrito.find(i => i.id === id);
    if (existe) existe.cantidad += cantidad;
    else carrito.push({ id: p.id, sku: p.sku, nombre: p.nombre, precio: p.precio, img: p.img, cantidad: cantidad });
    guardarCarrito();
    actualizarCarritoUI();
}
window.agregarAlCarrito = agregarAlCarrito;

window.eliminarItemCarrito = function (id) {
    carrito = carrito.filter(i => i.id !== id);
    guardarCarrito();
    actualizarCarritoUI();
};

window.cambiarCantidadCarrito = function (id, delta) {
    const item = carrito.find(i => i.id === id);
    if (!item) return;
    item.cantidad += delta;
    if (item.cantidad <= 0) { carrito = carrito.filter(i => i.id !== id); }
    guardarCarrito();
    actualizarCarritoUI();
};

function actualizarCarritoUI() {
    const badge = document.getElementById('badgeCarrito');
    const contadorPanel = document.getElementById('carritoContadorPanel');
    const totalEl = document.getElementById('carritoTotal');
    const items = document.getElementById('carritoItems');
    if (badge) badge.textContent = cantidadTotalCarrito();
    if (contadorPanel) contadorPanel.textContent = cantidadTotalCarrito();
    if (totalEl) totalEl.textContent = formatearPrecio(totalCarrito());
    if (items) {
        if (!carrito.length) {
            items.innerHTML = '<p style="padding:20px; text-align:center;">Carrito vacío</p>';
        } else {
            items.innerHTML = carrito.map(i => `
                <div class="item-carrito">
                    <img src="${i.img}" onerror="this.src='https://via.placeholder.com/50'">
                    <div style="flex:1;">
                        <strong>${i.nombre}</strong><br>
                        ${formatearPrecio(i.precio)}
                        <div style="display:flex; align-items:center; gap:8px; margin-top:4px;">
                            <button onclick="cambiarCantidadCarrito(${i.id},-1)" style="background:#222;border:1px solid #333;color:#fff;border-radius:50%;width:22px;height:22px;cursor:pointer;">−</button>
                            <span>${i.cantidad}</span>
                            <button onclick="cambiarCantidadCarrito(${i.id},1)" style="background:#222;border:1px solid #333;color:#fff;border-radius:50%;width:22px;height:22px;cursor:pointer;">+</button>
                        </div>
                    </div>
                    <button onclick="eliminarItemCarrito(${i.id})" style="background:none; border:none; color:var(--error); cursor:pointer;">🗑️</button>
                </div>`).join('');
        }
    }
}

function mensajeWhatsAppCarrito() {
    const lineas = carrito.map(i => `- ${i.nombre} x${i.cantidad} = ${formatearPrecio(i.precio * i.cantidad)}`).join('\n');
    return `Hola TECH SAVVY, quiero hacer este pedido:\n\n${lineas}\n\nTotal: ${formatearPrecio(totalCarrito())}\n\n¿Está disponible?`;
}

function mensajeWhatsAppProducto(p, cantidad) {
    cantidad = cantidad || 1;
    return `Hola TECH SAVVY, estoy interesado en:\n\nProducto: ${p.nombre}\nSKU: ${p.sku}\nPrecio: ${formatearPrecio(p.precio)}\nCantidad: ${cantidad}\n\n¿Está disponible?`;
}

function linkWhatsApp(mensaje) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
window.linkWhatsApp = linkWhatsApp;
window.mensajeWhatsAppCarrito = mensajeWhatsAppCarrito;
window.mensajeWhatsAppProducto = mensajeWhatsAppProducto;

function inicializarCarritoPanel() {
    const panel = document.getElementById('carritoPanel');
    const overlay = document.getElementById('overlayCarrito');
    const btnAbrir = document.getElementById('btnAbrirCarrito');
    const btnCerrar = document.getElementById('btnCerrarCarrito');
    if (btnAbrir) btnAbrir.onclick = () => { panel.classList.add('activo'); overlay.classList.add('activo'); };
    if (btnCerrar) btnCerrar.onclick = () => { panel.classList.remove('activo'); overlay.classList.remove('activo'); };
    if (overlay) overlay.onclick = () => { panel.classList.remove('activo'); overlay.classList.remove('activo'); };

    const btnFinalizar = document.getElementById('btnFinalizarCompra');
    if (btnFinalizar) btnFinalizar.addEventListener('click', () => {
        if (carrito.length === 0) { alert('Agrega productos al carrito.'); return; }
        const modal = document.getElementById('modalPago');
        if (modal) modal.classList.add('activo');
    });
    const btnCancelarPago = document.getElementById('btnCancelarPago');
    if (btnCancelarPago) btnCancelarPago.onclick = () => document.getElementById('modalPago').classList.remove('activo');

    document.querySelectorAll('.opcion-pago').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.opcion-pago').forEach(b => b.classList.remove('seleccionado'));
            this.classList.add('seleccionado');
            const metodo = this.dataset.metodo;
            const mensaje = `🛒 *Pedido Tech Savvy CTG*\n${carrito.map(i => `- ${i.nombre} x${i.cantidad} = ${formatearPrecio(i.precio * i.cantidad)}`).join('\n')}\nTotal: ${formatearPrecio(totalCarrito())}\n\n💳 *Pago:* ${metodo}`;
            window.open(linkWhatsApp(mensaje), '_blank');
            document.getElementById('modalPago').classList.remove('activo');
        });
    });
}

/* ---------------- MENÚ MÓVIL ---------------- */
function inicializarMenuMovil() {
    const btn = document.getElementById('btnMenuMovil');
    const nav = document.getElementById('navLinks');
    if (btn && nav) btn.onclick = () => nav.classList.toggle('movil-activo');
}

/* ---------------- BUSCADOR GLOBAL ---------------- */
// Detecta la profundidad de la página actual para construir rutas relativas correctas
function raizSitio() {
    return window.__RAIZ__ || '';
}

function inicializarBuscador() {
    const input = document.getElementById('inputBuscador');
    const resultados = document.getElementById('buscadorResultados');
    if (!input || !resultados) return;

    function buscar(q) {
        q = q.trim().toLowerCase();
        if (!q) { resultados.classList.remove('activo'); resultados.innerHTML = ''; return; }
        const encontrados = PRODUCTOS.filter(p =>
            p.nombre.toLowerCase().includes(q) ||
            (p.sku && p.sku.toLowerCase().includes(q)) ||
            (p.cat && p.cat.toLowerCase().includes(q)) ||
            (p.sub && p.sub.toLowerCase().includes(q)) ||
            (p.marca && p.marca.toLowerCase().includes(q)) ||
            (p.tags && p.tags.join(' ').toLowerCase().includes(q))
        ).slice(0, 8);

        resultados.classList.add('activo');
        if (!encontrados.length) {
            resultados.innerHTML = '<div class="buscador-vacio">Sin resultados para "' + q + '"</div>';
            return;
        }
        resultados.innerHTML = encontrados.map(p => `
            <a class="buscador-item" href="${raizSitio()}producto.html?id=${p.id}">
                <img src="${p.img}" onerror="this.src='https://via.placeholder.com/40'">
                <div class="info"><h4>${p.nombre}</h4><span>${formatearPrecio(p.precio)}</span></div>
            </a>`).join('');
    }

    input.addEventListener('input', () => buscar(input.value));
    input.addEventListener('focus', () => { if (input.value.trim()) resultados.classList.add('activo'); });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.buscador-header')) resultados.classList.remove('activo');
    });
}

/* ---------------- INICIALIZACIÓN COMÚN ---------------- */
document.addEventListener('DOMContentLoaded', function () {
    inicializarCarritoPanel();
    inicializarMenuMovil();
    inicializarBuscador();
    actualizarCarritoUI();

    // Delegación para cualquier botón "Agregar al carrito" renderizado dinámicamente
    document.body.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn-agregar[data-id]');
        if (btn) agregarAlCarrito(parseInt(btn.dataset.id, 10));
    });
});
