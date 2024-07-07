import fs from 'fs';
// current file path: /Users/mollybeach/Documents/git/studycards/combineFiles.mjs
// make an object to store the file names and their contents
let files = {
    'Blockchain.txt': './Blockchain/Blockchain.txt',
    'Cloud.txt': './Cloud/Cloud.txt',
    'Databases.txt': './Databases/Databases.txt',
    'DesignPatterns.txt': './DesignPatterns/DesignPatterns.txt',
    'DevOps.txt': './DevOps/DevOps.txt',
    'Frameworks.txt': './Frameworks/Frameworks.txt',
    'Graphics.txt': './Graphics/Graphics.txt',
    'Languages.txt': './Languages/Languages.txt',
    'Security.txt': './Security/Security.txt',
    'Testing.txt': './Testing/Testing.txt',
    'Tools.txt': './Tools/Tools.txt'
};

let AllFiles = './AllFiles.txt';

// create a write stream to the AllFiles.txt file
let writeStream = fs.createWriteStream(AllFiles);

// loop through the files object
for (let file in files) {
    // read the file contents
    let data = fs.readFileSync(files[file]);
    // write the file contents to the AllFiles.txt file
    writeStream.write(data);
}

// close the write stream
writeStream.end();

// log a message to the console
console.log('All files have been combined into AllFiles.txt');



