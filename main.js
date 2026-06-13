// ============================================================
// TERRA — Main Application v3.0 ✨ Duolingo-inspired
// Gamified, vibrant, animated
// ============================================================
import { registerSW } from 'virtual:pwa-register'
import { STATIONS, MODULES, GLOSARIO, CICLO_TERRA, PUNTOS_MAPA } from './data.js'
import './style.css'

// ─── PWA ───────────────────────────────────────────────────
registerSW({ onNeedRefresh() {}, onOfflineReady() {} })

// ─── Storage ───────────────────────────────────────────────
const storage = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem('terra_' + k)) ?? d } catch { return d } },
  set: (k, v) => { try { localStorage.setItem('terra_' + k, JSON.stringify(v)) } catch {} }
}

// ─── XP System ─────────────────────────────────────────────
const XP_PER_CORRECT   = 15
const XP_PER_MODULE    = 50
const XP_LEVEL_STEP    = 200

function calcXP() {
  return storage.get('xp', 0)
}
function addXP(amount) {
  const old = calcXP()
  const next = old + amount
  storage.set('xp', next)
  updateXPDisplay()
  showXPToast(amount)
}
function xpLevel(xp) {
  return Math.floor(xp / XP_LEVEL_STEP) + 1
}
function xpInLevel(xp) {
  return xp % XP_LEVEL_STEP
}
function updateXPDisplay() {
  const xp = calcXP()
  const pct = Math.min(100, Math.round((xpInLevel(xp) / XP_LEVEL_STEP) * 100))
  const fill = document.getElementById('sidebar-xp-fill')
  const val  = document.getElementById('sidebar-xp-val')
  const hxp  = document.getElementById('header-xp-val')
  if (fill) fill.style.width = pct + '%'
  if (val)  val.textContent  = xp + ' XP'
  if (hxp)  hxp.textContent  = xp + ' XP'
}
function showXPToast(amount) {
  const toast = document.createElement('div')
  toast.textContent = `+${amount} XP ⚡`
  toast.style.cssText = `
    position:fixed; bottom:90px; right:20px; z-index:9999;
    background:hsl(45,100%,50%); color:#1a0e00;
    font-family:var(--font-heading); font-weight:900; font-size:16px;
    padding:10px 20px; border-radius:100px;
    box-shadow:0 4px 20px hsla(45,100%,50%,0.5);
    animation:xpToast 1.8s cubic-bezier(0.34,1.56,0.64,1) forwards;
    pointer-events:none;
  `
  document.body.appendChild(toast)
  const style = document.createElement('style')
  style.textContent = `@keyframes xpToast{0%{opacity:0;transform:translateY(20px) scale(0.7)}20%{opacity:1;transform:translateY(0) scale(1)}70%{opacity:1;transform:translateY(-8px) scale(1.05)}100%{opacity:0;transform:translateY(-30px) scale(0.9)}}`
  document.head.appendChild(style)
  setTimeout(() => { toast.remove(); style.remove() }, 1900)
}

// ─── Streak ────────────────────────────────────────────────
function updateStreak() {
  const today = new Date().toDateString()
  const last  = storage.get('streakDate', null)
  let streak  = storage.get('streak', 0)

  if (last !== today) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    if (last === yesterday.toDateString()) {
      streak++
    } else if (last !== today) {
      streak = 1
    }
    storage.set('streak', streak)
    storage.set('streakDate', today)
  }
  return streak
}

// ─── State ─────────────────────────────────────────────────
const state = {
  view: 'home',
  moduleId: null,
  progress: storage.get('progress', {}),
  quizState: {},
  chartInstances: {},
  leafletMap: null
}

// ─── Desktop breakpoint ────────────────────────────────────
const isDesktop = () => window.innerWidth >= 768

// ─── DOM ───────────────────────────────────────────────────
const $ = id => document.getElementById(id)
const splash           = $('splash')
const shell            = $('shell')
const mainEl           = $('main-content')
const headerTitle      = $('header-title')
const headerPageTitle  = $('header-page-title')
const btnBack          = $('btn-back')
const btnProgress      = $('btn-progress')
const sidebarProgressBtn = $('sidebar-progress-btn')
const allNavBtns = () => document.querySelectorAll('[data-view]')

// ─── Splash ────────────────────────────────────────────────
setTimeout(() => {
  splash.classList.add('exit')
  setTimeout(() => {
    splash.style.display = 'none'
    shell.classList.remove('hidden')
    updateStreak()
    updateXPDisplay()
    updateSidebarProgress()
    renderView('home')
  }, 600)
}, 2100)

// ─── Nav events ────────────────────────────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-view]')
  if (!btn) return
  const view = btn.dataset.view
  if (state.view === view && !state.moduleId) return
  state.moduleId = null
  navigateTo(view)
})

btnBack.addEventListener('click', () => {
  if (state.moduleId) {
    state.moduleId = null
    navigateTo('estaciones')
  }
})

btnProgress.addEventListener('click', showProgressModal)
sidebarProgressBtn?.addEventListener('click', showProgressModal)
$('btn-xp-badge')?.addEventListener('click', showProgressModal)

// ─── Navigate ──────────────────────────────────────────────
function navigateTo(view) {
  setActiveNav(view)
  btnBack.classList.toggle('hidden', !state.moduleId)
  renderView(view)
  mainEl.scrollTo({ top: 0, behavior: 'instant' })
}

function setActiveNav(view) {
  allNavBtns().forEach(b => b.classList.toggle('active', b.dataset.view === view))
}

