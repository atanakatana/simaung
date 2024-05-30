<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
    die("Connection failed: ". mysqli_connect_error());
}

// Get user data from database
$user_id = $_SESSION['user_id'];
$query = "SELECT * FROM users WHERE id = '$user_id'";
$result = mysqli_query($conn, $query);
$user_data = mysqli_fetch_assoc($result);

// Display user data
echo "<h2>Profile</h2>";
echo "<p>Username: ". $user_data['username']. "</p>";
echo "<p>Email: ". $user_data['email']. "</p>";
echo "<p>Password: ". $user_data['password']. "</p>";

// Form to update address
echo "<h2>Update Address</h2>";
echo "<form action='update_address.php' method='post'>";
echo "<label for='address'>Address:</label>";
echo "<input type='text' id='address' name='address' value='". $user_data['address']. "'>";
echo "<input type='submit' value='Update'>";
echo "</form>";

mysqli_close($conn);
?>