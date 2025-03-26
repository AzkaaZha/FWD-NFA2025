import { data } from "./data.mjs";

// Fungsi untuk melihat semua data
export function tampilkanData() {
    const tableBody = document.getElementById("data-table-body");
    tableBody.innerHTML = "";

    data.map((item, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.umur}</td>
            <td>${item.alamat}</td>
            <td>${item.email}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="hapusData('${item.nama}')">Hapus</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
// Fungsi untuk menambah data
export function tambahData(nama, umur, alamat, email) {
    data.push({ nama, umur, alamat, email });
    tampilkanData();
}

// Fungsi untuk menghapus data berdasarkan nama
export function hapusData(nama) {
    const index = data.findIndex(item => item.nama === nama);
    if (index !== -1) {
        data.splice(index, 1);
        tampilkanData();
    }
}

// Ekspor fungsi agar bisa dipakai di `index.html`
window.tambahData = tambahData;
window.hapusData = hapusData;
window.tampilkanData = tampilkanData;
