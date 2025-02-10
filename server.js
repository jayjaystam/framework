const fs = require('fs'); 

app.get('/data', (req, res) => { 
  fs.readFile('data.json', 'utf8', (err, data) => { 
    if (err) { 
      res.status(500).send('Fout bij het lezen van het JSON-bestand'); 
      return; 
    } 
    res.json(JSON.parse(data)); 
  }); 
});