const PAGE_TITLES = {
  home: 'Inicio',
  estaciones: 'Módulos',
  mapa: 'Territorio',
  glosario: 'Glosario'
}

// ─── Render view ───────────────────────────────────────────
function renderView(view) {
  state.view = view

  Object.values(state.chartInstances).forEach(c => c.destroy?.())
  state.chartInstances = {}
  if (state.leafletMap && view !== 'mapa') {
    state.leafletMap.remove()
    state.leafletMap = null
  }

  mainEl.innerHTML = ''
  mainEl.className = 'main'

  const pageTitle = state.moduleId
    ? `Módulo ${MODULES[state.moduleId]?.num}`
    : (PAGE_TITLES[view] || 'TERRA')

  if (headerPageTitle) headerPageTitle.textContent = pageTitle
  if (headerTitle) headerTitle.textContent = pageTitle === 'Inicio' ? 'TERRA' : pageTitle

  const div = document.createElement('div')
  div.className = 'view'

  switch (view) {
    case 'home':       renderHome(div);                    break
    case 'estaciones': renderEstaciones(div);               break
    case 'mapa':       renderMapa(div);                    break
    case 'glosario':   renderGlosario(div);                break
    case 'module':     renderModule(div, state.moduleId);  break
  }

  mainEl.appendChild(div)
}

// ─── Sidebar progress update ───────────────────────────────
function updateSidebarProgress() {
  const el = $('sidebar-progress-rows')
  if (!el) return

  const stations = [
    { id: 'rio',    emoji: '🌊', cls: 'rio' },
    { id: 'cielo',  emoji: '🌙', cls: 'cielo' },
    { id: 'tierra', emoji: '🌱', cls: 'tierra' }
  ]

  el.innerHTML = stations.map(s => {
    const pct = calcStationPct(s.id)
    return `
      <div class="sidebar__prow">
        <span class="sidebar__prow-label">${s.emoji}</span>
        <div class="sidebar__prow-track">
          <div class="sidebar__prow-fill ${s.cls}" style="width:${pct}%"></div>
        </div>
        <span class="sidebar__prow-pct">${pct}%</span>
      </div>`
  }).join('')

  updateXPDisplay()
}

