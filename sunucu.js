const http = require('http');
const dayjs = require('dayjs');

const server = http.createServer((req, res) => {
    console.log(`Gelen İstek: ${req.method} ${req.url}`);

    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    // GET dışındaki yöntemler için 405 Method Not Allowed döndür
    if (req.method !== 'GET') {
        res.writeHead(405, { 
            'Content-Type': 'text/plain; charset=utf-8',
            'Allow': 'GET'
        });
        res.end('İzin verilmeyen yöntem');
        return;
    }

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Ana Sayfa - Master Cakismasi</h1><p>Yozgat Bozok Üniversitesi Bilgisayar Mühendisliği öğrencisiyim.</p><a href="/hakkimda">Hakkımda Sayfası</a>');
    } 
    else if (pathname === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Hakkımda</h1><p>Merhaba, ben Fatih Eren Ekinci. Bilgisayar Mühendisliği öğrencisiyim.</p>');
    } 
    else if (pathname === '/api/ders') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ kod: "BMH231", adi: "Web Programlama", gun: "Cuma" }));
    } 
    else if (pathname === '/api/agep') {
        const hedefTarih = dayjs('2026-11-01');
        const bugun = dayjs();
        const kalanGun = hedefTarih.diff(bugun, 'day');
        
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ sonTeslim: "01.11.2026", kalanGunSayisi: kalanGun }));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Sayfa bulunamadı');
    }
});

server.listen(3000, () => {
    console.log('Sunucu 3000 numaralı portta çalışıyor...');
});