let hak = 4;//kullanıcıya verilen tahmin hakkı
let tahmin;
let sayac = 0;
let sVagon = Math.floor((Math.random() * 10) + 1);//Şüphelinin Saklandıgı vagon


for (hak; hak > 0; hak--) {
    sayac++;
    tahmin = Number(prompt('vagon numarası giriniz'));
    if (sVagon == tahmin) {
        console.log(`Tebrikler Süpheliyi ${sayac} defada hangi vagonda oldugunu bildiniz`);
        console.log(`puan: ${100-(20)*(sayac-1)}`)
        break;
    } else if (sVagon > tahmin) {
        alert("Daha Büyük bir sayı giriniz!! Şüpheli arka vagonda");
    } else {
        alert("Daha Kücük bir sayı giriniz!! Şüpheli ön vagonda");
    }
    if (hak == 1) {
        console.log('Hakkınız bitti Şüpheliyi bulamadınız')
    }
}