const crypto = require('crypto');

// Generate a random secret key
const generateJWTSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

console.log('JWT Secret Key:', generateJWTSecret());
