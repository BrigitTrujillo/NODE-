var http = require('http');
fs = require('fs');

http.createServer(function(req, res){

    if (req.url == '/servicios.html') {

        fs.readFile('./servicios.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/Nosotros.html') {

        fs.readFile('./Nosotros.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

    if (req.url == '/contactenos.html') {

        fs.readFile('./contactenos.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/Catalogo.html') {

        fs.readFile('./Catalogo.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/') {

        fs.readFile('./Principal.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

}).listen(8085);