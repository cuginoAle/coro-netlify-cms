const fs = require('fs');
const path = require('path');
const pathPrefix = '_data';

const getFile = (fileName: string) => {
  const file = path.join(process.cwd(), pathPrefix, fileName);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};

export { getFile };
