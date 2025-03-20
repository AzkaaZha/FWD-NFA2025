class Pelanggan {
    constructor(nama_pelanggan, no_hp, KendaraanDisewa) {
        this.nama_pelanggan = nama_pelanggan;
        this.no_hp = no_hp;
        this.KendaraanDisewa = KendaraanDisewa;
    }
}

class ManajemenTransportasi {
    constructor() {
        this.pelanggan = [];
    }

    sewaKendaraan(nama_pelanggan, no_hp, KendaraanDisewa) {
        const pelangganBaru = new Pelanggan(nama_pelanggan, no_hp, KendaraanDisewa);
        this.pelanggan.push(pelangganBaru);
        this.tampilkanPelanggan();
    }

    tampilkanPelanggan() {
        let tabel = document.getElementById("daftar_penyewa");
        tabel.innerHTML = "";

        this.pelanggan.forEach((pelanggan, index) => {
            let row = tabel.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${pelanggan.nama_pelanggan}</td>
                <td>${pelanggan.no_hp}</td>
                <td>${pelanggan.KendaraanDisewa}</td>
            `;
        });
    }
}

const manajemenTransportasi = new ManajemenTransportasi();

function sewaKendaraan() {
    let nama_pelanggan = document.getElementById("nama_pelanggan").value;
    let no_hp = document.getElementById("no_hp").value;
    let KendaraanDisewa = document.getElementById("KendaraanDisewa").value;

    if (!nama_pelanggan || !no_hp || !KendaraanDisewa) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    manajemenTransportasi.sewaKendaraan(nama_pelanggan, no_hp, KendaraanDisewa);

    document.getElementById("nama_pelanggan").value = "";
    document.getElementById("no_hp").value = "";
}