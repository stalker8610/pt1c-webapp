const fsPromises = require('node:fs/promises');
const path = require('node:path');

async function getFiles() {

    const result = {};
    try {
        result.serverFiles = await getFilesFromDir('Server');
        result.clientFiles = await getFilesFromDir('Client');
        result.manualFiles = await getFilesFromDir('Documents\\UserManual');
        result.ext1CFilesUT = await getFilesFromDir('Extension1С\\UT');
        result.ext1CFilesUNF = await getFilesFromDir('Extension1С\\UNF');
    } catch (err) {
        result.error = err.message;
    }

    return result;

}

module.exports = {getFiles}

async function getFilesFromDir(dir) {

    const full_dir = path.join('D:\\PT1C_CATALOG_SAMPLE', dir);
    const fileNames = await fsPromises.readdir(full_dir);
    return await Promise.all(fileNames.map( async(fileName)=>{
        
        const stats = await fsPromises.stat(path.join(full_dir,fileName));
        return {
            fileName,
            path: path.join(dir, fileName),
            size: stats.size,
            date: stats.birthtime,
        }
    }).sort((f1, f2)=>f2.birthtime-f1.birthtime));

}