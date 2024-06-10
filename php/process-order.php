<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "order_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$product = $_POST['product'];
$quantity = $_POST['quantity'];
$address = $_POST['address'];
$email = $_POST['email'];

$sql = "INSERT INTO orders (product, quantity, address, email) VALUES ('$product', $quantity, '$address', '$email')";

if ($conn->query($sql) === TRUE) {
    $order_id = $conn->insert_id;

    $to = $email;
    $subject = "Bukti Pemesanan";
    $message = "Terima kasih telah memesan.\n\nDetail Pemesanan:\nProduk: $product\nJumlah: $quantity\nAlamat: $address\nOrder ID: $order_id";
    $headers = "From: no-reply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Pesanan berhasil diproses. Bukti pemesanan telah dikirim ke email Anda.";
    } else {
        echo "Pesanan berhasil diproses, tetapi gagal mengirim email.";
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
