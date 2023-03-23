import yaml from 'js-yaml';
import fs from 'fs';

const getObjectFromFile = (filePath)=>{
    const fileExtension = filePath.split('.').pop();
    let fileObject;

    if(fileExtension === 'json'){
        const fileData = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r'});
        fileObject = JSON.parse(fileData);
    } 

    if(fileExtension === 'yaml' || fileExtension === 'yml') {
        fileObject = yaml.load(fs.readFileSync(filePath, 'utf8'))
        
    }
    
    return fileObject;
};
export default getObjectFromFile;