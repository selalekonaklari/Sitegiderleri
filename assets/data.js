// Haziran 2026 Gelir-Gider verileri
// Tutarlar TL, virgülsüz sayı (kuruş dahil ondalık nokta ile)

const EXPENSES = [
  { name: "Güvenlik",        amount: 190800.00, desc: "Haziran ayı güvenlik firması ödemesi", color: "#A8422A" },
  { name: "Değer Kaybı",     amount: 100000.00, desc: "Fırtına — araç hasar değer kaybı (tek seferlik)", color: "#B9902A" },
  { name: "Personel",        amount: 28075.50,  desc: "Haziran ayına ait personel maaşı", color: "#C1543A" },
  { name: "SGK",             amount: 21737.26,  desc: "Mayıs ve Haziran ayı SGK ödemesi", color: "#CB6A4E" },
  { name: "Elektrik",        amount: 15040.00,  desc: "Ortak elektrik giderleri", color: "#D57F62" },
  { name: "Su",              amount: 11867.00,  desc: "Ortak su giderleri", color: "#DE9476" },
  { name: "Fon Hesabı",      amount: 10650.00,  desc: "Bayram Söylemez kıdem tazminatı", color: "#E4A78A" },
  { name: "Demirbaş",        amount: 8508.37,   desc: "27 adet LED lamba, 60 m elektrik kablo ve uç", color: "#EABA9F" },
  { name: "Asansör Bakım",   amount: 3000.00,   desc: "Aylık bakım ücreti", color: "#EFCCB4" },
  { name: "Doğalgaz",        amount: 270.00,    desc: "Görevli kullanımı", color: "#F3DCC8" },
  { name: "Genel",           amount: 150.00,    desc: "Otopark ücreti (banka işlemleri)", color: "#F6E7DA" },
  { name: "Banka Masrafı",   amount: 7.69,      desc: "Fon işletim ücreti", color: "#F9F1EA" },
];

const INCOMES = [
  { name: "Aidat",                              amount: 337206.00, count: 72, desc: "Aylık aidat tahsilatı", color: "#1F6F5C" },
  { name: "Bakanlık Yardımı",                   amount: 200000.00, count: 1,  desc: "Tek seferlik destek ödemesi", color: "#B9902A" },
  { name: "Çatıdan Kasaya Devreden Bakiye",     amount: 84170.00,  count: 1,  desc: "Önceki dönemden devreden bakiye", color: "#3F8C79" },
  { name: "Aydem Şarj İstasyonu Yer Tahsis",    amount: 833.00,    count: 2,  desc: "Şarj istasyonu yer tahsis geliri", color: "#6DA999" },
  { name: "Geciken Aidat",                      amount: 0.00,      count: 0,  desc: "Bu ay için geciken aidat kaydı yok", color: "#B9CFC8" },
];

const CASH = {
  bankaKasasi: 360222.65,
  fonYatanMiktar: 319500.00,
  fonKarMiktar: 154719.48,
  fonToplam: 498393.38
};

const TOTALS = {
  gelir: 622209.00,
  gider: 390105.82,
  fark: 232103.18
};

function formatTL(n){
  return "₺" + n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
