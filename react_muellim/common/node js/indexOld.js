// console.log("salam");
// for(let i = 0; i <10; i++){
//     console.log(i);
// }

var http = require('http');
var fs = require('fs');
var server = http.createServer((req,res) =>{
    if(req.url == "/"){
        fs.readFile('index.html', (_,html) =>{
            res.write(html)
            res.end();
        })
    }else if (req.url == '/product'){
        fs.readFile('product.html', (_,html) =>{
            res.write(html)
            res.end();
        })
    }
    else if (req.url == '/sale'){
        fs.readFile('marketsale.html', (_,html) =>{
            res.write(html)
            res.end();
        })
    }else{
        fs.readFile('404.html', (_,html) =>{
            res.write(html)
            res.end();
        })
    }
   
})
server.listen(3000, () =>{
    console.log('server on port 3000');
})