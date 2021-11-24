const http = require('http');
const port = 3200;

const server = http.createServer(
    (req, res) => {
        console.log('przyszlo zapytanie');
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.end(`
            [
                {
                    "id": ${Math.floor(Math.random()*100)},
                    "nazwisko": "Jankowski",
                    "imie": "Adam"
                },
                {
                    "id": ${Math.floor(Math.random()*100)},
                    "nazwisko": "Nowak",
                    "imie": "Jan"
                }
            ]
        `);
    }
)

server.listen(port, '127.0.0.1', () => {
    console.log('Server wystartowal na porcie ' + port);
});