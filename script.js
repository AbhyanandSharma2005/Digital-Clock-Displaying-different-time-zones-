


// --- BEGIN DATA ---
const timeZones = [
  "Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Asmera","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek",
  "America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Atka","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Jujuy","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Knox_IN","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Louisville","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Mendoza","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Acre","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santa_Isabel","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Shiprock","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Virgin","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife",
  "Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Ashkhabad","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Calcutta","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Chungking","Asia/Colombo","Asia/Dacca","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Istanbul","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Katmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macao","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Rangoon","Asia/Riyadh","Asia/Saigon","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimbu","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ujung_Pandang","Asia/Ulaanbaatar","Asia/Ulan_Bator","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan",
  "Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faeroe","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley",
  "Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney",
  "Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich",
  "Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion",
  "Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Ponape","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Samoa","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Truk","Pacific/Wake","Pacific/Wallis","Pacific/Yap",
  "UTC"
];

// --- UTILITIES ---
function getFlagEmoji(tz) {
  // Tries to extract a country code from TZ string
  const zoneParts = tz.split('/');
  let cc = '';
  if (zoneParts[0] === 'America') {
    if (zoneParts[1].startsWith('Argentina')) cc = 'AR';
    else if (zoneParts[1].startsWith('Indiana') || zoneParts[1].startsWith('Kentucky') || zoneParts[1]==='New_York'||zoneParts[1]==='Chicago'||zoneParts[1]==='Denver'||zoneParts[1]==='Los_Angeles'||zoneParts[1]==='Phoenix') cc = 'US';
    else cc = 'US';
  } else if (zoneParts[0] === 'Europe') {
    const eu = {
      London:'GB', Paris:'FR', Berlin:'DE', Rome:'IT', Madrid:'ES', Dublin:'IE', Oslo:'NO', Vienna:'AT', Prague:'CZ', Amsterdam:'NL', Brussels:'BE', Warsaw:'PL', Lisbon:'PT', Helsinki:'FI', Athens:'GR', Budapest:'HU', Bucharest:'RO', Copenhagen:'DK', Stockholm:'SE', Zurich:'CH', Moscow:'RU'
    };
    cc = eu[zoneParts[1]] || '';
  } else if (zoneParts[0] === 'Asia') {
    const asia = { Tokyo:'JP', Shanghai:'CN', Hong_Kong:'HK', Seoul:'KR', Bangkok:'TH', Singapore:'SG', Taipei:'TW', Kolkata:'IN', Jerusalem:'IL', Riyadh:'SA', Dubai:'AE', Karachi:'PK', Jakarta:'ID', Manila:'PH' }; cc = asia[zoneParts[1]] || '';
  } else if (zoneParts[0] === 'Pacific') {
    const pac = { Auckland:'NZ', Fiji:'FJ', Honolulu:'US', Guam:'GU', Tahiti:'PF', Apia:'WS', Noumea:'NC', Port_Moresby:'PG' }; cc = pac[zoneParts[1]] || '';
  }
  else if (zoneParts[0] === 'Australia') cc = 'AU';
  else if (zoneParts[0] === 'Africa') {
    const af = { Cairo:'EG', Johannesburg:'ZA', Lagos:'NG', Nairobi:'KE', Casablanca:'MA', Accra:'GH', Tunis:'TN'};
    cc = af[zoneParts[1]] || '';
  }
  else if (zoneParts[0] === 'Indian') cc = 'IN';
  else if (zoneParts[0] === 'Atlantic') cc = 'GB';
  else if (zoneParts[0] === 'UTC') cc = '';
  return cc ? cc.replace(/[A-Z]/g, c => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0)-65)) : '🌍';
}
function getDayNightIcon(hours) {
  return hours >= 7 && hours < 19 ? "☀️" : "🌙";
}
function getOffsetString(tz, date = new Date()) {
  const offsetMins = -date.toLocaleTimeString('en-US', {timeZone:tz, timeZoneName:'short'}).match(/GMT([+-]\d+)/)?.[1]*60 || date.getTimezoneOffset();
  const offset = -date.getTimezoneOffset() + (offsetMins || 0);
  const sign = offset>=0?'+':'-';
  const abs = Math.abs(offset);
  return `UTC${sign}${String(Math.floor(abs/60)).padStart(2,'0')}:${String(abs%60).padStart(2,'0')}`;
}

// --- STORAGE ---
const LS_KEY = 'neon-clocks';
const LS_FAV = 'neon-favzones';
const LS_THEME = 'neon-theme';
const LS_H12 = 'neon-12h';

