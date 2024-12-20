const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req, res) => {
  console.log(req.body);
  res.set('Access-Control-Allow-Origin', '*');
  
  console.log(req.method);

  if (req.method === 'POST') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204);
    res.send(`Metodo invalido`);
  } else {
    res.send(`Hola ${req.body.name} ${ req.body.lastname}  como estas!`);
  }
  
});
