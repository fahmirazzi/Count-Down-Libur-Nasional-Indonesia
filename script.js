const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const listHariNasional = [
  {
    nama: "Tahun Baru Masehi 2022",
    tanggal: "1 Jan 2022",
    background: "tahunBaru.jpg",
    font: "white",
  },
  {
    nama: "Tahun Baru Imlek 2573 Kongzil",
    tanggal: "1 Feb 2022",
    background: "imlek.jpg",
  },
  {
    nama: "Isra Mikraj Nabi Muhammad SAW",
    tanggal: "28 Feb 2022",
    background: "IsraMiraj.jpg",
  },
  {
    nama: "Hari Suci Nyepi Tahun Baru Saka 1944",
    tanggal: "3 Mar 2022",
    background: "nyepi.jpg",
  },
  {
    nama: "Wafat Isa Almasih",
    tanggal: "15 Apr 2022",
    background: "wafatIsaAlmasih.jpg",
  },
  {
    nama: "Hari Buruh Internasional",
    tanggal: "1 May 2022",
    background: "buruh.jpg",
  },
  {
    nama: "Hari Raya Idul Fitri 1443 H",
    tanggal: "2 May 2022",
    background: "ramadhan.jpg",
  },
];

// Ganti Hari Libur berdasarkan input dropdown User
function gantiTanggal() {
  let valueDropdown = document.getElementById("inputHari").value;
  let tanggalBaru = listHariNasional[valueDropdown].tanggal;
  let backgroundBaru = listHariNasional[valueDropdown].background;
  let judulBaru = listHariNasional[valueDropdown].nama;

  document.body.style.backgroundImage = "url(images/" + backgroundBaru + ")";
  document.querySelector(".title").innerText = judulBaru;
  return tanggalBaru;
}

// isi Dropdown List
let isiDropdown = document.getElementById("inputHari");
for (var i = 0; i < listHariNasional.length; i++) {
  var opt = listHariNasional[i].nama;
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = i;
  isiDropdown.appendChild(el);
}

//menghitung Waktu sesuai input tanggal
function countdown() {
  const tanggalLibur = new Date(gantiTanggal());
  const hariIni = new Date();

  const jumlahDetik = (tanggalLibur - hariIni) / 1000;

  const hari = Math.floor(jumlahDetik / 3600 / 24);
  const jam = Math.floor(jumlahDetik / 3600) % 24;
  const menit = Math.floor(jumlahDetik / 60) % 60;
  const detik = Math.floor(jumlahDetik) % 60;

  daysEl.innerHTML = hari;
  hoursEl.innerHTML = formatWaktu(jam);
  minsEl.innerHTML = formatWaktu(menit);
  secondsEl.innerHTML = formatWaktu(detik);
}

//tambah Nol didepan angka jika kurang dari 10
function formatWaktu(waktu) {
  if (waktu < 10) {
    formatJadi = "0" + waktu;
    return formatJadi;
  }
  return waktu;
}

countdown();

setInterval(countdown, 1000);