// --- STATE ---
let clocks = JSON.parse(localStorage.getItem(LS_KEY)||'[]');
let favorites = JSON.parse(localStorage.getItem(LS_FAV)||'[]');
let theme = localStorage.getItem(LS_THEME)||'neon';
let is12h = localStorage.getItem(LS_H12)==='true';

// --- DOM ---
const tzSelect = document.getElementById('timezone-select');
const addBtn = document.getElementById('add-clock-btn');
const zoneSearch = document.getElementById('zone-search');
const clocksContainer = document.getElementById('clocks-container');
const favDiv = document.getElementById('favorites');
const themeSel = document.getElementById('theme-select');
const h12Toggle = document.getElementById('toggle-12h');
const meetingBtn = document.getElementById('meeting-btn');
const copyright = document.getElementById('copyright');
copyright.textContent = `© ${new Date().getFullYear()} Neon Clocks`;

// --- TZ SEARCH + SELECT ---
function filterZones(query) {
  query = query.toLowerCase();
  return timeZones.filter(z => z.toLowerCase().includes(query));
}
function renderTZSelect() {
  const filtered = filterZones(zoneSearch.value);
  tzSelect.innerHTML = '';
  (favorites.concat(filtered.filter(z=>!favorites.includes(z)))).forEach(z => {
    const opt = document.createElement('option');
    opt.value = z;
    opt.textContent = z.replace(/_/g, ' ');
    tzSelect.appendChild(opt);
  });
}
zoneSearch.addEventListener('input', renderTZSelect);

// --- FAVORITES ---
function renderFavorites() {
  favDiv.innerHTML = '';
  favorites.forEach(z => {
    const btn = document.createElement('button');
    btn.className = 'fav-btn';
    btn.innerHTML = `${getFlagEmoji(z)} ${z.split('/').pop().replace(/_/g,' ')} &times;`;
    btn.onclick = () => { favorites=favorites.filter(f=>f!==z); saveFavs(); renderTZSelect(); renderFavorites(); };
    favDiv.appendChild(btn);
  });
}
function saveFavs() { localStorage.setItem(LS_FAV, JSON.stringify(favorites)); }
// Star current in select
tzSelect.addEventListener('dblclick', ()=> {
  const val = tzSelect.value;
  if (!favorites.includes(val)) { favorites.push(val); saveFavs(); renderTZSelect(); renderFavorites(); }
});