// ═══════════════════════════════════════════════════════════
// HOME VIEW
// ═══════════════════════════════════════════════════════════
function renderHome(container) {
  const total     = Object.keys(MODULES).length
  const done      = Object.values(state.progress).filter(p => p.done).length
  const pct       = Math.round((done / total) * 100)
  const rioPct    = calcStationPct('rio')
  const cieloPct  = calcStationPct('cielo')
  const tierraPct = calcStationPct('tierra')
  const xp        = calcXP()
  const level     = xpLevel(xp)
  const xpIn      = xpInLevel(xp)
  const xpPct     = Math.min(100, Math.round((xpIn / XP_LEVEL_STEP) * 100))
  const streak    = storage.get('streak', 1)

  container.innerHTML = `
    <div class="home">

      <!-- Hero -->
      <div class="hero">
        <img class="hero__img" src="/assets/hero.png"
          alt="Territorio TERRA: Río La Vieja, El Cielo Andino y La Tierra Quimbaya"
          loading="lazy"
          onerror="this.style.display='none'"/>
        <div class="hero__overlay">
          <div class="hero__tag">🌿 Modelo Pedagógico TERRA · Grado 6°</div>
          <h1 class="hero__title">Ciencia desde<br>la Raíz</h1>
          <p class="hero__sub">I.E. Sor María Juliana · Cartago, Valle del Cauca · PhD. Álvaro Cárdenas Orozco</p>
        </div>
      </div>

      <!-- Gamification strip -->
      <div class="gamification-strip">
        <!-- XP card -->
        <div class="xp-card" style="grid-column:span 1">
          <div class="gamification-card__label">⚡ Nivel ${level}</div>
          <div class="gamification-card__num">${xp} XP</div>
          <div class="xp-track">
            <div class="xp-fill" style="width:${xpPct}%"></div>
          </div>
          <div class="gamification-card__sub">${xpIn}/${XP_LEVEL_STEP} para siguiente nivel</div>
        </div>
        <!-- Streak card -->
        <div class="streak-card" style="grid-column:span 1">
          <div class="gamification-card__label">🔥 Racha</div>
          <div class="gamification-card__num">${streak}</div>
          <div class="gamification-card__sub">${streak === 1 ? 'día' : 'días'} seguidos</div>
        </div>
      </div>

      <!-- Top grid: progress + cycle (desktop: 2 cols) -->
      <div class="home-top-grid">

        <!-- Progress -->
        <div class="progress-card">
          <div class="progress-card__header">
            <span class="progress-card__title">📊 Mi Progreso</span>
            <span class="progress-card__pct">${pct}%</span>
          </div>
          <div class="progress-bars">
            <div class="progress-bar-row">
              <span class="progress-bar-label text-rio">🌊 Río</span>
              <div class="progress-bar-track"><div class="progress-bar-fill rio" style="width:${rioPct}%"></div></div>
              <span style="font-size:11px;font-weight:700;font-family:var(--font-heading);color:var(--c-rio-dark);width:32px;text-align:right">${rioPct}%</span>
            </div>
            <div class="progress-bar-row">
              <span class="progress-bar-label text-cielo">🌙 Cielo</span>
              <div class="progress-bar-track"><div class="progress-bar-fill cielo" style="width:${cieloPct}%"></div></div>
              <span style="font-size:11px;font-weight:700;font-family:var(--font-heading);color:var(--c-cielo-dark);width:32px;text-align:right">${cieloPct}%</span>
            </div>
            <div class="progress-bar-row">
              <span class="progress-bar-label text-tierra">🌱 Tierra</span>
              <div class="progress-bar-track"><div class="progress-bar-fill tierra" style="width:${tierraPct}%"></div></div>
              <span style="font-size:11px;font-weight:700;font-family:var(--font-heading);color:var(--c-tierra-dark);width:32px;text-align:right">${tierraPct}%</span>
            </div>
          </div>
        </div>

        <!-- Ciclo TERRA -->
        <div class="cycle-section">
          <div class="section-title">🔄 Ciclo TERRA</div>
          <div class="cycle-steps">
            ${CICLO_TERRA.map(s => `
              <div class="cycle-step">
                <div class="cycle-step__num">${s.num}</div>
                <div class="cycle-step__icon">${s.icon}</div>
                <div class="cycle-step__name">${s.name}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Station cards -->
      <div>
        <div class="section-title" style="margin-bottom:var(--sp-4)">🗺️ Estaciones Territoriales</div>
        <div class="station-cards">
          ${STATIONS.map(s => {
            const spct = calcStationPct(s.id)
            return `
              <div class="station-card ${s.color}" data-station="${s.id}" id="station-card-${s.id}"
                role="button" tabindex="0" aria-label="Ir a Estación ${s.name}">
                <div class="station-card__icon">${s.emoji}</div>
                <div class="station-card__body">
                  <div class="station-card__periodo">${s.periodo}</div>
                  <div class="station-card__name">Estación ${s.name}</div>
                  <div class="station-card__desc">${s.desc}</div>
                  <div class="station-card__modules">
                    📚 ${s.modules.length} módulos &middot; ${spct}% ✓
                  </div>
                </div>
                <div class="station-card__arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>`
          }).join('')}
        </div>
      </div>

      <div style="height:8px"></div>
    </div>
  `

  container.querySelectorAll('.station-card').forEach(card => {
    const go = () => {
      state.moduleId = null
      setActiveNav('estaciones')
      renderView('estaciones')
      setTimeout(() => {
        const el = document.getElementById('station-section-' + card.dataset.station)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
    card.addEventListener('click', go)
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') go() })
  })
}

// ═══════════════════════════════════════════════════════════
// ESTACIONES VIEW
// ═══════════════════════════════════════════════════════════
function renderEstaciones(container) {
  const compColors = { IN:'#0e9fb5', EF:'#c2713a', UC:'#3d8c56', EI:'#8050c8', RT:'#b8961a' }

  container.innerHTML = `
    <div class="estaciones">
      ${STATIONS.map(s => `
        <div id="station-section-${s.id}">
          <div class="station-section-header ${s.color}">
            <div class="station-section-emoji">${s.emoji}</div>
            <div>
              <div class="station-section-name">Estación ${s.name}</div>
              <div class="station-section-desc">${s.periodo} · ${s.desc}</div>
            </div>
          </div>
          <div class="modules-list">
            ${s.modules.map(mid => {
              const mod  = MODULES[mid]
              const prog = state.progress[mid]
              const done = prog?.done
              const numBg = s.color === 'rio' ? 'var(--c-rio-pale)' : s.color === 'cielo' ? 'var(--c-cielo-pale)' : 'var(--c-tierra-pale)'
              const numColor = s.color === 'rio' ? 'var(--c-rio-dark)' : s.color === 'cielo' ? 'var(--c-cielo-dark)' : 'var(--c-tierra-dark)'
              const badges = mod.competencias.map(c =>
                `<span class="badge" style="background:${compColors[c]}18;color:${compColors[c]};border:1.5px solid ${compColors[c]}40">${c}</span>`
              ).join('')
              return `
                <div class="module-card" data-module="${mid}" id="module-card-${mid}"
                  role="button" tabindex="0" aria-label="Módulo ${mod.num}: ${mod.title}">
                  <div class="module-card__num" style="background:${numBg};color:${numColor};border:1.5px solid ${numColor}30">${mod.num}</div>
                  <div class="module-card__body">
                    <div class="module-card__title">${mod.title}</div>
                    <div class="module-card__meta">
                      ${badges}
                      <span style="color:var(--c-text-dim);font-size:11px">📅 ${mod.sesiones} sesiones</span>
                    </div>
                  </div>
                  <div class="module-card__status ${done ? 'done' : ''}">${done ? '✅' : '⭕'}</div>
                </div>`
            }).join('')}
          </div>
        </div>
      `).join('<div style="height:4px"></div>')}
    </div>`

  container.querySelectorAll('.module-card').forEach(card => {
    const go = () => openModule(card.dataset.module)
    card.addEventListener('click', go)
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') go() })
  })
}

function openModule(mid) {
  state.moduleId = mid
  state.view = 'module'
  btnBack.classList.remove('hidden')
  setActiveNav('estaciones')
  mainEl.innerHTML = ''
  mainEl.scrollTo({ top: 0, behavior: 'instant' })
  const div = document.createElement('div')
  div.className = 'view'
  renderModule(div, mid)
  mainEl.appendChild(div)
  const mod = MODULES[mid]
  if (headerPageTitle) headerPageTitle.textContent = `Módulo ${mod.num}: ${mod.title.substring(0, 40)}${mod.title.length > 40 ? '…' : ''}`
  if (headerTitle) headerTitle.textContent = `Módulo ${mod.num}`
}

// ═══════════════════════════════════════════════════════════
// MODULE DETAIL VIEW
// ═══════════════════════════════════════════════════════════
function renderModule(container, mid) {
  const mod     = MODULES[mid]
  const station = STATIONS.find(s => s.id === mod.station)
  const sc      = mod.station  // station color key

  const compLabels = { IN:'Indagación', EF:'Explicación', UC:'Uso Científico', EI:'Escucha Intercultural', RT:'Reciprocidad' }
  const compColors = { IN:'#0e9fb5', EF:'#c2713a', UC:'#3d8c56', EI:'#8050c8', RT:'#b8961a' }

  const badges = mod.competencias.map(c =>
    `<span class="badge" style="background:${compColors[c]}18;color:${compColors[c]};border:1.5px solid ${compColors[c]}40">
      ${c}: ${compLabels[c]}
    </span>`).join('')

  const chartSection = (mid === 'm3' || mid === 'm4' || mid === 'm5') ? `
    <div class="module-section">
      <div class="chart-container">
        <div class="chart-title">${mid === 'm3' ? 'Escala de pH — Sustancias Comunes' : mid === 'm4' ? 'Horas de Luz Solar en Cartago por Mes' : 'Ciclo Lunar — 29.5 Días'}</div>
        <canvas id="chart-${mid}"></canvas>
      </div>
    </div>` : ''

  const saberCards = mod.contenido.saberes.map(s => `
    <div class="saber-card">
      <div class="saber-card__type">${s.tipo}</div>
      <div class="saber-card__text">${s.texto}</div>
    </div>`).join('')

  if (isDesktop()) {
    container.innerHTML = `
      <div class="module-detail-desktop">
        <!-- Left: hero + content -->
        <div class="module-detail-main">
          <div class="module-hero ${sc}">
            <div class="module-hero__station">
              ${station.emoji} Estación ${station.name} · ${station.periodo}
            </div>
            <h2 class="module-hero__title">${mod.title}</h2>
            <div class="module-hero__badges">${badges}
              <span class="badge" style="background:var(--c-gold-pale);color:var(--c-gold-dark);border:1.5px solid hsl(45,100%,72%)">
                📅 ${mod.sesiones} sesiones
              </span>
            </div>
          </div>

          <div class="module-body">
            <div class="module-section">
              <h3>🌍 Contexto Territorial</h3>
              <p>${mod.contenido.intro}</p>
            </div>
            <div class="module-section">
              <h3>📚 Conceptos Científicos</h3>
              <ul>${mod.contenido.conceptos.map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
            ${chartSection}
            <div class="module-section">
              <h3>🌿 Saberes del Territorio</h3>
              <div class="saber-grid">${saberCards}</div>
            </div>
          </div>
        </div>

        <!-- Right sidebar: activity + quiz -->
        <div class="module-detail-side">
          <div style="margin-bottom:var(--sp-6)">
            <h3 style="font-family:var(--font-heading);font-size:16px;font-weight:900;color:var(--c-text);margin-bottom:var(--sp-3)">⚗️ Actividad Práctica</h3>
            <div class="activity-card">
              <div class="activity-card__title">${mod.contenido.actividad.nombre}</div>
              <div class="activity-card__desc">${mod.contenido.actividad.descripcion}</div>
            </div>
          </div>

          <h3 style="font-family:var(--font-heading);font-size:16px;font-weight:900;color:var(--c-text);margin-bottom:var(--sp-3)">🧠 Evalúa tu Aprendizaje</h3>
          <div class="quiz-container" id="quiz-${mid}">
            ${renderQuizHTML(mid)}
          </div>
        </div>
      </div>
    `
  } else {
    container.innerHTML = `
      <div class="module-detail">
        <div class="module-hero ${sc}">
          <div class="module-hero__station">
            ${station.emoji} Estación ${station.name} · ${station.periodo}
          </div>
          <h2 class="module-hero__title">${mod.title}</h2>
          <div class="module-hero__badges">${badges}
            <span class="badge" style="background:var(--c-gold-pale);color:var(--c-gold-dark);border:1.5px solid hsl(45,100%,72%)">📅 ${mod.sesiones} sesiones</span>
          </div>
        </div>

        <div class="module-body">
          <div class="module-section">
            <h3>🌍 Contexto Territorial</h3>
            <p>${mod.contenido.intro}</p>
          </div>
          <div class="module-section">
            <h3>📚 Conceptos Científicos</h3>
            <ul>${mod.contenido.conceptos.map(c => `<li>${c}</li>`).join('')}</ul>
          </div>
          ${chartSection}
          <div class="module-section">
            <h3>🌿 Saberes del Territorio</h3>
            ${saberCards}
          </div>
          <div class="module-section">
            <h3>⚗️ Actividad Práctica</h3>
            <div class="activity-card">
              <div class="activity-card__title">${mod.contenido.actividad.nombre}</div>
              <div class="activity-card__desc">${mod.contenido.actividad.descripcion}</div>
            </div>
          </div>
          <div class="module-section">
            <h3>🧠 Evalúa tu Aprendizaje</h3>
            <div class="quiz-container" id="quiz-${mid}">
              ${renderQuizHTML(mid)}
            </div>
          </div>
        </div>
      </div>
    `
  }

  if (mid === 'm3') initPHChart()
  if (mid === 'm4') initAstroChart()
  if (mid === 'm5') initMoonChart()

  initQuiz(mid, container)
}

// ═══════════════════════════════════════════════════════════
// CHARTS (light theme)
// ═══════════════════════════════════════════════════════════
const CHART_TICK_COLOR = '#9ca3af'
const CHART_GRID_COLOR = 'rgba(0,0,0,0.05)'
const CHART_TOOLTIP = {
  backgroundColor: '#fff',
  titleColor: '#1a1a2e',
  bodyColor: '#6b7280',
  borderColor: 'rgba(0,0,0,0.1)',
  borderWidth: 1,
  padding: 10,
  cornerRadius: 10
}

async function initPHChart() {
  const { Chart, registerables } = await import('chart.js')
  Chart.register(...registerables)
  const ctx = document.getElementById('chart-m3')
  if (!ctx) return
  state.chartInstances['ph'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Limón', 'Vinagre', 'Lluvia ácida', 'Agua pura', 'Río La Vieja', 'Bicarbonato', 'Jabón', 'Lejía'],
      datasets: [{
        label: 'pH',
        data: [2.3, 3.0, 4.5, 7.0, 7.8, 8.3, 9.5, 13.0],
        backgroundColor: [
          'hsl(0,78%,70%)', 'hsl(15,80%,65%)', 'hsl(30,80%,65%)',
          'hsl(186,60%,60%)', 'hsl(186,85%,50%)', 'hsl(160,60%,55%)',
          'hsl(220,65%,60%)', 'hsl(240,65%,60%)'
        ],
        borderRadius: 10, borderSkipped: false
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: { ...CHART_TOOLTIP, callbacks: { label: c => `pH ${c.raw} — ${c.raw < 7 ? '🔴 Ácido' : c.raw === 7 ? '⚪ Neutro' : '🔵 Básico'}` } }
      },
      scales: {
        x: { ticks: { color: CHART_TICK_COLOR, font: { size: 10, family: 'Inter' } }, grid: { color: CHART_GRID_COLOR } },
        y: { min: 0, max: 14, ticks: { color: CHART_TICK_COLOR, stepSize: 2 }, grid: { color: CHART_GRID_COLOR },
             title: { display: true, text: 'pH', color: CHART_TICK_COLOR } }
      }
    }
  })
}

async function initAstroChart() {
  const { Chart, registerables } = await import('chart.js')
  Chart.register(...registerables)
  const ctx = document.getElementById('chart-m4')
  if (!ctx) return
  state.chartInstances['astro'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
      datasets: [{
        label: 'Horas de luz',
        data: [11.9, 12.0, 12.1, 12.2, 12.3, 12.3, 12.2, 12.1, 12.0, 11.9, 11.8, 11.9],
        borderColor: 'hsl(45,100%,50%)',
        backgroundColor: 'hsla(45,100%,50%,0.12)',
        fill: true, tension: 0.4, pointRadius: 5,
        pointBackgroundColor: 'hsl(45,100%,50%)',
        pointBorderColor: '#fff', pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: { ...CHART_TOOLTIP, callbacks: { label: c => `${c.raw}h de luz solar` } }
      },
      scales: {
        x: { ticks: { color: CHART_TICK_COLOR, font: { size: 11 } }, grid: { color: CHART_GRID_COLOR } },
        y: { min: 11.5, max: 12.5, ticks: { color: CHART_TICK_COLOR }, grid: { color: CHART_GRID_COLOR } }
      }
    }
  })
}

async function initMoonChart() {
  const { Chart, registerables } = await import('chart.js')
  Chart.register(...registerables)
  const ctx = document.getElementById('chart-m5')
  if (!ctx) return
  const labels = Array.from({ length: 30 }, (_, i) => i + 1)
  const data = labels.map(d => Math.round((Math.cos((d / 29.5) * Math.PI * 2) + 1) * 50))
  state.chartInstances['moon'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: '% cara iluminada',
        data,
        borderColor: 'hsl(240,78%,58%)',
        backgroundColor: 'hsla(240,78%,58%,0.1)',
        fill: true, tension: 0.4, pointRadius: 0
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          ...CHART_TOOLTIP,
          callbacks: {
            title: c => `Día ${c[0].label}`,
            label: c => {
              const p = c.raw
              if (p < 5)  return '🌑 Luna Nueva'
              if (p < 45) return `🌒 Creciente (${p}%)`
              if (p < 55) return `🌓 Cuarto (${p}%)`
              if (p < 95) return `🌔 Gibosa (${p}%)`
              return `🌕 Luna Llena (${p}%)`
            }
          }
        }
      },
      scales: {
        x: { title: { display: true, text: 'Día del ciclo', color: CHART_TICK_COLOR }, ticks: { color: CHART_TICK_COLOR, font: { size: 10 } }, grid: { color: CHART_GRID_COLOR } },
        y: { min: 0, max: 100, ticks: { color: CHART_TICK_COLOR, callback: v => v + '%' }, grid: { color: CHART_GRID_COLOR } }
      }
    }
  })
}

// ═══════════════════════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════════════════════
const OPTION_LETTERS = ['A', 'B', 'C', 'D']

function renderQuizHTML(mid) {
  const questions = MODULES[mid].quiz
  const dots = questions.map((_, i) =>
    `<div class="quiz-dot" id="quiz-dot-${mid}-${i}"></div>`).join('')
  return `
    <div class="quiz-header">
      <div class="quiz-title">🧠 Quiz · Módulo ${MODULES[mid].num}</div>
      <div class="quiz-progress-wrap">
        <div class="quiz-progress" id="quiz-prog-${mid}">1 / ${questions.length}</div>
        <div class="quiz-progress-dots">${dots}</div>
      </div>
    </div>
    <div class="quiz-body" id="quiz-body-${mid}">
      ${renderQuestionHTML(mid, 0)}
    </div>`
}

function renderQuestionHTML(mid, qIdx) {
  const q = MODULES[mid].quiz[qIdx]
  return `
    <p class="quiz-question">${q.q}</p>
    <div class="quiz-options" id="quiz-opts-${mid}-${qIdx}">
      ${q.opts.map((opt, i) => `
        <button class="quiz-option" data-qidx="${qIdx}" data-oidx="${i}"
          id="quiz-opt-${mid}-${qIdx}-${i}" data-letter="${OPTION_LETTERS[i]}">
          ${opt}
        </button>`).join('')}
    </div>
    <div id="quiz-feedback-${mid}-${qIdx}" style="display:none"></div>
    <button class="quiz-btn" id="quiz-next-${mid}-${qIdx}" style="display:none">Siguiente →</button>`
}

function initQuiz(mid) {
  state.quizState[mid] = { current: 0, score: 0, answered: {} }
  updateQuizDot(mid, 0, 'current')
  bindQuizQ(mid, 0)
}

function updateQuizDot(mid, qIdx, state) {
  const dot = document.getElementById(`quiz-dot-${mid}-${qIdx}`)
  if (dot) { dot.className = `quiz-dot ${state}` }
}

function bindQuizQ(mid, qIdx) {
  const opts = document.querySelectorAll(`#quiz-opts-${mid}-${qIdx} .quiz-option`)
  opts.forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.quizState[mid].answered[qIdx]) return
      const oidx   = parseInt(btn.dataset.oidx)
      const correct = MODULES[mid].quiz[qIdx].correct
      const fb      = MODULES[mid].quiz[qIdx].feedback

      opts.forEach(b => { b.disabled = true })
      btn.classList.add('selected')

      const ok = oidx === correct
      if (ok) {
        state.quizState[mid].score++
        btn.classList.add('correct')
        addXP(XP_PER_CORRECT)
        updateQuizDot(mid, qIdx, 'done')
      } else {
        btn.classList.add('wrong')
        opts[correct].classList.add('correct')
        updateQuizDot(mid, qIdx, '')
      }
      state.quizState[mid].answered[qIdx] = true

      const fbEl = document.getElementById(`quiz-feedback-${mid}-${qIdx}`)
      fbEl.style.display = 'block'
      fbEl.className = `quiz-feedback ${ok ? 'correct' : 'wrong'}`
      fbEl.textContent = ok ? fb.ok : fb.fail

      const nxtBtn = document.getElementById(`quiz-next-${mid}-${qIdx}`)
      nxtBtn.style.display = 'block'
      const total  = MODULES[mid].quiz.length
      const isLast = qIdx === total - 1
      nxtBtn.textContent = isLast ? '🏆 Ver Resultado' : 'Siguiente →'
      nxtBtn.addEventListener('click', () => {
        if (isLast) showQuizScore(mid)
        else {
          const body = document.getElementById(`quiz-body-${mid}`)
          const prog = document.getElementById(`quiz-prog-${mid}`)
          const nextIdx = qIdx + 1
          prog.textContent = `${nextIdx + 1} / ${total}`
          body.innerHTML = renderQuestionHTML(mid, nextIdx)
          updateQuizDot(mid, nextIdx, 'current')
          bindQuizQ(mid, nextIdx)
        }
      }, { once: true })
    })
  })
}

