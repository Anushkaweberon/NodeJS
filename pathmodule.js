const path = require('path');


const a1 = path.basename('pathmodule.js');
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a1)
console.log(a2)
const a3 = path.extname(__filename)
console.log(__filename, a3)