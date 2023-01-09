const fs = require('fs');
const path = require('path');
const pathPrefix = '_data';

const getCollection = (dataType: string) => {
  const folder = path.join(process.cwd(), pathPrefix, dataType);
  const files = fs.readdirSync(folder);

  return files.map((file: string) => {
    return {
      ...JSON.parse(fs.readFileSync(path.join(folder, file), 'utf8')),
      slug: file.replace('.json', ''),
    };
  });
};

export { getCollection };
