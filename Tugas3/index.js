let produkToko = [
    { id: 1, nama_produk: "Laptop", harga_produk: 7000000, stok_produk: 5 },
    { id: 2, nama_produk: "Mouse", harga_produk: 200000, stok_produk: 10 },
    { id: 3, nama_produk: "Keyboard", harga_produk: 350000, stok_produk: 7 }
];

// Fungsi menampilkan daftar produk
function tampilkanProduk() {
    let tabel = document.getElementById("daftar_produk");
    tabel.innerHTML = "";
    
    produkToko.forEach((produk, index) => {
        let row = `
            <tr>
                <td>${produk.id}</td>
                <td>${produk.nama_produk}</td>
                <td>Rp${produk.harga_produk.toLocaleString()}</td>
                <td>${produk.stok_produk}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="hapusProduk(${produk.id})">Hapus</button>
                </td>
            </tr>
        `;
        tabel.innerHTML += row;
    });
}

// Fungsi menambah produk baru
function tambahProduk() {
    let nama_produk = document.getElementById("nama_produk").value;
    let harga_produk = parseInt(document.getElementById("harga_produk").value);
    let stok_produk = parseInt(document.getElementById("stok_produk").value);

    if (!nama_produk || isNaN(harga_produk) || isNaN(stok_produk) || harga_produk <= 0 || stok_produk <= 0) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama_produk, harga_produk, stok_produk });

    tampilkanProduk();
    document.getElementById("nama_produk").value = "";
    document.getElementById("harga_produk").value = "";
    document.getElementById("stok_produk").value = "";
}

function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    tampilkanProduk();
}

document.addEventListener("DOMContentLoaded", tampilkanProduk);
