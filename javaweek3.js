
/*  -Math random nesnesi ile 1-10 arası rastgele numarası uretılır ve supheli bu vagonda saklanacaktır
    -Supheli cabbari bulmak icin Kullanıcıdan vagon numarası gireceği değeri almak icin promp kullanılacaktır
    -if else dongusu ile yukarı aşagı diyerek dogru sonuca ulaştırılması sağlanacaktır */
const toplamhak;
const saklanilanVagon = Math.floor((Math.random() * 10) + 1);//Şüphelinin Saklandıgı vagon
for (let kalanhak = toplamhak, sayac = 0; toplamhak > 0; toplamhak--, sayac++) {//kullanıcıya verilen tahmin hakkı
   let tahmin = Number(prompt('vagon numarası giriniz'));
    if (saklanilanVagon == tahmin) {
        alert(`Tebrikler Süpheliyi ${sayac} defada hangi vagonda oldugunu bildiniz`);
        alert(`puan: ${100-(20)*(sayac-1)}`)
        break;
    } else if (saklanilanVagon > tahmin) {
        alert("Daha Büyük bir sayı giriniz!! Şüpheli arka vagonda");
    } else {
        alert("Daha Kücük bir sayı giriniz!! Şüpheli ön vagonda");
    }
    if (hak == 1) {
        alert('Hakkınız bitti Şüpheliyi bulamadınız');
    }
}
