<?php
/**
 * Nurse Plus - Appointment Mailer with Confirmation & Calendar Invite
 * -------------------------------------------------------------------
 * Sends appointment requests to admin, confirmation to user,
 * attaches an .ics calendar file (Google/Outlook compatible),
 * and handles all validations and security properly.
 *
 * @author Shakil Alam <itxshakil@gmail.com>
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: https://nurseplus.in');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method. Please use POST.'
    ], JSON_THROW_ON_ERROR);
    exit;
}

$rawData = file_get_contents('php://input');
if (!$rawData) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Request body is empty. Please fill out the appointment form.'
    ], JSON_THROW_ON_ERROR);
    exit;
}

try {
    $data = json_decode($rawData, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid data format received. Please refresh and try again.'
    ], JSON_THROW_ON_ERROR);
    exit;
}

function clean($value): string {
    return htmlspecialchars(trim((string)$value), ENT_QUOTES, 'UTF-8');
}

$name    = clean($data['name'] ?? '');
$phone   = clean($data['phone'] ?? '');
$email   = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$area    = clean($data['area'] ?? '');
$service = clean($data['service'] ?? '');
$date    = clean($data['date'] ?? '');
$message = clean($data['message'] ?? '');

// ✅ Validation
$errors = [];
if ($name === '') $errors['name'] = 'Please provide your full name.';
if (!preg_match('/^[0-9]{10}$/', $phone)) $errors['phone'] = 'Please enter a valid 10-digit phone number.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Please enter a valid email address.';
if ($area === '') $errors['area'] = 'Please specify your area or locality.';
if ($service === '') $errors['service'] = 'Please select the service you need.';
if ($date === '') $errors['date'] = 'Please choose your preferred appointment date.';

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors], JSON_THROW_ON_ERROR);
    exit;
}

// 🕓 Create Calendar ICS file
$eventStart = date('Ymd\THis', strtotime($date));
$eventEnd   = date('Ymd\THis', strtotime($date . ' +1 hour'));
$uid        = uniqid('', true) . '@nurseplus.in';

$ics = <<<ICS
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nurse Plus//Appointment Calendar//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
UID:$uid
DTSTAMP:{$eventStart}Z
DTSTART:$eventStart
DTEND:$eventEnd
SUMMARY:Nurse Plus Appointment with $name
DESCRIPTION:Service: $service\\nArea: $area\\nPhone: $phone\\nMessage: $message
LOCATION:$area
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR
ICS;

$adminEmail = 'chandan.cm1010@gmail.com';
$bccList = ['itxshakil@gmail.com'];
$subjectAdmin = "📅 New Appointment Request - Nurse Plus ($service)";
$subjectUser  = '✅ Appointment Request Received - Nurse Plus';

$boundary = md5(uniqid(time(), true));

function buildHtmlBody($title, $content, $footerNote = ''): string {
    return <<<HTML
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f9fafb; color: #333; padding: 20px; }
    .card { background: #fff; border-radius: 10px; padding: 24px; border: 1px solid #e2e8f0; }
    h2 { color: #00796b; margin-bottom: 12px; }
    p { line-height: 1.6; margin: 6px 0; }
    .label { font-weight: 600; color: #111; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 18px 0; }
    footer { font-size: 13px; color: #666; text-align: center; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <h2>$title</h2>
    $content
    <hr>
    <footer>$footerNote</footer>
  </div>
</body>
</html>
HTML;
}

$adminContent = "
<p><span class='label'>Name:</span> $name</p>
<p><span class='label'>Phone:</span> $phone</p>
<p><span class='label'>Email:</span> $email</p>
<p><span class='label'>Area:</span> $area</p>
<p><span class='label'>Service:</span> $service</p>
<p><span class='label'>Preferred Date:</span> $date</p>
<p><span class='label'>Message:</span><br>" . nl2br($message) . "</p>";

$adminBody = buildHtmlBody(
    '📋 New Appointment Request',
    $adminContent,
    'This message was securely sent from the <strong>Nurse Plus</strong> appointment form.'
);

$userContent = "
<p>Hi <strong>$name</strong>,</p>
<p>Thank you for booking an appointment with <strong>Nurse Plus</strong>! 🎉</p>
<p>Here are your appointment details:</p>
<ul>
  <li><strong>Service:</strong> $service</li>
  <li><strong>Date:</strong> $date</li>
  <li><strong>Area:</strong> $area</li>
  <li><strong>Phone:</strong> $phone</li>
</ul>
<p>Our team will contact you shortly to confirm the timing. You can also add this event to your calendar below.</p>";

$userBody = buildHtmlBody(
    '🩺 Appointment Request Received',
    $userContent,
    "Need help? Contact us at <a href='mailto:info@nurseplus.in'>info@nurseplus.in</a>"
);

function buildEmail($to, $subject, $htmlBody, $ics, $replyTo, $bcc = []): array
{
    $boundary = md5(uniqid(time(), true));
    $headers = [];
    $headers[] = 'From: Nurse Plus <no-reply@nurseplus.in>';
    $headers[] = "Reply-To: $replyTo";
    foreach ($bcc as $b) $headers[] = "Bcc: $b";
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = "Content-Type: multipart/mixed; boundary=\"$boundary\"";

    $body  = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
    $body .= $htmlBody . "\r\n\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/calendar; name=\"appointment.ics\"; method=REQUEST; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n";
    $body .= "Content-Disposition: attachment; filename=\"appointment.ics\"\r\n\r\n";
    $body .= $ics . "\r\n\r\n";
    $body .= "--$boundary--";

    return [$headers, $body];
}

[$adminHeaders, $adminMessage] = buildEmail($adminEmail, $subjectAdmin, $adminBody, $ics, $email, $bccList);
$adminMailSent = mail($adminEmail, $subjectAdmin, $adminMessage, implode("\r\n", $adminHeaders));

[$userHeaders, $userMessage] = buildEmail($email, $subjectUser, $userBody, $ics, 'no-reply@nurseplus.in');
$userMailSent = mail($email, $subjectUser, $userMessage, implode("\r\n", $userHeaders));

if ($adminMailSent && $userMailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Your appointment request has been received. A confirmation has been sent to your email.'
    ], JSON_THROW_ON_ERROR);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Something went wrong while sending your request. Please try again, or call us directly at +91-6006393917.'
    ], JSON_THROW_ON_ERROR);
}
