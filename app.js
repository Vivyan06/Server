const http=require('http');
http.createServer((req, res)=>{
res.write("Hola Giovana");
res.end();
})
.listen(3000);
console.log('Escuchando el puerto', 3000);