function showQuizScore(mid) {
  const { score } = state.quizState[mid]
  const total = MODULES[mid].quiz.length
  const pct   = Math.round((score / total) * 100)
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪'
  const msg   = pct >= 80
    ? '¡Excelente! Dominas este módulo.'
    : pct >= 60
      ? '¡Muy bien! Sigue practicando.'
      : '¡Vuelve a intentarlo!'

  const wasAlreadyDone = state.progress[mid]?.done
  state.progress[mid] = { done: pct >= 60, score, total }
  storage.set('progress', state.progress)

  if (!wasAlreadyDone && pct >= 60) {
    addXP(XP_PER_MODULE)
  }
  updateSidebarProgress()

  // Confetti colors
  const confettiColors = ['hsl(45,100%,55%)', 'hsl(142,75%,45%)', 'hsl(186,85%,50%)', 'hsl(240,78%,65%)', 'hsl(28,90%,58%)']
  const confettiHTML = pct >= 60
    ? Array.from({ length: 12 }, (_, i) => {
        const color = confettiColors[i % confettiColors.length]
        const left  = 10 + (i * 7) % 80
        const delay = (i * 0.12).toFixed(2)
        return `<div class="confetti-dot" style="left:${left}%;background:${color};animation-delay:${delay}s;border-radius:${i % 2 === 0 ? '50%' : '2px'}"></div>`
      }).join('')
    : ''

  const body = document.getElementById(`quiz-body-${mid}`)
  body.innerHTML = `
    <div class="quiz-score quiz-score-wrapper" style="position:relative;overflow:hidden">
      ${confettiHTML}
      <span class="quiz-score__trophy">${emoji}</span>
      <div class="quiz-score__num">${pct}%</div>
      <div class="quiz-score__msg">${msg}</div>
      <div class="quiz-score__sub">${score} de ${total} respuestas correctas</div>
      ${pct >= 60 ? `<div class="quiz-score__xp">⚡ +${XP_PER_MODULE} XP ganados</div>` : ''}
      <button class="quiz-btn" id="quiz-retry-${mid}" style="margin-top:var(--sp-4)">🔄 Intentar de nuevo</button>
    </div>`

  document.getElementById(`quiz-retry-${mid}`)?.addEventListener('click', () => {
    state.quizState[mid] = { current: 0, score: 0, answered: {} }
    const qEl = document.getElementById(`quiz-${mid}`)
    if (qEl) { qEl.innerHTML = renderQuizHTML(mid); initQuiz(mid) }
  })
}

