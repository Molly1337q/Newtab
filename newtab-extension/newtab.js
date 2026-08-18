
/* ═══════════════════════════ DATA / STATE ═══════════════════════════ */

const ENGINES_MAP = {
  google: { name:'Google',     url:'https://google.com/search?q=' },
  yandex: { name:'Яндекс',     url:'https://yandex.ru/search/?text=' },
  bing:   { name:'Bing',       url:'https://bing.com/search?q=' },
  ddg:    { name:'DuckDuckGo', url:'https://duckduckgo.com/?q=' },
  brave:  { name:'Brave',      url:'https://search.brave.com/search?q=' },
};

const ACCENTS = [
  { id:'purple', name:'Фиолетовый',
    dark:{ p80:'#D0BCFF',p40:'#6750A4',p30:'#4F378B',p20:'#381E72',p90:'#EADDFF',p10:'#21005D',
           s30:'#4A4458',s90:'#E8DEF8',s10:'#1D192B',t30:'#633B48',t90:'#FFD8E4',t10:'#31111D', color:'#D0BCFF'},
    light:{ p80:'#D0BCFF',p40:'#6750A4',p30:'#4F378B',p20:'#381E72',p90:'#EADDFF',p10:'#21005D',
            s30:'#4A4458',s90:'#E8DEF8',s10:'#1D192B',t30:'#633B48',t90:'#FFD8E4',t10:'#31111D', color:'#6750A4'} },
  { id:'blue', name:'Синий',
    dark:{ p80:'#9ECAFF',p40:'#0061A4',p30:'#00497D',p20:'#003258',p90:'#D1E4FF',p10:'#001D36',
           s30:'#354A5E',s90:'#D1E4FF',s10:'#0D1D2C',t30:'#4E3248',t90:'#FBD7F3',t10:'#1E0A1C', color:'#9ECAFF'},
    light:{ p80:'#9ECAFF',p40:'#0061A4',p30:'#00497D',p20:'#003258',p90:'#D1E4FF',p10:'#001D36',
            s30:'#354A5E',s90:'#D1E4FF',s10:'#0D1D2C',t30:'#4E3248',t90:'#FBD7F3',t10:'#1E0A1C', color:'#0061A4'} },
  { id:'green', name:'Зелёный',
    dark:{ p80:'#79DC77',p40:'#1E6B1E',p30:'#075108',p20:'#003A00',p90:'#C1F2BC',p10:'#002200',
           s30:'#3A4E35',s90:'#CDE9C3',s10:'#0C1F0B',t30:'#534428',t90:'#FAE096',t10:'#221B00', color:'#79DC77'},
    light:{ p80:'#79DC77',p40:'#1E6B1E',p30:'#075108',p20:'#003A00',p90:'#C1F2BC',p10:'#002200',
            s30:'#3A4E35',s90:'#CDE9C3',s10:'#0C1F0B',t30:'#534428',t90:'#FAE096',t10:'#221B00', color:'#1E6B1E'} },
  { id:'red', name:'Красный',
    dark:{ p80:'#FFB4AB',p40:'#BA1A1A',p30:'#93000A',p20:'#690005',p90:'#FFDAD6',p10:'#410002',
           s30:'#5B3C3C',s90:'#FFDAD6',s10:'#2D1516',t30:'#564430',t90:'#EFE0BB',t10:'#1E1500', color:'#FFB4AB'},
    light:{ p80:'#FFB4AB',p40:'#BA1A1A',p30:'#93000A',p20:'#690005',p90:'#FFDAD6',p10:'#410002',
            s30:'#5B3C3C',s90:'#FFDAD6',s10:'#2D1516',t30:'#564430',t90:'#EFE0BB',t10:'#1E1500', color:'#BA1A1A'} },
  { id:'orange', name:'Оранжевый',
    dark:{ p80:'#FFB77C',p40:'#8B5000',p30:'#6A3B00',p20:'#4C2A00',p90:'#FFDCBE',p10:'#2C1700',
           s30:'#5C4432',s90:'#FFDCBE',s10:'#2B1B0E',t30:'#4E5122',t90:'#E5E6A4',t10:'#1B1D00', color:'#FFB77C'},
    light:{ p80:'#FFB77C',p40:'#8B5000',p30:'#6A3B00',p20:'#4C2A00',p90:'#FFDCBE',p10:'#2C1700',
            s30:'#5C4432',s90:'#FFDCBE',s10:'#2B1B0E',t30:'#4E5122',t90:'#E5E6A4',t10:'#1B1D00', color:'#8B5000'} },
  { id:'teal', name:'Бирюзовый',
    dark:{ p80:'#4DD8E1',p40:'#00696F',p30:'#004F53',p20:'#00363A',p90:'#9EF0F5',p10:'#001F23',
           s30:'#2F4E52',s90:'#ADE3E8',s10:'#061F22',t30:'#4D3E5B',t90:'#E8DAEA',t10:'#1B1226', color:'#4DD8E1'},
    light:{ p80:'#4DD8E1',p40:'#00696F',p30:'#004F53',p20:'#00363A',p90:'#9EF0F5',p10:'#001F23',
            s30:'#2F4E52',s90:'#ADE3E8',s10:'#061F22',t30:'#4D3E5B',t90:'#E8DAEA',t10:'#1B1226', color:'#00696F'} },
  { id:'pink', name:'Розовый',
    dark:{ p80:'#FFB1C8',p40:'#9C2D6A',p30:'#7B1754',p20:'#5A013D',p90:'#FFD8E7',p10:'#390027',
           s30:'#56394A',s90:'#F2DAEA',s10:'#23101B',t30:'#50402B',t90:'#EDE0C7',t10:'#1D1705', color:'#FFB1C8'},
    light:{ p80:'#FFB1C8',p40:'#9C2D6A',p30:'#7B1754',p20:'#5A013D',p90:'#FFD8E7',p10:'#390027',
            s30:'#56394A',s90:'#F2DAEA',s10:'#23101B',t30:'#50402B',t90:'#EDE0C7',t10:'#1D1705', color:'#9C2D6A'} },
  { id:'yellow', name:'Янтарный',
    dark:{ p80:'#F0C84E',p40:'#6E5D00',p30:'#544500',p20:'#3B2F00',p90:'#F5E16B',p10:'#221C00',
           s30:'#4E4A2C',s90:'#E9E4B7',s10:'#1D1A04',t30:'#4B3E3A',t90:'#F4DEDA',t10:'#1D1210', color:'#F0C84E'},
    light:{ p80:'#F0C84E',p40:'#6E5D00',p30:'#544500',p20:'#3B2F00',p90:'#F5E16B',p10:'#221C00',
            s30:'#4E4A2C',s90:'#E9E4B7',s10:'#1D1A04',t30:'#4B3E3A',t90:'#F4DEDA',t10:'#1D1210', color:'#6E5D00'} },
  { id:'grey', name:'Серый',
    dark:{ p80:'#C9C5CA',p40:'#8E8E94',p30:'#484649',p20:'#313033',p90:'#E6E1E5',p10:'#1C1B1F',
           s30:'#48474C',s90:'#E5E2E7',s10:'#1B1B1F',t30:'#48474C',t90:'#E5E2E7',t10:'#1B1B1F', color:'#C9C5CA'},
    light:{ p80:'#C9C5CA',p40:'#6E6E74',p30:'#484649',p20:'#313033',p90:'#E6E1E5',p10:'#1C1B1F',
            s30:'#D9D7DC',s90:'#46464B',s10:'#F3F2F5',t30:'#D9D7DC',t90:'#46464B',t10:'#F3F2F5', color:'#6E6E74'} },
];

const DEF_S = {
  dark:true, accent:'grey',
  glow:true, glowOpacity:20,
  clock:true, greet:true, date:true, timeFmt:'24', clockFontSize:'m', showSeconds:false,
  search:true, engine:'google', newtab:true, engines:true,
  sites:true, viewMode:'grid', icons:true, labels:true, iconSize:'m', iconShape:'r', iconBg:'site', hotkeys:true,
  weather:true, city:'', unit:'C', forecast:true, wstats:true,
  focusMode:false, wallpaperUrl:'',
};
const PROFILES_KEY = 'nd-profiles2';
const ACTIVE_PROFILE_KEY = 'nd-active-profile2';

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  const t = e.target;
  const inField = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);

  if (e.key === '/' || e.keyCode === 191) {
    const searchInput = document.getElementById('s-in');
    if (!searchInput) return;
    if (!inField) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    return;
  }

  if (!S.hotkeys) return;
  const n = parseInt(e.key);
  if (n >= 1 && n <= 9 && !inField) {
    const site = sites[n - 1];
    if (site) {
      e.preventDefault();
      window.open(site.url, S.newtab ? '_blank' : '_self');
    }
  }
});

function profileKey(profileId, suffix){
  return `nd-p-${profileId}-${suffix}`;
}

function renderEngineSub(){
  const sub = document.getElementById('engine-sub');
  if(!sub) return;
  sub.textContent = (ENGINES_MAP[S.engine] || ENGINES_MAP.google).name;
}

