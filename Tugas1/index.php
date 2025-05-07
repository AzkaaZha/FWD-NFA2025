<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Hasil Ujian</title>
</head>
<body>
    <h1>Form Hasil Ujian</h1>
    <form action="proses.php" method="post">
        <div>
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required>
        </div>
        <br>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <br>
        <div>
            <label for="nilai_ujian">Nilai Ujian:</label>
            <input type="number" id="nilai_ujian" name="nilai_ujian" min="0" max="100" required>
        </div>
        <br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>