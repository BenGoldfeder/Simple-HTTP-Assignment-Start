const http = require('http');
const fs = require('fs'); //"file system", a built-in library

const port = process.env.PORT || process.env.NODE_PORT || 3001;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, respose) => {
  console.log(request.url);
  response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
};

http.createServer(onRequest).listen(port);
console.log(`Listening on ${port}`);