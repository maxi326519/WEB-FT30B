var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
const PORT = 2000;

var img = fs.readdirSync('./images');

http.createServer((req, res)=>{
    console.log(req.url);

    if(req.url === '/'){
        response(res, 200, `text/plane`, JSON.stringify(img));
    }else{
        let search = img.find( name => name.split('.')[0] === req.url.slice(1).replace('%20', '_'));
        if(search){
            let file = fs.readFileSync(`./images/${search}`)
            response(res, 200, `image/${search.split('.')[1]}`, file);
        }else{
            response(res, 404, `text/plane`, 'error 404: page not found');
        }
    }
}).listen(PORT, '127.0.0.1')

function response(res, status, type, data){
    res.writeHead(status, { 'Content-Type': type})
    res.end(data);
}