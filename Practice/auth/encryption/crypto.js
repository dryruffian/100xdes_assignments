const { log } = require('console');
const crypto = require('crypto')
const Datatoencrypt = "A simple string"
const encryptionkey = "Arafafdf"

const cipher =crypto.createCipher('aes-256-cbc',encryptionkey);
let encrypteddata = cipher.update(Datatoencrypt,'utf-8','hex')
console.log(encrypteddata);