// ═══════════════════════════════════════════════════════════
// MAPA VIEW
// ═══════════════════════════════════════════════════════════
function renderMapa(container) {
  container.innerHTML = `
    <div class="mapa">
      ${isDesktop() ? `
        <div class="mapa__left">
          <div class="mapa__header">
            <h2>🗺️ Territorio TERRA</h2>
            <p>Cuenca del Río La Vieja · Cartago, Valle del Cauca</p>
          </div>
          <div class="mapa__points">
            ${renderMapPoints()}
          </div>
        </div>
        <div id="map" role="region" aria-label="Mapa interactivo del territorio TERRA"></div>
      ` : `
        <div class="mapa__header">
          <h2>🗺️ Territorio TERRA</h2>
          <p>Cuenca del Río La Vieja · Cartago, Valle del Cauca</p>
        </div>
        <div id="map" role="region" aria-label="Mapa interactivo del territorio TERRA"></div>
        <div class="mapa__points">
          ${renderMapPoints()}
        </div>
      `}
    </div>`

  initMap(container)
}

function renderMapPoints() {
  return PUNTOS_MAPA.map(p => `
    <div class="mapa__point-card" data-lat="${p.lat}" data-lng="${p.lng}" data-zoom="15" id="map-point-${p.id}">
      <div class="mapa__point-icon" style="background:${p.color}22;color:${p.color}">${p.icon}</div>
      <div>
        <div class="mapa__point-title">${p.name}</div>
        <div class="mapa__point-desc">${p.desc}</div>
      </div>
    </div>`).join('')
}

