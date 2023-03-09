const express = require('express');
const path = require('node:path');
const getFiles = require('./api/files.js').getFiles;

/* const __dirname = path.resolve(); */

const app = express();
const port = 8002;

const checkAuth = (req, res, next) => {

    //const resolvedIPs = ['178.209.110.118'];
    const remoteAdress = String(req.socket.remoteAddress);
    
    if (!process.pkg || remoteAdress.match(/::ffff:192\.168\.\d+\.\d+$|::1$/)) {
        return next();
    } else {
        res.send(403).end();
    }

}

app.use(checkAuth);
app.use(express.static(path.join(__dirname, 'client/build/')));



app.get('/api/files', async (req, res) => {
    const files = await getFiles();
    res.json(files);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => { console.log(`Server started on port ${port}`) });