function openEngineModal(){
  renderEngineModal();
  document.getElementById('eng-m-ov').classList.add('show');
}

function runLayoutTransition(updateFn){
  if (document.startViewTransition) {
    document.startViewTransition(updateFn);
  } else {
    updateFn();
  }
}

function renderEngineModal(){
  const list = document.getElementById('eng-list');
  if(!list) return;

  list.innerHTML = Object.entries(ENGINES_MAP).map(([key, e]) => `
    <button class="profile-item rpl ${key===S.engine?'active':''}" data-engine-key="${key}">
      <span>${e.name}</span>
      <span class="ms">${key===S.engine?'check_circle':'radio_button_unchecked'}</span>
    </button>
  `).join('');
  list.querySelectorAll('[data-engine-key]').forEach(btn => {
    btn.addEventListener('click', () => selectEngine(btn.dataset.engineKey));
  });
}

function selectEngine(key){
  S.engine = key;
  saveS();
  renderEngines();
  renderEngineSub();
  renderEngineModal();
}

function openProfileModal(){
  renderProfileModal();
  document.getElementById('profile-m-ov').classList.add('show');
}

function renderProfileModal(){
  const list = document.getElementById('profile-list');
  if(!list) return;

  list.innerHTML = profiles.map(p => `
    <button class="profile-item rpl ${p.id===activeProfileId?'active':''}" data-profile-id="${p.id}">
      <span>${p.name}</span>
      <span class="ms">${p.id===activeProfileId?'check_circle':'radio_button_unchecked'}</span>
    </button>
  `).join('');
  list.querySelectorAll('[data-profile-id]').forEach(btn => {
    btn.addEventListener('click', () => switchProfile(btn.dataset.profileId));
  });
}

function renderProfilesUI(){
  const sub = document.getElementById('profile-sub');
  if(!sub) return;

  if(!Array.isArray(profiles) || profiles.length === 0){
    profiles = [{ id:'default', name:'Основной' }];
    localStorage.setItem('nd-profiles2', JSON.stringify(profiles));
  }

  if(!profiles.some(p => p.id === activeProfileId)){
    activeProfileId = profiles[0].id;
    localStorage.setItem('nd-active-profile2', activeProfileId);
  }

  const active = profiles.find(p => p.id === activeProfileId);
  sub.textContent = active ? active.name : 'Основной';
}

function switchProfile(id){
  if(!id || id === activeProfileId) return;
  setActiveProfileId(id);
  location.reload();
}

function addProfile(){
  const name = prompt('Название нового профиля:');
  if(!name || !name.trim()) return;

  const cleanName = name.trim();
  const id = 'p' + Date.now().toString(36);

  profiles.push({ id, name: cleanName });
  saveProfiles();

  localStorage.setItem(profileKey(id,'s2'), JSON.stringify(S));
  localStorage.setItem(profileKey(id,'sites2'), JSON.stringify(sites));
  if(typeof customEmojis !== 'undefined'){
    localStorage.setItem(profileKey(id,'custom-emojis2'), JSON.stringify(customEmojis));
  }

  setActiveProfileId(id);
  location.reload();
}

function deleteProfile(){
  if(profiles.length <= 1){
    toast('Нельзя удалить последний профиль');
    return;
  }

  const active = profiles.find(p => p.id === activeProfileId);
  if(!active) return;

  if(!confirm(`Удалить профиль "${active.name}"?`)) return;

  profiles = profiles.filter(p => p.id !== activeProfileId);
  saveProfiles();

  localStorage.removeItem(profileKey(activeProfileId,'s2'));
  localStorage.removeItem(profileKey(activeProfileId,'sites2'));
  localStorage.removeItem(profileKey(activeProfileId,'custom-emojis2'));

  const fallback = profiles[0].id;
  setActiveProfileId(fallback);
  location.reload();
}

function loadProfiles(){
  const raw = JSON.parse(localStorage.getItem(PROFILES_KEY) || 'null');
  if(Array.isArray(raw) && raw.length) return raw;
  const def = [{ id:'default', name:'Основной' }];
  localStorage.setItem(PROFILES_KEY, JSON.stringify(def));
  return def;
}

function saveProfiles(){
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

function loadActiveProfileId(){
  return localStorage.getItem(ACTIVE_PROFILE_KEY) || 'default';
}

function setActiveProfileId(id){
  localStorage.setItem(ACTIVE_PROFILE_KEY, id);
}

function migrateLegacyData(){
  const oldS = localStorage.getItem('nd-s2');
  const oldSites = localStorage.getItem('nd-sites2');
  const oldEm = localStorage.getItem('nd-custom-emojis2');

  if(oldS && !localStorage.getItem(profileKey('default','s2'))){
    localStorage.setItem(profileKey('default','s2'), oldS);
  }
  if(oldSites && !localStorage.getItem(profileKey('default','sites2'))){
    localStorage.setItem(profileKey('default','sites2'), oldSites);
  }
  if(oldEm && !localStorage.getItem(profileKey('default','custom-emojis2'))){
    localStorage.setItem(profileKey('default','custom-emojis2'), oldEm);
  }
}

let profiles = loadProfiles();
let activeProfileId = loadActiveProfileId();

if(!profiles.some(p => p.id === activeProfileId)){
  activeProfileId = profiles[0].id;
  setActiveProfileId(activeProfileId);
}

migrateLegacyData();

let S = JSON.parse(localStorage.getItem(profileKey(activeProfileId,'s2')) || 'null') || Object.assign({}, DEF_S);

const DEF_SITES = [
  {id:1,name:'YouTube',  url:'https://youtube.com',       emoji:'▶️',abbr:'YT'},
  {id:2,name:'GitHub',   url:'https://github.com',        emoji:'🐙',abbr:'GH'},
  {id:3,name:'Gmail',    url:'https://mail.google.com',   emoji:'✉️',abbr:'GM'},
  {id:4,name:'Figma',    url:'https://figma.com',         emoji:'🎨',abbr:'FG'},
  {id:5,name:'Wikipedia',url:'https://wikipedia.org',     emoji:'📖',abbr:'WK'},
  {id:6,name:'Reddit',   url:'https://reddit.com',        emoji:'🤖',abbr:'RD'},
  {id:7,name:'Telegram', url:'https://web.telegram.org',  emoji:'✈️',abbr:'TG'},
  {id:8,name:'Spotify',  url:'https://open.spotify.com',  emoji:'🎵',abbr:'SP'},
];
const BASE_EMOJIS=['🌐','⭐','🔥','💡','📌','🎯','🚀','💎','📊','🛒','🎮','📰','🏠','💼','🔬','🎓','🎬','🎧','🏆','🌙','⚡','🌍','🔗','💻','🧩','📱','🗂️','🎲','🖥️','📷'];

let customEmojis = JSON.parse(localStorage.getItem(profileKey(activeProfileId,'custom-emojis2')) || '[]');
let EMOJIS = [...new Set([...BASE_EMOJIS, ...customEmojis])];

function saveCustomEmojis(){
  localStorage.setItem(profileKey(activeProfileId,'custom-emojis2'), JSON.stringify(customEmojis));
}

function exportData(){
  const payload = {
    version: 2,
    profiles: profiles,
    activeProfileId: activeProfileId,
    data: {}
  };

  profiles.forEach(p => {
    payload.data[p.id] = {
      settings: JSON.parse(localStorage.getItem(profileKey(p.id,'s2')) || 'null') || DEF_S,
      sites: JSON.parse(localStorage.getItem(profileKey(p.id,'sites2')) || 'null') || DEF_SITES,
      customEmojis: JSON.parse(localStorage.getItem(profileKey(p.id,'custom-emojis2')) || '[]')
    };
  });

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `newtab-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Экспорт готов');
}

function importData(e){
  const file = e.target.files?.[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try{
      const json = JSON.parse(reader.result);

      // Новый формат (с профилями)
      if (json.version === 2 && Array.isArray(json.profiles) && json.data) {
        localStorage.setItem(PROFILES_KEY, JSON.stringify(json.profiles));
        const active = json.activeProfileId || json.profiles[0]?.id || 'default';
        localStorage.setItem(ACTIVE_PROFILE_KEY, active);

        json.profiles.forEach(p => {
          const d = json.data[p.id] || {};
          localStorage.setItem(profileKey(p.id,'s2'), JSON.stringify(d.settings || DEF_S));
          localStorage.setItem(profileKey(p.id,'sites2'), JSON.stringify(d.sites || DEF_SITES));
          localStorage.setItem(profileKey(p.id,'custom-emojis2'), JSON.stringify(d.customEmojis || []));
        });

        toast('Импорт выполнен');
        setTimeout(() => location.reload(), 300);
        return;
      }

      // Старый формат (один профиль)
      if (json.settings && Array.isArray(json.sites)) {
        localStorage.setItem(profileKey(activeProfileId,'s2'), JSON.stringify(json.settings));
        localStorage.setItem(profileKey(activeProfileId,'sites2'), JSON.stringify(json.sites));
        localStorage.setItem(profileKey(activeProfileId,'custom-emojis2'), JSON.stringify(json.customEmojis || []));
        toast('Импорт выполнен');
        setTimeout(() => location.reload(), 300);
        return;
      }

      throw new Error('Неверный формат файла');
    } catch(err){
      toast('Ошибка импорта: ' + err.message);
    } finally {
      e.target.value = '';
    }
  };
  reader.readAsText(file, 'utf-8');
}

function removeCustomEmoji(em){
  if(!customEmojis.includes(em)) return; // стандартные не удаляем
  if(!confirm(`Удалить значок ${em}?`)) return;

  customEmojis = customEmojis.filter(x => x !== em);
  saveCustomEmojis();
  EMOJIS = [...new Set([...BASE_EMOJIS, ...customEmojis])];

  if(selEmoji === em) selEmoji = '🌐';
  buildEmGrid();
  toast('Значок удален');
}

let sites = JSON.parse(localStorage.getItem(profileKey(activeProfileId,'sites2')) || 'null') || JSON.parse(JSON.stringify(DEF_SITES));
let nextId = Math.max(...sites.map(s=>s.id), 0)+1;
let selEmoji = '🌐';
let ctxId = null;
let editSite = null;
let snackT;
let clockIv;
let wData = null;
let dragSiteId = null;
let isDraggingSite = false;
let lastDeleted = null;

/* ════ SAVE ════ */
const saveS = () => localStorage.setItem(profileKey(activeProfileId,'s2'), JSON.stringify(S));
const saveSites = () => localStorage.setItem(profileKey(activeProfileId,'sites2'), JSON.stringify(sites));

/* ════ RIPPLE ════ */
document.addEventListener('click', e => {
  const el = e.target.closest('.rpl');
  if(!el) return;
  const r = document.createElement('span');
  r.className = 'rp';
  const rc = el.getBoundingClientRect();
  const sz = Math.max(rc.width, rc.height);
  r.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX-rc.left-sz/2}px;top:${e.clientY-rc.top-sz/2}px`;
  el.appendChild(r);
  r.addEventListener('animationend', ()=>r.remove());
});

