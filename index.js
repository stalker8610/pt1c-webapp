const express = require('express');
const path =require('node:path');
const getFiles =require('./api/files.js').getFiles;

/* const __dirname = path.resolve(); */

const app = express();
const port = 8080;

const checkAuth = (req, res, next) => {
    
    const resolvedIPs = ['178.209.110.118'];
    
    const remoteIP = req.socket.remoteAddress;
    if (true || resolvedIPs.includes(remoteIP)){
        return next();
    } else {
        res.status(403).end();
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