// --- CLOCKS ---
function saveClocks() { localStorage.setItem(LS_KEY, JSON.stringify(clocks)); }
function addClock(tz) {
  if (clocks.find(c=>c.tz===tz)) return;
  clocks.push({
    id: Date.now()+Math.random().toString(36).slice(2,6),
    tz,
    label: '',
    analog: false,
    alarm: null
  });
  saveClocks();
  renderClocks();
}
function removeClock(id) {
  const idx = clocks.findIndex(c=>c.id===id);
  if (idx===-1) return;
  const card = document.getElementById('clock-card-'+id);
  if (card) {
    card.classList.add('removing');
    setTimeout(()=>{ clocks.splice(idx,1); saveClocks(); renderClocks(); }, 380);
  }
}
function toggleAnalog(id) {
  const c = clocks.find(c=>c.id===id);
  c.analog=!c.analog; saveClocks(); renderClocks();
}
function setLabel(id) {
  const dialog = document.getElementById('label-dialog');
  dialog.showModal();
  const input = document.getElementById('custom-label');
  input.value = clocks.find(c=>c.id===id).label||'';
  document.getElementById('save-label').onclick = (e) => {
    e.preventDefault();
    clocks.find(c=>c.id===id).label = input.value;
    saveClocks();
    renderClocks();
    dialog.close();
  };
}
function setAlarm(id) {
  const timeStr = prompt('Set alarm (HH:MM, 24h, in that zone):');
  if (!/^\d\d?:\d\d$/.test(timeStr)) return alert('Invalid format');
  clocks.find(c=>c.id===id).alarm = timeStr;
  saveClocks(); renderClocks();
}
function clearAlarm(id) {
  clocks.find(c=>c.id===id).alarm = null;
  saveClocks(); renderClocks();
}
function renderClocks() {
  clocksContainer.innerHTML = '';
  clocks.forEach(clock => {
    const now = new Date();
    const timeOpt = { timeZone: clock.tz, hour:'2-digit',minute:'2-digit',second:'2-digit', hour12:is12h };
    const dateOpt = { timeZone: clock.tz, year:'numeric',month:'short',day:'2-digit',weekday:'short' };
    const time = now.toLocaleTimeString('en-US', timeOpt);
    const date = now.toLocaleDateString('en-US', dateOpt);
    const hours = +now.toLocaleString('en-US', {timeZone:clock.tz,hour:'2-digit',hour12:false});
    const offset = getOffsetString(clock.tz, now);
    const dayNight = getDayNightIcon(hours);
    const flag = getFlagEmoji(clock.tz);

    const card = document.createElement('div');
    card.className = 'clock-card';
    card.id = 'clock-card-'+clock.id;
    card.innerHTML = `
      <div class="clock-header">
        <span class="flag">${flag}</span>
        <span class="clock-title">${clock.tz.replace(/_/g,' ')}${clock.label?'<span class="clock-label" title="Rename label">'+clock.label+'</span>':''}</span>
        <span class="day-indicator" title="Day/Night">${dayNight}</span>
      </div>
      <div class="clock-offset">${offset}</div>
      <div class="clock-date">${date}</div>
      <div class="clock-time" id="clock-time-${clock.id}">${time}</div>
      <div class="clock-actions">
        <button class="action-btn" title="Favorite" onclick="addFavorite('${clock.tz}')">⭐</button>
        <button class="action-btn" title="Toggle Analog/Digital" onclick="toggleAnalog('${clock.id}')">${clock.analog?'🕒':'🔢'}</button>
        <button class="action-btn" title="Set Label" onclick="setLabel('${clock.id}')">✏️</button>
        <button class="action-btn" title="Alarm" onclick="setAlarm('${clock.id}')">⏰</button>
        <button class="action-btn" title="Remove" onclick="removeClock('${clock.id}')">❌</button>
      </div>
      ${clock.alarm?`<div class="alarm-set">Alarm: ${clock.alarm} <span onclick="clearAlarm('${clock.id}')" title="Clear" style="cursor:pointer;">&times;</span></div>`:''}
      <div id="weather-${clock.id}" class="weather-info">Loading...</div>
      ${clock.analog?`<div class="analog-clock" id="analog-${clock.id}"></div>`:''}
    `;
    clocksContainer.appendChild(card);
    // Weather
    fetchWeather(clock.tz, clock.id);
    // Analog
    if(clock.analog) drawAnalog(clock.tz, clock.id);
    // Label click
    if (card.querySelector('.clock-label')) card.querySelector('.clock-label').onclick = ()=>setLabel(clock.id);
  });
}
window.addFavorite = function(tz) {
  if (!favorites.includes(tz)) { favorites.push(tz); saveFavs(); renderTZSelect(); renderFavorites(); }
};
window.toggleAnalog = toggleAnalog;
window.setLabel = setLabel;
window.setAlarm = setAlarm;
window.clearAlarm = clearAlarm;
window.removeClock = removeClock;