/* ════ ACCENT / PALETTE ════ */
function applyAccent() {
  const root = document.documentElement;
  const acc = ACCENTS.find(a=>a.id===S.accent) || ACCENTS[0];
  const pal = S.dark ? acc.dark : acc.light;
  Object.entries(pal).forEach(([k,v]) => {
    if(k !== 'color') root.style.setProperty('--'+k, v);
  });
  root.style.setProperty('--sw', acc.id === 'grey' ? '#3C3C42' : pal.p80);
  applyGlowColors();
}

function applyGlowColors() {
  const mid = S.dark ? '#1f1f23' : '#e8e8e8';
  const b1 = S.dark ? '#3b3b3f' : '#d5d5d8';
  const b2 = S.dark ? '#3b3b3f' : '#d0d0d5';
  const b3 = S.dark ? '#3b3b3f' : '#cccccc';
  document.getElementById('glow1').style.background = `radial-gradient(circle at 40% 40%, ${b1}, ${mid})`;
  document.getElementById('glow2').style.background = `radial-gradient(circle at 60% 60%, ${b2}, ${mid})`;
  document.getElementById('glow3').style.background = `radial-gradient(circle at 50% 50%, ${b3}, ${mid})`;
}

function buildAccentRow() {
  const row = document.getElementById('accent-row');
  row.innerHTML = '';
  ACCENTS.forEach(acc => {
    const pal = S.dark ? acc.dark : acc.light;
    if(!pal) return;
    const d = document.createElement('div');
    d.className = 'ac-dot rpl' + (S.accent===acc.id?' sel':'');
    d.style.background = pal.color;
    d.title = acc.name;
    d.onclick = () => {
      S.accent = acc.id;
      saveS(); applyAccent(); buildAccentRow();
      renderGrid(); toast('Акцент: '+acc.name);
    };
row.appendChild(d);
  });
}

/* ════ THEME ════ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', S.dark?'dark':'light');
  setSw('dark', S.dark);
  applyAccent();
}

/* ════ GLOW ════ */
function applyGlow() {
  const el = document.getElementById('glow');
  el.style.display = S.glow ? '' : 'none';
  const op = S.glowOpacity / 100;
  document.getElementById('glow1').style.opacity = op + 0.04;
  document.getElementById('glow2').style.opacity = op;
  document.getElementById('glow3').style.opacity = Math.max(op-0.04, 0.04);
  document.getElementById('sl-glow').value = S.glowOpacity;
}

