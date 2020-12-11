/*  -Math random nesnesi ile 1-10 arası rastgele numarası uretılır ve supheli bu vagonda saklanacaktır
    -Supheli cabbari bulmak icin Kullanıcıdan vagon numarası gireceği değeri almak icin promp kullanılacaktır
    -if else dongusu ile yukarı aşagı diyerek dogru sonuca ulaştırılması sağlanacaktır */

const toplamhak = 4;
// Math.random()*10 1 ile 9 arası sayı üretir bundan dolayı +1 eklendi
const saklanilanVagon = Math.floor((Math.random() * 10) + 1); //Şüphelinin Saklandıgı vagon 
for (let kalanhak = toplamhak, sayac = 1; kalanhak >= 0; kalanhak--, sayac++) { //kullanıcıya verilen tahmin hakkı
    let tahmin = Number(prompt('vagon numarası giriniz'));
    if (saklanilanVagon == tahmin) {
        alert(`Tebrikler Süpheliyi ${sayac} defada hangi vagonda oldugunu bildiniz`);
        alert(`puan: ${100-(25)*(sayac-1)}`)
        break;
    } else if (saklanilanVagon > tahmin) {
        alert("Daha Büyük bir sayı giriniz!! Şüpheli arka vagonda");
    } else {
        alert("Daha Kücük bir sayı giriniz!! Şüpheli ön vagonda");
    }
    if (kalanhak == 1) {
        alert('Hakkınız bitti Şüpheliyi bulamadınız');
    }
}
