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
            //byc moze lepsza nazwa byloby ludzie (w sensie pluraliazacji slowa czlowiek)
            //ogolnie lepeij uzywac angielskiego w nazwach andpointow bo lepiej sie pluralizuje
            // generowanie liczby losowej sluzy zaakcentowaniu ze dane z mocka moga byc zmienne
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
            //usuwanie czlowieka
            //zwracamy pusta odpowiedz poniewaz nie wykorzystujemy
            // danych z odpowiedzi
            res.end('');
        } else if (req.method == 'POST' && req.url.startsWith('/czlowiek')) {
            // pusta odpowiedz w przypadku dddania- mozna zwrocic utworzony "rekord"
            // dla uproszczenia zwracamy pusta odpowiedz poniewaz nie wykorzystujemy
            // danych z odpowiedzi
            res.end('');
        } else if (req.method == 'PUT' && req.url.startsWith('/czlowiek/')) {
            // pusta odpowiedz w przypadku updatu - mozna zwrocic zaktualizowany "rekord"
            // dla uproszczenia zwracamy pusta odpowiedz poniewaz nie wykorzystujemy
            // danych z odpowiedzi
            res.end('');
        } else if (req.method == 'GET' && req.url.startsWith('/czlowiek/')) {
            //pobranie przykladowego czlowieka
            //pomijamy tu zwracanie wlasciwego id a także
            //respektowanie id z parametru - na potrzeby mocka nie jest to potrzebne
            res.end(`
                {
                    "id": 5,
                    "nazwisko": "Jankowski",
                    "imie": "Adam",
                    "plec": "k",
                    "komentarze": "komentarz przykładowy",
                    "typ": "2",
                    "zyczenia": {
                      "a": true,
                      "b": true
                    }
                }
            `);
        }
         else {
            res.end('');
        }
    }
)

server.listen(port, '127.0.0.1', () => {
    console.log('Server wystartowal na porcie ' + port);
});