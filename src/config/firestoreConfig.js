const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'prime-poetry-303920',
  keyFilename: 'key/keyfile.json',
});

module.exports = db;