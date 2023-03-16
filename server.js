const http = require('http');

const server = http.createServer((req, ser) => {
    console.log('Run request ...');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world</h3>');
    res.write('<h2>My name is Nguyen Tuan Hiep</h2>');
    res.end();

});

server.listen(3000, 'localhost', () => {
    console.log('NodeJS is running on port 3000');
});
