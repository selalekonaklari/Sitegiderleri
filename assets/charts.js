// Harici kütüphane kullanmadan, sadece CSS conic-gradient ile donut grafik oluşturur.

// Kategori sayısı ay ay değiştiği için renkler sabit değil, sıraya göre üretilir.
// type: 'expense' (kırmızı-turuncu tonları) veya 'income' (yeşil-teal tonları)
function paletteColor(type, index, total){
  const hue = type === 'expense' ? 14 : 165;
  const span = Math.max(total - 1, 1);
  const light = 34 + (index * (44 / span));
  const sat = 62 - (index * (18 / span));
  return `hsl(${hue}, ${sat.toFixed(0)}%, ${light.toFixed(0)}%)`;
}

// items: [{name, amount}] -> aynı diziyi renk atanmış olarak döner (sıralı: büyükten küçüğe varsayılır)
function assignColors(items, type){
  const total = items.length;
  return items.map((it, i) => Object.assign({}, it, { color: paletteColor(type, i, total) }));
}

// items: [{name, amount, color}], donutElId: donut div id, legendElId: legend liste id
function renderDonut(donutElId, legendElId, items, centerValue, centerLabel){
  const total = items.reduce((s,i) => s + i.amount, 0);
  let cursor = 0;
  const stops = items.map(i => {
    const start = (cursor / total) * 360;
    cursor += i.amount;
    const end = (cursor / total) * 360;
    return `${i.color} ${start.toFixed(2)}deg ${end.toFixed(2)}deg`;
  }).join(', ');

  const donutEl = document.getElementById(donutElId);
  if (donutEl) {
    donutEl.style.background = total > 0 ? `conic-gradient(${stops})` : '#e4dcc9';
  }

  const centerVal = document.querySelector('#' + donutElId + 'Wrap .donut-hole .value');
  const centerLab = document.querySelector('#' + donutElId + 'Wrap .donut-hole .label');
  if (centerVal) centerVal.textContent = centerValue;
  if (centerLab) centerLab.textContent = centerLabel;

  const legendEl = document.getElementById(legendElId);
  if (legendEl) {
    legendEl.innerHTML = items.map(i => {
      const pct = total > 0 ? (i.amount/total*100) : 0;
      return `
        <div class="legend-item">
          <div class="legend-left">
            <span class="legend-dot" style="background:${i.color}"></span>
            <span class="name">${i.name}</span>
          </div>
          <span class="legend-amount">%${pct.toFixed(1)} · ${formatTL(i.amount)}</span>
        </div>`;
    }).join('');
  }
}
