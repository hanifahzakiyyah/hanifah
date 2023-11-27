const tombol = document.querySelector("button");
const inpu = document.querySelector("input");
const tambobj = {
    ه : "هُوَ",
    هما : "هُما",
    هم : "هُم",
    ها : "هِيَ",
    هما : "هُمَا",
    هنّ : "هُنَّ", 
    ك : "أَنْتَ",
    كما : "أَنْتُمَا",
    كم: "أَنْتُمْ",
    ك :  "أَنْتِ",
    كما : "أَنْتُمَا",
    كنّ : "أَنْتُنَّ",
    ي : "أَنَا",
    نا : "نَحْنُ"
}
let adaobject;
function jalankan(isi) {
    if(isi.length){
       // pokoknya ini ngeloop obj diatas
        adaobject = true;
        alert(isi.replace(/تما/, ""))
    }

    inpu.value = "";
}
tombol.addEventListener("click", () => {
    const isi = inpu.value;
    jalankan(isi);
});
document.addEventListener("keypress", (e)=> {
    if(e.keyCode === 13) {
        const isi = inpu.value;
        jalankan(isi);
    }
})

