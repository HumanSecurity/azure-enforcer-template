const AdmZip = require('adm-zip');

const zip = new AdmZip();
zip.addLocalFolder('EnforcerFunction', 'EnforcerFunction');
zip.addLocalFile('host.json');
zip.writeZip('EnforcerFunction.zip');
