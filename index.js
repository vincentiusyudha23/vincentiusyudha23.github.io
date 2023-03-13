

var player = null;
// Event listener untuk tombol Play
document.getElementById("play").addEventListener("click", function () {
    var selectedSong = document.getElementById("lagu").value;
    if (player !== null) {
        // Jika player sudah ada, stop dan hapus
        player.stop();
        player.unload();
    }
    // Buat player baru untuk memutar lagu
    player = new Howl({
        src: [selectedSong]
    });
    player.play();
});

// Event listener untuk tombol Pause
document.getElementById("pause").addEventListener("click", function () {
    if (player !== null) {
        player.pause();
    }
});

function updatewaktu() {
    var DateNow = new Date();
    var hour = DateNow.getHours();
    var minute = DateNow.getMinutes();
    var second = DateNow.getSeconds();
    var day = DateNow.getDay();
    var date = DateNow.getDate();
    var month = DateNow.getMonth();
    var year = DateNow.getFullYear();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    var timer = hour + ':' + minute + ':' + second;

    if (day == 0) {
        day = "Minggu";
    }
    if (day == 1) {
        day = "Senin";
    }
    if (day == 2) {
        day = "Selasa";
    }
    if (day == 3) {
        day = "Rabu";
    }
    if (day == 4) {
        day = "Kamis";
    }
    if (day == 5) {
        day = "Jum'at";
    }
    if (day == 6) {
        day = "Sabtu";
    }

    if (month < 10) {
        month = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }

    document.getElementById('time').innerHTML = timer;
    document.getElementById('days').innerHTML = day + ',';
    document.getElementById('datetoday').innerHTML = date + '-' + month + '-' + year;

}
setInterval(updatewaktu, 1000);

let inputtext = prompt("Kata-kata untuk Dia!");
let text = " ";


if (inputtext == "cecil") {
    text = "I Love You"
    let text2 = "But, I Know, You Love Him!"
    let index = 0;
    function type() {
        document.getElementById("typingtext").textContent += text[index];
        index++;
        if (index == text.length) {
            clearInterval(typingInterval);
        }
    }
    let index2 = 0
    function type2() {
        document.getElementById("typingtext2").textContent += text2[index2];
        index2++;
        if (index2 == text2.length) {
            clearInterval(typingInterval2);
        }
    }
} else {
    text = inputtext;
    let index = 0;
    function type() {
        document.getElementById("typingtext").textContent += text[index];
        index++;
        if (index == text.length) {
            clearInterval(typingInterval);
        }
    }
}
let index3 = 0;
let text3 = "Jangan khawatir, meskipun saat ini rasanya dunia telah runtuh, namun perlahan-lahan kamu akan sembuh. Ingatlah bahwa rasa sakit ini akan hilang dengan waktu, dan kamu akan kembali bahagia."
const typingText = document.getElementById('typingtext3');
function type3() {
    typingText.innerHTML += text3[index3];
    index3++;

    if (index3 == text3.length) {
        return;
    }
    // const nextCharIndex = index3 + 20;
    // if (nextCharIndex < text3.length && text3[nextCharIndex] != " ") {
    //     typingText.innerHTML += "<br>";
    // }

    setTimeout(type3, 50);
}
type3();
const typingInterval = setInterval(type, 100);
const typingInterval2 = setInterval(type2, 100);
// const typingInterval3 = setInterval(type3, 100);
