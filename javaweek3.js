
// Math random nesnesi ile 1-10 arası rastgele numarası uretılır ve supheli bu vagonda saklanacaktır
// Kullanici ise supheli cabbari bulmak icin vagon numarası gireceği değeri almak icin promp kullanılacaktır
// if else dongusu ile yukarı aşagı diyerek dogru sonuca ulaştırılması sağlanacaktır
// console ekranı promptan dolayı calışmadıgı icin ilk ikazlar alert ile verildi sonuc ekranı console ile yazıldı

let tahmin;
let sayac = 0;
const saklanilanVagon = Math.floor((Math.random() * 10) + 1);//Şüphelinin Saklandıgı vagon


for (let hak = 4; hak > 0; hak--) {//kullanıcıya verilen tahmin hakkı
    sayac++;
    tahmin = Number(prompt('vagon numarası giriniz'));
    if (saklanilanVagon == tahmin) {
        console.log(`Tebrikler Süpheliyi ${sayac} defada hangi vagonda oldugunu bildiniz`);
        console.log(`puan: ${100-(20)*(sayac-1)}`)
        break;
    } else if (saklanilanVagon > tahmin) {
        alert("Daha Büyük bir sayı giriniz!! Şüpheli arka vagonda");
    } else {
        alert("Daha Kücük bir sayı giriniz!! Şüpheli ön vagonda");
    }
    if (hak == 1) {
        console.log('Hakkınız bitti Şüpheliyi bulamadınız')
    }
}