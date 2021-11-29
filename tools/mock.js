const http = require('http');
const port = 3200;

const server = http.createServer(
    (req, res) => {

        console.log('przyszlo zapytanie');
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        
        if (req.method == 'GET' && req.url == '/lista') {
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
        } else if (req.method == 'DELETE' && req.url.startsWith('/czlowiek')) {
            res.end('');
        }  else if (req.method == 'POST' && req.url.startsWith('/czlowiek')) {
            res.end('');
        }
         else {
            res.end('');
        }
    }
)

server.listen(port, '127.0.0.1', () => {
    console.log('Server wystartowal na porcie ' + port);
});