<?php
/**
 * Secure Booking Request Mailer
 * ---------------------------------
 * Handles POST requests from the Book Appointment form and sends
 * sanitized form data via email with validation and security checks.
 *
 * @author Shakil Alam<itxshakil@gmail.com>
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: https://nurseplus.in');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    try {
        echo json_encode(['success' => false, 'message' => 'Method Not Allowed'], JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        // TODO: Handle
    }
    exit;
}

$to = 'itxshakil@gmail.com';
$subject = '📅 New Appointment Request - Nurse Plus';

try {
    $data = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    // TODO: Handle
}

function sanitize($field): string
{
    return htmlspecialchars(trim($field ?? ''), ENT_QUOTES, 'UTF-8');
}

$name    = sanitize($data['name'] ?? '');
$phone   = sanitize($data['phone'] ?? '');
$email   = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$area    = sanitize($data['area'] ?? '');
$service = sanitize($data['service'] ?? '');
$date    = sanitize($data['date'] ?? '');
$message = sanitize($data['message'] ?? '');

// ✅ Server-side Validation
$errors = [];

if (empty($name)) {
    $errors['name'] = 'Name is required.';
}
if (!preg_match('/^\d{10}$/', $phone)) {
    $errors['phone'] = 'Invalid phone number.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email address.';
}
if (empty($area)) {
    $errors['area'] = 'Area is required.';
}
if (empty($service)) {
    $errors['service'] = 'Service is required.';
}
if (empty($date)) {
    $errors['date'] = 'Preferred date is required.';
}

if (!empty($errors)) {
    http_response_code(422);
    try {
        echo json_encode(['success' => false, 'errors' => $errors], JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        // TODO: Handle
    }
    exit;
}

$emailBody = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { padding: 16px; border: 1px solid #eee; border-radius: 8px; background: #f9f9f9; }
    h2 { color: #00796b; }
    p { line-height: 1.5; }
    .label { font-weight: bold; }
  </style>
</head>
<body>
  <div class='container'>
    <h2>📋 New Appointment Request</h2>
    <p><span class='label'>Name:</span> $name</p>
    <p><span class='label'>Phone:</span> $phone</p>
    <p><span class='label'>Email:</span> $email</p>
    <p><span class='label'>Area:</span> $area</p>
    <p><span class='label'>Service:</span> $service</p>
    <p><span class='label'>Preferred Date:</span> $date</p>
    <p><span class='label'>Message:</span><br>" . nl2br($message) . "</p>
    <hr>
    <p style='font-size: 13px; color: #555;'>This message was sent from the Nurse Plus appointment form.</p>
  </div>
</body>
</html>
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Nurse Plus <no-reply@nuseplus.in>', // ✅ Use your domain
    "Reply-To: $email",
    'X-Mailer: PHP/' . PHP_VERSION,
];

$headersStr = implode("\r\n", $headers);

// ✅ Send Email
if (mail($to, $subject, $emailBody, $headersStr)) {
    try {
        echo json_encode(['success' => true, 'message' => 'Appointment request sent successfully.'], JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        // TODO: handle
    }
} else {
    http_response_code(500);
    try {
        echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.'], JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        // TODO: Handle
    }
}
