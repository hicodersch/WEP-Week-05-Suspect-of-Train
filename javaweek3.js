/*Program akisi:
1.  1-10 arasinda rastgele vagon numarası uretilir ve suclu bu vagonda saklanması sağlanır.
2.  Kullanıcıya sucluyu bulmak icin 4 hak verilir.
3.  Suclunun kolay bulunabilmasi icin yönlendirme ifadeleri kullanilir.(Ön Vagon-Arka Vagon)
4.  Suclunun kacinci denemede bulundugu ve aldigi puan alert ile ekrana yazdirilir. */

const toplamhak = 4;
// Math.random()*10 1 ile 9 arası sayı üretir bundan dolayı +1 eklendi
const saklanilanVagon = Math.floor((Math.random() * 10) + 1); //Şüphelinin Saklandıgı vagon 
for (let kalanhak = toplamhak, sayac = 1; kalanhak >= 0; kalanhak--, sayac++) { //kullanıcıya verilen tahmin hakkına göre for döngüsü calışacaktır
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
