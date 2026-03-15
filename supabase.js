// ============================================
// SUPABASE CONFIG
// ============================================
const SUPABASE_URL = 'https://wdnemhqunkmdlafewpdl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkbmVtaHF1bmttZGxhZmV3cGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjM1MDksImV4cCI6MjA4OTA5OTUwOX0.qST2b7PwmMYA-Mr3npFCsqx2lS5yi0YcfnLRplQBg3Y';

// ── FUNCIONES DE VALORACIÓN ──

// Obtener media y total de valoraciones para un item
async function obtenerValoracion(tipo, itemId) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/valoraciones?tipo=eq.${tipo}&item_id=eq.${itemId}&select=estrellas`,
    { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
  );
  const data = await res.json();
  if (!data.length) return { media: 0, total: 0 };
  const media = data.reduce((a, b) => a + b.estrellas, 0) / data.length;
  return { media: Math.round(media * 10) / 10, total: data.length };
}

// Enviar valoración
async function enviarValoracion(tipo, itemId, estrellas) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/valoraciones`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ tipo, item_id: itemId, estrellas })
  });
  return res.ok;
}

// Generar HTML del widget de estrellas
function widgetEstrellas(tipo, itemId, containerId) {
  return `
    <div class="valoracion-widget" id="${containerId}">
      <div class="val-estrellas" id="stars-${containerId}">
        ${[1,2,3,4,5].map(n => `
          <span class="estrella" data-n="${n}" 
            onmouseover="hoverEstrellas('${containerId}',${n})"
            onmouseout="resetEstrellas('${containerId}')"
            onclick="votar('${tipo}',${itemId},${n},'${containerId}')">☆</span>
        `).join('')}
      </div>
      <div class="val-info" id="info-${containerId}">Cargando...</div>
    </div>
  `;
}

// Cargar valoración en un widget
async function cargarWidget(tipo, itemId, containerId) {
  const { media, total } = await obtenerValoracion(tipo, itemId);
  const info = document.getElementById(`info-${containerId}`);
  if (!info) return;
  if (total === 0) {
    info.textContent = 'Sin valoraciones aún';
  } else {
    info.textContent = `${media} ⭐ (${total} voto${total !== 1 ? 's' : ''})`;
  }
  // Mostrar estrellas llenas según media
  const stars = document.querySelectorAll(`#stars-${containerId} .estrella`);
  stars.forEach((s, i) => {
    s.textContent = i < Math.round(media) ? '★' : '☆';
    s.classList.toggle('llena', i < Math.round(media));
  });

  // Comprobar si ya votó (localStorage)
  const yaVoto = localStorage.getItem(`voto-${tipo}-${itemId}`);
  if (yaVoto) {
    stars.forEach(s => s.style.cursor = 'default');
    stars.forEach(s => s.onmouseover = null);
    stars.forEach(s => s.onmouseout = null);
    stars.forEach(s => s.onclick = null);
    info.textContent += ' · Ya votaste';
  }
}

function hoverEstrellas(containerId, n) {
  const stars = document.querySelectorAll(`#stars-${containerId} .estrella`);
  stars.forEach((s, i) => s.textContent = i < n ? '★' : '☆');
}

function resetEstrellas(containerId) {
  const yaVoto = localStorage.getItem(`voto-${containerId}`);
  if (yaVoto) return;
  // Restaurar estado actual
  const stars = document.querySelectorAll(`#stars-${containerId} .estrella`);
  stars.forEach(s => s.textContent = s.classList.contains('llena') ? '★' : '☆');
}

async function votar(tipo, itemId, estrellas, containerId) {
  const yaVoto = localStorage.getItem(`voto-${tipo}-${itemId}`);
  if (yaVoto) return;

  const ok = await enviarValoracion(tipo, itemId, estrellas);
  if (ok) {
    localStorage.setItem(`voto-${tipo}-${itemId}`, estrellas);
    await cargarWidget(tipo, itemId, containerId);
  }
}