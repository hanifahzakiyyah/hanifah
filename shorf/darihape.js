// catatan :
// bnrin wzn dbuat arr aja =  done
// coba masukin fiil madhi selain untuk huwa = done
// lengkpin popup confirm bbrp plihn kt
// bnerin utk bhs inggris
// wazan dan irob dibuat select aja
// input untuk hamzah yang bewrmacam macam spt iqraiii = done
// kasi keterangan bentuk fiil di samping wazan

// bagian pencarian ketika masukin musyabbih
// masdar masih banyak yg harus ditambahkan
// termasuk jamak taksirnya nanti
// marfuat dan majzumat



// constant declaration
const kata = document.querySelector(".kata .klik");
const info = document.querySelector(".kata .info");
const sorof = document.querySelector(".sorof");
const madhi = document.querySelectorAll(".madi")
const mudore = document.querySelectorAll(".mudore");
const amr = document.querySelectorAll(".amr");
const nahi = document.querySelectorAll(".nahi");
const fail = document.querySelectorAll(".fail");
const maful = document.querySelectorAll(".maful");

const mamaj = document.querySelectorAll(".mamaj");
const mumaj = document.querySelectorAll(".mumaj");
const makan = document.querySelectorAll(".makan");
const masdar = document.querySelectorAll(".masdar");
const alat = document.querySelectorAll(".alat");


const mudoroah = ["ا", "أ", "ي", "ت", "ن"];
const hurufmadhi = ["ا", "و", "ت", "ن"];
const hurufmutal = ["ا", "ي", "و"];
const wazanau = ["au", "aumzfa", "aumzlam", "aumzain", "aumud", "aumis", "auaj", "aunaq", "aumaf", "aumaq"];
const wazanai = ["ai", "aimzfa", "aimzlam", "aimzain", "aimud", "aimis", "aiaj", "ainaq", "aimaf", "aimaq"];
const wazanuu = ["uu", "uumzfa", "uumzlam", "uumzuun", "uumud", "uumis", "uuaj", "uunaq", "uumaf", "uumaq"];
const wazanaa = ["aa", "aamzfa", "aamzlam", "aamzaan", "aamud", "aamis", "aaaj", "aanaq", "aamaf", "aamaq"];
const wazania = ["ia", "iamzfa", "iamzlam", "iamzian", "iamud", "iamis", "iaaj", "ianaq", "iamaf", "iamaq"];
const wazanii = ["ii", "iimzfa", "iimzlam", "iimziin", "iimud", "iimis", "iiaj", "iinaq", "iimaf", "iimaq"];
const wazanmudoaf = ["aumud", "aimud", "iimud", "uumud", "aamud", "iamud"];
const wazanajwaf = ["auaj", "aiaj", "iiaj", "uuaj", "aaaj", "iaaj"];


const tulisanwazan = document.querySelector(".wazan p");
const tombolau = document.getElementById("au");
const tombolai = document.getElementById("ai");
const tombolaa = document.getElementById("aa");
const tombolia = document.getElementById("ia");
const tombolii = document.getElementById("ii");
const tomboluu = document.getElementById("uu");
const tombolwazan = document.querySelectorAll(".wazan span");
const menu = document.querySelector(".menu");
const menuul = document.querySelector(".menu ul");
const tombolbahasa = document.querySelector("select");
const row = document.querySelectorAll("table.duahasil tr")

// tentang bahasa user!
let bahasa = "ind";
tombolbahasa.addEventListener("change", ()=>{
    if (tombolbahasa.value == "ind"){
        bahasa= "ind";
        kata.innerHTML = "✍️  masukkan kata";
        document.querySelector(".komen p").innerHTML = "<strong>NOTE :</strong> aplikasi ini belum lengkap. baru bisa digunakan untuk tsulatsi mujarrad shahih. <br><br>ayo ikutan berkontribusi dalam pengembangan aplikasi ini. kirimkan saran, masukan, dukungan, laporan kesalahan program, dll ke <a href='https://api.whatsapp.com/send?phone=6282231259145'>whatsapp kami.</a>"
    } else {
        bahasa = "eng";
        kata.innerHTML = "✍️  enter a word";
        document.querySelector(".komen p").innerHTML = "<strong>NOTE :</strong> This application is not complete yet. its available for sulatsi mujarrad shahih only. <br><br>let's contribute for this App development. Send your input, suggestion, support, or errors to <a href='https://api.whatsapp.com/send?phone=6282231259145'>our whatsapp.</a>"
    };
})
function kalimatalert() {
    if (bahasa == "ind") {
        return "yang anda masukkan belum ada dalam data kami. yang anda masukkan sudah benar stulasti mujarrod shahih? silahkan beritahu kami lewat kolom komentar"
    } else {
        return "the word you enter is not on our library, sulasi mujarrad right? report us on comment section"
    }
}
function kalimatpromp () {
    if (bahasa == "ind") {
    return "masukkan kata: fiil madhi, mudhori, amr, atau nahi, isim fail ataupun maf'ul. " 
    } else {
     return "enter the word: fiil madhi, mudhori, amr, nahi, isim fail or maf'ul. "
    } 
    
}
function bentukfiil(adi){
    console.log(adi[1])
    if(adi[2] == "ا"){
        return "ثُلَاثِيٌّ مُجَرَّدٌ مُعْتَلُّ العَيْنِ"
    }else if(adi[3]=="ّ"){
        return "ثُلَاثِيٌّ مُجَرَّدٌ مُضَعَّفٌ"
    }else {
        return "ثُلَاثِيٌّ مُجَرَّدٌ صَحِيحٌ"
    }
}
function kalimathasil(type, masuk, rangkaMadi){
if (bahasa == "ind") {
    const ini =`<table class="duahasil">
    <tr>menemukan ${type.length} hasil dari ${masuk}</tr>
    <tr>
        <td>Fiil / Isim</td>
        <td>Kata Dasar</td>
        <td>Bentuk</td>
    </tr>`;
    const itu =[]
    const utu = typeof(rangkaMadi)=="string"? rangkaMadi+"َ" : rangkaMadi[0]+"َ";
for (let i=0;i<type.length;i++){
    itu.push(`<tr class="list">
        <td>${type[i]}</td>
        <td>${utu}</td>
        <td>${bentukfiil(rangkaMadi[0])}</td>
    </tr>`)
};
    const ono = `</table>`
    return (ini+itu+ono);
} else {
const ini =`<table class="duahasil">
    <tr>found ${type.length} result from ${masuk}</tr>
    <tr>
        <td>Fiil / Isim</td>
        <td>Root Word</td>
        <td>Shape</td>
    </tr>`;
    const itu =[]
    const utu = typeof(rangkaMadi)=="string"? rangkaMadi+"َ" : rangkaMadi[0]+"َ";
for (let i=0;i<type.length;i++){
    itu.push(`<tr class="list">
        <td>${type[i]} from:</td>
        <td>${utu}</td>
        <td>${bentukfiil(rangkaMadi[0])}</td>
    </tr>`)
};
    const ono = `</table>`
    return (ini+itu+ono);
};
}


//percobaan dan debugging
madhi[0].addEventListener("click", ()=>{
    //user entering
//  const masuk = prompt(kalimatpromp());

    // //hilangkan harokat
//  const th = masuk.replace(/[َُِْ]/g,"").replace(/[ئءؤ]/, "أ").replace(/آ/, "أا" );
  
    // console.log(katadasar);
    // console.log(type);
});


//main function
kata.addEventListener("click", mainfunction);

