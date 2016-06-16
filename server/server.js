var http = require('http');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {
  console.log(req.url);


  file.serve(req, res);
  return;



  if (req.url.slice(0, 6) === '/data/') {
    req.url = '/server' + req.url;

    setTimeout(function() {
      file.serve(req, res);
    }, 3000);
  } else {
    file.serve(req, res);
  }
}

http.createServer(accept).listen(8080);

console.log('Server running on port 8080');
