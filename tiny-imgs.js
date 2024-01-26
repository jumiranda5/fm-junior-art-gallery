// Create small images 20 x 20 to use as a blurred bg
// to run this script use: node tiny-img.js

/* eslint-disable no-console*/

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const directory = './src/assets/images/mobile'; // Slow connection is more likely on mobile

// create tiny dir
const tinyDir = './src/assets/images/tiny';
try {
    if (!fs.existsSync(tinyDir)) {
        fs.mkdirSync(tinyDir);
    }
} 
catch (err) {
    console.error(err);
}

// Generate tiny images 20 X 20
fs.readdirSync(directory).forEach(file => {
    try {
        const filename = path.parse(file).name;
        const ext = path.parse(file).ext;
        sharp(`${directory}/${file}`)
            .resize(20, null) // keep aspect ratio with height = null
            .toFile(`${tinyDir}/tn-${filename}${ext}`);
        
        console.log(path.parse(file).base);
    }
    catch (err) {
        console.error(err);
    }
});