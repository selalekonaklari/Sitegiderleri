// Otomatik oluşturuldu: 2024_Bilanço.xlsx dosyasındaki tüm aylık sayfalardan.
const MONTH_LIST = [
  { id: '2024-01', label: 'Ocak 2024' },
  { id: '2024-02', label: 'Şubat 2024' },
  { id: '2024-03', label: 'Mart 2024' },
  { id: '2024-04', label: 'Nisan 2024' },
  { id: '2024-05', label: 'Mayıs 2024' },
  { id: '2024-06', label: 'Haziran 2024' },
  { id: '2024-07', label: 'Temmuz 2024' },
  { id: '2024-08', label: 'Ağustos 2024' },
  { id: '2024-09', label: 'Eylül 2024' },
  { id: '2024-10', label: 'Ekim 2024' },
  { id: '2024-11', label: 'Kasım 2024' },
  { id: '2024-12', label: 'Aralık 2024' },
  { id: '2025-01', label: 'Ocak 2025' },
  { id: '2025-02', label: 'Şubat 2025' },
  { id: '2025-03', label: 'Mart 2025' },
  { id: '2025-04', label: 'Nisan 2025' },
  { id: '2025-05', label: 'Mayıs 2025' },
  { id: '2025-06', label: 'Haziran 2025' },
  { id: '2025-07', label: 'Temmuz 2025' },
  { id: '2025-08', label: 'Ağustos 2025' },
  { id: '2025-09', label: 'Eylül 2025' },
  { id: '2025-10', label: 'Ekim 2025' },
  { id: '2025-11', label: 'Kasım 2025' },
  { id: '2025-12', label: 'Aralık 2025' },
  { id: '2026-01', label: 'Ocak 2026' },
  { id: '2026-02', label: 'Şubat 2026' },
  { id: '2026-03', label: 'Mart 2026' },
  { id: '2026-04', label: 'Nisan 2026' },
  { id: '2026-05', label: 'Mayıs 2026' },
  { id: '2026-06', label: 'Haziran 2026' },
];

const MONTHS = {};

