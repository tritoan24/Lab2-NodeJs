const http = require('http');
const hostname = '127.0.0.1'; // localhost
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Chuyển sang text/html để hiển thị HTML
    res.write('<h1>Lab2 - NodeJSda </h1>');
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p>nguyễn Trí Toán </p>
        <p>nguyễn Trí Toán </p>
        <p>nguyễn Trí Toán </p>
        <br>
        
    </body>
    </html>`)
    res.end(); // Kết thúc phản hồi
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
