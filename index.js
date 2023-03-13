
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

const text = "I Love You,";
const text2 = "But I Know You Love Him.";

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

const typingInterval = setInterval(type, 100);
const typingInterval2 = setInterval(type2, 100);
