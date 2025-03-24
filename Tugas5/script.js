// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Smartwatch", harga: 2000000 },
    { id: 5, nama: "Mouse", harga: 300000 }
];

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    const tbody = document.getElementById("produk-list");
    tbody.innerHTML = ""; // Kosongkan sebelum diisi ulang

    produkList.forEach(({ id, nama, harga }) => {
        let row = `<tr>
            <td>${id}</td>
            <td>${nama}</td>
            <td>Rp${harga.toLocaleString()}</td>
            <td><button class="btn btn-danger btn-sm" onclick="hapusProduk(${id})">Hapus</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// **Menambahkan Produk dengan Spread Operator**
document.getElementById("form-produk").addEventListener("submit", function (e) {
    e.preventDefault();

    let nama = document.getElementById("nama-produk").value;
    let harga = document.getElementById("harga-produk").value;

    if (nama && harga) {
        let idBaru = produkList.length ? produkList[produkList.length - 1].id + 1 : 1;
        produkList = [...produkList, { id: idBaru, nama, harga: parseInt(harga) }];
        tampilkanProduk();
        this.reset();
    }
});

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...idProduk) {
    produkList = produkList.filter(produk => !idProduk.includes(produk.id));
    tampilkanProduk();
}

// **Menampilkan Data Saat Halaman Dimuat**
document.addEventListener("DOMContentLoaded", tampilkanProduk);