function setWallpaper(e) {
  const file = e.target.files?.[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    S.wallpaperUrl = ev.target.result;
    saveS();
    applyWallpaper();
    toast('Обои установлены');
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

function clearWallpaper() {
  S.wallpaperUrl = '';
  saveS();
  applyWallpaper();
  toast('Обои удалены');
}

function applyWallpaper() {
  const wp = document.getElementById('wallpaper');
  const clearBtn = document.getElementById('clear-wallpaper');
  const sub = document.getElementById('wallpaper-sub');
  if(S.wallpaperUrl) {
    wp.style.backgroundImage = `url(${S.wallpaperUrl})`;
    wp.classList.remove('hidden');
    clearBtn.style.display = '';
    sub.textContent = 'Установлены';
  } else {
    wp.style.backgroundImage = '';
    wp.classList.add('hidden');
    clearBtn.style.display = 'none';
    sub.textContent = 'Не заданы';
  }
}

/* ════ CLOCK ════ */
const CLOCK_SIZES = {s:'clamp(40px,8vw,60px)', m:'clamp(52px,11vw,90px)', l:'clamp(68px,15vw,120px)'};
function startClock() {
  clearInterval(clockIv);
  tick();
  clockIv = setInterval(tick, 1000);
}
function tick() {
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  let ts;
  if(S.timeFmt==='12'){
    const ap = h>=12?'PM':'AM';
    h = h%12||12;
    ts = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}${S.showSeconds?':'+String(s).padStart(2,'0'):''} ${ap}`;
  } else {
    ts = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}${S.showSeconds?':'+String(s).padStart(2,'0'):''}`;
  }
  document.getElementById('clock').textContent = ts;
  document.getElementById('clock').style.fontSize = CLOCK_SIZES[S.clockFontSize] || CLOCK_SIZES.m;

  const hr = now.getHours();
  document.getElementById('greeting').textContent =
    hr<6?'Доброй ночи':hr<12?'Доброе утро':hr<18?'Добрый день':'Добрый вечер';

  const D=['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  const M=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  document.getElementById('datestr').textContent = `${D[now.getDay()]}, ${now.getDate()} ${M[now.getMonth()]}`;
}
function setFontSize(s){ S.clockFontSize=s; saveS(); syncSegs(); tick(); }
function setFmt(f){ S.timeFmt=f; saveS(); syncSegs(); tick(); }

/* ════ ENGINES ════ */
function renderEngines() {
  const row = document.getElementById('engines-row');
  row.style.display = (S.search && S.engines) ? '' : 'none';
  row.innerHTML = '';
  Object.entries(ENGINES_MAP).forEach(([k,e]) => {
    const b = document.createElement('button');
    b.className = 'eng rpl' + (k===S.engine?' active':'');
    b.textContent = e.name;
    b.onclick = () => { S.engine=k; saveS(); renderEngines(); document.getElementById('eng-sel').value=k; };
    row.appendChild(b);
  });
  renderEngineSub();
}

/* ════ QUICK GRID ════ */
const SZ = {s:'38px',m:'52px',l:'66px'};
const SH = {r:'12px',c:'9999px',s:'4px'};

function getFaviconBg(site) {
  if(S.iconBg === 'accent') {
    const acc = ACCENTS.find(a=>a.id===S.accent)||ACCENTS[0];
    const pal = S.dark ? acc.dark : acc.light;
    return pal.s30;
  }
  return S.dark ? '#2a2a2f' : '#E6E0E9';
}

function getTextColor() {
  if(S.iconBg === 'accent') {
    const acc = ACCENTS.find(a=>a.id===S.accent)||ACCENTS[0];
    const pal = S.dark ? acc.dark : acc.light;
    return pal.s90;
  }
  return S.dark ? '#E6E1E5' : '#1C1B1F';
}

function abbr(name) {
  return name.split(/\s+/).map(w=>w[0]).join('').toUpperCase().slice(0,2);
}

function moveSiteBefore(dragId, targetId){
  if(dragId === targetId) return;

  const from = sites.findIndex(s => s.id === dragId);
  const to = sites.findIndex(s => s.id === targetId);
  if(from < 0 || to < 0) return;

  const [moved] = sites.splice(from, 1);
  sites.splice(to, 0, moved);

  runLayoutTransition(() => {
    saveSites();
    renderGrid();
  });
}

function renderGrid() {
  const grid = document.getElementById('quick-grid');
  const isList = S.viewMode === 'list';
  grid.className = 'quick-grid' + (isList ? ' list-mode' : '');
  const sitesSec = document.getElementById('sites-section');
  sitesSec.style.display = S.sites ? '' : 'none';
  grid.innerHTML = '';

  const sz = SZ[S.iconSize] || '52px';
  const sh = SH[S.iconShape] || '12px';
  const fsz = parseInt(sz) * (S.icons ? 0.44 : 0.35);

  sites.forEach(site => {
    const btn = document.createElement('button');
    btn.className = 'quick-item rpl' + (isList?' list-item':'');
    btn.dataset.id = site.id;
    btn.style.viewTransitionName = `site-${site.id}`;
    btn.draggable = true;

    const bg = getFaviconBg(site);
    const tc = getTextColor();
    const inner = S.icons
      ? `<span style="font-size:${fsz}px;line-height:1">${site.emoji}</span>`
      : `<span style="font-size:${fsz}px;font-weight:700;color:${tc};letter-spacing:-.03em">${site.abbr||abbr(site.name)}</span>`;

    const nameHtml = S.labels ? `<span class="q-label">${site.name}</span>` : '';

    btn.innerHTML = `
      <div class="q-favicon" style="width:${sz};height:${sz};border-radius:${sh};background:${bg}">${inner}</div>
      ${nameHtml}
    `;
    btn.addEventListener('click', () => {
  if(isDraggingSite) return;
  window.open(site.url, S.newtab ? '_blank' : '_self');
});
    btn.addEventListener('auxclick', (e) => {
  if(isDraggingSite) return;
  if(e.button === 1) {
    e.preventDefault();
    window.open(site.url, '_blank');
  }
});
    btn.addEventListener('mousedown', (e) => {
  if(e.button === 1) e.preventDefault();
});
    btn.addEventListener('contextmenu', e => { e.preventDefault(); showCtx(e,site.id); });
    btn.addEventListener('dragstart', (e) => {
  dragSiteId = site.id;
  isDraggingSite = true;
  btn.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
});

btn.addEventListener('dragover', (e) => {
  e.preventDefault();
  if(dragSiteId !== site.id) btn.classList.add('drag-over');
});

btn.addEventListener('dragleave', () => {
  btn.classList.remove('drag-over');
});

btn.addEventListener('drop', (e) => {
  e.preventDefault();
  btn.classList.remove('drag-over');
  if(dragSiteId != null) moveSiteBefore(dragSiteId, site.id);
});

btn.addEventListener('dragend', () => {
  dragSiteId = null;
  isDraggingSite = false;
  btn.classList.remove('dragging');
  document.querySelectorAll('.quick-item.drag-over').forEach(el => el.classList.remove('drag-over'));
});
    grid.appendChild(btn);
  });

  // Add
  const add = document.createElement('button');
  add.className = 'quick-item q-add rpl' + (isList?' list-item':'');
  add.innerHTML = `
    <div class="q-favicon" style="width:${sz};height:${sz};border-radius:${sh}"><span class="ms">add</span></div>
    ${S.labels ? '<span class="q-label">Добавить</span>' : ''}
  `;
  add.addEventListener('click', () => openSiteM());
  grid.appendChild(add);
}

/* ════ WEATHER ════ */
const WIC = {0:'☀️',1:'🌤',2:'⛅',3:'☁️',45:'🌫',48:'🌫',51:'🌦',53:'🌦',55:'🌧',61:'🌧',63:'🌧',65:'🌧',71:'❄️',73:'❄️',75:'❄️',80:'🌦',81:'🌧',82:'🌧',95:'⛈',96:'⛈',99:'⛈'};
const WD = {0:'Ясно',1:'Преимущественно ясно',2:'Переменная облачность',3:'Пасмурно',45:'Туман',48:'Туман',51:'Лёгкий дождь',53:'Дождь',55:'Сильный дождь',61:'Дождь',63:'Умеренный дождь',65:'Сильный дождь',71:'Снег',73:'Снег',75:'Сильный снег',80:'Ливень',81:'Ливень',82:'Сильный ливень',95:'Гроза',96:'Гроза с градом',99:'Гроза с градом'};

async function fetchWeather() {
  if(!S.city) return;
  const card = document.getElementById('weather-card');
  card.innerHTML = '<div class="w-loading"><span class="ms">sync</span> Загрузка…</div>';
  try {
    const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(S.city)}&count=1&language=ru`);
    const gd = await g.json();
    if(!gd.results?.length) throw new Error('Город не найден');
    const {latitude,longitude,name,country} = gd.results[0];
    const w = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m,apparent_temperature&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=6`);
    const wd = await w.json();
    wData = {...wd, city:name, country};
    renderWeather();
  } catch(e) {
    card.innerHTML = `<div class="w-loading" style="color:var(--md-error)"><span class="ms">error</span> ${e.message}</div>`;
  }
}

function renderWeather() {
  const ws = document.getElementById('weather-section');
  ws.style.display = S.weather ? '' : 'none';
  if(!S.weather || !wData) return;
  const card = document.getElementById('weather-card');
  const C2 = t => S.unit==='F' ? Math.round(t*9/5+32) : Math.round(t);
  const u = S.unit==='F'?'°F':'°C';
  const cur = wData.current;
  const daily = wData.daily;
  const code = cur.weathercode;
  const ic = WIC[code]||'🌡';
  const desc = WD[code]||'—';
  const DS = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];

  const statsHtml = S.wstats ? `
    <div class="w-stats">
      <div class="w-stat"><div class="w-stat-lbl">Ощущается</div><div class="w-stat-val">${C2(cur.apparent_temperature)}${u}</div></div>
      <div class="w-stat"><div class="w-stat-lbl">Влажность</div><div class="w-stat-val">${cur.relativehumidity_2m}%</div></div>
      <div class="w-stat"><div class="w-stat-lbl">Ветер</div><div class="w-stat-val">${Math.round(cur.windspeed_10m)} км/ч</div></div>
    </div>` : '';

  const forecastHtml = S.forecast ? `
    <div class="w-days-row">
      ${daily.time.slice(1,6).map((d,i)=>{
        const dt=new Date(d);
        const dc=daily.weathercode[i+1];
        return `<div class="w-day">
          <div class="w-day-name">${DS[dt.getDay()]}</div>
          <div class="w-day-icon">${WIC[dc]||'🌡'}</div>
          <div class="w-day-max">${C2(daily.temperature_2m_max[i+1])}${u}</div>
          <div class="w-day-min">${C2(daily.temperature_2m_min[i+1])}${u}</div>
        </div>`;
      }).join('')}
    </div>` : '';

  card.innerHTML = `
    <div class="w-main-row">
      <div class="w-left">
        <div class="w-icon-big">${ic}</div>
        <div class="w-temp-row">
          <div class="w-temp">${C2(cur.temperature_2m)}</div>
          <div class="w-feels" style="margin-bottom:8px">${u}</div>
        </div>
        <div class="w-desc">${desc}</div>
        <div class="w-city-name">${wData.city}, ${wData.country}</div>
      </div>
      <div class="w-right">
        <div class="w-badge">Сейчас</div>
      </div>
    </div>
    ${statsHtml}
    ${forecastHtml}
  `;
}

/* ════ SETTINGS ════ */
function openSettings() { document.getElementById('s-overlay').classList.add('show') }
function closeSettings() { document.getElementById('s-overlay').classList.remove('show') }
function ov(e) { if(e.target===document.getElementById('s-overlay')) closeSettings() }

function setSw(k, v) {
  const el = document.getElementById('sw-'+k);
  if(el) {
    if(k === 'dark') el.classList.toggle('on', !v);
    else el.classList.toggle('on', !!v);
  }
}
function syncAll() {
  ['dark','glow','clock','greet','date','showSeconds','search','newtab','engines','sites','icons','labels','weather','forecast','wstats','focusMode','hotkeys'].forEach(k => setSw(k, S[k]));
  // segs
  syncSegs();
  // city
  document.getElementById('city-sub').textContent = S.city || 'Не задан';
  renderEngineSub();
}
function syncSegs() {
  const set = (ids, active) => ids.forEach(id => { const el=document.getElementById(id); if(el) el.classList.toggle('on', id===active) });
  set(['fmt-24','fmt-12'], 'fmt-'+S.timeFmt);
  set(['fs-s','fs-m','fs-l'], 'fs-'+S.clockFontSize);
  set(['vm-grid','vm-list'], 'vm-'+S.viewMode);
  set(['sz-s','sz-m','sz-l'], 'sz-'+S.iconSize);
  set(['sh-r','sh-c','sh-s'], 'sh-'+S.iconShape);
  set(['bg-accent','bg-site','bg-neutral'], 'bg-'+S.iconBg);
  set(['ut-c','ut-f'], 'ut-'+S.unit.toLowerCase());
}