function mainfunction() {

    // //user entering
   const masuk = prompt(kalimatpromp());

    // hilangkan harokat
    const th = masuk.replace(/[َُِْ ]/g,"").replace(/[ئءؤ]/, "أ").replace(/آ/, "أا" );  

    //mengembalikan ke bentuk dasar dan menentukan type
    const {katadasar, type} = tentukankatadasar(th, masuk);
    
    // menentukan wazan 
    let wazan = tentukanwazan(katadasar);
    
    // matikan semua highlight wazan
    for (let i= 0; i< tombolwazan.length; i++) {
        tombolwazan[i].classList.remove("active");
    };

    //merangkai shighoh
    const rangka = rangkaisigoh(wazan, katadasar);
    
    const {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat} = rangka;
    
    //menampilkan hasil ke layar
    info.innerHTML = kalimathasil(type, masuk, rangkaMadi);
    
    // nyalakan tombol di tabel
    const nodelis = document.querySelectorAll("table.duahasil tr.list");
    const arrnode = Array.from(nodelis);
    arrnode[0].classList.add("kepencet")
    arrnode.forEach((a)=>{
       a.addEventListener("click", ()=>{
           arrnode.forEach((q)=>{
              q.classList.remove("kepencet")
           });
           a.classList.add("kepencet");
           
       })
    })
    
    // menyalakan highligttertentu
    tampilkanwazan(wazan);

    //memasukkan ke dalam tabel
    masukintabel(rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan);
    
    // menampilkan menu tabel
    // menu.classList.add("muncul");
    // document.querySelector("div.bungduahasil").classList.add("muncul");

    // tombol wazan
    for (let j = 0; j < tombolwazan.length; j++) {
        tombolwazan[j].addEventListener("click", () => {
            for (let i = 0; i< wazan.length; i++) {
                if(wazanmudoaf.indexOf(wazan[i]) >= 0) {
                    wazan = [];
                }else if (wazanajwaf.indexOf(wazan[i]) >= 0){
                    wazan= "string"
                }
            }
            if (wazan.length === 0) {
                wazan.push(tombolwazan[j].attributes.id.value + "mud");
            }else if (typeof(wazan) == "string"){
                wazan = [];
                wazan.push(tombolwazan[j].attributes.id.value + "aj");
            } else {
                wazan = [];
                wazan.push(tombolwazan[j].attributes.id.value);
            }
            // tasrifan
            const rangka = rangkaisigoh(wazan, katadasar);
            const {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat} = rangka;
            masukintabel(rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan);

        })
    }

    // irob
    menu.addEventListener("click", ()=>{
        menuul.classList.toggle("naik");
    })
};


function tentukanwazan(k) {
    let wazan = [];
for (let i = 0; i< k.length; i++){
    if (auarray.indexOf(k[i]) >= 0) {wazan.push("au");}
    if (aiarray.indexOf(k[i]) >= 0) {wazan.push("ai");}
    if (iaarray.indexOf(k[i]) >= 0) {wazan.push("ia");}
    if (iiarray.indexOf(k[i]) >= 0) {wazan.push("ii");}
    if (aaarray.indexOf(k[i]) >= 0) {wazan.push("aa");}
    if (uuarray.indexOf(k[i]) >= 0) {wazan.push("uu");}
    if (aumahmuzfar.indexOf(k[i]) >= 0) { wazan.push("aumzfa");}
    if (iamahmuzfar.indexOf(k[i]) >= 0) { wazan.push("iamzfa");}
    if (uumahmuzfar.indexOf(k[i]) >= 0) { wazan.push("uumzfa");}
    if (aamahmuzfar.indexOf(k[i]) >= 0) { wazan.push("aamzfa");}
    if (iimahmuzfar.indexOf(k[i]) >= 0) { wazan.push("iimzfa");}
    if (aimahmuzfar.indexOf(k[i]) >= 0) { wazan.push("aimzfa");}
    if (aumahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("aumzlam");} 
    if (iamahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("iamzlam");} 
    if (uumahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("uumzlam");}
    if (iimahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("iimzlam");}
    if (aamahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("aamzlam");}
    if (aimahmuzlamr.indexOf(k[i]) >= 0) { wazan.push("aimzlam");}
    if (aumahmuzainr.indexOf(k[i]) >= 0) { wazan.push("aumzain");}
    if (iamahmuzainr.indexOf(k[i]) >= 0) { wazan.push("iamzain");}
    if (uumahmuzainr.indexOf(k[i]) >= 0) { wazan.push("uumzain");}
    if (iimahmuzainr.indexOf(k[i]) >= 0) { wazan.push("iimzain");}
    if (aamahmuzainr.indexOf(k[i]) >= 0) { wazan.push("aamzain");} 
    if (aimahmuzainr.indexOf(k[i]) >= 0) { wazan.push("aimzain");}
    if (aumudoafr.indexOf(k[i]) >= 0) { wazan.push("aumud");}
    if (iamudoafr.indexOf(k[i]) >= 0) { wazan.push("iamud");}
    if (uumudoafr.indexOf(k[i]) >= 0) { wazan.push("uumud");}
    if (aamudoafr.indexOf(k[i]) >= 0) { wazan.push("aamud");}
    if (iimudoafr.indexOf(k[i]) >= 0) { wazan.push("iimud");}
    if (aimudoafr.indexOf(k[i]) >= 0) { wazan.push("aimud");}
    if (aumisalr.indexOf(k[i]) >= 0) { wazan.push("aumis");}
    if (aimisalr.indexOf(k[i]) >= 0) { wazan.push("aimis");}
    if (uumisalr.indexOf(k[i]) >= 0) { wazan.push("uumis");}
    if (iimisalr.indexOf(k[i]) >= 0) { wazan.push("iimis");}
    if (aamisalr.indexOf(k[i]) >= 0) { wazan.push("aamis");}
    if (iamisalr.indexOf(k[i]) >= 0) { wazan.push("iamis");}
    if (auajwafr.indexOf(k[i]) >= 0) { wazan.push("auaj");}
    if (aiajwafr.indexOf(k[i]) >= 0) { wazan.push("aiaj");}
    if (uuajwafr.indexOf(k[i]) >= 0) { wazan.push("uuaj");}
    if (iiajwafr.indexOf(k[i]) >= 0) { wazan.push("iiaj");}
    if (aaajwafr.indexOf(k[i]) >= 0) { wazan.push("aaaj");}
    if (iaajwafr.indexOf(k[i]) >= 0) { wazan.push("iaaj");}
    if (aunaqisr.indexOf(k[i]) >= 0) { wazan.push("aunaq");}
    if (ainaqisr.indexOf(k[i]) >= 0) { wazan.push("ainaq");}
    if (uunaqisr.indexOf(k[i]) >= 0) { wazan.push("uunaq");}
    if (iinaqisr.indexOf(k[i]) >= 0) { wazan.push("iinaq");}
    if (aanaqisr.indexOf(k[i]) >= 0) { wazan.push("aanaq");}
    if (ianaqisr.indexOf(k[i]) >= 0) { wazan.push("ianaq");}
    if (iamaqrunr.indexOf(k[i]) >= 0) { wazan.push("iamaq");}
    if (aimaqrunr.indexOf(k[i]) >= 0) { wazan.push("aimaq");}
    if (iamafruqr.indexOf(k[i]) >= 0) { wazan.push("iamaf");}
    if (aimafruqr.indexOf(k[i]) >= 0) { wazan.push("aimaf");}
    if (iimafruqr.indexOf(k[i]) >= 0) { wazan.push("iimaf");}
    if(wazan.length == 0){alert(kalimatalert())};
}
    return wazan;
}