async function initMap(container) {
  const L = await import('leaflet')
  const mapEl = document.getElementById('map')
  if (!mapEl || state.leafletMap) return

  state.leafletMap = L.map('map', {
    center: [4.744, -75.912], zoom: 12,
    zoomControl: true, scrollWheelZoom: false, tap: true
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors', maxZoom: 18
  }).addTo(state.leafletMap)

  PUNTOS_MAPA.forEach(p => {
    const icon = L.divIcon({
      html: `<div style="width:40px;height:40px;border-radius:50%;background:${p.color};border:3px solid rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 16px rgba(0,0,0,.3)">${p.icon}</div>`,
      iconSize: [40, 40], iconAnchor: [20, 20], className: ''
    })
    L.marker([p.lat, p.lng], { icon }).addTo(state.leafletMap)
      .bindPopup(`<strong style="font-family:Nunito,sans-serif">${p.name}</strong><br/><small style="color:#6b7280">${p.desc}</small>`, { maxWidth: 280 })
      .on('click', () => state.leafletMap.setView([p.lat, p.lng], 15, { animate: true }))
  })

  container.querySelectorAll('.mapa__point-card').forEach(card => {
    card.addEventListener('click', () => {
      const lat = parseFloat(card.dataset.lat)
      const lng = parseFloat(card.dataset.lng)
      state.leafletMap.setView([lat, lng], 15, { animate: true })
    })
  })
}