function tog(k) {
  S[k] = !S[k];
  saveS();
  setSw(k, S[k]);
  // side effects
  if(k==='dark'){ applyTheme(); buildAccentRow(); renderGrid(); }
  if(k==='glow'){ const b=document.getElementById('glow'); b.style.display=S.glow?'':'none'; }
  if(k==='clock'){ const h=document.getElementById('hero'); h.style.display=S.clock?'':'none'; if(S.clock)startClock(); else clearInterval(clockIv); }
  if(k==='greet') document.getElementById('greeting').classList.toggle('gone',!S.greet);
  if(k==='date')  document.getElementById('datestr').classList.toggle('gone',!S.date);
  if(k==='search'){ document.getElementById('search-section').style.display=S.search?'':'none'; renderEngines(); }
  if(k==='engines') renderEngines();
  if(['sites','icons','labels','newtab'].includes(k)) renderGrid();
  if(k==='weather'){ document.getElementById('weather-section').style.display=S.weather?'':'none'; if(S.weather&&S.city&&!wData)fetchWeather(); }
  if(k==='forecast'||k==='wstats') renderWeather();
  if(k==='focusMode') applyFocusMode();
}

function applyFocusMode() {
  const page = document.querySelector('.page');
  if(S.focusMode) {
    document.getElementById('search-section').style.display = '';
    renderEngines();
    document.getElementById('sites-section').style.display = 'none';
    document.getElementById('weather-section').style.display = 'none';
    page.style.paddingBottom = '20px';
  } else {
    document.getElementById('search-section').style.display = S.search ? '' : 'none';
    renderEngines();
    document.getElementById('sites-section').style.display = S.sites ? '' : 'none';
    document.getElementById('weather-section').style.display = S.weather ? '' : 'none';
    page.style.paddingBottom = '80px';
  }
}

function setEng(v){ S.engine=v; saveS(); renderEngines();renderEngineSub(); }
function setVm(v){ S.viewMode=v; saveS(); syncSegs(); renderGrid(); }
function setSz(v){ S.iconSize=v; saveS(); syncSegs(); renderGrid(); }
function setSh(v){ S.iconShape=v; saveS(); syncSegs(); renderGrid(); }
function setBg(v){ S.iconBg=v; saveS(); syncSegs(); renderGrid(); }
function setUnit(v){ S.unit=v; saveS(); syncSegs(); if(wData)renderWeather(); }

/* ════ CITY ════ */
function openCityM(){ document.getElementById('inp-city').value=S.city||''; tfv('tf-city','inp-city'); document.getElementById('city-m-ov').classList.add('show') }
function saveCity(){
  const c=document.getElementById('inp-city').value.trim();
  if(!c){ toast('Введите название города'); return; }
  S.city=c; saveS();
  document.getElementById('city-sub').textContent=c;
  document.getElementById('city-m-ov').classList.remove('show');
  wData=null;
  if(S.weather) fetchWeather();
  toast('Город: '+c);
}

