const http = require("http");
const url = require('url');

const server = http.createServer((req, res) => {
  const urlPath = req.url;

  if (urlPath.includes("/api/addSubscriber")) {
    try{
        var query = url.parse(req.url,true).query;
        console.log(query);
        console.log(__dirname);
        const fs = require('fs');
        fs.readFile(`${__dirname}/subscribers.json`, 'utf8', function(err, data){
        let subscribers = JSON.parse(data);
        let newSubscriber = {id: subscribers.table[subscribers.table.length - 1].id + 1, email: query.email}
        subscribers.table.push(newSubscriber);
        json = JSON.stringify(subscribers);
        fs.writeFile(`${__dirname}/subscribers.json`, json, (err) => {});

        res.writeHead(200, {"Access-Control-Allow-Origin": "*"});
        res.end("request successful");
    ;});}
    catch(err) {
        res.statusCode = 500;
        res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end("wrong request url: " + urlPath);
  }

});

server.listen(3000, "localhost", () => {
  console.log("Listening for request");
});
