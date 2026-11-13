<?php
/* =========================================================
   М-АКТИВ — приём заявки «Получить КП» и отправка на почту.
   Работает на обычном российском хостинге с PHP (Beget, Timeweb и т.п.).
   ========================================================= */
header('Content-Type: application/json; charset=utf-8');

$TO   = 'm-aktiv_ooo@mail.ru';   // куда приходят заявки
$FROM = 'noreply@maktiv.ru';     // адрес отправителя (домен сайта)

function reply($ok, $code = 200) {
    http_response_code($code);
    echo json_encode(['ok' => $ok]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(false, 405);

// ловушка для спам-ботов: это поле люди не видят и не заполняют
if (!empty($_POST['website'])) reply(true);

function field($key, $max = 500) {
    $v = isset($_POST[$key]) ? (string)$_POST[$key] : '';
    $v = strip_tags($v);
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/u', '', $v);
    return trim(mb_substr($v, 0, $max, 'UTF-8'));
}
function oneLine($v) { return trim(preg_replace('/[\r\n]+/', ' ', $v)); }

$item    = oneLine(field('item', 200));
$name    = oneLine(field('name', 100));
$phone   = oneLine(field('phone', 40));
$email   = oneLine(field('email', 120));
$comment = field('comment', 2000);
$agree   = field('agree', 10);

if ($name === '' || $phone === '' || $agree === '') reply(false, 422);
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $email = '';

$subject = 'Запрос КП с сайта: ' . ($item !== '' ? $item : 'оборудование');
$body = implode("\n", [
    'Новая заявка с сайта maktiv.ru',
    '',
    'Оборудование: ' . ($item ?: '—'),
    'Имя: ' . $name,
    'Телефон: ' . $phone,
    'Email: ' . ($email ?: '—'),
    'Комментарий: ' . ($comment ?: '—'),
    '',
    'Отправлено: ' . date('d.m.Y H:i'),
    'Страница: ' . oneLine(field('page', 300)),
]);

$headers = [
    'From: =?UTF-8?B?' . base64_encode('Сайт М-Актив') . '?= <' . $FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
if ($email !== '') $headers[] = 'Reply-To: ' . $email;

$ok = mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . $FROM);
reply($ok, $ok ? 200 : 500);