/* ════ SITE MODAL ════ */
function openSiteM(site) {
  editSite=site||null;
  document.getElementById('site-m-title').textContent=site?'Изменить сайт':'Добавить сайт';
  document.getElementById('inp-name').value=site?.name||'';
  document.getElementById('inp-url').value=site?.url||'';
  selEmoji=site?.emoji||'🌐';
  tfv('tf-name','inp-name'); tfv('tf-url','inp-url');
  buildEmGrid();
  document.getElementById('site-m-ov').classList.add('show');
}
function saveSite(){
  const name=document.getElementById('inp-name').value.trim();
  let url=document.getElementById('inp-url').value.trim();
  if(!name||!url){ toast('Заполните все поля'); return; }
  if(!/^https?:\/\//i.test(url)) url='https://'+url;
  if(editSite){
    const s=sites.find(s=>s.id===editSite.id);
    if(s){s.name=name;s.url=url;s.emoji=selEmoji;s.abbr=abbr(name)}
    toast('Сайт обновлён ✏️');
  } else {
    const neutralBg = S.dark ? '#2a2a2f' : '#E6E0E9';
    sites.push({id:nextId++,name,url,emoji:selEmoji,abbr:abbr(name),bg:neutralBg});
    toast('Сайт добавлен 🎉');
  }
  saveSites(); renderGrid();
  document.getElementById('site-m-ov').classList.remove('show');
  editSite=null;
}
function buildEmGrid(){
  const grid = document.getElementById('em-grid');
  grid.innerHTML = EMOJIS.map(em => {
    const isCustom = customEmojis.includes(em);
    return `<button class="em-btn rpl${em===selEmoji?' sel':''}"
      title="${isCustom ? 'ПКМ: удалить' : ''}"
      data-emoji="${em}">${em}</button>`;
  }).join('');
  grid.querySelectorAll('[data-emoji]').forEach(btn => {
    btn.addEventListener('click', () => selEm(btn.dataset.emoji, btn));
    btn.addEventListener('contextmenu', (e) => { e.preventDefault(); removeCustomEmoji(btn.dataset.emoji); });
  });
}
function addCustomEmoji(){
  const inp = document.getElementById('inp-custom-emoji');
  if(!inp) return;

  const em = inp.value.trim();
  if(!em){
    toast('Введите значок');
    return;
  }

  if(!customEmojis.includes(em) && !BASE_EMOJIS.includes(em)){
    customEmojis.push(em);
    customEmojis = [...new Set(customEmojis)].slice(-80);
    saveCustomEmojis();
    EMOJIS = [...new Set([...BASE_EMOJIS, ...customEmojis])];
  }

  selEmoji = em;
  inp.value = '';
  buildEmGrid();
  toast('Значок добавлен');
}
function selEm(em,btn){
  selEmoji=em;
  document.querySelectorAll('.em-btn').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
}

/* ════ CTX ════ */
function showCtx(e,id){
  ctxId=id;
  const m=document.getElementById('ctx');
  let x=e.clientX,y=e.clientY;
  if(x+180>innerWidth)x-=180;
  if(y+130>innerHeight)y-=130;
  m.style.left=x+'px';
  m.style.top=y+'px';
  m.style.transformOrigin = `${e.clientX - x}px ${e.clientY - y}px`;
  m.classList.remove('confirm');
  requestAnimationFrame(() => m.classList.add('show'));
}
document.addEventListener('click',()=>{
  const m = document.getElementById('ctx');
  m.classList.remove('confirm');
  m.classList.remove('show');
});
function ctxOpen(){ const s=sites.find(s=>s.id===ctxId); if(s)window.open(s.url,S.newtab?'_blank':'_self') }
function ctxEdit(){ const m=document.getElementById('ctx'); m.classList.remove('show','confirm'); const s=sites.find(s=>s.id===ctxId); if(s)openSiteM(s) }
function startDeleteConfirm(e){
  if(e) e.stopPropagation();
  document.getElementById('ctx').classList.add('confirm');
}

function ctxCancelDelete(){
  document.getElementById('ctx').classList.remove('confirm');
}

function ctxDeleteConfirmed(){
  const idx = sites.findIndex(s => s.id === ctxId);
  if(idx < 0) return;

  const removed = sites[idx];
  lastDeleted = { site: removed, index: idx };

  sites.splice(idx, 1);
  saveSites();
  renderGrid();

  toast('Удалено', 'Отменить', () => {
    if(!lastDeleted) return;
    const insertAt = Math.min(lastDeleted.index, sites.length);
    sites.splice(insertAt, 0, lastDeleted.site);
    saveSites();
    renderGrid();
    lastDeleted = null;
    toast('Восстановлено');
  });

  const m = document.getElementById('ctx');
  m.classList.remove('confirm');
  m.classList.remove('show');
}

/* ════ SEARCH ════ */
function onSearchInput(v){
  const input = document.getElementById('s-in');
  input.placeholder = v.trim().length > 0 ? '' : 'Поиск…';
}
function onKey(e){ if(e.key==='Escape'){ document.getElementById('s-in').blur(); return; } if(e.key!=='Enter')return; const q=document.getElementById('s-in').value.trim(); if(!q)return; if(q==='/snake'){ openSnake(); return; } if(q==='/mines'){ openMines(); return; } if(q==='/ttt'){ openTTT(); return; } window.open((ENGINES_MAP[S.engine]||ENGINES_MAP.google).url+encodeURIComponent(q),S.newtab?'_blank':'_self') }
function clearSearch(){ const i=document.getElementById('s-in'); i.value=''; onSearchInput(''); i.focus() }

/* ════ TF ════ */
function tfv(w,i){ document.getElementById(w).classList.toggle('v',document.getElementById(i).value.length>0) }

/* ════ MODAL CLOSE ════ */
function closeM(id,e){ if(!e||e.target===document.getElementById(id)) document.getElementById(id).classList.remove('show') }

/* ════ SNACK ════ */
let snackActionCb = null;

function toast(msg, actionText = '', actionCb = null){
  const s = document.getElementById('snack');
  const msgEl = document.getElementById('snack-msg');
  const actionEl = document.getElementById('snack-action');

  msgEl.textContent = msg;
  snackActionCb = actionCb || null;

  if(actionEl){
    if(actionText && actionCb){
      actionEl.textContent = actionText;
      actionEl.style.display = '';
      actionEl.onclick = (ev) => {
        ev.stopPropagation();
        const cb = snackActionCb;
        hideSnack();
        if(cb) cb();
      };
    } else {
      actionEl.style.display = 'none';
      actionEl.onclick = null;
    }
  }

  s.classList.add('show');
  clearTimeout(snackT);
  snackT = setTimeout(hideSnack, 3500);
}

function hideSnack(){
  const s = document.getElementById('snack');
  const actionEl = document.getElementById('snack-action');
  s.classList.remove('show');
  snackActionCb = null;
  if(actionEl){
    actionEl.style.display = 'none';
    actionEl.onclick = null;
  }
}

/* ════ RESET ════ */
function resetSites(){ if(!confirm('Сбросить сайты к стандартным?'))return; sites=JSON.parse(JSON.stringify(DEF_SITES)); nextId=sites.length+1; saveSites(); renderGrid(); toast('Сайты сброшены') }
function resetSettings(){ if(!confirm('Сбросить все настройки?'))return; S=Object.assign({},DEF_S); saveS(); location.reload() }

/* ════ INIT ════ */
function ensureProfilesState(){
  let p = JSON.parse(localStorage.getItem('nd-profiles2') || 'null');
  if(!Array.isArray(p) || p.length === 0){
    p = [{ id:'default', name:'Основной' }];
    localStorage.setItem('nd-profiles2', JSON.stringify(p));
  }

  let a = localStorage.getItem('nd-active-profile2') || 'default';
  if(!p.some(x => x.id === a)){
    a = p[0].id;
    localStorage.setItem('nd-active-profile2', a);
  }

  profiles = p;
  activeProfileId = a;
}
function init() {
  ensureProfilesState();
  applyTheme();
  applyGlow();
  applyWallpaper();

  // clock
  if(!S.clock) { document.getElementById('hero').style.display='none' }
  else { startClock() }
  document.getElementById('greeting').classList.toggle('gone',!S.greet);
  document.getElementById('datestr').classList.toggle('gone',!S.date);

  // search
  document.getElementById('search-section').style.display = S.search?'':'none';
  renderEngines();

  // sites
  document.getElementById('sites-section').style.display = S.sites?'':'none';
  renderGrid();

  // weather
  document.getElementById('weather-section').style.display = S.weather?'':'none';
  if(S.weather && S.city) fetchWeather();
  document.getElementById('city-sub').textContent = S.city||'Не задан';

  syncAll();
  buildAccentRow();
  applyFocusMode();
}

renderProfilesUI();
ensureProfilesState();
init();


/* ===== next inline block ===== */


var snake=[{x:10,y:10},{x:9,y:10},{x:8,y:10}],snakeDir={x:1,y:0},snakeNext={x:1,y:0},snakeFood=null,snakeScore=0,snakeBest=0,snakeTimer=null,snakeRunning=false;
function snakeSpawnFood(){var x,y,ok;do{ok=true;x=Math.floor(Math.random()*16);y=Math.floor(Math.random()*16);for(var i=0;i<snake.length;i++)if(snake[i].x===x&&snake[i].y===y){ok=false;break}}while(!ok);snakeFood={x:x,y:y}}
function snakeDraw(){var c=document.getElementById('snake-canvas'),ctx=c.getContext('2d'),w=20;ctx.fillStyle='#111';ctx.fillRect(0,0,320,320);for(var i=0;i<snake.length;i++){var g=Math.round(200*(1-i/snake.length));ctx.fillStyle='rgb(50,'+g+',80)';ctx.fillRect(snake[i].x*w+1,snake[i].y*w+1,w-2,w-2)}if(snakeFood){ctx.fillStyle='#f55';ctx.beginPath();ctx.arc(snakeFood.x*w+10,snakeFood.y*w+10,6,0,Math.PI*2);ctx.fill()}}
function snakeUpdate(){if(!snakeRunning)return;snakeDir=snakeNext;var h={x:snake[0].x+snakeDir.x,y:snake[0].y+snakeDir.y};if(h.x<0||h.x>=16||h.y<0||h.y>=16){snakeGameOver();return}for(var i=0;i<snake.length-1;i++)if(snake[i].x===h.x&&snake[i].y===h.y){snakeGameOver();return}snake.unshift(h);if(snakeFood&&h.x===snakeFood.x&&h.y===snakeFood.y){snakeScore++;document.getElementById('snake-score').textContent=snakeScore;snakeSpawnFood()}else{snake.pop()}snakeDraw();snakeTimer=setTimeout(snakeUpdate,120)}
function snakeGameOver(){snakeRunning=false;clearTimeout(snakeTimer);if(snakeScore>snakeBest){snakeBest=snakeScore;localStorage.setItem('snake-best',snakeBest);document.getElementById('snake-best').textContent=snakeBest;document.getElementById('snake-final-best').textContent=snakeBest}document.getElementById('snake-final').textContent=snakeScore;document.getElementById('snake-over').classList.add('show')}
function snakeReset(){document.getElementById('snake-over').classList.remove('show');snakeStart()}
function snakeStart(){if(snakeTimer)clearTimeout(snakeTimer);document.getElementById('snake-over').classList.remove('show');snake=[{x:10,y:10},{x:9,y:10},{x:8,y:10}];snakeDir={x:1,y:0};snakeNext={x:1,y:0};snakeScore=0;document.getElementById('snake-score').textContent=0;snakeSpawnFood();snakeDraw();snakeRunning=true;snakeUpdate()}
function snakeClose(){snakeRunning=false;clearTimeout(snakeTimer);document.getElementById('snake-modal').classList.remove('show')}
function openSnake(){document.getElementById('snake-modal').classList.add('show');snakeBest=parseInt(localStorage.getItem('snake-best')||'0');document.getElementById('snake-best').textContent=snakeBest;snakeStart()}
document.addEventListener('keydown',function(e){if(document.getElementById('snake-modal').classList.contains('show')){if(e.key==='ArrowUp'&&snakeDir.y!==1)snakeNext={x:0,y:-1};else if(e.key==='ArrowDown'&&snakeDir.y!==-1)snakeNext={x:0,y:1};else if(e.key==='ArrowLeft'&&snakeDir.x!==1)snakeNext={x:-1,y:0};else if(e.key==='ArrowRight'&&snakeDir.x!==-1)snakeNext={x:1,y:0};else if(e.key==='Escape')snakeClose();else if(e.key===' '&&!snakeRunning)snakeReset();if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].indexOf(e.key)!==-1)e.preventDefault()}});


/* ===== next inline block ===== */


var MS={},minesTimer=null,mS=9,cS=9,mC=15;
function minesReset(){if(minesTimer)clearInterval(minesTimer);document.getElementById('mines-over').classList.remove('show');mS=9;mC=15;MS={cells:[],gameOver:false,win:false,startTime:null,timer:0,flagCount:0};for(var i=0;i<mS*mS;i++)MS.cells.push({mine:false,open:false,flag:false,near:0});var minesPlaced=0;while(minesPlaced<mC){var idx=Math.floor(Math.random()*mS*mS);if(!MS.cells[idx].mine){MS.cells[idx].mine=true;minesPlaced++}}for(var i=0;i<mS*mS;i++){if(!MS.cells[i].mine){var near=0,c=i%mS,r=Math.floor(i/mS);for(var dy=-1;dy<=1;dy++)for(var dx=-1;dx<=1;dx++){var nr=r+dy,nc=c+dx;if(nr>=0&&nr<mS&&nc>=0&&nc<mS&&MS.cells[nr*mS+nc].mine)near++}MS.cells[i].near=near}}document.getElementById('mines-total').textContent=mC;document.getElementById('mines-flags').textContent=0;document.getElementById('mines-time').textContent=0;minesDraw()}
function minesDraw(){var board=document.getElementById('mines-board');board.innerHTML='';for(var i=0;i<mS*mS;i++){var cell=document.createElement('div');cell.className='mines-cell';cell.dataset.i=i;var c=MS.cells[i];if(c.open){cell.classList.add('open');if(c.mine){cell.classList.add('mine');cell.textContent='💣'}else if(c.near>0){cell.textContent=c.near;cell.style.color=['#888','#4CAF50','#2196F3','#ff9800','#9C27B0','#00BCD4','#795548','#333'][c.near-1]||'#fff'}}else if(c.flag){cell.textContent='🚩'}cell.onclick=function(){minesClick(parseInt(this.dataset.i))};cell.oncontextmenu=function(e){e.preventDefault();minesFlag(parseInt(this.dataset.i))};board.appendChild(cell)}}function minesClick(i){if(MS.gameOver||MS.win)return;if(!MS.startTime){MS.startTime=Date.now();minesTimer=setInterval(function(){if(MS.startTime&&!MS.gameOver&&!MS.win){MS.timer=Math.floor((Date.now()-MS.startTime)/1000);document.getElementById('mines-time').textContent=MS.timer}},1000)}var c=MS.cells[i];if(c.open||c.flag)return;c.open=true;if(c.mine){MS.gameOver=true;clearInterval(minesTimer);for(var j=0;j<mS*mS;j++){if(MS.cells[j].mine)MS.cells[j].open=true}minesDraw();document.getElementById('mines-over-title').textContent='Game Over';document.getElementById('mines-over').classList.remove('win');document.getElementById('mines-over').classList.add('lose');document.getElementById('mines-final').textContent='💣';document.getElementById('mines-best-text').textContent='A mine exploded!';document.getElementById('mines-over').classList.add('show');return}if(c.near===0){var col=i%mS,row=Math.floor(i/mS);for(var dy=-1;dy<=1;dy++)for(var dx=-1;dx<=1;dx++){var nr=row+dy,nc=col+dx;if(nr>=0&&nr<mS&&nc>=0&&nc<mS)minesClick(nr*mS+nc)}}minesDraw();minesCheckWin()}
function minesFlag(i){if(MS.gameOver||MS.win)return;var c=MS.cells[i];if(c.open)return;c.flag=!c.flag;MS.flagCount+=(c.flag?1:-1);document.getElementById('mines-flags').textContent=MS.flagCount;minesDraw()}
function minesCheckWin(){var unopened=0;for(var i=0;i<mS*mS;i++){if(!MS.cells[i].open)unopened++}if(unopened===mC){MS.win=true;clearInterval(minesTimer);var best=localStorage.getItem('mines-best')||'999999';if(MS.timer<parseInt(best)){localStorage.setItem('mines-best',MS.timer);best=MS.timer}document.getElementById('mines-over-title').textContent='You Win!';document.getElementById('mines-over').classList.remove('lose');document.getElementById('mines-over').classList.add('win');document.getElementById('mines-final').textContent=MS.timer+'s';document.getElementById('mines-best-text').textContent='Best: '+best+'s';document.getElementById('mines-over').classList.add('show')}}
function minesClose(){if(minesTimer)clearInterval(minesTimer);document.getElementById('mines-modal').classList.remove('show')}
function openMines(){document.getElementById('mines-modal').classList.add('show');minesReset()}


