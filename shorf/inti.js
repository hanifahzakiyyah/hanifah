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
function kalimathasil(type, masuk, rangkaMadi) {
    let katdas = ""
    if (typeof(rangkaMadi) === "string") {
        katdas = rangkaMadi;
    } else {
        katdas = rangkaMadi[0];
    }

    if (bahasa == "ind") {
        if (typeof(type) == 'string') {
            return "anda memasukkan kata = " + masuk + ".<br> yang merupakan " + type + ". <br>dan kata dasar (fill madhi) nya adalah \" " + katdas + "َ \"."
        }else {
            return "anda memasukkan kata = " + masuk + ".<br> yang punya dua kemungkinan. <br>bisajadi " + type[0] + "<br>atau " + type[1] + ". <br>kata dasarnya adalah \" "+ katdas +"َ \" ";
        }
    } else {
        if (typeof(type) == 'string') {
            return "the word you have entered = " + masuk + ".<br> and it is " + type + ".<br>it root word is \" " + katdas + "َ \"."
        }else {  
            return "the word you have entered = " + masuk + ".<br> and it is have two possibility. <br>it can be " + type[0] + "<br>or " + type[1] + ". <br>and it root word is \" "+ katdas +"َ \" ";
        }
    }
    
};



//percobaan dan debugging
madhi[0].addEventListener("click", ()=>{
    //user entering
    const masuk = prompt(kalimatpromp());

    // //hilangkan harokat
    const lepasHarokat = masuk.replace(/[َُِْ]/g,"").replace(/[ئءؤ]/, "أ");
  
    
    let katadasar;
    let type;
      //fiil nahi 
    if (masuk[0] == "ل" && lepasHarokat[2] == " ") {
        if (lepasHarokat[5] == "ّ") { // la tamudda
            const ambil = lepasHarokat.split(" ")[1];
            katadasar = ambil.slice(1, 3) + "ّ";
            type = "fi'il nahiy";
        } else if (lepasHarokat[5] === lepasHarokat[6]) { //laa tamdudna
            const ambil = lepasHarokat.split(" ")[1];
            katadasar = ambil.slice(1, 3) + "ّ";
            type = "fi'il nahiy untuk dhomir أنتنّ";
        } else { // shohih
            const ambil = lepasHarokat.split(" ")[1];
            katadasar = ambil.slice(1, 4);
            type = "fi'il nahiy";
        }
        
        //fiil amr berawalan ا
    } else if (masuk[0] == "ا") {
        if(lepasHarokat.length == 4) {// اكتب
            if(masuk[masuk.length-1] == "ْ") {
                katadasar = lepasHarokat.slice(1, 4);
                type = "fiil amr (kata kerja perintah)";
            } else {
                if(lepasHarokat[3] == "ّ") { // افرّ
                    katadasar = lepasHarokat.slice(1, 4);
                    type = "fi'il mudhori mudhoaf"
                } else {
                    katadasar = lepasHarokat.slice(1, 4);
                    type = ["fiil amr", "fiil mudhori untuk dhomir أنا"];
                }
            }
        } else if(lepasHarokat.length == 5 && lepasHarokat[4] == "ن") { //uktubna umdudna
            if(lepasHarokat[2] == lepasHarokat[3]){
                katadasar = lepasHarokat.slice(1, 3) + "ّ"; // مدّ
                type = "fiil amr untuk dhomir أنتن"
            } else {
                katadasar = lepasHarokat.slice(1, 4);
                type = "fiil amr untuk dhomir أنتن";
            }
        } else {
            katadasar = lepasHarokat.slice(1, 4);
            type = "fiil amr";
        }

        // isim fail 
    } else if (lepasHarokat[1] == "ا" && lepasHarokat[2] != " " &&lepasHarokat.length >=4 && hurufmadhi.indexOf(lepasHarokat[3]) == -1) {
        if(lepasHarokat[3] == "ّ") {// مادّ
            katadasar = lepasHarokat[0] +lepasHarokat[2] + "ّ";
            type = "isim fa'il";
        } else { //shohih
            katadasar = lepasHarokat.replace(/ا/, "").slice(0, 3);
            type = "isim fa'il";
        }
        
        //isim maf'ul = done
    } else if(lepasHarokat[0] =="م" && lepasHarokat[3] == "و" && lepasHarokat.length >= 5 && lepasHarokat[4] !== "ا") {
        if (lepasHarokat[2] == lepasHarokat[4]) { // mamduud
            katadasar = lepasHarokat.replace(/م/, "").replace(/و/, "").slice(0, 2) + "ّ";
            type = "isim maf'ul";
        } else{ //shohih
        katadasar = lepasHarokat.replace(/م/, "").replace(/و/, "").slice(0, 3);
        type = "isim maf'ul";
        }
        
        // huruf mim di depan!!
    } else if (lepasHarokat[0] == "م") {
            // madhi, berawalan mim humaa
        if (lepasHarokat[3] == "ا" && lepasHarokat.length == 4){ 
            if(lepasHarokat[2] == "ّ"){ // mudoaf
                katadasar = lepasHarokat.slice(0, 3);
                type = ["fiil madhi untuk dhomir هما", "fiil amr untuk dhomir أنتما"]        
            } else { //shohih
                katadasar = lepasHarokat.slice(0, 3);
                type = "fiil madhi untuk dhomir هما"    
            }
        // isim alat  مِفعل
        } else if(masuk[1] == "ِ" ) {
            if( lepasHarokat[3] == "ّ") { // mudoaf
                katadasar = lepasHarokat.replace(/م/, "").replace(/ا/, "").slice(0, 3);
                type = "isim alat";
            } else { // shohih
                katadasar = lepasHarokat.replace(/م/, "").replace(/ا/, "").slice(0, 3);
                type = "isim alat";
            }
            // مفعال
        } else if (lepasHarokat[3] == "ا") {
            katadasar = lepasHarokat.replace(/م/, "").replace(/ا/, "").slice(0, 3);
            type = "isim alat";

            //isim makan atau alat berharokat
        } else if(masuk[3] == "ْ" ) {
            katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
            type = ["isim makan atau zaman", "isim alat"];

            // madhi berharokat
        } else if (masuk[3] == "َ") {
            if (lepasHarokat[1] == lepasHarokat[2]) {
                katadasar = lepasHarokat.slice(0, 2)+ "ّ";
                type = "fiil madhi";
            } else {
                katadasar = lepasHarokat.slice(0, 3);
                type = "fiil madhi";
            }

            //fiil madhi yang huruf awalnya mim selain dhomir huwa
        } else if (lepasHarokat[2] != "ّ" && lepasHarokat[1] != lepasHarokat[2]){
            if(hurufmadhi.indexOf(lepasHarokat[3]) >= 0 && lepasHarokat.length == 4){  
                if(confirm("apakah yang anda maksudkan \n adalah " + lepasHarokat[0] + "َ" + lepasHarokat[1] + "ْ" + lepasHarokat[2] + lepasHarokat[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // مسكن
                    katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
                    type = ["isim makan atau zaman", "isim alat"];
                } else { // مسكت 
                    if (confirm("bukan ya,, kalau gitu apakah \n " + lepasHarokat[0] + "َ" + lepasHarokat[1] + "َ" + lepasHarokat[2] + lepasHarokat[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){
                        if (lepasHarokat[1] == lepasHarokat[2]) {
                            katadasar = lepasHarokat.slice(0, 2)+ "ّ";
                            type = "fiil madhi";
                        } else {
                            katadasar = lepasHarokat.slice(0, 3);
                            type = "fiil madhi";
                        }
                    } else {
                        alert("coba masukkan kata, lengkap dengan harokatnya...");
                    }
                }
            } else if (lepasHarokat[4] !== "ا" ) { 
                katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
                type = ["isim makan atau zaman", "isim alat sink iki po yo"];
            } else if(lepasHarokat[4] !== "م") {
                katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
                type = ["isim makan atau zaman", "isim alat sink iki po yo"]
            }
             // isim makan, zaman, alat shohih
        } else if (lepasHarokat.length >= 4 && lepasHarokat[2] != "ّ" && lepasHarokat[1] != lepasHarokat[2]) {
            if (lepasHarokat[4] == "ا") { // منعوا
                if(lepasHarokat[3] == "ّ") { // ممدّان
                    katadasar = lepasHarokat.slice(1, 4);
                    type = ["isim makan atau zaman", "isim alat"]
                } else if(lepasHarokat.length == 6){ // مسجدان
                    katadasar = lepasHarokat.slice(1, 4);
                    type = ["isim makan atau zaman bentuk mutsanna"]
                } else {
                    katadasar = lepasHarokat.slice(0,3);
                    type = "fi'il madhi"
                }
            } else {
            katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
            type = ["isim makan atau zaman", "isim alat senk iki"];
            }
            //isim makan mudoaf ممدّ 
        } else if(lepasHarokat[3] == "ّ") {
            katadasar = lepasHarokat.slice(1, 4);
            type = ["isim makan atau zaman", "isim alat"]
        
            // madhi berawalan mim مدّ مدّوا منعوا 
        } else if (lepasHarokat[3] != "ت") {
            if(lepasHarokat[2] == "ّ"){ // mudoaf
                if(lepasHarokat[3] == "ي") {
                    katadasar = lepasHarokat.slice(0, 3);
                    type = "fi'il amr untuk dhomir أنتِ"
                } else {
                katadasar = lepasHarokat.slice(0, 3);
                type = ["fiil madhi", "fiil amr"];
                }     
            } else { //shohih & مررنا
                if (lepasHarokat[1] == lepasHarokat[2]) {
                    katadasar = lepasHarokat.slice(0, 2) + "ّ";
                    type = "fiil madhi mudhoaf"
                } else {
                    katadasar = lepasHarokat.slice(0, 3);
                    type = "fiil madhi"  
                }    
            }
            // مدّت منعت =======================================================
        } else if (lepasHarokat[3] == "ت") {
            if(lepasHarokat[2] == "ّ"){ // mudoaf
                katadasar = lepasHarokat.slice(0, 3);
                type = "fiil madhi";        
            } else { //shohih & مددت
                if (lepasHarokat[1] == lepasHarokat[2]) {
                    katadasar = lepasHarokat.slice(0, 2) + "ّ";
                    type = "fiil madhi mudhoaf yang inikok bisa piye"
                } else {
                    katadasar = lepasHarokat.slice(0, 3);
                    type = "fiil madhi"  
                }  
            }
        }           

    // farrot dan farrota
    } else if (lepasHarokat.length >= 2 && masuk[2] == "ّ" && lepasHarokat[3] == "ت") {
        katadasar = lepasHarokat[0] + lepasHarokat[1] + "ّ";
        type = "fiil madhi"

        //fiil mudore
    } else if (lepasHarokat.length >= 4 && mudoroah.indexOf(lepasHarokat[0]) >= 0){
        if (hurufmadhi.indexOf(lepasHarokat[3]) >= 0 && lepasHarokat.length == 4) {
            if(confirm("apakah yang anda maksudkan \n adalah " + lepasHarokat[0] + "َ" + lepasHarokat[1] + lepasHarokat[2] + "ْ" + lepasHarokat[3] + "? \ntekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // تعبْت
                if(lepasHarokat[1] == lepasHarokat[2]) {// تممت
                    katadasar = lepasHarokat.slice(0,2) + "ّ"
                    type = "fiil madhi mudho'af"
                } else { // تعبت
                    katadasar = lepasHarokat.slice(0, 3);
                    type = "fiil madhi"
                }
            } else {
                if (confirm("bukan ya,, kalau gitu apakah \n " + lepasHarokat[0] + "َ" + lepasHarokat[1] + "ْ" + lepasHarokat[2] + lepasHarokat[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // تَعْبت
                    katadasar = lepasHarokat.replace(/[يأنات]/, "").slice(0, 3);
                    type = "fi'il mudhori"
                } else {
                    alert("coba masukkan lengkap dengan harokatnya")
                }

            }
        } else if(lepasHarokat[3] == "ّ" || lepasHarokat [2] == lepasHarokat[3]) { // يمدّ
            katadasar = lepasHarokat.replace(/[يأنات]/, "").slice(0, 2) + "ّ";
            type = "fiil mudhori' mudho'af"
        } else { // shohih
            katadasar = lepasHarokat.replace(/[يأنات]/, "").slice(0, 3);
            type = "fiil mudhori' yang ini kah";
        }
    
        //fiil madhi sdh termasuk misal
    } else if(lepasHarokat[1] == lepasHarokat[2]) {
        katadasar = lepasHarokat.slice(0, 2) + "ّ";
        type = "fiil madhi mudoaf";
    } else { // madhi shohih
        katadasar = lepasHarokat.slice(0, 3);
        type = "fiil madhi" 
    } 
    console.log(katadasar);
    console.log(type);
});


//main function
kata.addEventListener("click", mainfunction);

function mainfunction() {

    // //user entering
    // const masuk = prompt(kalimatpromp());

    // // //hilangkan harokat
    // const lepasHarokat = masuk.replace(/[َُِْ]/g,"").replace(/[ئءؤ]/, "أ");
  

    //mengembalikan ke bentuk dasar dan menentukan type
    const {katadasar, type} = tentukankatadasar(lepasHarokat, masuk);
    
    // menentukan wazan 
    let wazan = tentukanwazan(katadasar);
    
    // matikan semua highlight wazan
    for (let i= 0; i< tombolwazan.length; i++) {
        tombolwazan[i].classList.remove("active");
    };
    
    // menyalakan highligttertentu
    tampilkanwazan(wazan);

    // menampilkan menu
    // menu.classList.add("muncul");

    //merangkai shighoh
    const rangka = rangkaisigoh(wazan, katadasar);
    
    const {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat} = rangka;
    
    //menampilkan hasil ke layar
    info.innerHTML = kalimathasil(type, masuk, rangkaMadi);
    

    //memasukkan ke dalam tabel
    masukintabel(rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan);

    // tombol wazan
    for (let j = 0; j < tombolwazan.length; j++) {
        tombolwazan[j].addEventListener("click", () => {
            for (let i = 0; i< wazan.length; i++) {
                if(wazanmudoaf.indexOf(wazan[i]) >= 0) {
                    wazan = [];
                }
            }
            if (wazan.length === 0) {
                wazan.push(tombolwazan[j].attributes.id.value + "mud");
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

    if (auarray.indexOf(k) >= 0) {wazan.push("au");}
    if (aiarray.indexOf(k) >= 0) {wazan.push("ai");}
    if (iaarray.indexOf(k) >= 0) {wazan.push("ia");}
    if (iiarray.indexOf(k) >= 0) {wazan.push("ii");}
    if (aaarray.indexOf(k) >= 0) {wazan.push("aa");}
    if (uuarray.indexOf(k) >= 0) {wazan.push("uu");}
    if (aumahmuzfar.indexOf(k) >= 0) { wazan.push("aumzfa");}
    if (iamahmuzfar.indexOf(k) >= 0) { wazan.push("iamzfa");}
    if (uumahmuzfar.indexOf(k) >= 0) { wazan.push("uumzfa");}
    if (aamahmuzfar.indexOf(k) >= 0) { wazan.push("aamzfa");}
    if (iimahmuzfar.indexOf(k) >= 0) { wazan.push("iimzfa");}
    if (aimahmuzfar.indexOf(k) >= 0) { wazan.push("aimzfa");}
    if (aumahmuzlamr.indexOf(k) >= 0) { wazan.push("aumzlam");} 
    if (iamahmuzlamr.indexOf(k) >= 0) { wazan.push("iamzlam");} 
    if (uumahmuzlamr.indexOf(k) >= 0) { wazan.push("uumzlam");}
    if (iimahmuzlamr.indexOf(k) >= 0) { wazan.push("iimzlam");}
    if (aamahmuzlamr.indexOf(k) >= 0) { wazan.push("aamzlam");}
    if (aimahmuzlamr.indexOf(k) >= 0) { wazan.push("aimzlam");}
    if (aumahmuzainr.indexOf(k) >= 0) { wazan.push("aumzain");}
    if (iamahmuzainr.indexOf(k) >= 0) { wazan.push("iamzain");}
    if (uumahmuzainr.indexOf(k) >= 0) { wazan.push("uumzain");}
    if (iimahmuzainr.indexOf(k) >= 0) { wazan.push("iimzain");}
    if (aamahmuzainr.indexOf(k) >= 0) { wazan.push("aamzain");} 
    if (aimahmuzainr.indexOf(k) >= 0) { wazan.push("aimzain");}
    if (aumudoafr.indexOf(k) >= 0) { wazan.push("aumud");}
    if (iamudoafr.indexOf(k) >= 0) { wazan.push("iamud");}
    if (uumudoafr.indexOf(k) >= 0) { wazan.push("uumud");}
    if (aamudoafr.indexOf(k) >= 0) { wazan.push("aamud");}
    if (iimudoafr.indexOf(k) >= 0) { wazan.push("iimud");}
    if (aimudoafr.indexOf(k) >= 0) { wazan.push("aimud");}
    if (aumisalr.indexOf(k) >= 0) { wazan.push("aumis");}
    if (aimisalr.indexOf(k) >= 0) { wazan.push("aimis");}
    if (uumisalr.indexOf(k) >= 0) { wazan.push("uumis");}
    if (iimisalr.indexOf(k) >= 0) { wazan.push("iimis");}
    if (aamisalr.indexOf(k) >= 0) { wazan.push("aamis");}
    if (iamisalr.indexOf(k) >= 0) { wazan.push("iamis");}
    if (auajwafr.indexOf(k) >= 0) { wazan.push("auaj");}
    if (aiajwafr.indexOf(k) >= 0) { wazan.push("aiaj");}
    if (uuajwafr.indexOf(k) >= 0) { wazan.push("uuaj");}
    if (iiajwafr.indexOf(k) >= 0) { wazan.push("iiaj");}
    if (aaajwafr.indexOf(k) >= 0) { wazan.push("aaaj");}
    if (iaajwafr.indexOf(k) >= 0) { wazan.push("iaaj");}
    if (aunaqisr.indexOf(k) >= 0) { wazan.push("aunaq");}
    if (ainaqisr.indexOf(k) >= 0) { wazan.push("ainaq");}
    if (uunaqisr.indexOf(k) >= 0) { wazan.push("uunaq");}
    if (iinaqisr.indexOf(k) >= 0) { wazan.push("iinaq");}
    if (aanaqisr.indexOf(k) >= 0) { wazan.push("aanaq");}
    if (ianaqisr.indexOf(k) >= 0) { wazan.push("ianaq");}
    if (iamaqrunr.indexOf(k) >= 0) { wazan.push("iamaq");}
    if (aimaqrunr.indexOf(k) >= 0) { wazan.push("aimaq");}
    if (iamafruqr.indexOf(k) >= 0) { wazan.push("iamaf");}
    if (aimafruqr.indexOf(k) >= 0) { wazan.push("aimaf");}
    if (iimafruqr.indexOf(k) >= 0) { wazan.push("iimaf");}
    if(wazan.length == 0){alert(kalimatalert())};
    return wazan;
}

function tentukankatadasar(lepasHarokat, masuk) {
//     let katadasar;
//     let type;
//       //fiil nahi 
//     if (masuk[0] == "ل" && lepasHarokat[2] == " ") {
//         if (lepasHarokat[5] == "ّ") { // la tamudda
//             const ambil = lepasHarokat.split(" ")[1];
//             katadasar = ambil.slice(1, 3) + "ّ";
//             type = "fi'il nahiy";
//         } else if (lepasHarokat[5] === lepasHarokat[6]) { //laa tamdudna
//             const ambil = lepasHarokat.split(" ")[1];
//             katadasar = ambil.slice(1, 3) + "ّ";
//             type = "fi'il nahiy untuk dhomir أنتنّ";
//         } else { // shohih
//             const ambil = lepasHarokat.split(" ")[1];
//             katadasar = ambil.slice(1, 4);
//             type = "fi'il nahiy";
//         }
        
//         //fiil amr berawalan ا
//     } else if (masuk[0] == "ا") {
//         if(lepasHarokat.length == 4) {// اكتب
//             if(masuk[masuk.length-1] == "ْ") {
//                 katadasar = lepasHarokat.slice(1, 4);
//                 type = "fiil amr (kata kerja perintah)";
//             } else {
//                 katadasar = lepasHarokat.slice(1, 4);
//                 type = ["fiil amr", "fiil mudhori untuk dhomir أنا"];
//             }
//         } else if(lepasHarokat.length == 5 && lepasHarokat[4] == "ن") { //uktubna umdudna
//             if(lepasHarokat[2] == lepasHarokat[3]){
//                 katadasar = lepasHarokat.slice(1, 3) + "ّ"; // مدّ
//                 type = "fiil amr untuk dhomir أنتن"
//             } else {
//                 katadasar = lepasHarokat.slice(1, 4);
//                 type = "fiil amr untuk dhomir أنتن";
//             }
//         } else {
//             katadasar = lepasHarokat.slice(1, 4);
//             type = "fiil amr";
//         }

//         // isim fail 
//     } else if (lepasHarokat[1] == "ا" && lepasHarokat[2] != " " &&lepasHarokat.length >=4) {
//         if(lepasHarokat[3] == "ّ") {// مادّ
//             katadasar = lepasHarokat[0] +lepasHarokat[2] + "ّ";
//             type = "isim fa'il";
//         } else { //shohih
//             katadasar = lepasHarokat.replace(/ا/, "").slice(0, 3);
//             type = "isim fa'il";
//         }
        
//         //isim maf'ul = done
//     } else if(lepasHarokat[0] =="م" && lepasHarokat[3] == "و" && lepasHarokat.length >= 5 && lepasHarokat[4] !== "ا") {
//         if (lepasHarokat[2] == lepasHarokat[4]) { // mamduud
//             katadasar = lepasHarokat.replace(/م/, "").replace(/و/, "").slice(0, 2) + "ّ";
//             type = "isim maf'ul";
//         } else{ //shohih
//         katadasar = lepasHarokat.replace(/م/, "").replace(/و/, "").slice(0, 3);
//         type = "isim maf'ul";
//         }
// // ===========================================================================================
//         // 
//             //مسكا 
//     } else if (lepasHarokat[0] == "م" && lepasHarokat[3] == "ا" && lepasHarokat[4] == undefined){ 
//         katadasar = lepasHarokat.slice(0, 3);
//         type = "fiil madhi untuk dhomir هما"    

//     // farrot dan farrota
//     } else if (lepasHarokat.length >= 2 && masuk[2] == "ّ" && lepasHarokat[3] == "ت") {
//         katadasar = lepasHarokat[0] + lepasHarokat[1] + "ّ";
//         type = "fiil madhi"

//     // مُدَّ 
//     } else if (lepasHarokat.length >= 2 && masuk[2] == "ّ") {
//         katadasar = lepasHarokat[0] + lepasHarokat[1] + "ّ";
//         type = ["fiil amr", "fiil madhi"];
    
//         // isim alat مفعال
//     } else if ((lepasHarokat[0] == "م" && lepasHarokat[3] == "ا") || (lepasHarokat[0] == "م" && lepasHarokat[3] != "و" && masuk[1] == "ِ" )) {
//         if( lepasHarokat[2] == lepasHarokat[4]) {
//             katadasar = lepasHarokat.replace(/م/, "").replace(/ا/, "").slice(0, 2) + "ّ";
//             type = "isim alat";
//         } else {
//             katadasar = lepasHarokat.replace(/م/, "").replace(/ا/, "").slice(0, 3);
//             type = "isim alat";
//         }

//         // isim makan harokat 
//     } else if (lepasHarokat[0] == "م" && masuk[3] == "ْ") {
//         katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
//         type = ["isim makan atau zaman", "isim alat"];
             
//         //isim makan mudoaf ممدّ 
//     } else if(lepasHarokat[0] == "م" && lepasHarokat[3] == "ّ") {
//         katadasar = lepasHarokat.slice(1, 4);
//         type = ["isim makan atau zaman", "isim alat"]

//         //fiil madhi yang huruf awalnya mim selain dhomir huwa
//     } else if (lepasHarokat[0] == "م" && lepasHarokat[3] != "و" && lepasHarokat[3] != undefined){
//         if(lepasHarokat[3] === "ا" || lepasHarokat[3] === "و" || lepasHarokat[3] === "ت" || lepasHarokat[3] === "ن"){
//             if(confirm("apakah yang anda maksudkan \n adalah " + lepasHarokat[0] + "َ" + lepasHarokat[1] + "ْ" + lepasHarokat[2] + lepasHarokat[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){ // مسكن
//                 katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
//                 type = ["isim makan atau zaman", "isim alat"];
//             } else { // مسكوا
//                 if (confirm("bukan ya,, kalau gitu apakah \n " + lepasHarokat[0] + "َ" + lepasHarokat[1] + "َ" + lepasHarokat[2] + lepasHarokat[3] + "? \n tekan 'ok' jika iya, \ndan tekan 'cancel' jika bukan")){
//                     if (lepasHarokat[1] == lepasHarokat[2]) {
//                         katadasar = lepasHarokat.slice(0, 2)+ "ّ";
//                         type = "fiil madhi";
//                     } else {
//                         katadasar = lepasHarokat.slice(0, 3);
//                         type = "fiil madhi";
//                     }
//                 } else {
//                     alert("coba masukkan kata, lengkap dengan harokatnya...");
//                 }
//             }
//         } else {
//             katadasar = lepasHarokat.replace(/م/, "").slice(0, 3);
//             type = ["isim makan atau zaman", "isim alat"];
//         } 

//         // isim makan zaman alat // belum utk mudoaf soalnya gatau utk apa
//     } else if (lepasHarokat[0] == "م" && lepasHarokat[3] == "ا" && lepasHarokat[3] != undefined) {
//         katadasar = lepasHarokat.replace(/م/, "").replace(/ا/, "").slice(0, 3);
//         type = "isim alat";

//         //fiil mudore = done
//     } else if (lepasHarokat.length >= 4 && mudoroah.indexOf(lepasHarokat[0]) >= 0){
//         if(lepasHarokat[3] == "ّ" || lepasHarokat [2] == lepasHarokat[3]) {
//             katadasar = lepasHarokat.replace(/[يأنات]/, "").slice(0, 2) + "ّ";
//             type = "fiil mudhori'"
//         } else {
//         katadasar = lepasHarokat.replace(/[يأنات]/, "").slice(0, 3);
//         type = "fiil mudhori' ( kata kerja sedang berlangsung atau akan datang )";
//         }

//         //fiil madhi
//     } else if(lepasHarokat[1] == lepasHarokat[2]) {
//         katadasar = lepasHarokat.slice(0, 2) + "ّ";
//         type = "fiil madhi mudoaf";
//     } else { // madhi yg laen
//         katadasar = lepasHarokat.slice(0, 3);
//         type = "fiil madhi" 
//     } 
   console.log(katadasar);
   console.log(type);
    return {katadasar, type};
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
    return true;
}

function rangkaisigoh(wazan, katadasar) {

      //deklarasi constan rangka
      let rangkaMadi; let rangkaMudore; let rangkaAmr; let rangkaNahi; let rangkaFail; let rangkaMaful; let rangkamamaj; let rangkamumaj; let rangkamasdar; let rangkamakan; let rangkaalat;

  for (let i = 0; i< wazan.length; i++) {
    if (wazan[i] === "au" || wazan[i] === "aumzfa" || wazan[i] === "aumzlam" || wazan[i] === "aumzain") {
        rangkaMadi = katadasar[0] + "َ" + katadasar[1] + "َ" + katadasar[2];
        rangkaMudore = katadasar[0] + "ْ" + katadasar[1] + "ُ" + katadasar[2];
        rangkaAmr = "اُ" + katadasar[0] + "ْ" + katadasar[1] + "ُ" + katadasar[2];
        rangkaNahi = "لَا تَ" + katadasar[0] +  "ْ" + katadasar[1] + "ُ" + katadasar[2];
        rangkaFail = katadasar[0] + "َا" + katadasar[1] + "ِ" + katadasar[2];
        rangkaMaful = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ُوْ" + katadasar[2];
        rangkamamaj = katadasar[0] + "ُ" + katadasar[1] + "ِ" + katadasar[2];
        rangkamumaj = "ُ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkamasdar;
            if(katadasar === ("خرج") || ("حضر") || ("دخل")) {
                rangkamasdar = katadasar[0] + "ُ" + katadasar[1] + "ُوْ" + katadasar[2];
            } else {
                rangkamasdar = katadasar[0] + "َ" + katadasar[1] + "ْ" + katadasar[2];
            }
        rangkamakan = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkaalat = "مِ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "ai" || wazan[i] === "aimzfa" || wazan[i] === "aimzlam" || wazan[i] === "aimzain") {
        rangkaMadi = katadasar[0] + "َ" + katadasar[1] + "َ" + katadasar[2];
        rangkaMudore = katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[2];
        rangkaAmr = "اِ" + katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[2];
        rangkaNahi = "لَا تَ" + katadasar[0] +  "ْ" + katadasar[1] + "ِ" + katadasar[2];
        rangkaFail = katadasar[0] + "َا" + katadasar[1] + "ِ" + katadasar[2];
        rangkaMaful = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ُوْ" + katadasar[2];
        rangkamamaj = katadasar[0] + "ُ" + katadasar[1] + "ِ" + katadasar[2];
        rangkamumaj = "ُ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkamasdar = katadasar[0] + "َ" + katadasar[1] + "ْ" + katadasar[2];
        rangkamakan = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[2];
        rangkaalat = "مِ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if(wazan[i] === "ia" || wazan[i] === "iamzfa" || wazan[i] === "iamzlam" || wazan[i] === "iamzain") {
        rangkaMadi = katadasar[0] + "َ" + katadasar[1] + "ِ" + katadasar[2];
        rangkaMudore = katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkaAmr = "اِ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkaNahi = "لَا تَ" + katadasar[0] +  "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkaFail = katadasar[0] + "َا" + katadasar[1] + "ِ" + katadasar[2];
        rangkaMaful = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ُوْ" + katadasar[2];
        rangkamamaj = katadasar[0] + "ُ" + katadasar[1] + "ِ" + katadasar[2];
        rangkamumaj = "ُ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkamasdar = katadasar[0] + "َ" + katadasar[1] + "ْ" + katadasar[2];
        rangkamakan = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "ii" || wazan[i] === "iimzfa" || wazan[i] === "iimzlam" || wazan[i] === "iimzain") {
            rangkaMadi = katadasar[0] + "َ" + katadasar[1] + "ِ" + katadasar[2];
            rangkaMudore = katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[2];
            rangkaAmr = "اِ" + katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[2];
            rangkaNahi = "لَا تَ" + katadasar[0] +  "ْ" + katadasar[1] + "ِ" + katadasar[2];
            rangkaFail = katadasar[0] + "َا" + katadasar[1] + "ِ" + katadasar[2];
            rangkaMaful = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ُوْ" + katadasar[2];
            rangkamamaj = katadasar[0] + "ُ" + katadasar[1] + "ِ" + katadasar[2];
        rangkamumaj = "ُ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkamasdar = katadasar[0] + "ُ" + katadasar[1] + "ْ" + katadasar[2] + "َان";
        rangkamakan = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "aa" || wazan[i] === "aamzfa" || wazan[i] === "aamzlam" || wazan[i] === "aamzain") {
            rangkaMadi = katadasar[0] + "َ" + katadasar[1] + "َ" + katadasar[2];
            rangkaMudore = katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
            rangkaAmr = "اِ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
            rangkaNahi = "لَا تَ" + katadasar[0] +  "ْ" + katadasar[1] + "َ" + katadasar[2];
            rangkaFail = katadasar[0] + "َا" + katadasar[1] + "ِ" + katadasar[2];
            rangkaMaful = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ُوْ" + katadasar[2];
            rangkamamaj = katadasar[0] + "ُ" + katadasar[1] + "ِ" + katadasar[2];
        rangkamumaj = "ُ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkamasdar = katadasar[0] + "َ" + katadasar[1] + "ْ" + katadasar[2];
        rangkamakan = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkaalat = "مِ" + katadasar[0] + "ْ" + katadasar[1] + "َا" + katadasar[2]
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
    } else if (wazan[i] === "uu" || wazan[i] === "uumzfa" || wazan[i] === "uumzlam" || wazan[i] === "uumzain") {
        rangkaMadi = katadasar[0] + "َ" + katadasar[1] + "ُ" + katadasar[2];
        rangkaMudore = katadasar[0] + "ْ" + katadasar[1] + "ُ" + katadasar[2];
        rangkaAmr = "اُ" + katadasar[0] + "ْ" + katadasar[1] + "ُ" + katadasar[2];
        rangkaNahi = "لَا تَ" + katadasar[0] +  "َ" + katadasar[1] + "ُ" + katadasar[2];
        rangkaFail;
            if (hasanray.indexOf(katadasar) >= 0) {
                rangkaFail = katadasar[0] + "َ" + katadasar[1] + "َ" + katadasar[2]; //حَسَنٌ
            }else if (baidray.indexOf(katadasar) >=0) {
                rangkaFail = katadasar[0] + "َ" + katadasar[1] + "ِيْ" + katadasar[2];//بَعِيْدٌ
            }else if (sahlray.indexOf(katadasar) >=0) {
                rangkaFail = katadasar[0] + "َ" + katadasar[1] + "ْ" + katadasar[2]//ضَخْمٌ
            } else if (jildray.indexOf(katadasar)>=0){
                rangkaFail = katadasar[0] + "ِ" + katadasar[1] + "ْ" + katadasar[2];// جلد
            // }else if (junub.window(katadasar)>0){
            //     rangkaFail = katadasar[0] + "ُ" + katadasar[1] + "ُ" + katadasar[2]//جُنُبٌ
            }else if (sujaray.indexOf(katadasar)>=0){
                rangkaFail = katadasar[0] + "ُ" + katadasar[1] + "َا" + katadasar[2];//شجاع
            }else if (jabanray.indexOf(katadasar)>=0){
                rangkaFail = katadasar[0] + "َ" + katadasar[1] + "َا" + katadasar[2];//شجاع
            }else {
                rangkaFail = katadasar[0] + "َا" + katadasar[1] + "ِ" + katadasar[2];
            }
        rangkaMaful = "";
        rangkamamaj = katadasar[0] + "ُ" + katadasar[1] + "ِ" + katadasar[2];
        rangkamumaj = "ُ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkamasdar;
            if (katadasar == "ضخم" || katadasar == "جبن" || katadasar == "شجع" || katadasar == "جنب"){
                rangkamasdar = katadasar[0] + "َ" + katadasar[1] + "َا" + katadasar[2] + ""
            } else {
                rangkamasdar = katadasar[0] + "ُ" + katadasar[1] + "ْ" + katadasar[2];
            }
        rangkamakan = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[2];
        rangkaalat = ""
        return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};

        } else if(wazanmudoaf.indexOf(wazan[0]) >= 0) { //masuk mudoaf apapun wazanenam nya
            
            if(wazan[i] === "aumud" || wazan[i] === "uumud") {
                rangkaMudore = [
                    (katadasar[0] + "ُ" + katadasar[1] + "ّ"),
                    (katadasar[0] + "ْ" + katadasar[1] + "ُ" + katadasar[1])
                ]
                rangkaAmr = [
                    katadasar[0] + "ُ" + katadasar[1] + katadasar[2], //مدّ
                    "ا" + katadasar[0] + "ْ" + katadasar[1] + "ُ" + katadasar[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + katadasar[0] +  "ُ" + katadasar[1] + katadasar[2],
                    "لَا تَ" + katadasar[0] +  "ْ" + katadasar[1] + "ُ" + katadasar[1]
                ];
                rangkamakan = "مَ" + katadasar[0] + "َ" + katadasar[1] + "ّ";
            } else if (wazan[i] === "iamud" || wazan[i] === "aamud"){
                rangkaMudore = [
                    (katadasar[0] + "َ" + katadasar[1] + "ّ"),
                    (katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[1])
                ]
                rangkaAmr = [
                    katadasar[0] + "َ" + katadasar[1] + katadasar[2], //عض
                    "ا" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + katadasar[0] +  "َ" + katadasar[1] + katadasar[2],
                    "لَا تَ" + katadasar[0] +  "ُ" + katadasar[1] + "َ" + katadasar[1]
                ];
                rangkamakan = "مَ" + katadasar[0] + "َ" + katadasar[1] + "ّ"
            } else {
                rangkaMudore = [
                    (katadasar[0] + "ِ" + katadasar[1] + "ّ"),
                    (katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[1])
                ]
                rangkaAmr = [
                    katadasar[0] + "ِ" + katadasar[1] + katadasar[2],
                    "ا" + katadasar[0] + "ْ" + katadasar[1] + "ِ" + katadasar[1]
                ];
                rangkaNahi = [
                    "لَا تَ" + katadasar[0] +  "ِ" + katadasar[1] + katadasar[2],
                    "لَا تَ" + katadasar[0] +  "ُ" + katadasar[1] + "ِ" + katadasar[1]
                ];
                rangkamakan = "مَ" + katadasar[0] + "ِ" + katadasar[1] + "ّ";
            };

            rangkaMadi = [
                (katadasar[0] + "َ" + katadasar[1] + "ّ"), 
                (katadasar[0] + "َ" + katadasar[1] + "َ" + katadasar[1])
            ];
            rangkamamaj = [
                (katadasar[0] + "ُ" + katadasar[1] + "ّ"), 
                (katadasar[0] + "ُ" + katadasar[1] + "ِ" + katadasar[1])
            ];
            rangkamumaj = [
                ("ُ" + katadasar[0] + "َ" + katadasar[1] + "ّ"),
                ("ُ" + katadasar[0] + "ْ" + katadasar[1] + "َ" + katadasar[1])
            ]
            rangkaFail = katadasar[0] + "َآ" + katadasar[1] + katadasar[2];
            rangkaMaful = "مَ" + katadasar[0] + "ْ" + katadasar[1] + "ُوْ" + katadasar[1];
            rangkamasdar = katadasar[0] + "َ" + katadasar[1] + "ّ";
            rangkaalat = "مِ" + katadasar[0] + "َ" + katadasar[1] + "ّ";
            return {rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat};
        };
  } // endfor

  
}// endfunction

function masukintabel(rangkaMadi, rangkaMudore, rangkaAmr, rangkaNahi, rangkaFail, rangkaMaful, rangkamamaj, rangkamumaj, rangkamasdar, rangkamakan, rangkaalat, wazan) {
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