// ═══════════════════════════════════════════════════════════
// GLOSARIO VIEW
// ═══════════════════════════════════════════════════════════
function renderGlosario(container) {
  const sorted = [...GLOSARIO].sort((a, b) => a.term.localeCompare(b.term))
  let activeFilter = 'all'

  container.innerHTML = `
    <div class="glosario">
      <div class="search-bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input type="search" class="search-input" id="glosario-search"
          placeholder="Buscar término científico o ancestral..." aria-label="Buscar en el glosario"/>
      </div>
      <div class="glosario-filters" id="glosario-filters">
        <button class="glosario-filter-btn active all" data-filter="all">🌿 Todos</button>
        <button class="glosario-filter-btn rio" data-filter="rio">🌊 El Río</button>
        <button class="glosario-filter-btn cielo" data-filter="cielo">🌙 El Cielo</button>
        <button class="glosario-filter-btn tierra" data-filter="tierra">🌱 La Tierra</button>
      </div>
      <div ${isDesktop() ? 'class="glosario-grid"' : ''} id="glosario-list">
        ${renderGlosarioItems(sorted)}
      </div>
    </div>`

  const searchInput = container.querySelector('#glosario-search')
  const listEl      = container.querySelector('#glosario-list')
  const filterBtns  = container.querySelectorAll('.glosario-filter-btn')

  function applyFilters() {
    const q        = searchInput.value.toLowerCase().trim()
    let filtered   = activeFilter === 'all' ? sorted : sorted.filter(g => g.station === activeFilter || g.color === activeFilter)
    if (q) filtered = filtered.filter(g =>
      g.term.toLowerCase().includes(q) ||
      g.sci.toLowerCase().includes(q)  ||
      g.anc.toLowerCase().includes(q)
    )
    listEl.innerHTML = renderGlosarioItems(filtered)
    bindGlosarioItems(listEl)
  }

  searchInput.addEventListener('input', applyFilters)

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      activeFilter = btn.dataset.filter
      applyFilters()
    })
  })

  bindGlosarioItems(container)
}

