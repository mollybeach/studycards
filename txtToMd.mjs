import fs from 'fs';

let allFiles = {
    'Algorithms': { 'input': './Algorithms/Algorithms.txt', 'output': './Algorithms/Algorithms.md' },
    'Blockchain': { 'input': './Blockchain/Blockchain.txt', 'output': './Blockchain/Blockchain.md' },
    'Cloud': { 'input': './Cloud/Cloud.txt', 'output': './Cloud/Cloud.md' },
    'Databases': { 'input': './Databases/Databases.txt', 'output': './Databases/Databases.md' },
    'DesignPatterns': { 'input': './DesignPatterns/DesignPatterns.txt', 'output': './DesignPatterns/DesignPatterns.md' },
    'DevOps': { 'input': './DevOps/DevOps.txt', 'output': './DevOps/DevOps.md' },
    'Frameworks': { 'input': './Frameworks/Frameworks.txt', 'output': './Frameworks/Frameworks.md' },
    'Graphics': { 'input': './Graphics/Graphics.txt', 'output': './Graphics/Graphics.md' },
    'Languages': { 'input': './Languages/Languages.txt', 'output': './Languages/Languages.md' },
    'Security': { 'input': './Security/Security.txt', 'output': './Security/Security.md' },
    'Testing': { 'input': './Testing/Testing.txt', 'output': './Testing/Testing.md' },
    'Tools': { 'input': './Tools/Tools.txt', 'output': './Tools/Tools.md' }
};

let allMarkdownFiles = './allMarkdownFiles.md';

const convertTxtToMd = (inputFilePath, outputFilePath) => {
    try {
        const inputData = fs.readFileSync(inputFilePath, 'utf8');
        const lines = inputData.split('\n');
        let markdownContent = '';

        let inCodeBlock = false;

        lines.forEach((line) => {
            line = line.trim();

            if (line.startsWith('@@@')) {
                markdownContent += `# ${line.substring(3).trim()}\n\n`;
            } else if (line.startsWith('@@')) {
                markdownContent += `## ${line.substring(2).trim()}\n\n`;
            } else if (line.startsWith('@')) {
                markdownContent += `# ${line.substring(1).trim()}\n\n`;
            } else if (line.startsWith('Q) ')) {
                markdownContent += `### ${line.replace('Q) ', '').replace('?', ':')}\n\n`;
            } else if (line.match(/^\s*A\) /)) {
                markdownContent += `  - ${line.replace(/^\s*A\) /, '').replace('?', ':')}\n\n`;
            } else if (line.startsWith('```') && inCodeBlock) {
                markdownContent += '```\n\n';
                inCodeBlock = false;
            } else if (line.startsWith('```')) {
                markdownContent += '```javascript\n';
                inCodeBlock = true;
            } else if (inCodeBlock) {
                markdownContent += `${line}\n`;
            } else {
                markdownContent += `${line.replace(/\?/g, ':')}\n\n`;
            }
        });

        fs.writeFileSync(outputFilePath, markdownContent);
        console.log(`Markdown file '${outputFilePath}' successfully created.`);
    } catch (err) {
        console.error(`Error converting file '${inputFilePath}':`, err);
    }
};

let allMarkdownContent = '';
// Add Table of Contents
allMarkdownContent += `# Table of Contents\n\n`;
for (let file in allFiles) {
    const sectionId = file.toUpperCase().replace(/ /g, '');
    allMarkdownContent += `- [${file}](#${sectionId})\n`;
}
allMarkdownContent += '\n\n';

for (let file in allFiles) {
    convertTxtToMd(allFiles[file].input, allFiles[file].output);
    console.log(`Conversion from txt to md for '${file}' completed.`);
    allMarkdownContent += fs.readFileSync(allFiles[file].output, 'utf8');
}

fs.writeFileSync(allMarkdownFiles, allMarkdownContent);
console.log(`Markdown file for AllMarkdownFiles successfully created.`);

console.log('Conversion completed.');