MONTHS['2024-01'] = {
  label: 'Ocak 2024',
  period: '01 Ocak 2024 - 31 Ocak 2024',
  expenses: [
    { name: 'Doğalgaz', amount: 68345.0, desc: 'Aralık ayı Doğalgaz' },
    { name: 'GÜVENLİK', amount: 145917.22, desc: 'Aralık ve Ocak Maaş' },
    { name: 'Elektrik', amount: 15645.0, desc: 'Site Ortak Elektrik Gideri' },
    { name: 'Temizlik', amount: 100.0, desc: 'Site Temizlik Giderleri' },
    { name: 'Personel', amount: 11722.0, desc: 'Personel Aralık Maaş Ödemesi' },
    { name: 'Bakım Onarım', amount: 3812.5, desc: 'Elektrik Malz.-Çöp B.Tekerleği-Bina Koku' },
    { name: 'SGK', amount: 7719.86, desc: 'Personel Aralık-Ocak SGK ödemesi' },
    { name: 'SU', amount: 2214.0, desc: 'Site Genel Su giderleri' },
    { name: 'Asansör Bakımı', amount: 2650.0, desc: 'periyodik 2 bina bakım + paten değişim' },
    { name: 'Demirbaş', amount: 1864.57, desc: 'Hamam Malz. Yönetim Kırtasiye' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminat' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 0, desc: '' },
    { name: 'Yakıt', amount: 68405.0, count: 0, desc: '' },
  ],
  cash: { banka: 27568.99, bankaLabel: "Banka Kasası Nakit Miktarı 31Ocak", fonYatan: null, fonKar: null, fonToplam: null },
  totals: { gelir: 245905.0, gider: 270640.15, fark: -24735.150000000023 }
};

MONTHS['2024-02'] = {
  label: 'Şubat 2024',
  period: '01 Şubat 2024 - 01 Mart 2024',
  expenses: [
    { name: 'Doğalgaz', amount: 76890.0, desc: 'Şubat  ayı Doğalgaz' },
    { name: 'GÜVENLİK', amount: 105000.0, desc: 'Şubat Maaş- 1 mart ödenmiştir.' },
    { name: 'Elektrik', amount: 14460.0, desc: 'Site Ortak Elektrik Gideri' },
    { name: 'Temizlik', amount: 0.0, desc: 'gider bulunmamaktadır.' },
    { name: 'Personel', amount: 17002.13, desc: 'Personel Şubat Maaş Ödemesi -1 mart Ödenmiştir.' },
    { name: 'Bakım Onarım', amount: 1150.0, desc: 'Şamandıra,Hidrofor parça değişim +işçilik' },
    { name: 'SGK', amount: 6001.03, desc: 'Personel Şubat SGK ödemesi' },
    { name: 'SU', amount: 3611.0, desc: 'Site Genel Su giderleri' },
    { name: 'Asansör Bakımı', amount: 1500.0, desc: 'Asansör Şubat Aylık Bakım 2 blok 1 mart ödenmiştir.' },
    { name: 'Demirbaş', amount: 2477.5, desc: 'Güvenlik Soba,Kettle,Kıyafet' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminat' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 0, desc: '' },
    { name: 'Yakıt', amount: 76937.0, count: 0, desc: '' },
  ],
  cash: { banka: 33418.47, bankaLabel: "Banka Kasası Nakit Miktarı 01Mart", fonYatan: null, fonKar: null, fonToplam: null },
  totals: { gelir: 254437.0, gider: 238741.66, fark: 15695.339999999997 }
};

MONTHS['2024-03'] = {
  label: 'Mart 2024',
  period: '02 Mart 2024 - 01 Nisan 2024',
  expenses: [
    { name: 'Doğalgaz', amount: 46560.0, desc: 'Mart  ayı Doğalgaz' },
    { name: 'GÜVENLİK', amount: 105000.0, desc: 'Mart Maaş- 1 Nisan ödenmiştir.' },
    { name: 'Elektrik', amount: 13760.0, desc: 'Site Ortak Elektrik Gideri' },
    { name: 'Temizlik', amount: 2161.8, desc: 'Temizlik Kimyasal-Bez' },
    { name: 'Personel', amount: 17568.86, desc: 'Personel Mart Maaş Ödemesi -1 Nisan Ödenmiştir.' },
    { name: 'Bakım Onarım', amount: 1314.43, desc: 'Bahçe böcek zirai ilaç' },
    { name: 'SGK', amount: 5800.93, desc: 'Personel Mart SGK ödemesi' },
    { name: 'SU', amount: 1680.0, desc: 'Site Genel Su giderleri' },
    { name: 'Asansör Bakımı', amount: 1140.0, desc: 'Asansör Mart Aylık Bakım 2 blok 1 Nisan ödenmiştir.' },
    { name: 'Demirbaş', amount: 14999.48, desc: 'Pompa-Bitki-Kürek-Saksı-' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminat 3. ay' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 0, desc: '' },
    { name: 'Yakıt', amount: 46622.0, count: 0, desc: '' },
  ],
  cash: { banka: 33556.51, bankaLabel: "Banka Kasası Nakit Miktarı 01Mart", fonYatan: null, fonKar: null, fonToplam: null },
  totals: { gelir: 224122.0, gider: 220635.49999999997, fark: 3486.500000000029 }
};

MONTHS['2024-04'] = {
  label: 'Nisan 2024',
  period: '02 Nisan 2024 - 02 Mayıs 2024',
  expenses: [
    { name: 'Doğalgaz', amount: 36410.0, desc: 'Mart  ayı Doğalgaz' },
    { name: 'GÜVENLİK', amount: 105000.0, desc: 'Nisan Maaş- 2 Mayıs ödenmiştir.' },
    { name: 'Elektrik', amount: 9710.0, desc: 'Site Ortak Elektrik Gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminat 4. ay' },
    { name: 'Personel', amount: 17002.13, desc: 'Personel Nisan Maaş Ödemesi -1 Nisan Ödenmiştir.' },
    { name: 'Bakım Onarım', amount: 8500.0, desc: 'Demir onarım' },
    { name: 'SGK', amount: 5800.93, desc: 'Personel Mart SGK ödemesi' },
    { name: 'SU', amount: 4142.0, desc: 'Site Genel Su giderleri' },
    { name: 'Genel', amount: 474.0, desc: '23 Nisan Çocuklar İçin Çikolata-Kek-Bayrak' },
    { name: 'Havuz Kimyasal', amount: 16000.0, desc: 'Havuz Kimyasal' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 0, desc: '' },
    { name: 'Yakıt', amount: 36428.0, count: 0, desc: '' },
  ],
  cash: { banka: 33623.93, bankaLabel: "Banka Kasası Nakit Miktarı 01Mart", fonYatan: null, fonKar: null, fonToplam: null },
  totals: { gelir: 213928.0, gider: 213689.06, fark: 238.94000000000233 }
};

MONTHS['2024-05'] = {
  label: 'Mayıs 2024',
  period: '02 Mayıs 2024 - 03 Haziran 2024',
  expenses: [
    { name: 'Doğalgaz', amount: 710.0, desc: 'Nisan  Doğalgaz ödemesi (Site Kasasından Karşılandı)' },
    { name: 'GÜVENLİK', amount: 121529.0, desc: 'Mayıs Maaşı-Resmi Tatil-Tshirt Ücreti  3 Haziran ödenmiştir.' },
    { name: 'Elektrik', amount: 2655.0, desc: 'Ortak Elektrik Gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminat 5. ay' },
    { name: 'Personel', amount: 17568.86, desc: 'Personel Mayıs Maaş Ödemesi -3 Haziran Ödenmiştir.' },
    { name: 'Site Genel Gider', amount: 10008.65, desc: 'Banka Transfer eft ücreti-Arıtma tuz alımı' },
    { name: 'SGK', amount: 5800.93, desc: 'Personel Mayıs SGK ödemesi' },
    { name: 'SU', amount: 8550.0, desc: 'Ortak Su gideri' },
    { name: 'Asansör Bakım', amount: 1920.0, desc: 'Asansör Bakım-Paten Değişim Nisan Bakım' },
  ],
  incomes: [
    { name: 'Aidat', amount: 175000.0, count: 0, desc: '' },
    { name: '1 Daire (Mazeretli)', amount: 0.0, count: 2500, desc: '' },
  ],
  cash: { banka: 27266.49, bankaLabel: "Banka Kasası Nakit Miktarı 03 Haziran", fonYatan: null, fonKar: null, fonToplam: null },
  totals: { gelir: 175000.0, gider: 179392.43999999997, fark: -4392.439999999973 }
};

MONTHS['2024-06'] = {
  label: 'Haziran 2024',
  period: '03 Haziran 2024 - 01 Temmuz 2024',
  expenses: [
    { name: 'Doğalgaz', amount: 150.0, desc: 'Görevli Doğalgaz' },
    { name: 'GÜVENLİK', amount: 127008.0, desc: 'Haziran Maaşı-Bayram Tatili Resmi Tatil' },
    { name: 'Elektrik', amount: 8383.53, desc: 'Ortak Elektrik Gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminat 5. ay' },
    { name: 'Personel', amount: 17002.13, desc: 'Personel Haziran Maaş Ödemesi' },
    { name: 'Bakım Onarım', amount: 1100.0, desc: 'Asansör Parça Değişimi' },
    { name: 'SGK', amount: 5800.93, desc: 'Personel Haziran SGK ödemesi' },
    { name: 'SU', amount: 14322.0, desc: 'Ortak Su gideri' },
    { name: 'Asansör Bakım', amount: 1320.0, desc: 'Asansör Bakım' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 0, desc: '' },
    { name: '1 Daire (Mazeretli)', amount: 2500.0, count: 0, desc: '' },
  ],
  cash: { banka: 15401.04, bankaLabel: "Banka Kasası Nakit Miktarı 01 Temmuz", fonYatan: null, fonKar: null, fonToplam: null },
  totals: { gelir: 180000.0, gider: 185736.59, fark: -5736.5899999999965 }
};

MONTHS['2024-07'] = {
  label: 'Temmuz 2024',
  period: '01 Temmuz 2024 - 1 Ağustos 2024',
  expenses: [
    { name: 'Doğalgaz', amount: 140.0, desc: 'Görevli Doğalgaz' },
    { name: 'GÜVENLİK', amount: 108500.0, desc: 'Temmuz Maaşı-Resmi Tatili' },
    { name: 'Elektrik', amount: 10175.0, desc: 'Ortak Elektrik Gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminat 5. ay' },
    { name: 'Personel', amount: 17568.86, desc: 'Personel Temmuz Maaş Ödemesi' },
    { name: 'Bakım Onarım', amount: 400.0, desc: 'Koşu Bandı Kart tamiri' },
    { name: 'SGK', amount: 5800.93, desc: 'Personel Temmuz SGK ödemesi' },
    { name: 'SU', amount: 24673.0, desc: 'Ortak Su gideri' },
    { name: 'Asansör Bakım', amount: 1320.0, desc: 'Asansör Bakım' },
    { name: 'Banka Masraf', amount: 40.98, desc: 'fon masraf ücreti' },
    { name: 'Temizlik', amount: 519.9, desc: 'Oda Parfümü 4 adet' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 0, desc: '' },
  ],
  cash: { banka: 41657.68, bankaLabel: "Banka Kasası Nakit Miktarı 01 Ağustos", fonYatan: null, fonKar: null, fonToplam: null },
  totals: { gelir: 177500.0, gider: 179788.66999999998, fark: -2288.6699999999837 }
};

MONTHS['2024-08'] = {
  label: 'Ağustos 2024',
  period: '01 Ağustos 2024 - 02 Eylül 2024',
  expenses: [
    { name: 'GÜVENLİK', amount: 108500.0, desc: 'Ağustos Güvenlik Hizmeti-Resmi Tatil Ücreti' },
    { name: 'Bakım Onarım', amount: 29702.79, desc: 'Boya-Asansör Kart ve Motor Değişimi-Reçine Değişim-Arıtma Bakımı servis' },
    { name: 'Personel', amount: 17568.86, desc: 'Personel Ağustos Maaş Ödemesi' },
    { name: 'Su', amount: 16664.0, desc: 'Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı' },
    { name: 'Elektrik', amount: 4785.0, desc: 'Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 5805.36, desc: 'A-B Blok Temmuz Bakım-MMO Yıllık Kontrol Ücreti' },
    { name: 'SGK', amount: 5800.93, desc: 'Görevli SGK Ödemesi' },
    { name: 'Demirbaş', amount: 4066.44, desc: 'Elektrik Mal.-Duba Set' },
    { name: 'Doğalgaz', amount: 130.0, desc: 'Görevli Doğalgaz Ücreti' },
    { name: 'Havuz Gideri', amount: 9500.0, desc: 'Klor-PH-Yosun Önleyici-Berraklaştırma' },
    { name: 'Banka Masraf', amount: 2.7, desc: 'Fon masraf' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 2500.0, count: 1, desc: '' },
  ],
  cash: { banka: 3522.59, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 02 Eylül", fonYatan: 85200.0, fonKar: 15814.050000000003, fonToplam: 101014.05 },
  totals: { gelir: 180000.0, gider: 213176.08000000002, fark: -33176.080000000016 }
};

MONTHS['2024-09'] = {
  label: 'Eylül 2024',
  period: '02 Eylül 2024 - 01 Ekim 2024',
  expenses: [
    { name: 'GÜVENLİK', amount: 105000.0, desc: 'Güvenlik Hizmeti Eylül Ayı Bedeli' },
    { name: 'Bakım Onarım', amount: 7504.43, desc: 'Çatı Oluk Tamir Bakım Temizlik-A-B' },
    { name: 'Personel', amount: 17002.13, desc: 'Personel Eylül Maaş Ödemesi' },
    { name: 'Su', amount: 13945.0, desc: 'Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Eylül' },
    { name: 'Elektrik', amount: 14305.0, desc: 'Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 2520.0, desc: 'A-B Blok Ağustos Bakım-Revize' },
    { name: 'SGK', amount: 5800.93, desc: 'Görevli SGK Ödemesi' },
    { name: 'Demirbaş', amount: 0.0, desc: '' },
    { name: 'Doğalgaz', amount: 180.0, desc: 'Görevli Doğalgaz Ücreti' },
    { name: 'Temizlik Mal.', amount: 599.9, desc: 'Oda parfümü 6 lı' },
    { name: 'Banka Masraf', amount: 17.68, desc: '' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 5000.0, count: 2, desc: '' },
    { name: 'Fazla Yatan Aidat Tutarı', amount: 250.0, count: 1, desc: '' },
  ],
  cash: { banka: 11033.44, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 01 Ekim", fonYatan: 95850.0, fonKar: 17391.690000000002, fonToplam: 113241.69 },
  totals: { gelir: 182750.0, gider: 177525.06999999998, fark: 5224.930000000022 }
};

MONTHS['2024-10'] = {
  label: 'Ekim 2024',
  period: '01 Ekim 2024 - 31 Ekim 2024',
  expenses: [
    { name: 'GÜVENLİK', amount: 110250.01, desc: 'Güvenlik Hizmeti Ekim Ayı Bedeli-29 Ekim Resmi Tatil fark' },
    { name: 'Bakım Onarım', amount: 14484.43, desc: 'B/Uydu Arızası ve Arıtma B/Reçine- Valf Değişim (Kalan/10.000)' },
    { name: 'Personel', amount: 17568.86, desc: 'Personel Ekim Maaş Ödemesi' },
    { name: 'Su', amount: 1626.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Ekim (Banka Fon)' },
    { name: 'Elektrik', amount: 8765.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 1320.0, desc: 'A-B Blok Eylül Bakım' },
    { name: 'SGK', amount: 5850.94, desc: 'Görevli SGK Ödemesi' },
    { name: 'Demirbaş', amount: 741.26, desc: '10 Adet Bahçe Aydınlatma Lambası' },
    { name: 'Doğalgaz', amount: 190.0, desc: 'Görevli Doğalgaz Ücreti' },
    { name: 'Temizlik Mal.', amount: 87.95, desc: 'Temizlik malzemesi (Kireç Sökücü)' },
    { name: 'Banka Masraf', amount: 24.37, desc: 'eft işlem ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 4750.0, count: 2, desc: '' },
    { name: 'Fazla Yatan Aidat Tutarı', amount: 250.0, count: 1, desc: '' },
  ],
  cash: { banka: 12583.21, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 01 Kasım", fonYatan: 106500.0, fonKar: 19823.039999999994, fonToplam: 126323.04 },
  totals: { gelir: 182500.0, gider: 171558.82, fark: 10941.179999999993 }
};

MONTHS['2024-11'] = {
  label: 'Kasım 2024',
  period: '01 Kasım 2024 - 2 Aralık 2024',
  expenses: [
    { name: 'GÜVENLİK', amount: 105000.0, desc: 'Güvenlik Hizmeti Kasım Ayı Bedeli' },
    { name: 'Bakım Onarım', amount: 10000.0, desc: 'Arıtma B/Reçine- Valf Değişim (kalan bakiye)' },
    { name: 'Personel', amount: 17002.13, desc: 'Personel Kasım Maaş Ödemesi' },
    { name: 'Su', amount: 4130.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Kasım (Banka Fon)' },
    { name: 'Elektrik', amount: 13830.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 2760.0, desc: 'A-B Blok Ekim Bakım + 6 lt yağ değişimi' },
    { name: 'SGK', amount: 5800.93, desc: 'Görevli SGK Ödemesi' },
    { name: 'Demirbaş', amount: 5064.42, desc: 'Eldiven-PerçinMakinası-AkülüVidalama-2liGüvenlik Lamba-Güneş Panelli-Güvenlik Isıtıcı' },
    { name: 'G. Doğalgaz', amount: 190.0, desc: 'Ekim Görevli Doğalgaz Ücreti' },
    { name: 'Site Doğalgaz', amount: 33900.0, desc: 'Ekim Ayı Doğalgaz Ücreti' },
    { name: 'Banka Masraf', amount: 26.58, desc: 'eft işlem ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 175000.0, count: 70, desc: '' },
    { name: 'Geciken Aidat', amount: 2500.0, count: 1, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 5000.0, count: 2, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 13.0, count: 5, desc: '' },
    { name: 'Site Doğalgaz', amount: 33922.0, count: 71, desc: '' },
  ],
  cash: { banka: 6735.24, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 01 Kasım", fonYatan: 117150.0, fonKar: 22714.910000000003, fonToplam: 139864.91 },
  totals: { gelir: 213935.0, gider: 208354.06, fark: 5580.940000000002 }
};

MONTHS['2024-12'] = {
  label: 'Aralık 2024',
  period: '02 Aralık 2024 - 31 Aralık 2024',
  expenses: [
    { name: 'GÜVENLİK', amount: 105000.0, desc: 'Güvenlik Hizmeti Aralık Ayı Bedeli' },
    { name: 'Bakım Onarım', amount: 16054.43, desc: 'Otopark Kart tamiri-Doğalgaz Arıza-3ton Tablet Arıtma Tuzu' },
    { name: 'Personel', amount: 17568.86, desc: 'Personel Aralık Maaş Ödemesi' },
    { name: 'Su', amount: 1891.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Aralık (Banka Fon)' },
    { name: 'Elektrik', amount: 5800.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 1320.0, desc: 'A-B Blok Kasım Bakım' },
    { name: 'SGK', amount: 5850.94, desc: 'Görevli SGK Ödemesi' },
    { name: 'G. Doğalgaz', amount: 170.0, desc: 'Kasım Görevli Doğalgaz Ücreti' },
    { name: 'Site Doğalgaz', amount: 77750.0, desc: 'Kasım Ayı Doğalgaz Ücreti' },
    { name: 'Banka Masraf', amount: 26.58, desc: 'eft işlem ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 177500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 2500.0, count: 1, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Site Doğalgaz', amount: 77745.0, count: 71, desc: '' },
  ],
  cash: { banka: 7780.99, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Aralık", fonYatan: 127800.0, fonKar: 25814.410000000003, fonToplam: 153614.41 },
  totals: { gelir: 257745.0, gider: 242081.80999999997, fark: 15663.190000000031 }
};

MONTHS['2025-01'] = {
  label: 'Ocak 2025',
  period: '01 Ocak 2025 - 31 Ocak 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 146940.0, desc: 'Güvenlik Hizmeti Ocak Ayı Bedeli(Resmi Tatil dahil)' },
    { name: 'Bakım Onarım', amount: 14000.0, desc: 'Doğalgaz Kazanları Bakım-Tamir-' },
    { name: 'Personel', amount: 22724.4, desc: 'Personel Ocak Maaş Ödemesi' },
    { name: 'Su', amount: 1884.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı OCAK (Banka Fon)' },
    { name: 'Elektrik', amount: 19010.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 1320.0, desc: 'A-B Blok Aralık Bakım' },
    { name: 'SGK', amount: 0.0, desc: 'Görevli SGK Ödemesi' },
    { name: 'DemirBaş', amount: 21008.86, desc: 'Havuz Motor 2 Adet' },
    { name: 'G. Doğalgaz', amount: 190.0, desc: 'aralık Görevli Doğalgaz Ücreti' },
    { name: 'Site Doğalgaz', amount: 113810.0, desc: 'Aralık Ayı Doğalgaz Ücreti' },
    { name: 'Genel', amount: 600.0, desc: 'Simit Dağıtım' },
    { name: 'Banka Masraf', amount: 18.94, desc: 'eft işlem ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 247500.0, count: 70, desc: '' },
    { name: 'Geciken Aidat', amount: 1000.0, count: 1, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 9.39, count: 0, desc: '' },
    { name: 'Site Doğalgaz', amount: 113960.0, count: 71, desc: '' },
    { name: 'Hurda geliri', amount: 600.0, count: 0, desc: '' },
  ],
  cash: { banka: 19980.37, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Aralık", fonYatan: 138540.0, fonKar: 29106.459999999992, fonToplam: 167646.46 },
  totals: { gelir: 362069.39, gider: 352156.2, fark: 9913.190000000002 }
};

MONTHS['2025-02'] = {
  label: 'Şubat 2025',
  period: '01 Şubat 2025 - 28 Şubat 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 142205.25, desc: 'Güvenlik Hizmeti Şubat Ayı Bedeli' },
    { name: 'Bakım Onarım', amount: 34982.24, desc: 'Kanal A.-Bahçe B.- 5A.Ağaç Dikim-Elektrik Mlz.-SobaRezistans-2A.Motor Bobinaj tamiri-Saha Boya Malzeme' },
    { name: 'Personel', amount: 22104.67, desc: 'Personel Şubat Maaş Ödemesi' },
    { name: 'Su', amount: 1884.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Şubat (Banka Fon)' },
    { name: 'Elektrik', amount: 21250.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 2000.0, desc: 'A-B Blok Ocak Bakım' },
    { name: 'SGK', amount: 7816.91, desc: 'Görevli SGK Ödemesi' },
    { name: 'DemirBaş', amount: 0.0, desc: '' },
    { name: 'G. Doğalgaz', amount: 190.0, desc: 'Ocak Görevli Doğalgaz Ücreti' },
    { name: 'Site Doğalgaz', amount: 105220.0, desc: 'Ocak Ayı Doğalgaz Ücreti' },
    { name: 'Genel', amount: 1402.75, desc: 'Noter İmza yetkilendirme Masrafı' },
  ],
  incomes: [
    { name: 'Aidat', amount: 249500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Site Doğalgaz', amount: 105230.0, count: 71, desc: '' },
    { name: 'Hurda geliri', amount: 0.0, count: 0, desc: '' },
  ],
  cash: { banka: 23821.7, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 28 Şubat", fonYatan: 149100.0, fonKar: 32665.01999999999, fonToplam: 181765.02 },
  totals: { gelir: 354730.0, gider: 349705.81999999995, fark: 5024.180000000051 }
};

MONTHS['2025-03'] = {
  label: 'Mart 2025',
  period: '01 Mart 2025 - 31 Mart 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 158795.25, desc: 'Güvenlik Hizmeti Mart Ayı Bedeli + Bayram Tatili Mesai ücreti' },
    { name: 'Bakım Onarım', amount: 11982.82, desc: 'B blok atık boru tamiri+alçı tavan, Kumanda Tamir,Kanal Açma A blok Gider,Boya ve Fırça Tiner Mlz' },
    { name: 'Personel', amount: 22724.4, desc: 'Personel Mart Maaş Ödemesi' },
    { name: 'Su', amount: 6785.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Mart (Banka Fon)' },
    { name: 'Elektrik', amount: 22190.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 2005.25, desc: 'A-B Blok Şubat Bakım+havale ücret' },
    { name: 'SGK', amount: 0.0, desc: 'Görevli SGK Ödemesi' },
    { name: 'Havuz Kimyasal', amount: 12005.25, desc: 'Havuz Klor-parlatıcı-Yosun önleyici+ havale ücret' },
    { name: 'G. Doğalgaz', amount: 220.0, desc: 'Şubat Görevli Doğalgaz Ücreti' },
    { name: 'Site Doğalgaz', amount: 122170.0, desc: 'Şubat Ayı Doğalgaz Ücreti' },
    { name: 'Temizlik', amount: 1331.9, desc: 'Temizlik Mal. Oda parfümü 2 adet' },
    { name: 'Genel', amount: 175.59, desc: 'Bayram Şekeri +Kolanya' },
  ],
  incomes: [
    { name: 'Aidat', amount: 248500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Site Doğalgaz', amount: 122184.0, count: 71, desc: '' },
  ],
  cash: { banka: 23497.94, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 28 Şubat", fonYatan: 159750.0, fonKar: 36124.45999999999, fonToplam: 195874.46 },
  totals: { gelir: 370684.0, gider: 371035.46, fark: -351.46000000002095 }
};

MONTHS['2025-04'] = {
  label: 'Nisan 2025',
  period: '01 Nisan 2025 - 30 Nisan 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 146945.25, desc: 'Güvenlik Hizmeti Nisan Ayı Bedeli + Resmi Tatili Mesai ücreti +havale ücret' },
    { name: 'Bakım Onarım', amount: 17345.75, desc: 'B blok Arıtma ValfPiston Conta Değişimi- Çöp arabası Tekerleği-Pompa fan keçe değişimi +havale ücret' },
    { name: 'Personel', amount: 22104.66, desc: 'Personel Nisan Maaş Ödemesi' },
    { name: 'Su', amount: 4467.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Nisan (Banka Fon)' },
    { name: 'Elektrik', amount: 27510.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 2005.25, desc: 'A-B Blok Mart Bakım+havale ücret' },
    { name: 'SGK', amount: 15553.94, desc: 'Görevli SGK Ödemesi +Mart-Nisan' },
    { name: 'Demirbaş', amount: 3503.15, desc: 'Kenar kesme makinası Ödemesi +havale ücret' },
    { name: 'Grv. Doğalgaz', amount: 190.0, desc: 'Mart Görevli Doğalgaz Ücreti' },
    { name: 'Site Doğalgaz', amount: 63950.0, desc: 'Mart Ayı Doğalgaz Ücreti' },
    { name: 'Temizlik', amount: 1941.25, desc: 'Temizlik malzemesi-sıvı sabun çamaşır suyu+yüzey temizleyici+mop +havale ücret' },
  ],
  incomes: [
    { name: 'Aidat', amount: 248500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 10500.0, count: 3, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Site Doğalgaz', amount: 63997.0, count: 71, desc: '' },
  ],
  cash: { banka: 27003.63, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Nisan", fonYatan: 170400.0, fonKar: 42623.78, fonToplam: 213023.78 },
  totals: { gelir: 322997.0, gider: 316166.25, fark: 6830.75 }
};

MONTHS['2025-05'] = {
  label: 'Mayıs 2025',
  period: '01 Mayıs 2025 - 31 Mayıs 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 151685.25, desc: 'Güvenlik Hizmeti Mayıs Ayı Bedeli + Resmi Tatil Mesai ücreti +havale ücret' },
    { name: 'Bakım Onarım', amount: 11233.57, desc: '40 adet Çiçek- Elektrik Malzemesi -Aydınlatma 4adet-Tiner-Kablo-4 adet Timer-Gübre-Zirai İlaç Bahçe' },
    { name: 'Personel', amount: 22724.3, desc: 'Personel Mayıs Maaş Ödemesi' },
    { name: 'Su', amount: 3786.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Mayıs (Banka Fon)' },
    { name: 'Elektrik', amount: 19490.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 2005.25, desc: 'A-B Blok Mart Bakım+havale ücret' },
    { name: 'SGK', amount: 7776.97, desc: 'Görevli SGK Ödemesi +Mayıs' },
    { name: 'Kimyasal', amount: 11705.25, desc: 'Arıtma Tablet 3 Ton+havale' },
    { name: 'Grv. Doğalgaz', amount: 180.0, desc: 'Nisan Görevli Doğalgaz Ücreti' },
    { name: 'Site Doğalgaz', amount: 44090.0, desc: 'Nisan Ayı Doğalgaz Ücreti' },
    { name: 'Demirbaş', amount: 8985.39, desc: '2 adet 4lü bahçe koltuk takımı +havale' },
    { name: 'Banka Masraf', amount: 256.65, desc: 'işletim ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 248500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 3500.0, count: 1, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Site Doğalgaz', amount: 44122.0, count: 71, desc: '' },
  ],
  cash: { banka: 18108.46, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Nisan", fonYatan: 181050.0, fonKar: 47815.630000000005, fonToplam: 228865.63 },
  totals: { gelir: 296122.0, gider: 294568.63, fark: 1553.3699999999953 }
};

MONTHS['2025-06'] = {
  label: 'Haziran 2025',
  period: '01 Haziran 2025 - 30 Haziran 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 163535.25, desc: 'Güvenlik Hizmeti Haziran Ayı Bedeli + Resmi Tatil Mesai ücreti +havale ücret' },
    { name: 'Bakım Onarım', amount: 59895.79, desc: '2 adet Şamandıra-Havuz Tesisat Boru Değişim Tamir-Saha Demirci Ara Ödeme-Havuz Mermer-Havuz Köşelik' },
    { name: 'Personel', amount: 22104.66, desc: 'Personel Haziran Maaş Ödemesi' },
    { name: 'Su', amount: 17758.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Haziran (Banka Fon)' },
    { name: 'Elektrik', amount: 8870.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 2005.25, desc: 'A-B Blok Mayıs Bakım+havale ücret' },
    { name: 'SGK', amount: 7776.97, desc: 'Görevli SGK Ödemesi +Haziran' },
    { name: 'Grv. Doğalgaz', amount: 140.0, desc: 'Mayıs Görevli Doğalgaz Ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 248500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Ara Ödeme Katkı Payı', amount: 116500.0, count: 65, desc: '' },
  ],
  cash: { banka: 90870.92, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Haziran", fonYatan: 191700.0, fonKar: 66264.17000000001, fonToplam: 257964.17 },
  totals: { gelir: 365000.0, gider: 292735.92, fark: 72264.08000000002 }
};

MONTHS['2025-07'] = {
  label: 'Temmuz 2025',
  period: '01 Temmuz 2025 - 31 Temmuz 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 146945.25, desc: 'Güvenlik Hizmeti Haziran Ayı Bedeli + Resmi Tatil Mesai ücreti +havale ücret' },
    { name: 'Bakım Onarım', amount: 20180.04, desc: 'WD40Sprey- Sahas Tel File işçilik Kalan, ArıtmaBakım,  A-B blok fayans döşeme işçilik+Havale ücret' },
    { name: 'Personel', amount: 22724.3, desc: 'Personel Haziran Maaş Ödemesi' },
    { name: 'Su', amount: 24659.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Haziran (Banka Fon)' },
    { name: 'Elektrik', amount: 29670.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 3205.25, desc: 'A-B Blok Haziran Bakım+Takoz Değişimi havale ücreti' },
    { name: 'SGK', amount: 7776.97, desc: 'Görevli SGK Ödemesi +Haziran' },
    { name: 'Grv. Doğalgaz', amount: 120.0, desc: 'Haziran Görevli Doğalgaz Ücreti' },
    { name: 'Demirbaş', amount: 135010.5, desc: '2 Sıfır Kombi+2 Sıfır pompa +proje onay Ödemesi +havale ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 248500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 7000.0, count: 2, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Ara Ödeme Katkı Payı', amount: 76500.0, count: 54, desc: '' },
  ],
  cash: { banka: 18926.64, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Temmuz", fonYatan: 202350.0, fonKar: 72940.04999999999, fonToplam: 275290.05 },
  totals: { gelir: 332000.0, gider: 400941.31, fark: -68941.31 }
};

MONTHS['2025-08'] = {
  label: 'Ağustos 2025',
  period: '01 Ağustos 2025 - 31 Ağustos 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 146947.25, desc: 'Güvenlik Hizmeti Ağustos Ayı Bedeli + Resmi Tatil Mesai ücreti +havale ücret' },
    { name: 'Bakım Onarım', amount: 11710.5, desc: 'otopark kapısı modül ilave ve servis ödemesi+seramik ve yap-malzeme havale ödemesi' },
    { name: 'Personel', amount: 22724.3, desc: 'Personel Ağustos Maaş Ödemesi' },
    { name: 'Su', amount: 28182.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Ağustos (Banka Fon)' },
    { name: 'Elektrik', amount: 19450.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 8664.4, desc: 'A-B Blok Temmuz Bakım+MMO KONTROL havale ücreti' },
    { name: 'SGK', amount: 7776.97, desc: 'Görevli SGK Ödemesi +Ağustos' },
    { name: 'Grv. Doğalgaz', amount: 70.0, desc: 'Haziran Görevli Doğalgaz Ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 245000.0, count: 70, desc: '' },
    { name: 'Geciken Aidat', amount: 3500.0, count: 1, desc: '' },
    { name: 'Erken Yatan Aidat', amount: 3500.0, count: 1, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Ara Ödeme Katkı Payı', amount: 45000.0, count: 45, desc: '' },
  ],
  cash: { banka: 62093.63, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Ağustos", fonYatan: 213000.0, fonKar: 70152.97999999998, fonToplam: 283152.98 },
  totals: { gelir: 293500.0, gider: 256175.41999999998, fark: 37324.580000000016 }
};

MONTHS['2025-09'] = {
  label: 'Eylül 2025',
  period: '01 Eylül 2025 - 30 Eylül 2025',
  expenses: [
    { name: 'GÜVENLİK', amount: 142205.0, desc: 'Güvenlik Hizmeti Eylül Ayı Bedeli +havale ücret' },
    { name: 'Bakım Onarım', amount: 0.0, desc: '' },
    { name: 'Personel', amount: 22104.66, desc: 'Personel Eylül Maaş Ödemesi' },
    { name: 'Su', amount: 18078.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Eylül (Banka Fon)' },
    { name: 'Elektrik', amount: 21600.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 9205.0, desc: 'A-B Blok Ağustos Bakım+Boy Fotosel havale ücreti' },
    { name: 'SGK', amount: 7776.97, desc: 'Görevli SGK Ödemesi +Eylül' },
    { name: 'Grv. Doğalgaz', amount: 150.0, desc: 'Ağustos Görevli Doğalgaz Ücreti' },
    { name: 'Banka Masraf', amount: 4.4, desc: 'fon işletim ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 239500.0, count: 70, desc: '' },
    { name: 'Geciken Aidat+Katkı Payı', amount: 4500.0, count: 1, desc: '' },
    { name: 'Erken Yatan Aidat Tutarı', amount: 4500.0, count: 2, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Ara Ödeme Katkı Payı', amount: 43000.0, count: 43, desc: '' },
  ],
  cash: { banka: 115396.15, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Eylül", fonYatan: 223650.0, fonKar: 79019.81, fonToplam: 302669.81 },
  totals: { gelir: 287000.0, gider: 231774.03, fark: 55225.97 }
};

MONTHS['2025-10'] = {
  label: 'Ekim 2025',
  period: '01 Ekim 2025 - 31 Ekim 2025',
  expenses: [
    { name: 'Güvenlik', amount: 149315.25, desc: 'Güvenlik Hizmeti + Resmi tatil Ekim Ayı Bedeli +havale ücret' },
    { name: 'Bakım Onarım', amount: 6490.5, desc: 'Otopark kapısı+ tekerlek tamiri ve pompa tamir-20 adet Yangın tüpleri değişimi+havale' },
    { name: 'Personel', amount: 7330.41, desc: 'Personel Ekim Maaş Ödemesi' },
    { name: 'Su', amount: 6252.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Ekim (Banka Fon)' },
    { name: 'Elektrik', amount: 17820.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 51010.5, desc: 'A-B Blok Eylül Bakım+Revizyon + havale' },
    { name: 'SGK', amount: 5143.91, desc: 'Görevli SGK Ödemesi -Ekim' },
    { name: 'Grv. Doğalgaz', amount: 210.0, desc: 'Eylül Görevli Doğalgaz Ücreti' },
    { name: 'Banka Masraf', amount: 4.41, desc: 'fon işletim ücreti' },
    { name: 'Temizlik', amount: 10005.25, desc: 'dış firma Bina Temizlik gideri Ödemesi+havale' },
    { name: 'Havuz Kimyasal', amount: 14185.25, desc: 'Eurofen Havuz kimyasal+Ph+Klor+Yosun Önleyici +havale' },
    { name: 'Genel', amount: 3809.41, desc: 'Pasta-İçecek-süsleme-tabak+havale' },
  ],
  incomes: [
    { name: 'Aidat', amount: 252000.0, count: 72, desc: '' },
    { name: 'Geciken Aidat+Katkı Payı', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat Tutarı', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 2000.0, count: 2, desc: '' },
    { name: 'Ara Ödeme Katkı Payı', amount: 1000.0, count: 1, desc: '' },
  ],
  cash: { banka: 88164.14, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Ekim", fonYatan: 234300.0, fonKar: 87387.69, fonToplam: 321687.69 },
  totals: { gelir: 255000.0, gider: 282226.88999999996, fark: -27226.889999999956 }
};

MONTHS['2025-11'] = {
  label: 'Kasım 2025',
  period: '01 Kasım 2025 - 30 Kasım 2025',
  expenses: [
    { name: 'Güvenlik', amount: 142205.25, desc: 'Güvenlik Hizmeti +Kasım Ayı Bedeli +havale ücret' },
    { name: 'Bakım Onarım', amount: 4505.25, desc: 'Otopark Kapı Fotocel Değişimi +Havale' },
    { name: 'Personel', amount: 22104.66, desc: 'Personel Kasım Maaş Ödemesi' },
    { name: 'Su', amount: 5380.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Kasım (Banka Fon)' },
    { name: 'Elektrik', amount: 24170.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 4405.25, desc: 'A-B Blok Ekim -Kasım Bakım havale' },
    { name: 'SGK', amount: 7776.97, desc: 'Görevli SGK Ödemesi -Kasım' },
    { name: 'Grv. Doğalgaz', amount: 170.0, desc: 'Ekim Görevli Doğalgaz Ücreti' },
    { name: 'Banka Masraf', amount: 1751.17, desc: 'fon işletim ücreti' },
    { name: 'Doğalgaz', amount: 56660.0, desc: 'Ekim Doğalgaz' },
    { name: 'Havuz Kimyasal-Temizlik', amount: 4050.75, desc: 'Havuz Ph düşürücü-Yosun Önleyici-Mop-2li Kovalı Araba Set' },
  ],
  incomes: [
    { name: 'Aidat', amount: 244500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat+Katkı Payı', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat Tutarı', amount: 3500.0, count: 1, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Ara Ödeme Katkı Payı', amount: 0.0, count: 0, desc: '' },
    { name: 'Doğalgaz', amount: 56690.0, count: 71, desc: '' },
  ],
  cash: { banka: 112733.26, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Kasım", fonYatan: 244950.0, fonKar: 94079.27000000002, fonToplam: 339029.27 },
  totals: { gelir: 304690.0, gider: 283829.30000000005, fark: 20860.699999999953 }
};

MONTHS['2025-12'] = {
  label: 'Aralık 2025',
  period: '01 Aralık 2025 - 31 Aralık 2025',
  expenses: [
    { name: 'Güvenlik', amount: 142205.25, desc: 'Güvenlik Hizmeti +Aralık Ayı Bedeli +havale ücret' },
    { name: 'Genel Gider', amount: 2638.1, desc: '2 adet Oda parfüm + 8 adet Işıklandırma' },
    { name: 'Personel', amount: 22724.3, desc: 'Personel Aralık Maaş Ödemesi' },
    { name: 'Su', amount: 2352.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Aralık (Banka Fon)' },
    { name: 'Elektrik', amount: 32360.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 5605.25, desc: 'A-B Blok Aralık Bakım paten kayış değişimi + havale' },
    { name: 'SGK', amount: 8176.93, desc: 'Görevli SGK Ödemesi -Aralık' },
    { name: 'Grv. Doğalgaz', amount: 190.0, desc: 'Kasım Görevli Doğalgaz Ücreti' },
    { name: 'Demirbaş', amount: 65005.25, desc: 'Kombi Değişim Bakım Proje Kalan+proje eksiklikleri +havale' },
    { name: 'Doğalgaz', amount: 97100.0, desc: 'Kasım Doğalgaz' },
    { name: 'Arıtma Gideri', amount: 19005.25, desc: '5 ton tablet tuz +havale' },
  ],
  incomes: [
    { name: 'Aidat', amount: 248500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat+Katkı Payı', amount: 0.0, count: 0, desc: '' },
    { name: 'Erken Yatan Aidat Tutarı', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Doğalgaz', amount: 97240.0, count: 71, desc: '' },
  ],
  cash: { banka: 50438.18, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Aralık", fonYatan: 255600.0, fonKar: 106951.06, fonToplam: 362551.06 },
  totals: { gelir: 345740.0, gider: 408012.32999999996, fark: -62272.32999999996 }
};

MONTHS['2026-01'] = {
  label: 'Ocak 2026',
  period: '01 Ocak 2025 - 31 Ocak 2026',
  expenses: [
    { name: 'Güvenlik', amount: 197165.25, desc: 'Güvenlik Hizmeti +Ocak Ayı Bedeli +Resmi Tatil+havale ücret' },
    { name: 'Genel Gider', amount: 3087.76, desc: 'Tavas Gidiş Dönüş Benzin Branda Alıp gelme Masrafı- 2026 Noter Masrafları' },
    { name: 'Personel', amount: 28862.63, desc: 'Ocak 2026 Maaş Ödemesi' },
    { name: 'Su', amount: 3316.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Ocak 2026 (Banka Fon)' },
    { name: 'Elektrik', amount: 32970.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Asansör Bakımı', amount: 3005.25, desc: 'A-B Blok Ocak 2026 Bakım + havale' },
    { name: 'Demirbaş', amount: 1008.37, desc: '57 cm Çekpas 8 adet  - Çiftli eldiven' },
    { name: 'Doğalgaz', amount: 179710.0, desc: 'Aralık Doğalgaz' },
    { name: 'Bakım Onarım', amount: 63910.57, desc: '60m2 çatı onarım,Yıldırım Tozu,LNB ayar,branda 65m2, 40 adet kova-Dalgıç Pompa atık su borusu 10 mt' },
  ],
  incomes: [
    { name: 'Aidat', amount: 327750.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 9500.0, count: 2, desc: '' },
    { name: 'Devir Bakiyesi', amount: 50438.18, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Doğalgaz', amount: 179620.0, count: 71, desc: '' },
  ],
  cash: { banka: 44844.45, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Ocak", fonYatan: 266250.0, fonKar: 127145.19, fonToplam: 393395.19 },
  totals: { gelir: 557808.1799999999, gider: 523685.83, fark: 34122.34999999992 }
};

MONTHS['2026-02'] = {
  label: 'Şubat 2026',
  period: '01 Şubat 2026 - 28 Şubat 2026',
  expenses: [
    { name: 'Güvenlik', amount: 190805.25, desc: 'Güvenlik Hizmeti +Şubat -Havale Ücreti' },
    { name: 'Genel Gider', amount: 7768.4, desc: 'Çatı 3 kişi öğle yemeği-Otopark Ücreti-12 saat 2 kişi çatı işçilik(çatı yapım öncesi)' },
    { name: 'Personel', amount: 28075.5, desc: 'Şubat 2026 Maaş Ödemesi' },
    { name: 'Su', amount: 10483.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Ocak 2026 (Banka Fon)' },
    { name: 'Elektrik', amount: 30510.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Sgk', amount: 7776.97, desc: 'Ocak SGK' },
    { name: 'Demirbaş', amount: 5508.4, desc: '10 Adet Çekpas-8 Adet çatı aydınlatma Tesisat Montaj-30 adet Leğen' },
    { name: 'Doğalgaz', amount: 173530.0, desc: 'Ocak-Şubat  Doğalgaz' },
    { name: 'Bakım Onarım', amount: 9365.97, desc: '2 adet Parfüm-Çatı Temizliği 13 saat İşçilik-46 adet Bidon-6 adet köpük(çatı yapım öncesi)' },
  ],
  incomes: [
    { name: 'Aidat', amount: 337250.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Aydem Şarj İstasyonu Yer Tahsis Ücreti', amount: 422.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Doğalgaz', amount: 173345.0, count: 71, desc: '' },
  ],
  cash: { banka: 52493.51, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Ocak", fonYatan: 276900.0, fonKar: 135266.46000000002, fonToplam: 412166.46 },
  totals: { gelir: 511017.0, gider: 474473.49, fark: 36543.51000000001 }
};

MONTHS['2026-03'] = {
  label: 'Mart 2026',
  period: '01 MART 2026 - 31 MART 2026',
  expenses: [
    { name: 'Güvenlik', amount: 213076.76, desc: 'Güvenlik Hizmeti Mart + Bayram Mesaisi-Havale Ücreti' },
    { name: 'Genel Gider', amount: 3508.37, desc: 'Fare Zehri ve Fare Zehir Kutusu +havale ücreti' },
    { name: 'Personel', amount: 28862.63, desc: 'Mart 2026 Maaş Ödemesi' },
    { name: 'Su', amount: 4370.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Mart 2026 (Banka Fon)' },
    { name: 'Elektrik', amount: 20270.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Sgk', amount: 11138.63, desc: 'Şubat SGK' },
    { name: 'Demirbaş', amount: 4008.37, desc: '4 adet  girişte bulunan Site Tabela Pleksi Çalışması' },
    { name: 'Doğalgaz', amount: 142410.0, desc: 'Şubat Doğalgaz' },
    { name: 'Bakım Onarım', amount: 11420.12, desc: '30Kg Cephe Boya-2 kutu ahşap Boya+rulo fırça-Besleyici Bahçe Kim. Bahçe Gübre- Ç.Uydu Ayarı' },
    { name: 'Asansör Bakım', amount: 18016.76, desc: 'A blok Asansör Kart Tamiri-A-B bakım-B blok Paten Değişim' },
    { name: 'Banka Masraf', amount: 50.28, desc: 'Fon işletim ücreti' },
  ],
  incomes: [
    { name: 'Aidat', amount: 337250.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Aydem Şarj İstasyonu Yer Tahsis Ücreti', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Doğalgaz', amount: 142350.0, count: 71, desc: '' },
  ],
  cash: { banka: 64311.58999999996, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Ocak", fonYatan: 287550.0, fonKar: 141011.86, fonToplam: 428561.86 },
  totals: { gelir: 479600.0, gider: 467781.92000000004, fark: 11818.079999999958 }
};

MONTHS['2026-04'] = {
  label: 'Nisan 2026',
  period: '01 Nisan 2026 - 30 Nisan 2026',
  expenses: [
    { name: 'Güvenlik', amount: 197160.0, desc: 'Güvenlik Hizmeti Nisan + Resmi Tatil' },
    { name: 'Genel Gider', amount: 0.0, desc: '' },
    { name: 'Personel', amount: 28075.5, desc: 'Nisan 2026 Maaş Ödemesi' },
    { name: 'Su', amount: 4587.0, desc: 'A-B Ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Görevli Tazminatı Nisan 2026 (Banka Fon)' },
    { name: 'Elektrik', amount: 24040.0, desc: 'A-B Ortak Elektrik Gideri' },
    { name: 'Sgk', amount: 21737.26, desc: 'Mart-Nisan SGK' },
    { name: 'Demirbaş', amount: 1608.37, desc: '100mt ip- Havuz Kural Tabelası 2 adet' },
    { name: 'Doğalgaz', amount: 134640.0, desc: 'Mart Doğalgaz-Görevli Yakıt' },
    { name: 'Bakım Onarım', amount: 16000.0, desc: '3 adet havuz motoru tamiri-Fan değişim' },
    { name: 'Asansör Bakım', amount: 3000.0, desc: 'A-B bakım' },
    { name: 'Banka Masraf', amount: 0.0, desc: '' },
  ],
  incomes: [
    { name: 'Aidat', amount: 332500.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 4750.0, count: 1, desc: '' },
    { name: 'Aydem Şarj İstasyonu Yer Tahsis Ücreti', amount: 0.0, count: 0, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 0.0, count: 0, desc: '' },
    { name: 'Doğalgaz', amount: 134451.0, count: 71, desc: '' },
  ],
  cash: { banka: 89764.45999999999, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Nisan", fonYatan: 298200.0, fonKar: 154168.15999999997, fonToplam: 452368.16 },
  totals: { gelir: 466951.0, gider: 441498.13, fark: 25452.869999999995 }
};

MONTHS['2026-05'] = {
  label: 'Mayıs 2026',
  period: '01 Mayıs 2026 - 31 Mayıs 2026',
  expenses: [
    { name: 'Güvenlik', amount: 232140.0, desc: 'Mayıs Ödeme ve Resmi Tatil Mesai' },
    { name: 'Havuz Kimsayasal', amount: 20275.0, desc: 'Yosun Önleyici-Ph Düşürücü +Kimyasal' },
    { name: 'Personel', amount: 28862.63, desc: 'Mayıs Maaş' },
    { name: 'Su', amount: 4341.0, desc: 'A-B ortak Su gideri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Personel Tazminat Gideri' },
    { name: 'Elektrik', amount: 20630.0, desc: 'A-B ortak Elektrik Gideri' },
    { name: 'Sgk', amount: 0.0, desc: '' },
    { name: 'Demirbaş', amount: 6400.0, desc: 'Kamera Kayıt Cihazı 2 tb harddisk Ödemesi' },
    { name: 'Doğalgaz', amount: 85830.0, desc: 'Genel A-B Doğalgaz Ödemesi' },
    { name: 'Temizlik', amount: 4218.0, desc: 'A-B ortak Temizlik Kimyasal+Temizlik Arabası' },
    { name: 'Asansör Bakım', amount: 3000.0, desc: 'Nisan Bakım A-B blok' },
    { name: 'Banka Masraf', amount: 7.21, desc: 'işlem masrafı(fon)' },
  ],
  incomes: [
    { name: 'Aidat', amount: 342000.0, count: 72, desc: '' },
    { name: 'Geciken Aidat', amount: 4750.0, count: 1, desc: '' },
    { name: 'Aydem Şarj İstasyonu Yer Tahsis Ücreti', amount: 576.0, count: 1, desc: '' },
    { name: 'Fazla Yatan Tutar Toplamı', amount: 44.0, count: 1, desc: '' },
    { name: 'Hurda satış', amount: 2000.0, count: 0, desc: '' },
    { name: 'Doğalgaz', amount: 85556.0, count: 71, desc: '' },
  ],
  cash: { banka: 123369.3, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 31 Mayıs", fonYatan: 308850.0, fonKar: 141781.25, fonToplam: 474805.31 },
  totals: { gelir: 430176.0, gider: 416353.84, fark: 13822.159999999974 }
};

MONTHS['2026-06'] = {
  label: 'Haziran 2026',
  period: '01 Haziran 2026 - 30 Haziran 2026',
  expenses: [
    { name: 'Güvenlik', amount: 190800.0, desc: 'Haziran Ayı Güvenlik firması ödemesi' },
    { name: 'Genel', amount: 150.0, desc: 'Otopark Ücreti(Banka İşlemleri)' },
    { name: 'Personel', amount: 28075.5, desc: 'Haziran ayına ait Personel Maaşı' },
    { name: 'Su', amount: 11867.0, desc: 'Ortak Su giderleri' },
    { name: 'Fon Hesabı', amount: 10650.0, desc: 'Bayram Söylemez Kıdem Tazminatı' },
    { name: 'Elektrik', amount: 15040.0, desc: 'Otak Elektrik Giderleri' },
    { name: 'Sgk', amount: 21737.26, desc: 'Mayıs ve Haziran Ayı Sgk Ödemesi' },
    { name: 'Demirbaş', amount: 8508.37, desc: '27 adet Led Lamba - 60 Mt Elektrik Kablo, uç' },
    { name: 'Doğalgaz', amount: 270.0, desc: 'Görevli Kullanım' },
    { name: 'Asansör Bakım', amount: 3000.0, desc: '' },
    { name: 'Banka Masraf', amount: 7.69, desc: 'Fon işletim ücreti' },
    { name: 'Değer Kaybı', amount: 100000.0, desc: 'Fırtına araç hasar değer kaybı' },
  ],
  incomes: [
    { name: 'Aidat', amount: 337206.0, count: 71, desc: '' },
    { name: 'Geciken Aidat', amount: 0.0, count: 0, desc: '' },
    { name: 'Aydem Şarj İstasyonu Yer Tahsis Ücreti', amount: 833.0, count: 2, desc: '' },
    { name: 'Çatıdan Kasaya Devreden  Bakiye', amount: 84170.0, count: 1, desc: '' },
    { name: 'Bakanlık Yardım', amount: 200000.0, count: 1, desc: '' },
  ],
  cash: { banka: 360222.65, bankaLabel: "Banka Kasası Toplam Nakit Miktarı 30 Haziran", fonYatan: 319500.0, fonKar: 154719.48, fonToplam: 498393.38 },
  totals: { gelir: 622209.0, gider: 390105.82, fark: 232103.18 }
};