function renderGlosarioItems(items) {
  const cols = { rio:'var(--c-rio)', cielo:'var(--c-cielo)', tierra:'var(--c-tierra)' }
  const labs = { rio:'🌊 El Río', cielo:'🌙 El Cielo', tierra:'🌱 La Tierra' }
  if (!items.length) return `<p style="text-align:center;color:var(--c-text-muted);padding:var(--sp-8);grid-column:1/-1">Sin resultados 🔍</p>`
  return items.map(g => `
    <div class="glosario-item" id="glosario-item-${g.id}">
      <div class="glosario-term" data-id="${g.id}" role="button" tabindex="0" aria-expanded="false">
        <div class="glosario-term-left">
          <div class="glosario-term-dot" style="background:${cols[g.color] || '#888'};box-shadow:0 0 6px ${cols[g.color] || '#888'}80"></div>
          <div>
            <div class="glosario-term-name">${g.term}</div>
            <div class="glosario-term-station">${labs[g.station] || ''}</div>
          </div>
        </div>
        <svg class="glosario-term-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="glosario-def" id="glosario-def-${g.id}">
        <div class="glosario-def-sci">📖 <strong>Definición científica:</strong><br>${g.sci}</div>
        <div class="glosario-def-anc">🌿 <em>Saber ancestral/local:</em><br>${g.anc}</div>
        <div style="height:8px"></div>
      </div>
    </div>`).join('')
}

function bindGlosarioItems(container) {
  container.querySelectorAll('.glosario-term').forEach(term => {
    const toggle = () => {
      const def   = document.getElementById(`glosario-def-${term.dataset.id}`)
      const arrow = term.querySelector('.glosario-term-arrow')
      const open  = def.classList.contains('open')
      document.querySelectorAll('.glosario-def.open').forEach(d => d.classList.remove('open'))
      document.querySelectorAll('.glosario-term-arrow.open').forEach(a => a.classList.remove('open'))
      if (!open) { def.classList.add('open'); arrow.classList.add('open') }
    }
    term.addEventListener('click', toggle)
    term.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggle() })
  })
}

// ═══════════════════════════════════════════════════════════
// PROGRESS MODAL
// ═══════════════════════════════════════════════════════════
function showProgressModal() {
  const total  = Object.keys(MODULES).length
  const done   = Object.values(state.progress).filter(p => p.done).length
  const pct    = Math.round((done / total) * 100)
  const scores = Object.values(state.progress).filter(p => p.score !== undefined)
  const avg    = scores.length
    ? Math.round(scores.reduce((a, p) => a + (p.score / p.total * 100), 0) / scores.length)
    : 0
  const xp     = calcXP()
  const level  = xpLevel(xp)
  const streak = storage.get('streak', 1)

  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="Mi Progreso">
      <div class="modal__handle"></div>
      <div class="modal__header">
        <h2 class="modal__title">📊 Mi Progreso</h2>
        <button class="modal__close" id="close-modal" aria-label="Cerrar">✕</button>
      </div>
      <div class="modal__body">
        <div class="modal-grid">
          <div class="modal-stat">
            <div class="modal-stat__icon">⚡</div>
            <div>
              <div class="modal-stat__label">XP Total</div>
              <div class="modal-stat__val text-gold">${xp} XP</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">🎯</div>
            <div>
              <div class="modal-stat__label">Nivel</div>
              <div class="modal-stat__val">${level}</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">✅</div>
            <div>
              <div class="modal-stat__label">Módulos completados</div>
              <div class="modal-stat__val">${done} / ${total}</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">🔥</div>
            <div>
              <div class="modal-stat__label">Racha actual</div>
              <div class="modal-stat__val">${streak} días</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">🧠</div>
            <div>
              <div class="modal-stat__label">Quizzes realizados</div>
              <div class="modal-stat__val">${scores.length}</div>
            </div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat__icon">⭐</div>
            <div>
              <div class="modal-stat__label">Puntaje promedio</div>
              <div class="modal-stat__val text-green">${avg > 0 ? avg + '%' : '—'}</div>
            </div>
          </div>
        </div>

        <div style="margin-bottom:var(--sp-3)">
          <div style="font-family:var(--font-heading);font-size:13px;font-weight:800;color:var(--c-text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:var(--sp-3)">Por estación</div>
          ${STATIONS.map(s => {
            const sp = calcStationPct(s.id)
            return `
              <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-3)">
                <span style="font-size:24px">${s.emoji}</span>
                <div style="flex:1">
                  <div style="font-family:var(--font-heading);font-size:13px;font-weight:700;margin-bottom:5px;color:var(--c-text)">${s.name}</div>
                  <div class="progress-bar-track"><div class="progress-bar-fill ${s.color}" style="width:${sp}%"></div></div>
                </div>
                <span style="font-family:var(--font-heading);font-size:15px;font-weight:900;min-width:38px;text-align:right;color:var(--c-text)">${sp}%</span>
              </div>`
          }).join('')}
        </div>

        <button class="reset-btn" id="reset-progress">🗑️ Reiniciar todo el progreso</button>
      </div>
    </div>`

  document.body.appendChild(overlay)
  overlay.querySelector('#close-modal').addEventListener('click', () => overlay.remove())
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove() })
  overlay.querySelector('#reset-progress').addEventListener('click', () => {
    if (confirm('¿Seguro que quieres reiniciar todo tu progreso?')) {
      state.progress = {}
      storage.set('progress', {})
      storage.set('xp', 0)
      storage.set('streak', 0)
      overlay.remove()
      updateSidebarProgress()
      updateXPDisplay()
      renderView(state.view)
    }
  })
}

// ─── Helper ────────────────────────────────────────────────
function calcStationPct(stationId) {
  const st = STATIONS.find(s => s.id === stationId)
  if (!st) return 0
  const done = st.modules.filter(mid => state.progress[mid]?.done).length
  return Math.round((done / st.modules.length) * 100)
}