/* ===== next inline block ===== */


var TTT={},tttWin=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function tttReset(){document.getElementById('ttt-over').classList.remove('show','win');TTT.board=Array(9).fill('');TTT.player='X';TTT.gameOver=false;document.getElementById('ttt-status').textContent='Your turn (X)';tttDraw()}
function tttDraw(){var b=document.getElementById('ttt-board');b.innerHTML='';for(var i=0;i<9;i++){var c=document.createElement('div');c.className='ttt-cell'+(TTT.board[i]==='X'?' x':TTT.board[i]==='O'?' o':'');c.textContent=TTT.board[i];c.dataset.i=i;c.onclick=function(){tttClick(parseInt(this.dataset.i))};b.appendChild(c)}}
function tttClick(i){if(TTT.gameOver||TTT.board[i])return;tttMove(i,'X');if(!TTT.gameOver)setTimeout(function(){var move=tttBestMove();if(move!==-1){tttMove(move,'O')}},200)}
function tttBestMove(){var empty=[];for(var i=0;i<9;i++)if(!TTT.board[i])empty.push(i);if(empty.length===0)return-1;var best=-1000,move=-1;for(var i=0;i<empty.length;i++){TTT.board[empty[i]]='O';var score=tttMinimax(-1000,1000,false);TTT.board[empty[i]]='';if(score>best){best=score;move=empty[i]}}return move}
function tttMinimax(alpha,beta,isMax){var w=tttCheckWin('O');if(w)return 10;w=tttCheckWin('X');if(w)return-10;var empty=[];for(var i=0;i<9;i++)if(!TTT.board[i])empty.push(i);if(empty.length===0)return 0;if(isMax){var best=-1000;for(var i=0;i<empty.length;i++){TTT.board[empty[i]]='O';var r=tttMinimax(alpha,beta,false);TTT.board[empty[i]]='';if(r>best)best=r;if(best>alpha)alpha=best;if(beta<=alpha)break}return best}else{var best=1000;for(var i=0;i<empty.length;i++){TTT.board[empty[i]]='X';var r=tttMinimax(alpha,beta,true);TTT.board[empty[i]]='';if(r<best)best=r;if(best<beta)beta=best;if(beta<=alpha)break}return best}}
function tttMove(i,sym){if(TTT.board[i])return;TTT.board[i]=sym;tttDraw();var w=tttCheckWin(sym);if(w){TTT.gameOver=true;document.querySelectorAll('.ttt-cell').forEach(function(c,idx){if(w.includes(idx))c.classList.add('win-cell')});setTimeout(function(){document.getElementById('ttt-title').textContent=sym==='X'?'You Win!':'AI Wins!';document.getElementById('ttt-title').style.color=sym==='X'?'#4CAF50':'#ff6b6b';document.getElementById('ttt-over').classList.add(sym==='X'?'win':'');document.getElementById('ttt-final').textContent=sym;document.getElementById('ttt-over').classList.add('show');if(sym==='X'){var x=parseInt(localStorage.getItem('ttt-x')||'0')+1;localStorage.setItem('ttt-x',x);document.getElementById('ttt-score-x').textContent=x}else{var o=parseInt(localStorage.getItem('ttt-o')||'0')+1;localStorage.setItem('ttt-o',o);document.getElementById('ttt-score-o').textContent=o}},300);return}if(!TTT.board.includes('')){TTT.gameOver=true;setTimeout(function(){document.getElementById('ttt-title').textContent='Draw!';document.getElementById('ttt-title').style.color='#888';document.getElementById('ttt-final').textContent='-';document.getElementById('ttt-over').classList.add('show');var d=parseInt(localStorage.getItem('ttt-d')||'0')+1;localStorage.setItem('ttt-d',d);document.getElementById('ttt-score-d').textContent=d},300)}}
function tttCheckWin(sym){for(var w of tttWin){if(TTT.board[w[0]]===sym&&TTT.board[w[1]]===sym&&TTT.board[w[2]]===sym)return w}return null}
function tttClose(){document.getElementById('ttt-modal').classList.remove('show')}
function openTTT(){document.getElementById('ttt-modal').classList.add('show');document.getElementById('ttt-score-x').textContent=localStorage.getItem('ttt-x')||'0';document.getElementById('ttt-score-o').textContent=localStorage.getItem('ttt-o')||'0';document.getElementById('ttt-score-d').textContent=localStorage.getItem('ttt-d')||'0';document.getElementById('ttt-title').style.color='';tttReset()}


/* ===== auto-generated event listeners (converted from inline on* attrs) ===== */