function tentukankatadasar(th, masuk) {

    let katadasar = [];
    let type = [];
      //fiil nahi 
    if (masuk[0] == "ل" && th[2] == " ") {
        if (th[6] == "ّ") { // la tamudda
            const ambil = th.split(" ")[1];
            const ajw = ambil[1] + "ا" + ambil[2];
            const mud = ambil[1] + ambil[2] + "ّ";

            if(th[th.length-2] == "ن"){
                if(kumajwafr.indexOf(ajw) >= 0){ // ada di daftar ajwaf
                    katadasar.push(ajw);
                    type.push("fiil nahiy untuk domir أنتن ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0){ // ada di daftar mudoaf
                    katadasar.push(mud);
                    type.push("fiil nahiy mudoaf")}
            } else {
                katadasar.push(ambil[1] + ambil[2] + "ّ");
                type.push("fiil nahiy mudhoaf")
            }
        } else if (th[5] === th[6]) { //laa tamdudna
            const ambil = th.split(" ")[1];
            katadasar.push(ambil.slice(1, 3) + "ّ");
            type.push("fi'il nahiy untuk dhomir أنتنّ");
        } else { // shohih
            const ambil = th.split(" ")[1];
            if (ambil.length == 3) {
                katadasar.push(ambil[1] + "ا" + ambil[2]);
                type.push("f'il nahiy ajwaf");
            } else if(ambil[2] =="و" || ambil[2] =="ي" || ambil[2] == "ا") {
                katadasar.push(ambil[1] + "ا" + ambil[3]);
                type.push("f'il nahiy ajwaf");
            }else if(ambil[ambil.length-1] =="ن" && ambil.length == 4) {
                katadasar.push(ambil[1] + "ا" + ambil[2]);
                type.push("f'il nahiy ajwaf")
            } else{
            katadasar.push(ambil.slice(1, 4));
            type.push("fi'il nahiy");
            }
        }
        
        //fiil amr berawalan ا
    } else if (masuk[0] == "ا") {
        if(th.length == 4) {// اكتب
            if(masuk[masuk.length-1] == "ْ") {
                katadasar.push(th.slice(1, 4));
                type.push("fiil amr (kata kerja perintah)");
            } else {
                if(th[3] == "ّ") { // افرّ
                    katadasar.push(th.slice(1, 4));
                    type.push("fi'il mudhori mudhoaf")
                }else if (th[2]=="و" || th[2] == "ي" || th[2] =="ا"){
                    katadasar.push(th[1] + "ا" + th[3]);
                    type.push("fiil mudhori ajwaf");
                } else {
                    katadasar.push(th.slice(1, 4));
                    type.push(["fiil amr", "fiil mudhori untuk dhomir أنا"]);
                }
            }
        } else if(th.length == 5 && th[4] == "ن") { //uktubna umdudna
            if(th[2] == th[3]){
                katadasar.push(th.slice(1, 3) + "ّ"); // مدّ
                type.push("fiil amr untuk dhomir أنتن")
            } else {
                katadasar.push(th.slice(1, 4));
                type.push("fiil amr untuk dhomir أنتن");
            }
        } else {
            katadasar.push(th.slice(1, 4));
            type.push("fiil amr");
        }

        // isim fail 
    } else if (th[1] == "ا" && th[2] != " " &&th.length >=4 && hurufmadhi.indexOf(th[3]) == -1) {
        if(th[3] == "ّ") {// مادّ 
            katadasar.push(th[0] +th[2] + "ّ");
            type.push("isim fa'il mudhoaf");
        } else if(th[2] == "أ") {// قائل
            const ajw = th[0] + "ا" + th[3];
            const mhzain = th[0] + th[2] + th[3];
            if(kumajwafr.indexOf(ajw) >= 0) {katadasar.push(ajw); type.push("isim fa'il ajwaf")}
            if(kummhzainr.indexOf(mhzain) >= 0) {katadasar.push(mhzain); type.push("isim fa'il mahmuz 'ain")}
        } else if(th.length == 4 && th[3] == "ي") {// خافي
            katadasar.push(th[0] + "ا" + th[2]);
            type.push("fi'il amr ajwaf")
        } else { //shohih
            katadasar.push(th.replace(/ا/, "").slice(0, 3));
            type.push("isim fa'il");
        }
        
        //isim maf'ul = done
    } else if(th[0] =="م" && th[3] == "و" && th.length >= 5 && th[4] !== "ا") {
        if (th[2] == th[4]) { // mamduud
            katadasar.push(th.replace(/م/, "").replace(/و/, "").slice(0, 2) + "ّ");
            type.push("isim maf'ul");
        } else{ //shohih
        katadasar.push(th.replace(/م/, "").replace(/و/, "").slice(0, 3));
        type.push("isim maf'ul");
        }

        // farrot dan farrota
    } else if (th.length >= 2 && masuk[2] == "ّ" && th[3] == "ت") {
        katadasar.push(th[0] + th[1] + "ّ");
        type.push("fiil madhi")

        //fiil mudore
    } else if (th.length >= 4 && mudoroah.indexOf(th[0]) >= 0){ // semua yang diawali mudoroah anaitu
        if (hurufmadhi.indexOf(th[3]) >= 0 && th.length == 4 && th[3] != "ا") { // semua yang huruf keempatnya hurufmadhi dan hurufnya cmn 4
            if (masuk[3]=="ْ"){//ada sukun nya
                katadasar.push(th.replace(/[يأنات]/, "").slice(0, 3));
                type.push("fi'il mudhori");
            } else if(masuk[3]==("َ" || "ِ" || "ُ")){
                if(th[1] == th[2]) {// تممت mudhoaf
                    katadasar.push(th.slice(0,2) + "ّ")
                    type.push("fiil madhi mudho'af")
                } else { // تعبت sisaa semua madhi berhuruf 4
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi")
                }
            } else if (th[2] == "و" || th[2] == "ي" || th[2] == "ا"){
                katadasar.push(th[1] + "ا" + th[3]);
                type.push("fiil mudhori' ajwaf")
            
            }else if(confirm("apakah yang anda maksudkan \n adalah " + th[0] + "َ" + th[1] + th[2] + "ْ" + th[3] + "? \ntekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // تعبْت  semua madhi
                if(th[1] == th[2]) {// تممت mudhoaf
                    katadasar.push(th.slice(0,2) + "ّ")
                    type.push("fiil madhi mudho'af")
                } else { // تعبت sisaa semua madhi berhuruf 4 daan ternyata يقلن dan semua ajwaf mudore antunna masuk sini
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi");
                    const ajw = katadasar[0][1] + "ا" +  katadasar[0][2];
                    const soh = katadasar[0];
                    if(th[0]=="ي" || th[0] == "ت") { // 
                        katadasar=[]; type=[];
                        if(kumajwafr.indexOf(ajw) >= 0 && th[3] == "ن") {
                            katadasar.push(ajw);
                            type.push("fiil mudhori' ajwaf untuk أنتنّ atau هنّ") }
                        if(kumsohr.indexOf(soh) >=0 ){
                            katadasar.push(soh);
                            type.push("fiil madhi")
                        }
                    }
                }
            } else { // masuk fiil mudhore
                if (confirm("bukan ya,, kalau gitu apakah \n " + th[0] + "َ" + th[1] + "ْ" + th[2] + th[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // تَعْبت
                    katadasar.push(th.replace(/[يأنات]/, "").slice(0, 3));
                    type.push("fi'il mudhori")
                } else {
                    alert("coba masukkan lengkap dengan harokatnya")
                }

            }
            
        // huruf nya 4 tapi ga ada tanda madhi //يكسب
        } else if (th.length==4 && hurufmadhi.indexOf(th[3]) == -1){
            katadasar.push(th.slice(1, 4));
            type.push("fiil mudhori nah begini");
            const ajw = th[1] + "ا" + th[2];
            const mud = th[1] + th[2] + "ّ"
            if (th[2]=="و" || th[2]=="ا" || th[2]=="ي"){ // ajwaf
                katadasar=[]; type = [];
                katadasar.push(th[1] + "ا"+ th[3]);
                type.push("fiil mudhori' ajwaf")
            } else if (th[3] == "ّ"){ //yg ada tasydidnya يصنّ تفرّ
                katadasar = []; type = []; 
                if(kumajwafr.indexOf(ajw) >= 0){ // ada di daftar ajwaf
                    katadasar.push(ajw);
                    type.push("fiil mudhori ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0){ // ada di daftar mudoaf
                    katadasar.push(mud);
                    type.push("fiil mudhori mudoaf")}
            } 
        // untuk yang huruf nya lebih dari 4 yang masih termasuk madhi yang huruf awalnya anaitu
        } else if (th.length >= 4) {
            if (th[th.length-1] == "ن") { // klo berakhiran nun bberarti mudore
                if(th[3] == "ّ" || th [2] == th[3]) { // يمدّ
                   katadasar.push(th.replace(/[يأنات]/, "").slice(0, 2) + "ّ");
                   type.push("fiil mudhori' mudho'af")
                } else { // shohih
                   katadasar.push(th.replace(/[يأنات]/, "").slice(0, 3));
                   type.push("fiil mudhori' yang ini kah");
                   if (th[2]=="و" || th[2] == "ا" || th[2] == "ي") {
                       katadasar = []; type = [];
                       katadasar.push(th[1] + "ا" + th[3]);
                       type.push("fiil mudhori ajwaf");
                   }
                }
            } else { //ternyata fiil yang belakangnya nun klo antunna jad tasydid nun nya masuk sini
                if(th[3] == "ن"){
                    if(th[4] == "ّ") { //يلعنّ
                        katadasar.push(th.slice(1,4));
                        type.push("fiil mudhori'")
                    }
                }else{
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi")
                }
            }
        }
        // end fiil fiil berawalan anaitu

        
        // huruf mim di depan!!
    } else if (th[0] == "م") {
            // madhi, berawalan mim humaa
        if (th[3] == "ا" && th.length == 4){ 
            if(th[2] == "ّ"){ // mudoaf
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi untuk dhomir هما", "fiil amr untuk dhomir أنتما")      
            } else { //shohih
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi untuk dhomir هما")  
            }
        // isim alat  مِفعل
        } else if(masuk[1] == "ِ" ) {
            if( th[3] == "ّ") { // mudoaf
                katadasar.push(th.replace(/م/, "").replace(/ا/, "").slice(0, 3));
                type.push("isim alat");
            } else if(th[2] =="ي"){
                katadasar.push(th[1] + "ا" +th[3]);
                type.push("isim alat ajwaf")
            } else { // shohih
                katadasar.push(th.replace(/م/, "").replace(/ا/, "").slice(0, 3));
                type.push("isim alat");
            }
            // مفعال
        } else if (th[3] == "ا") {
            katadasar.push(th.replace(/م/, "").replace(/ا/, "").slice(0, 3));
            type.push("isim alat");

            //isim makan atau alat berharokat
        } else if(masuk[3] == "ْ" ) {
            katadasar.push(th.replace(/م/, "").slice(0, 3));
            type.push("isim makan atau zaman", "isim alat");

            // madhi berharokat
        } else if (masuk[3] == "َ") {
            if (th[1] == th[2]) {
                katadasar.push(th.slice(0, 2)+ "ّ");
                type.push("fiil madhi");
            } else {
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi");
            }
            //maf'ul ajwaf dan isim makan ajwaf
        }else if(th[2] =="و" || th[2] == "ا" || th[2] == "ي") {
            katadasar.push(th[1] + "ا" +th[3]);
            type.push("isim maf'ul ajwaf", "isim makan/zaman ajwaf", "isim alat")
            
            //fiil madhi yang huruf awalnya mim selain dhomir huwa
        } else if (th[2] != "ّ" && th[1] != th[2]){ //memastikan bukan madhi mudoaf, tapi makan mudoaf masuk sini
            if(hurufmadhi.indexOf(th[3]) >= 0 && th.length == 4){   // huruf nya 4, dan ada tanda madhi
                if(confirm("apakah yang anda maksudkan \n adalah " + th[0] + "َ" + th[1] + "ْ" + th[2] + th[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // مسكن
                    katadasar.push(th.replace(/م/, "").slice(0, 3));
                    type.push("isim makan atau zaman", "isim alat")
                } else { // مسكت 
                    if (confirm("bukan ya,, kalau gitu apakah \n " + th[0] + "َ" + th[1] + "َ" + th[2] + th[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){
                        if (th[1] == th[2]) {
                            katadasar.push(th.slice(0, 2)+ "ّ");
                            type.push("fiil madhi");
                        } else {
                            katadasar.push(th.slice(0, 3));
                            type.push("fiil madhi");
                        }
                    } else{
                            alert("coba masukkan kata, lengkap dengan harokatnya...");
                    }
                }
            } else if (th.length > 4) { // fiil madhi depannya mim huruf lebih dari 4
                if(th[th.length-1] == "ن" && th[th.length-2] == "ا") { // semua isim makan
                        katadasar.push(th.replace(/م/, "").slice(0, 3));
                        type.push("isim makan atau zaman", "isim alat sink iki po yo");
                } else if(th[th.length-1] == "ن" && th[th.length-2] == "و") { // semua isim makan
                        katadasar.push(th.replace(/م/, "").slice(0, 3));
                        type.push("isim makan atau zaman", "isim alat sink iki po yo");
                } else if(th[4] == "ة" || th[5] == "ت") { // مدرسة مدرسات
                    katadasar.push(th.replace(/م/, "").slice(0, 3));
                    type.push("isim makan atau zaman", "isim alat dalam bentuk muannast")
                } else {
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi kayaknya")
                }
            } else { //masjid
                katadasar.push(th.replace(/م/, "").slice(0, 3));
                type.push("isim makan atau zaman", "isim alat sink iki po yo");
            }
            // dibawah ini penanganan mudoaf madhi
        
            // madhi berawalan mim مدّ مدّوا  
        } else if (th[3] != "ت") {
            if(th[2] == "ّ"){ // mudoaf
                if(th[3] == "ي") { //maddiiii
                    katadasar.push(th.slice(0, 3));
                    type.push("fi'il amr untuk dhomir أنتِ")
                } else {
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi", "fiil amr");
                }     
            } else { //shohih & مررنا
                if (th[1] == th[2]) {
                    katadasar.push(th.slice(0, 2) + "ّ");
                    type.push("fiil madhi mudhoaf")
                } else {
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi"  )
                }    
            }
            // مدّت  
        } else if (th[3] == "ت") {
            if(th[2] == "ّ"){ // mudoaf
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi");        
            } else { //shohih & مددت
                if (th[1] == th[2]) {
                    katadasar.push(th.slice(0, 2) + "ّ");
                    type.push("fiil madhi mudhoaf yang inikok bisa piye")
                } else {
                    katadasar.push(th.slice(0, 3));
                    type.push("fiil madhi"  )
                }  
            }
        }    

        // end fiil fiil berawalan mim
    
        //fiil madhi sdh termasuk misal
    } else if(th[1] == th[2]) {
        katadasar.push(th.slice(0, 2) + "ّ");
        type.push("fiil madhi mudho'af");
    }else if(th[1] =="ي" || th[1] == "و") {
        katadasar.push(th[0] + "ا" + th[2]);
        type.push("fiil amr ajwaf hahaha")
    }else if(th[1] == "ا" ) { //صائن
        if(th[2] == "أ"){
            katadasar.push(th[0] + "ا" + th[3]);
            type.push("isim fa'il ajwaf disini")
        } else{
            if(th.length == 3) {
                katadasar.push(th);
                type.push("fiil madhi ajwaf untuk dhomir huwa")
            } else{
                katadasar.push(th[0] + "ا" + th[2]);
                type.push("fiil amr ajwaf hihihi")
            }
        }
    } else { // madhi shohih termasuk ajwaf sunta suntuma suntum suntunna
        const ambil = th.replace("تما", "").replace("تم", "").replace("تن", "").replace("ّ", "").replace("نا", "");
        if(th.length == 2) {// صن
            katadasar.push(ambil[0] + "ا"+ ambil[1]);
            type.push("fiil amr ajwaf satu")
        } else if (ambil.length == 2){ //utk ajwaf
            const ajw = ambil[0] + "ا"+ ambil[1];
            const mud = ambil[0] + ambil[1] + "ّ";
            if (th[2]=="ّ"){ //صنّ فرّ
                if(kumajwafr.indexOf(ajw) >= 0) {katadasar.push(ajw); type.push("fiil madhi ajwaf", "fiil amr ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0) {katadasar.push(mud); type.push("fiil madhi mudhoaf", "fiil amr mudhoaf")}
            }else {
                katadasar.push(ambil[0] +"ا"  +ambil[1]);
                type.push("fiil madhi harusnya")
            }
        } else if (ambil[2]== "ت"){ // shunta dan shohih lain
            if (masuk[3]== "ْ"){ // ada sukun
                katadasar.push(ambil[0] + "ا"+ ambil[1])
                type.push("fiil madhi ajwaf ga akan ada");
            }else if (masuk[3]==("َ" || "ِ" || "ُ")){ // gada sukun
                katadasar.push(ambil);
                type.push("fiil madhi shohih")
            }else if (confirm("apakah yang kamu maksudkan adalah " + ambil[0] + "َ" + ambil[1] + "َ" + ambil[2] + "َ atau "+ ambil[0] + "َ" + ambil[1] + "ِ" + ambil[2] + "َ atau "+ ambil[0] + "َ" + ambil[1] + "ُ" + ambil[2] + "َ")){// yg gapake harokat
                katadasar.push(th.slice(0, 3));
                type.push("fiil madhi")
            }else {
                katadasar.push(ambil[0] + "ا"+ ambil[1]);
                type.push("fiil madhi ajwaf dua")
            }
        }else if(th[1] == "ن" && th[2] == "ّ" && th[3] == "ا") { //صنّا
            const ajw = th[0] + "ا" + th[1];
            const mud = th[0] + th[1] + "ّ"
            if (th[2] == "ّ"){ 
                if(kumajwafr.indexOf(ajw) >= 0){ // ada di daftar ajwaf
                    katadasar.push(ajw);
                    type.push("fiil madhi ajwaf")}
                if(kummudoafr.indexOf(mud) >= 0){ // ada di daftar mudoaf
                    katadasar.push(mud);
                    type.push("fiil madhi mudoaf")}
            }
       
        } else if (th.length == 3 && th[2] == "ن") {// خفن
            const ajw = th[0] + "ا" +th[1];
            const soh = th;
            if(kumajwafr.indexOf(ajw) >= 0) {katadasar.push(ajw); type.push("fi'il amr ajwaf")}
            if(kumsohr.indexOf(soh) >= 0) {katadasar.push(soh); type.push("fi'il madhi")}
        }else { //akhir sisa fiil madhi 
            katadasar.push(th.slice(0, 3));
            type.push("fiil madhi masuk sini ada ga" ); 
        }
    } 
  
   console.log(katadasar);
   console.log(type);
    return {katadasar, type};
}
function rangkaisigoh (wazan, katadasar) {
    
      //deklarasi constan rangka
      let rangkaMadi; let rangkaMudore; let rangkaAmr; let rangkaNahi; let rangkaFail; let rangkaMaful; let rangkamamaj; let rangkamumaj; let rangkamasdar; let rangkamakan; let rangkaalat;
    const rangka = katadasar[0]; 
  for (let i = 0; i< wazan.length; i++) {
    if (wazan[i] === "au" || wazan[i] === "aumzfa" || wazan[i] === "aumzlam" || wazan[i] === "aumzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaAmr = "اُ" + rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar;
            if(rangka === ("خرج") || ("حضر") || ("دخل")) {
                rangkamasdar = rangka[0] + "ُ" + rangka[1] + "ُوْ" + rangka[2];
            } else {
                rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
            }
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "ai" || wazan[i] === "aimzfa" || wazan[i] === "aimzlam" || wazan[i] === "aimzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if(wazan[i] === "ia" || wazan[i] === "iamzfa" || wazan[i] === "iamzlam" || wazan[i] === "iamzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "ِ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "ii" || wazan[i] === "iimzfa" || wazan[i] === "iimzlam" || wazan[i] === "iimzain") {
            rangkaMadi = rangka[0] + "َ" + rangka[1] + "ِ" + rangka[2];
            rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
            rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
            rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ِ" + rangka[2];
            rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
            rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
            rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "ُ" + rangka[1] + "ْ" + rangka[2] + "َان";
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "aa" || wazan[i] === "aamzfa" || wazan[i] === "aamzlam" || wazan[i] === "aamzain") {
            rangkaMadi = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2];
            rangkaMudore = rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
            rangkaAmr = "اِ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
            rangkaNahi = "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "َ" + rangka[2];
            rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
            rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[2];
            rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2];
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْ" + rangka[1] + "َا" + rangka[2]
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "uu" || wazan[i] === "uumzfa" || wazan[i] === "uumzlam" || wazan[i] === "uumzain") {
        rangkaMadi = rangka[0] + "َ" + rangka[1] + "ُ" + rangka[2];
        rangkaMudore = rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaAmr = "اُ" + rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[2];
        rangkaNahi = "لَا تَ" + rangka[0] +  "َ" + rangka[1] + "ُ" + rangka[2];
        rangkaFail;
            if (hasanray.indexOf(rangka) >= 0) {
                rangkaFail = rangka[0] + "َ" + rangka[1] + "َ" + rangka[2]; //حَسَنٌ
            }else if (baidray.indexOf(rangka) >=0) {
                rangkaFail = rangka[0] + "َ" + rangka[1] + "ِيْ" + rangka[2];//بَعِيْدٌ
            }else if (sahlray.indexOf(rangka) >=0) {
                rangkaFail = rangka[0] + "َ" + rangka[1] + "ْ" + rangka[2]//ضَخْمٌ
            } else if (jildray.indexOf(rangka)>=0){
                rangkaFail = rangka[0] + "ِ" + rangka[1] + "ْ" + rangka[2];// جلد
            // }else if (junub.window(rangka)>0){
            //     rangkaFail = rangka[0] + "ُ" + rangka[1] + "ُ" + rangka[2]//جُنُبٌ
            }else if (sujaray.indexOf(rangka)>=0){
                rangkaFail = rangka[0] + "ُ" + rangka[1] + "َا" + rangka[2];//شجاع
            }else if (jabanray.indexOf(rangka)>=0){
                rangkaFail = rangka[0] + "َ" + rangka[1] + "َا" + rangka[2];//شجاع
            }else {
                rangkaFail = rangka[0] + "َا" + rangka[1] + "ِ" + rangka[2];
            }
        rangkaMaful = "";
        rangkamamaj = rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[2];
        rangkamumaj = "ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkamasdar;
            if (rangka == "ضخم" || rangka == "جبن" || rangka == "شجع" || rangka == "جنب"){
                rangkamasdar = rangka[0] + "َ" + rangka[1] + "َا" + rangka[2] + ""
            } else {
                rangkamasdar = rangka[0] + "ُ" + rangka[1] + "ْ" + rangka[2];
            }
        rangkamakan = "مَ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};

    } else if(wazanmudoaf.indexOf(wazan[0]) >= 0) { //masuk mudoaf apapun wazanenam nya
            
            if(wazan[i] === "aumud" || wazan[i] === "uumud") {
                rangkaMudore = [
                    (rangka[0] + "ُ" + rangka[1] + "ّ"),
                    (rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[1])
                ]
                rangkaAmr = [
                    rangka[0] + "ُ" + rangka[1] + rangka[2], //مدّ
                    "ا" + rangka[0] + "ْ" + rangka[1] + "ُ" + rangka[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + rangka[0] +  "ُ" + rangka[1] + rangka[2],
                    "لَا تَ" + rangka[0] +  "ْ" + rangka[1] + "ُ" + rangka[1]
                ];
                rangkamakan = "مَ" + rangka[0] + "َ" + rangka[1] + "ّ";
            } else if (wazan[i] === "iamud" || wazan[i] === "aamud"){
                rangkaMudore = [
                    (rangka[0] + "َ" + rangka[1] + "ّ"),
                    (rangka[0] + "ْ" + rangka[1] + "َ" + rangka[1])
                ]
                rangkaAmr = [
                    rangka[0] + "َ" + rangka[1] + rangka[2], //عض
                    "ا" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + rangka[0] +  "َ" + rangka[1] + rangka[2],
                    "لَا تَ" + rangka[0] +  "ُ" + rangka[1] + "َ" + rangka[1]
                ];
                rangkamakan = "مَ" + rangka[0] + "َ" + rangka[1] + "ّ"
            } else {
                rangkaMudore = [
                    (rangka[0] + "ِ" + rangka[1] + "ّ"),
                    (rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[1])
                ]
                rangkaAmr = [
                    rangka[0] + "ِ" + rangka[1] + rangka[2],
                    "ا" + rangka[0] + "ْ" + rangka[1] + "ِ" + rangka[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + rangka[0] +  "ِ" + rangka[1] + rangka[2],
                    "لَا تَ" + rangka[0] +  "ُ" + rangka[1] + "ِ" + rangka[1]
                ];
                rangkamakan = "مَ" + rangka[0] + "ِ" + rangka[1] + "ّ";
            };

            rangkaMadi = [
                (rangka[0] + "َ" + rangka[1] + "ّ"), 
                (rangka[0] + "َ" + rangka[1] + "َ" + rangka[1])
            ];
            rangkamamaj = [
                (rangka[0] + "ُ" + rangka[1] + "ّ"), 
                (rangka[0] + "ُ" + rangka[1] + "ِ" + rangka[1])
            ];
            rangkamumaj = [
                ("ُ" + rangka[0] + "َ" + rangka[1] + "ّ"),
                ("ُ" + rangka[0] + "ْ" + rangka[1] + "َ" + rangka[1])
            ]
            rangkaFail = rangka[0] + "َآ" + rangka[1] + rangka[2];
            rangkaMaful = "مَ" + rangka[0] + "ْ" + rangka[1] + "ُوْ" + rangka[1];
            rangkamasdar = rangka[0] + "َ" + rangka[1] + "ّ";
            rangkaalat = "مِ" + rangka[0] + "َ" + rangka[1] + "ّ";
            return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if(wazan[i] == "auaj"|| wazan[i] == "uuaj") {//صان يصون
        rangkaMadi= [
            (rangka[0] + "َ" + rangka[1] + rangka[2]),
            (rangka[0] + "ُ" + rangka[2])
        ];
        rangkamamaj= [
            (rangka[0] + "ِي" + rangka[2]),
            (rangka[0] + "ِ" + rangka[2])
        ];
        rangkaMudore = [
            (rangka[0] + "ُو" + rangka[2]),
            (rangka[0] + "ُ" + rangka[2])
        ];
        rangkamumaj = [
            ("ُ" + rangka[0] + "َا" + rangka[2]),
            ("ُ" + rangka[0] + "َ" + rangka[2])
        ];
        rangkaAmr = [
            rangka[0] + "ُ" + rangka[2],
            rangka[0] + "ُو" + rangka[2],
            "yei"
        ];
        rangkaNahi = [
            "لَا تَ" + rangka[0] +  "ُ" + rangka[2],
            "لَا تَ" + rangka[0] +  "ُو" + rangka[2],
            "yei"
        ];
        rangkaFail = rangka[0] + "َ" + rangka[1] + "ئِ" + rangka[2];
        rangkaMaful = "مَ" + rangka[0] + "ُو" + rangka[2];
        rangkamasdar = rangka[0] + "َو" + rangka[2]
        rangkamakan = "مَ" + rangka[0] + "َا" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْوَ" + rangka[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};

    } else if(wazan[i] == "aaaj" || wazan[i] == "aiaj" || wazan[i] == "iaaj" || wazan[i] == "iiaj") {// باع يبيع خاف يخاف
        rangkaMadi = [
            (rangka[0] + "َ" + rangka[1] + rangka[2]),
            (rangka[0] + "ِ" + rangka[2])
        ];
        rangkamamaj = [
            (rangka[0] + "ِي" + rangka[2]),
            (rangka[0] + "ِ" + rangka[2])
        ];
        rangkaFail = rangka[0] + "َ" + rangka[1] + "ئِ" + rangka[2];
        rangkaalat = "مِ" + rangka[0] + "ْيَ" + rangka[2];
        
        if(wazan[i] == "iaaj" || wazan[i] == "aaaj"){ // خاف
            rangkaMudore = [
                rangka[0] + "َا" + rangka[2],
                rangka[0] + "َ" + rangka[2]
            ]
            rangkamumaj = [
                "ُ" + rangka[0] + "َا" + rangka[2],
                "ُ" + rangka[0] + "َ" + rangka[2]
            ]
            rangkaAmr = [
                rangka[0] + "َ" + rangka[2],
                rangka[0] + "َا" + rangka[2],
                "yei"
            ];
            rangkaNahi = [
                "لَا تَ" + rangka[0] +  "َ" + rangka[2],
                "لَا تَ" + rangka[0] +  "َا" + rangka[2],
                "yei"
            ];
            rangkaMaful = "مَ" + rangka[0] + "ُو" + rangka[2];
            rangkamasdar = rangka[0] + "َو" + rangka[2];
            rangkamakan = "مَ" + rangka[0] + "َا" + rangka[2];

        } else{ // باع
            rangkaMudore = [
                rangka[0] + "ِي" + rangka[2],
                rangka[0] + "ِ" + rangka[2]
            ];
            rangkamumaj = [
                "ُ" + rangka[0] + "َا" + rangka[2],
                "ُ" + rangka[0] + "َ" + rangka[2]
            ]
            rangkaAmr = [
                rangka[0] + "ِ" + rangka[2],
                rangka[0] + "ِي" + rangka[2],
                "yei"
            ]
            rangkaNahi = [
                "لَا تَ" + rangka[0] +  "ِ" + rangka[2],
                "لَا تَ" + rangka[0] +  "ِي" + rangka[2],
                "yei"
            ]
            rangkaMaful = "مَ" + rangka[0] + "ِي" + rangka[2];
            rangkamasdar = rangka[0] + "َي" + rangka[2];
            rangkamakan = "مَ" + rangka[0] + "ِي" + rangka[2];
        }
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};

    }
  } // endfor

}

function masukintabel (rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan) {
    function gantihamzah(str) {
        return str.replace( /أَا/ , "ءَا" ).replace( /أِي/ , "ئِي" ).replace( /اأ/ , "اء" ).replace( /أَأْ/ , "آ" ).replace( /أُأْ/ , "أُو" )
     }
     if (typeof(rangkaMadi) === "string") { //bukan mudoaf
         madhi[1-1].innerHTML = gantihamzah(rangkaMadi + "َ");
         madhi[2-1].innerHTML = gantihamzah(rangkaMadi + "َا");
         madhi[3-1].innerHTML = gantihamzah(rangkaMadi + "ُوْا");
         madhi[4-1].innerHTML = gantihamzah(rangkaMadi + "َتْ");
         madhi[5-1].innerHTML = gantihamzah(rangkaMadi + "َتَا");
         madhi[6-1].innerHTML = gantihamzah(rangkaMadi + "ْنَ");
         madhi[7-1].innerHTML = gantihamzah(rangkaMadi + "ْتَ");
         madhi[8-1].innerHTML = gantihamzah(rangkaMadi + "ْتُمَا");
         madhi[9-1].innerHTML = gantihamzah(rangkaMadi + "ْتُمْ");
         madhi[10-1].innerHTML = gantihamzah(rangkaMadi + "ْتِ");
         madhi[11-1].innerHTML = gantihamzah(rangkaMadi + "ْتُمَا");
         madhi[12-1].innerHTML = gantihamzah(rangkaMadi + "ْتُنَّ");
         madhi[13-1].innerHTML = gantihamzah(rangkaMadi + "ْتُ");
         madhi[14-1].innerHTML = gantihamzah(rangkaMadi + "ْنَا");
 
         mudore[1-1].innerHTML = gantihamzah("يَ" + rangkaMudore + "ُ");
         mudore[2-1].innerHTML = gantihamzah("يَ" + rangkaMudore + "َانِ");
         mudore[3-1].innerHTML = gantihamzah("يَ" + rangkaMudore + "ُوْنَ");
         mudore[4-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "ُ");
         mudore[5-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "َانِ");
         mudore[6-1].innerHTML = gantihamzah("يَ" + rangkaMudore + "ْنَ");
         mudore[7-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "ُ");
         mudore[8-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "َانِ");
         mudore[9-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "ُوْنَ");
         mudore[10-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "ِيْنَ");
         mudore[11-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "َانِ");
         mudore[12-1].innerHTML = gantihamzah("تَ" + rangkaMudore + "ْنَ");
         mudore[13-1].innerHTML = gantihamzah("أَ" + rangkaMudore + "ُ");
         mudore[14-1].innerHTML = gantihamzah("نَ" + rangkaMudore + "ُ");
 
         mamaj[1-1].innerHTML = gantihamzah(rangkamamaj + "َ");
         mamaj[2-1].innerHTML = gantihamzah(rangkamamaj + "َا");
         mamaj[3-1].innerHTML = gantihamzah(rangkamamaj + "ُوْا");
         mamaj[4-1].innerHTML = gantihamzah(rangkamamaj + "َتْ");
         mamaj[5-1].innerHTML = gantihamzah(rangkamamaj + "َتَا");
         mamaj[6-1].innerHTML = gantihamzah(rangkamamaj + "ْنَ");
         mamaj[7-1].innerHTML = gantihamzah(rangkamamaj + "ْتَ");
         mamaj[8-1].innerHTML = gantihamzah(rangkamamaj + "ْتُمَا");
         mamaj[9-1].innerHTML = gantihamzah(rangkamamaj + "ْتُمْ");
         mamaj[10-1].innerHTML = gantihamzah(rangkamamaj + "ْتِ");
         mamaj[11-1].innerHTML = gantihamzah(rangkamamaj + "ْتُمَا");
         mamaj[12-1].innerHTML = gantihamzah(rangkamamaj + "ْتُنَّ");
         mamaj[13-1].innerHTML = gantihamzah(rangkamamaj + "ْتُ");
         mamaj[14-1].innerHTML = gantihamzah(rangkamamaj + "ْنَا");
         
         mumaj[1-1].innerHTML = gantihamzah("ي" + rangkamumaj + "ُ");
         mumaj[2-1].innerHTML = gantihamzah("ي" + rangkamumaj + "َانِ");
         mumaj[3-1].innerHTML = gantihamzah("ي" + rangkamumaj + "ُوْنَ");
         mumaj[4-1].innerHTML = gantihamzah("ت" + rangkamumaj + "ُ");
         mumaj[5-1].innerHTML = gantihamzah("ت" + rangkamumaj + "َانِ");
         mumaj[6-1].innerHTML = gantihamzah("ي" + rangkamumaj + "ْنَ");
         mumaj[7-1].innerHTML = gantihamzah("ت" + rangkamumaj + "ُ");
         mumaj[8-1].innerHTML = gantihamzah("ت" + rangkamumaj + "َانِ");
         mumaj[9-1].innerHTML = gantihamzah("ت" + rangkamumaj + "ُوْنَ");
         mumaj[10-1].innerHTML = gantihamzah("ت" + rangkamumaj + "ِيْنَ");
         mumaj[11-1].innerHTML = gantihamzah("ت" + rangkamumaj + "َانِ");
         mumaj[12-1].innerHTML = gantihamzah("ت" + rangkamumaj + "ْنَ");
         mumaj[13-1].innerHTML = gantihamzah("أ" + rangkamumaj + "ُ");
         mumaj[14-1].innerHTML = gantihamzah("ن" + rangkamumaj + "ُ");
 
         amr[1-1].innerHTML = gantihamzah(rangkaAmr + "ْ");
         amr[2-1].innerHTML = gantihamzah(rangkaAmr + "َا");
         amr[3-1].innerHTML = gantihamzah(rangkaAmr + "ُوْا");
         amr[4-1].innerHTML = gantihamzah(rangkaAmr + "ِيْ");
         amr[5-1].innerHTML = gantihamzah(rangkaAmr + "َا");
         amr[6-1].innerHTML = gantihamzah(rangkaAmr + "ْنَ");
         
         nahi[1-1].innerHTML = gantihamzah(rangkaNahi + "ْ");
         nahi[2-1].innerHTML = gantihamzah(rangkaNahi + "َا");
         nahi[3-1].innerHTML = gantihamzah(rangkaNahi + "ُوْا");
         nahi[4-1].innerHTML = gantihamzah(rangkaNahi + "ِيْ");
         nahi[5-1].innerHTML = gantihamzah(rangkaNahi + "َا");
         nahi[6-1].innerHTML = gantihamzah(rangkaNahi + "ْنَ");
     } else {
         madhi[1-1].innerHTML = gantihamzah(rangkaMadi[0] + "َ");
         madhi[2-1].innerHTML = gantihamzah(rangkaMadi[0] + "َا");
         madhi[3-1].innerHTML = gantihamzah(rangkaMadi[0] + "ُوْا");
         madhi[4-1].innerHTML = gantihamzah(rangkaMadi[0] + "َتْ");
         madhi[5-1].innerHTML = gantihamzah(rangkaMadi[0] + "َتَا");
         madhi[6-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْنَ");
         madhi[7-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْتَ");
         madhi[8-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْتُمَا");
         madhi[9-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْتُمْ");
         madhi[10-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْتِ");
         madhi[11-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْتُمَا");
         madhi[12-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْتُنَّ");
         madhi[13-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْتُ");
         madhi[14-1].innerHTML = gantihamzah(rangkaMadi[1] + "ْنَا");
 
         mudore[1-1].innerHTML = gantihamzah("يَ" + rangkaMudore[0] + "ُ");
         mudore[2-1].innerHTML = gantihamzah("يَ" + rangkaMudore[0] + "َانِ");
         mudore[3-1].innerHTML = gantihamzah("يَ" + rangkaMudore[0] + "ُوْنَ");
         mudore[4-1].innerHTML = gantihamzah("تَ" + rangkaMudore[0] + "ُ");
         mudore[5-1].innerHTML = gantihamzah("تَ" + rangkaMudore[0] + "َانِ");
         mudore[6-1].innerHTML = gantihamzah("يَ" + rangkaMudore[1] + "ْنَ");
         mudore[7-1].innerHTML = gantihamzah("تَ" + rangkaMudore[0] + "ُ");
         mudore[8-1].innerHTML = gantihamzah("تَ" + rangkaMudore[0] + "َانِ");
         mudore[9-1].innerHTML = gantihamzah("تَ" + rangkaMudore[0] + "ُوْنَ");
         mudore[10-1].innerHTML = gantihamzah("تَ" + rangkaMudore[0] + "ِيْنَ");
         mudore[11-1].innerHTML = gantihamzah("تَ" + rangkaMudore[0] + "َانِ");
         mudore[12-1].innerHTML = gantihamzah("تَ" + rangkaMudore[1] + "ْنَ");
         mudore[13-1].innerHTML = gantihamzah("أَ" + rangkaMudore[0] + "ُ");
         mudore[14-1].innerHTML = gantihamzah("نَ" + rangkaMudore[0] + "ُ");
 
         mamaj[1-1].innerHTML = gantihamzah(rangkamamaj[0] + "َ");
         mamaj[2-1].innerHTML = gantihamzah(rangkamamaj[0] + "َا");
         mamaj[3-1].innerHTML = gantihamzah(rangkamamaj[0] + "ُوْا");
         mamaj[4-1].innerHTML = gantihamzah(rangkamamaj[0] + "َتْ");
         mamaj[5-1].innerHTML = gantihamzah(rangkamamaj[0] + "َتَا");
         mamaj[6-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْنَ");
         mamaj[7-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْتَ");
         mamaj[8-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْتُمَا");
         mamaj[9-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْتُمْ");
         mamaj[10-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْتِ");
         mamaj[11-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْتُمَا");
         mamaj[12-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْتُنَّ");
         mamaj[13-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْتُ");
         mamaj[14-1].innerHTML = gantihamzah(rangkamamaj[1] + "ْنَا");
         
         mumaj[1-1].innerHTML = gantihamzah("ي" + rangkamumaj[0] + "ُ");
         mumaj[2-1].innerHTML = gantihamzah("ي" + rangkamumaj[0] + "َانِ");
         mumaj[3-1].innerHTML = gantihamzah("ي" + rangkamumaj[0] + "ُوْنَ");
         mumaj[4-1].innerHTML = gantihamzah("ت" + rangkamumaj[0] + "ُ");
         mumaj[5-1].innerHTML = gantihamzah("ت" + rangkamumaj[0] + "َانِ");
         mumaj[6-1].innerHTML = gantihamzah("ي" + rangkamumaj[1] + "ْنَ");
         mumaj[7-1].innerHTML = gantihamzah("ت" + rangkamumaj[0] + "ُ");
         mumaj[8-1].innerHTML = gantihamzah("ت" + rangkamumaj[0] + "َانِ");
         mumaj[9-1].innerHTML = gantihamzah("ت" + rangkamumaj[0] + "ُوْنَ");
         mumaj[10-1].innerHTML = gantihamzah("ت" + rangkamumaj[0] + "ِيْنَ");
         mumaj[11-1].innerHTML = gantihamzah("ت" + rangkamumaj[0] + "َانِ");
         mumaj[12-1].innerHTML = gantihamzah("ت" + rangkamumaj[1] + "ْنَ");
         mumaj[13-1].innerHTML = gantihamzah("أ" + rangkamumaj[0] + "ُ");
         mumaj[14-1].innerHTML = gantihamzah("ن" + rangkamumaj[0] + "ُ");
 
         if(rangkaAmr.length == 3){ // ajwaf dibuat length 3
             amr[1-1].innerHTML = gantihamzah(rangkaAmr[0] + "ْ");
             amr[2-1].innerHTML = gantihamzah(rangkaAmr[1] + "َا");
             amr[3-1].innerHTML = gantihamzah(rangkaAmr[1] + "ُوْا");
             amr[4-1].innerHTML = gantihamzah(rangkaAmr[1] + "ِيْ");
             amr[5-1].innerHTML = gantihamzah(rangkaAmr[1] + "َا");
             amr[6-1].innerHTML = gantihamzah(rangkaAmr[0] + "ْنَ");
 
             nahi[1-1].innerHTML = gantihamzah(rangkaNahi[0] + "ْ");
             nahi[2-1].innerHTML = gantihamzah(rangkaNahi[1] + "َا");
             nahi[3-1].innerHTML = gantihamzah(rangkaNahi[1] + "ُوْا");
             nahi[4-1].innerHTML = gantihamzah(rangkaNahi[1] + "ِيْ");
             nahi[5-1].innerHTML = gantihamzah(rangkaNahi[1] + "َا");
             nahi[6-1].innerHTML = gantihamzah(rangkaNahi[0] + "ْنَ");
 
         } else{
             amr[1-1].innerHTML = gantihamzah(rangkaAmr[0] + "َ");
             amr[2-1].innerHTML = gantihamzah(rangkaAmr[0] + "َا");
             amr[3-1].innerHTML = gantihamzah(rangkaAmr[0] + "ُوْا");
             amr[4-1].innerHTML = gantihamzah(rangkaAmr[0] + "ِيْ");
             amr[5-1].innerHTML = gantihamzah(rangkaAmr[0] + "َا");
             amr[6-1].innerHTML = gantihamzah(rangkaAmr[1] + "ْنَ");
 
             nahi[1-1].innerHTML = gantihamzah(rangkaNahi[0] + "َ");
             nahi[2-1].innerHTML = gantihamzah(rangkaNahi[0] + "َا");
             nahi[3-1].innerHTML = gantihamzah(rangkaNahi[0] + "ُوْا");
             nahi[4-1].innerHTML = gantihamzah(rangkaNahi[0] + "ِيْ");
             nahi[5-1].innerHTML = gantihamzah(rangkaNahi[0] + "َا");
             nahi[6-1].innerHTML = gantihamzah(rangkaNahi[1] + "ْنَ");
         }
 
 
 
         
         // tinggal nambahin ini utnuk mudoaf sama nyoba sama ttg bahasa
     }
 
 
     fail[1-1].innerHTML = gantihamzah(rangkaFail + "ٌ");
     fail[2-1].innerHTML = gantihamzah(rangkaFail + "َانِ");
     fail[3-1].innerHTML = gantihamzah(rangkaFail + "ُوْنَ");
     fail[4-1].innerHTML = gantihamzah(rangkaFail + "َةٌ");
     fail[5-1].innerHTML = gantihamzah(rangkaFail + "َتَانِ");
     fail[6-1].innerHTML = gantihamzah(rangkaFail + "َاتٌ");
     
     if (wazan[0] === "uu" || wazan[0] === "uumzfa" || wazan[0] === "uumzlam" || wazan[0] === "uumzain") {
         for(let i = 0; i< maful.length; i++) {
             maful[i].innerHTML = "---";
         }
     } else {
         maful[1-1].innerHTML = gantihamzah(rangkaMaful + "ٌ");
         maful[2-1].innerHTML = gantihamzah(rangkaMaful + "َانِ");
         maful[3-1].innerHTML = gantihamzah(rangkaMaful + "ُوْنَ");
         maful[4-1].innerHTML = gantihamzah(rangkaMaful + "َةٌ");
         maful[5-1].innerHTML = gantihamzah(rangkaMaful + "َتَانِ");
         maful[6-1].innerHTML = gantihamzah(rangkaMaful + "َاتٌ");
     }
 
     masdar[1-1].innerHTML = gantihamzah(rangkamasdar + "ٌ");
     masdar[2-1].innerHTML = gantihamzah(rangkamasdar + "َانِ");
     masdar[3-1].innerHTML = gantihamzah(rangkamasdar + "ُوْنَ");
     masdar[4-1].innerHTML = gantihamzah(rangkamasdar + "َةٌ");
     masdar[5-1].innerHTML = gantihamzah(rangkamasdar + "َتَانِ");
     masdar[6-1].innerHTML = gantihamzah(rangkamasdar + "َاتٌ");
     
     makan[1-1].innerHTML = gantihamzah(rangkamakan + "ٌ");
     makan[2-1].innerHTML = gantihamzah(rangkamakan + "َانِ");
     makan[3-1].innerHTML = gantihamzah(rangkamakan + "ُوْنَ");
     makan[4-1].innerHTML = gantihamzah(rangkamakan + "َةٌ");
     makan[5-1].innerHTML = gantihamzah(rangkamakan + "َتَانِ");
     makan[6-1].innerHTML = gantihamzah(rangkamakan + "َاتٌ");
 
     if (wazan[0] === "uu" || wazan[0] === "uumzfa" || wazan[0] === "uumzlam" || wazan[0] === "uumzain" || wazan[0] === "ii" || wazan[0] === "iimzfa" || wazan[0] === "iimzlam" || wazan[0] === "iimzain" || wazan[0] === "ia" || wazan[0] === "iamzfa" || wazan[0] === "iamzlam" || wazan[0] === "iamzain") {
         for(let i = 0; i< alat.length; i++) {
             alat[i].innerHTML = "---";
         }
     } else {
         alat[1-1].innerHTML = gantihamzah(rangkaalat + "ٌ");
         alat[2-1].innerHTML = gantihamzah(rangkaalat + "َانِ");
         alat[3-1].innerHTML = gantihamzah(rangkaalat + "ُوْنَ");
         alat[4-1].innerHTML = gantihamzah(rangkaalat + "َةٌ");
         alat[5-1].innerHTML = gantihamzah(rangkaalat + "َتَانِ");
         alat[6-1].innerHTML = gantihamzah(rangkaalat + "َاتٌ");
     }
 }


function tampilkanwazan(wazan) {
    tulisanwazan.classList.add("active");
    for(let i = 0; i< wazan.length; i++) {
        if ( wazanau.indexOf(wazan[i]) >=  0 ) {         
            tombolau.classList.add("active");}
        if ( wazanai.indexOf(wazan[i]) >=  0 ) {         
            tombolai.classList.add("active");}
        if ( wazanaa.indexOf(wazan[i]) >=  0 ) {         
            tombolaa.classList.add("active");}
        if ( wazanii.indexOf(wazan[i]) >=  0 ) {         
            tombolii.classList.add("active");}
        if ( wazanuu.indexOf(wazan[i]) >=  0 ) {         
            tomboluu.classList.add("active");}
        if ( wazania.indexOf(wazan[i]) >=  0 ) {         
            tombolia.classList.add("active");} 
    }
    if ( wazanau.indexOf(wazan[i]) >=  0 ) {
        tombolau.classList.add("kepencet");
    } else if ( wazanai.indexOf(wazan[i]) >=  0 ){
        tombolai.classList.add("kepencet");
    } else if ( wazanaa.indexOf(wazan[i]) >=  0 ){
        tombolaa.classList.add("kepencet");
    } else if ( wazanii.indexOf(wazan[i]) >=  0 ){
        tombolii.classList.add("kepencet");
    }else if ( wazanuu.indexOf(wazan[i]) >=  0 ){
        tomboluu.classList.add("kepencet");
    }else if ( wazania.indexOf(wazan[i]) >=  0 ){
        tombolia.classList.add("kepencet");
    return true;
}




}
