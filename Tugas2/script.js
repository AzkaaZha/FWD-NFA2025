// Data Pegawai
const pegawaiList = [
    {
        nama : "Usman",
        umur : 25,
        jabatan : "Manajer",
        status : "Menikah",
    },
    {
        nama : "Asep",
        umur : 30,
        jabatan : "Asisten Manajer",
        status : "Menikah",
    },
    {
        nama : "Siti",
        umur : 22,
        jabatan : "Staf",
        status : "Belum Menikah",
    },
]
    
function hitungGaji(jabatan) {
    if (jabatan === "Manajer") return 15000000;
    if (jabatan === "Asisten Manajer") return 10000000;
    if (jabatan === "Staf") return 5000000;
    return 0;
}

const tbody = document.getElementById("data-pegawai");
let totalGajiKeseluruhan = 0;

pegawaiList.forEach(pegawai => {
    const gajiPokok = hitungGaji(pegawai.jabatan);
    const tunjanganJabatan = 0.15 * gajiPokok;
    const bpjs = 0.10 * gajiPokok;
    const tunjanganKeluarga = pegawai.status === "Menikah" ? 0.20 * gajiPokok : 0;
    const totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    tbody.innerHTML += `
    <tr>
        <td>${pegawai.nama}</td>
        <td>${pegawai.umur}</td>
        <td>${pegawai.jabatan}</td>
        <td>${pegawai.status}</td>
        <td>Rp ${gajiPokok.toLocaleString()}</td>
        <td>Rp ${tunjanganJabatan.toLocaleString()}</td>
        <td>Rp ${bpjs.toLocaleString()}</td>
        <td>Rp ${tunjanganKeluarga.toLocaleString()}</td>
        <td>Rp ${totalGaji.toLocaleString()}</td>
    </tr>
`;

// Menjumlahkan total gaji semua pegawai
totalGajiKeseluruhan += totalGaji;
});

document.getElementById("total-gaji").innerText = `Rp ${totalGajiKeseluruhan.toLocaleString()}`;