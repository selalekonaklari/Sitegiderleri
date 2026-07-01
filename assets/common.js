function formatTL(n){
  return "₺" + n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// URL'deki ?ay=YYYY-MM parametresine göre ay seçer; parametre yoksa veya
// geçersizse en güncel (listedeki son) ayı döner.
function getCurrentMonthId(){
  const params = new URLSearchParams(window.location.search);
  const ay = params.get('ay');
  if (ay && MONTHS[ay]) return ay;
  return MONTH_LIST[MONTH_LIST.length - 1].id;
}

// Nav bar'daki ay seçiciyi yıllara göre gruplayarak doldurur ve
// değiştirildiğinde aynı sayfayı seçilen ayla yeniden yükler.
function initMonthSelector(){
  const sel = document.getElementById('monthSelect');
  if (!sel) return;
  const current = getCurrentMonthId();

  const byYear = {};
  MONTH_LIST.forEach(m => {
    const year = m.id.slice(0,4);
    (byYear[year] = byYear[year] || []).push(m);
  });

  Object.keys(byYear).sort((a,b) => b.localeCompare(a)).forEach(year => {
    const group = document.createElement('optgroup');
    group.label = year;
    [...byYear[year]].reverse().forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = m.label;
      if (m.id === current) opt.selected = true;
      group.appendChild(opt);
    });
    sel.appendChild(group);
  });

  sel.addEventListener('change', () => {
    const url = new URL(window.location.href);
    url.searchParams.set('ay', sel.value);
    window.location.href = url.toString();
  });
}

// Belirli bir yıla ait tüm ayların verisini toplar (Arşiv / Yıl Özeti için).
function getYearSummary(year){
  const months = MONTH_LIST.filter(m => m.id.startsWith(year)).map(m => MONTHS[m.id]);
  const gelir = months.reduce((s,m) => s + m.totals.gelir, 0);
  const gider = months.reduce((s,m) => s + m.totals.gider, 0);
  const expenseMap = {};
  months.forEach(m => m.expenses.forEach(e => {
    expenseMap[e.name] = (expenseMap[e.name] || 0) + e.amount;
  }));
  const incomeMap = {};
  months.forEach(m => m.incomes.forEach(i => {
    incomeMap[i.name] = (incomeMap[i.name] || 0) + i.amount;
  }));
  return {
    monthCount: months.length,
    gelir, gider, fark: gelir - gider,
    expenses: Object.entries(expenseMap).map(([name,amount]) => ({name, amount})).sort((a,b)=>b.amount-a.amount),
    incomes: Object.entries(incomeMap).map(([name,amount]) => ({name, amount})).sort((a,b)=>b.amount-a.amount),
    months
  };
}
