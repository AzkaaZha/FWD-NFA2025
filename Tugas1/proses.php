<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Ujian</title>
</head>
<body>
    <h1>Hasil Ujian</h1>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nama = $_POST["nama"];
        $email = $_POST["email"];
        $nilai_ujian = $_POST["nilai_ujian"];

        echo "<p>Nama: " . htmlspecialchars($nama) . "</p>";
        echo "<p>Email: " . htmlspecialchars($email) . "</p>";
        echo "<p>Nilai Ujian: " . htmlspecialchars($nilai_ujian) . "</p>";

        if ($nilai_ujian > 70) {
            echo "<p style='color: green; font-weight: bold;'>Status: Lulus</p>";
        } else {
            echo "<p style='color: red; font-weight: bold;'>Status: Remedial</p>";
        }
    } else {
        echo "<p>Akses tidak valid.</p>";
    }
    ?>

    <p><a href="index.php">Kembali ke Form</a></p>
</body>
</html>