(function(){var el=document.getElementById('s-in');if(el){el.addEventListener('input', function(event){ onSearchInput(this.value) });}})();
(function(){var el=document.getElementById('s-in');if(el){el.addEventListener('keydown', function(event){ onKey(event) });}})();
(function(){var el=document.getElementById('ael-auto-1');if(el){el.addEventListener('click', function(event){ fetchWeather() });}})();
(function(){var el=document.getElementById('ael-auto-2');if(el){el.addEventListener('click', function(event){ openSettings() });}})();
(function(){var el=document.getElementById('s-overlay');if(el){el.addEventListener('click', function(event){ ov(event) });}})();
(function(){var el=document.getElementById('ael-auto-3');if(el){el.addEventListener('click', function(event){ closeSettings() });}})();
(function(){var el=document.getElementById('ael-auto-4');if(el){el.addEventListener('click', function(event){ openProfileModal() });}})();
(function(){var el=document.getElementById('sw-dark');if(el){el.addEventListener('click', function(event){ tog('dark') });}})();
(function(){var el=document.getElementById('sw-glow');if(el){el.addEventListener('click', function(event){ tog('glow') });}})();
(function(){var el=document.getElementById('sl-glow');if(el){el.addEventListener('input', function(event){ S.glowOpacity=+this.value;saveS();applyGlow() });}})();
(function(){var el=document.getElementById('ael-auto-5');if(el){el.addEventListener('click', function(event){ document.getElementById('wallpaper-file').click() });}})();
(function(){var el=document.getElementById('clear-wallpaper');if(el){el.addEventListener('click', function(event){ clearWallpaper() });}})();
(function(){var el=document.getElementById('wallpaper-file');if(el){el.addEventListener('change', function(event){ setWallpaper(event) });}})();
(function(){var el=document.getElementById('fs-s');if(el){el.addEventListener('click', function(event){ setFontSize('s') });}})();
(function(){var el=document.getElementById('fs-m');if(el){el.addEventListener('click', function(event){ setFontSize('m') });}})();
(function(){var el=document.getElementById('fs-l');if(el){el.addEventListener('click', function(event){ setFontSize('l') });}})();
(function(){var el=document.getElementById('sw-focusMode');if(el){el.addEventListener('click', function(event){ tog('focusMode') });}})();
(function(){var el=document.getElementById('sw-clock');if(el){el.addEventListener('click', function(event){ tog('clock') });}})();
(function(){var el=document.getElementById('sw-greet');if(el){el.addEventListener('click', function(event){ tog('greet') });}})();
(function(){var el=document.getElementById('sw-date');if(el){el.addEventListener('click', function(event){ tog('date') });}})();
(function(){var el=document.getElementById('fmt-24');if(el){el.addEventListener('click', function(event){ setFmt('24') });}})();
(function(){var el=document.getElementById('fmt-12');if(el){el.addEventListener('click', function(event){ setFmt('12') });}})();
(function(){var el=document.getElementById('sw-showSeconds');if(el){el.addEventListener('click', function(event){ tog('showSeconds') });}})();
(function(){var el=document.getElementById('sw-search');if(el){el.addEventListener('click', function(event){ tog('search') });}})();
(function(){var el=document.getElementById('ael-auto-6');if(el){el.addEventListener('click', function(event){ openEngineModal() });}})();
(function(){var el=document.getElementById('sw-newtab');if(el){el.addEventListener('click', function(event){ tog('newtab') });}})();
(function(){var el=document.getElementById('sw-engines');if(el){el.addEventListener('click', function(event){ tog('engines') });}})();
(function(){var el=document.getElementById('sw-sites');if(el){el.addEventListener('click', function(event){ tog('sites') });}})();
(function(){var el=document.getElementById('vm-grid');if(el){el.addEventListener('click', function(event){ setVm('grid') });}})();
(function(){var el=document.getElementById('vm-list');if(el){el.addEventListener('click', function(event){ setVm('list') });}})();
(function(){var el=document.getElementById('sw-icons');if(el){el.addEventListener('click', function(event){ tog('icons') });}})();
(function(){var el=document.getElementById('sw-hotkeys');if(el){el.addEventListener('click', function(event){ tog('hotkeys') });}})();
(function(){var el=document.getElementById('sw-labels');if(el){el.addEventListener('click', function(event){ tog('labels') });}})();
(function(){var el=document.getElementById('sz-s');if(el){el.addEventListener('click', function(event){ setSz('s') });}})();
(function(){var el=document.getElementById('sz-m');if(el){el.addEventListener('click', function(event){ setSz('m') });}})();
(function(){var el=document.getElementById('sz-l');if(el){el.addEventListener('click', function(event){ setSz('l') });}})();
(function(){var el=document.getElementById('sh-r');if(el){el.addEventListener('click', function(event){ setSh('r') });}})();
(function(){var el=document.getElementById('sh-c');if(el){el.addEventListener('click', function(event){ setSh('c') });}})();
(function(){var el=document.getElementById('sh-s');if(el){el.addEventListener('click', function(event){ setSh('s') });}})();
(function(){var el=document.getElementById('bg-accent');if(el){el.addEventListener('click', function(event){ setBg('accent') });}})();
(function(){var el=document.getElementById('bg-site');if(el){el.addEventListener('click', function(event){ setBg('site') });}})();
(function(){var el=document.getElementById('bg-neutral');if(el){el.addEventListener('click', function(event){ setBg('neutral') });}})();
(function(){var el=document.getElementById('sw-weather');if(el){el.addEventListener('click', function(event){ tog('weather') });}})();
(function(){var el=document.getElementById('ael-auto-7');if(el){el.addEventListener('click', function(event){ openCityM() });}})();
(function(){var el=document.getElementById('ut-c');if(el){el.addEventListener('click', function(event){ setUnit('C') });}})();
(function(){var el=document.getElementById('ut-f');if(el){el.addEventListener('click', function(event){ setUnit('F') });}})();
(function(){var el=document.getElementById('sw-forecast');if(el){el.addEventListener('click', function(event){ tog('forecast') });}})();
(function(){var el=document.getElementById('sw-wstats');if(el){el.addEventListener('click', function(event){ tog('wstats') });}})();
(function(){var el=document.getElementById('ael-auto-8');if(el){el.addEventListener('click', function(event){ exportData() });}})();
(function(){var el=document.getElementById('ael-auto-9');if(el){el.addEventListener('click', function(event){ document.getElementById('import-file').click() });}})();
(function(){var el=document.getElementById('import-file');if(el){el.addEventListener('change', function(event){ importData(event) });}})();
(function(){var el=document.getElementById('ael-auto-10');if(el){el.addEventListener('click', function(event){ resetSites() });}})();
(function(){var el=document.getElementById('ael-auto-11');if(el){el.addEventListener('click', function(event){ resetSettings() });}})();
(function(){var el=document.getElementById('site-m-ov');if(el){el.addEventListener('click', function(event){ closeM('site-m-ov',event) });}})();
(function(){var el=document.getElementById('inp-name');if(el){el.addEventListener('input', function(event){ tfv('tf-name','inp-name') });}})();
(function(){var el=document.getElementById('inp-url');if(el){el.addEventListener('input', function(event){ tfv('tf-url','inp-url') });}})();
(function(){var el=document.getElementById('ael-auto-12');if(el){el.addEventListener('click', function(event){ addCustomEmoji() });}})();
(function(){var el=document.getElementById('ael-auto-13');if(el){el.addEventListener('click', function(event){ document.getElementById('site-m-ov').classList.remove('show') });}})();
(function(){var el=document.getElementById('ael-auto-14');if(el){el.addEventListener('click', function(event){ saveSite() });}})();
(function(){var el=document.getElementById('city-m-ov');if(el){el.addEventListener('click', function(event){ closeM('city-m-ov',event) });}})();
(function(){var el=document.getElementById('inp-city');if(el){el.addEventListener('input', function(event){ tfv('tf-city','inp-city') });}})();
(function(){var el=document.getElementById('inp-city');if(el){el.addEventListener('keydown', function(event){ if(event.key==='Enter')saveCity() });}})();
(function(){var el=document.getElementById('ael-auto-15');if(el){el.addEventListener('click', function(event){ document.getElementById('city-m-ov').classList.remove('show') });}})();
(function(){var el=document.getElementById('ael-auto-16');if(el){el.addEventListener('click', function(event){ saveCity() });}})();
(function(){var el=document.getElementById('ctx');if(el){el.addEventListener('click', function(event){ event.stopPropagation() });}})();
(function(){var el=document.getElementById('ael-auto-17');if(el){el.addEventListener('click', function(event){ ctxOpen() });}})();
(function(){var el=document.getElementById('ael-auto-18');if(el){el.addEventListener('click', function(event){ ctxEdit() });}})();
(function(){var el=document.getElementById('ael-auto-19');if(el){el.addEventListener('click', function(event){ startDeleteConfirm(event) });}})();
(function(){var el=document.getElementById('ael-auto-20');if(el){el.addEventListener('click', function(event){ ctxDeleteConfirmed() });}})();
(function(){var el=document.getElementById('ael-auto-21');if(el){el.addEventListener('click', function(event){ ctxCancelDelete() });}})();
(function(){var el=document.getElementById('ael-auto-22');if(el){el.addEventListener('click', function(event){ hideSnack() });}})();
(function(){var el=document.getElementById('profile-m-ov');if(el){el.addEventListener('click', function(event){ closeM('profile-m-ov',event) });}})();
(function(){var el=document.getElementById('ael-auto-23');if(el){el.addEventListener('click', function(event){ addProfile(); setTimeout(renderProfileModal,50) });}})();
(function(){var el=document.getElementById('ael-auto-24');if(el){el.addEventListener('click', function(event){ deleteProfile() });}})();
(function(){var el=document.getElementById('ael-auto-25');if(el){el.addEventListener('click', function(event){ document.getElementById('profile-m-ov').classList.remove('show') });}})();
(function(){var el=document.getElementById('eng-m-ov');if(el){el.addEventListener('click', function(event){ closeM('eng-m-ov',event) });}})();
(function(){var el=document.getElementById('ael-auto-26');if(el){el.addEventListener('click', function(event){ document.getElementById('eng-m-ov').classList.remove('show') });}})();
(function(){var el=document.getElementById('ael-auto-27');if(el){el.addEventListener('click', function(event){ snakeStart() });}})();
(function(){var el=document.getElementById('ael-auto-28');if(el){el.addEventListener('click', function(event){ snakeClose() });}})();
(function(){var el=document.getElementById('ael-auto-29');if(el){el.addEventListener('click', function(event){ snakeStart() });}})();
(function(){var el=document.getElementById('ael-auto-30');if(el){el.addEventListener('click', function(event){ minesReset() });}})();
(function(){var el=document.getElementById('ael-auto-31');if(el){el.addEventListener('click', function(event){ minesClose() });}})();
(function(){var el=document.getElementById('ael-auto-32');if(el){el.addEventListener('click', function(event){ minesReset() });}})();
(function(){var el=document.getElementById('ael-auto-33');if(el){el.addEventListener('click', function(event){ tttReset() });}})();
(function(){var el=document.getElementById('ael-auto-34');if(el){el.addEventListener('click', function(event){ tttClose() });}})();
(function(){var el=document.getElementById('ael-auto-35');if(el){el.addEventListener('click', function(event){ tttReset() });}})();