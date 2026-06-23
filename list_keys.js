const fs = require('fs');
const data = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));

function printKeys(obj, prefix = '') {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      console.log(prefix + key + '/');
      printKeys(obj[key], prefix + '  ');
    } else if (Array.isArray(obj[key])) {
      console.log(prefix + key + ' [] (' + obj[key].length + ' items)');
    } else {
      console.log(prefix + key);
    }
  }
}
printKeys(data);