// --- WEATHER ---
const weatherCache = {};
function fetchWeather(tz, id) {
  if (weatherCache[tz]) return updateWeather(id, weatherCache[tz]);
  // Get latlon for some known cities (demo)
  const cityCoords = {
    'Asia/Tokyo':[35.6895,139.6917], 'Europe/London':[51.5072,-0.1276],'America/New_York':[40.7128,-74.0060],'Europe/Paris':[48.8566,2.3522],'America/Chicago':[41.8781,-87.6298],'Asia/Kolkata':[28.6139,77.2090],'Europe/Berlin':[52.5200,13.4050],'Australia/Sydney':[-33.8688,151.2093],'America/Los_Angeles':[34.0522,-118.2437]
  };
  let coords = cityCoords[tz]||[0,0];
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current_weather=true`;
  fetch(url).then(r=>r.json()).then(d=>{
    const w = d.current_weather;
    if (!w) return;
    weatherCache[tz]=w;
    updateWeather(id, w);
  });
}
function updateWeather(id, w) {
  const icon = w.temperature>30?'🔥':w.temperature<10?'❄️':'🌡️';
  const txt = `${icon} ${w.temperature}°C, ${w.weathercode<3?'Clear':w.weathercode<6?'Cloudy':'Rain'}`;
  const el = document.getElementById('weather-'+id);
  if(el) el.textContent=txt;
}

// --- ANALOG CLOCK ---
function drawAnalog(tz, id) {
  const now = new Date();
  const h = +now.toLocaleString('en-US',{timeZone:tz,hour:'2-digit',hour12:false});
  const m = +now.toLocaleString('en-US',{timeZone:tz,minute:'2-digit'});
  const s = +now.toLocaleString('en-US',{timeZone:tz,second:'2-digit'});
  const ac = document.getElementById('analog-'+id);
  if (!ac) return;
  ac.innerHTML = `
    <div class="hand hour" style="height:17px;width:3.5px;transform:rotate(${(h%12)*30+m/2}deg) translate(-50%,-100%);"></div>
    <div class="hand min" style="height:25px;width:2px;transform:rotate(${m*6}deg) translate(-50%,-100%);"></div>
    <div class="hand sec" style="height:27px;width:1.2px;transform:rotate(${s*6}deg) translate(-50%,-100%);"></div>
  `;
}

// --- CLOCKS TICK ---
function tick() {
  clocks.forEach(clock=>{
    const now = new Date();
    const timeOpt = { timeZone: clock.tz, hour:'2-digit',minute:'2-digit',second:'2-digit', hour12:is12h };
    const dateOpt = { timeZone: clock.tz, year:'numeric',month:'short',day:'2-digit',weekday:'short' };
    const time = now.toLocaleTimeString('en-US', timeOpt);
    const date = now.toLocaleDateString('en-US', dateOpt);
    const hours = +now.toLocaleString('en-US', {timeZone:clock.tz,hour:'2-digit',hour12:false});
    const offset = getOffsetString(clock.tz, now);
    const dayNight = getDayNightIcon(hours);
    document.getElementById('clock-time-'+clock.id).textContent = time;
    document.getElementById('clock-card-'+clock.id).querySelector('.clock-date').textContent = date;
    document.getElementById('clock-card-'+clock.id).querySelector('.clock-offset').textContent = offset;
    document.getElementById('clock-card-'+clock.id).querySelector('.day-indicator').textContent = dayNight;
    if (clock.analog) drawAnalog(clock.tz, clock.id);
    // Alarm
    if (clock.alarm && time.startsWith(clock.alarm)) {
      if (Notification.permission==='granted') new Notification(`⏰ ${clock.tz}: ${clock.alarm}`);
      else alert(`ALARM for ${clock.tz}: ${clock.alarm}`);
      clock.alarm = null; saveClocks(); renderClocks();
    }
  });
}
setInterval(tick, 1000);

// --- THEME ---
function applyTheme() {
  document.body.setAttribute('data-theme', theme);
  themeSel.value = theme;
}
themeSel.addEventListener('change', ()=>{ theme=themeSel.value; localStorage.setItem(LS_THEME,theme); applyTheme();});
applyTheme();

// --- 12/24h ---
h12Toggle.checked = is12h;
h12Toggle.addEventListener('change', ()=>{ is12h=h12Toggle.checked; localStorage.setItem(LS_H12,is12h); renderClocks();});

// --- ADD CLOCK ---
addBtn.onclick = ()=> addClock(tzSelect.value);

// --- INITIAL RENDER ---
renderTZSelect();
renderFavorites();
renderClocks();

// --- MEETING PLANNER ---
meetingBtn.onclick = ()=>{
  const dialog = document.getElementById('meeting-dialog');
  dialog.showModal();
  const tzs = clocks.map(c=>c.tz);
  const mtz = document.getElementById('meeting-timezones');
  mtz.innerHTML = '';
  tzs.forEach(z=>{
    const cb = document.createElement('label');
    cb.innerHTML = `<input type="checkbox" checked value="${z}"> ${z.replace(/_/g,' ')}`;
    mtz.appendChild(cb);
  });
  document.getElementById('plan-meeting').onclick = (e)=>{
    e.preventDefault();
    const sel = [...mtz.querySelectorAll('input:checked')].map(i=>i.value);
    const refTime = new Date(document.getElementById('meeting-ref').value);
    if (!refTime||!sel.length) return;
    let res = '';
    sel.forEach(z=>{
      const opt = { timeZone: z, hour:'2-digit',minute:'2-digit',hour12:false };
      const t = refTime.toLocaleTimeString('en-US',opt);
      res+=`<div>${z.replace(/_/g,' ')}: <b>${t}</b></div>`;
    });
    document.getElementById('meeting-results').innerHTML = res;
  };
};

// --- GLOBALS for inline event handlers ---
window.setLabel = setLabel;
window.setAlarm = setAlarm;
window.clearAlarm = clearAlarm;
window.removeClock = removeClock;
window.addFavorite = window.addFavorite || function(){};
